// Edge Function: notify-lead
// Se dispara por un trigger (pg_net) en cada INSERT de la tabla de leads.
// Envía una notificación con estilo de marca a los correos internos de
// Zenubit y una confirmación al correo que el cliente escribió en el formulario.
//
// Variables de entorno requeridas (Project Settings -> Edge Functions -> Secrets):
//   RESEND_API_KEY     - API key de resend.com
//   NOTIFY_FROM_EMAIL  - remitente verificado en Resend, ej: notificaciones@tudominio.com

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const FROM_EMAIL = Deno.env.get("NOTIFY_FROM_EMAIL") ?? "onboarding@resend.dev";
const WHATSAPP_LINK = "https://wa.link/6fdprv";
const SITE_URL = "https://zenubit.com";

const ADMIN_EMAILS = [
  "padilla99j@gmail.com",
  "jockrlos210@gmail.com",
  "desarrolloszenubit@gmail.com",
];

const CAMPO_LABELS: Record<string, string> = {
  nombre: "Nombre",
  correo: "Correo",
  numero: "WhatsApp / Teléfono",
  interes: "Interés",
  motivacion: "Motivación",
  estudios: "Nivel de estudios",
  estado: "Estado",
};

function escapeHtml(value: unknown): string {
  return String(value ?? "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function emailShell(preheader: string, body: string): string {
  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background-color:#0C0A08;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0C0A08;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#141210;border:1px solid #2A2520;">
            <tr>
              <td style="padding:32px 32px 24px;border-bottom:1px solid #2A2520;">
                <span style="font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#F3F0E9;letter-spacing:0.02em;">Zenubit</span>
                <span style="font-family:Georgia,'Times New Roman',serif;font-size:20px;font-style:italic;color:#DDD0B0;"> &middot; Automatización</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid #2A2520;">
                <span style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.05em;color:#8A8680;text-transform:uppercase;">
                  Tuchin &middot; C&oacute;rdoba &middot; Colombia &mdash; <a href="${SITE_URL}" style="color:#8A8680;">zenubit.com</a>
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function adminEmailHtml(table: string, record: Record<string, unknown>): string {
  const filas = Object.entries(record)
    .filter(([key]) => !["id", "created_at"].includes(key) && record[key])
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:10px 16px 10px 0;font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.05em;text-transform:uppercase;color:#8A8680;white-space:nowrap;vertical-align:top;">${escapeHtml(CAMPO_LABELS[key] || key)}</td>
          <td style="padding:10px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#F3F0E9;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const body = `
    <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7DD4F0;">Nuevo registro</p>
    <h1 style="margin:0 0 24px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:400;color:#F3F0E9;">Alguien escribi&oacute; en ${escapeHtml(table)}</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${filas}</table>
  `;

  return emailShell(`Nuevo registro en ${table}`, body);
}

function clientEmailHtml(nombre: string): string {
  const body = `
    <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7DD4F0;">Mensaje recibido</p>
    <h1 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:400;color:#F3F0E9;">Gracias por escribirnos, ${escapeHtml(nombre)}</h1>
    <p style="margin:0 0 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#C9C4BC;">
      Recibimos tu mensaje y ya estamos revisando c&oacute;mo podemos ayudarte. Nuestro equipo te contactar&aacute; pronto.
      Si prefieres una respuesta m&aacute;s r&aacute;pida, escr&iacute;benos directo por WhatsApp.
    </p>
    <a href="${WHATSAPP_LINK}" style="display:inline-block;padding:14px 28px;background-color:#7DD4F0;color:#0C0A08;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;letter-spacing:0.05em;text-transform:uppercase;text-decoration:none;">
      Escribir por WhatsApp
    </a>
  `;

  return emailShell(`Gracias por escribirnos, ${nombre}`, body);
}

async function sendEmail(payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Resend error:", await res.text());
  }
  return res.ok;
}

Deno.serve(async (req: Request) => {
  try {
    const body = await req.json();
    const record = body.record ?? {};
    const table = body.table ?? "formulario";

    const nombre = record.nombre || "Sin nombre";
    const correo = record.correo || "";

    await sendEmail({
      from: `Zenubit <${FROM_EMAIL}>`,
      to: ADMIN_EMAILS,
      subject: `Nuevo registro en ${table}: ${nombre}`,
      html: adminEmailHtml(table, record),
    });

    if (correo) {
      await sendEmail({
        from: `Zenubit <${FROM_EMAIL}>`,
        to: [correo],
        subject: "Zenubit recibió tu mensaje",
        html: clientEmailHtml(nombre),
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
