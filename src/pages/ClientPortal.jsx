import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { downloadProjectFile } from '../utils/projectFiles';

const money = (value, code = 'COP') => new Intl.NumberFormat('es-CO', { style: 'currency', currency: code }).format(Number(value));

export default function ClientPortal() {
  const [session, setSession] = useState(undefined);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: result }) => setSession(result.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;
    let alive = true;
    supabase.rpc('get_client_portal').then(({ data: result, error: fetchError }) => {
      if (!alive) return;
      if (fetchError) setError('No pudimos cargar tu espacio. Intenta nuevamente más tarde.');
      else setData(result);
    });
    return () => { alive = false; };
  }, [session]);

  async function requestAccess(event) {
    event.preventDefault();
    setBusy(true); setError('');
    const { error: authError } = await supabase.auth.signInWithOtp({ email: email.trim().toLowerCase(), options: { emailRedirectTo: `${window.location.origin}/cliente` } });
    setBusy(false);
    if (authError) setError('No pudimos enviar el enlace. Comprueba el correo e inténtalo de nuevo.');
    else setSent(true);
  }

  async function download(file) {
    try { await downloadProjectFile(file); }
    catch { setError('No pudimos descargar el archivo. Inténtalo de nuevo.'); }
  }

  return <main className="client-portal">
    <header className="client-portal-header"><Link to="/" className="client-portal-brand">Zenubit</Link><Link to="/">Volver al sitio ↗</Link></header>
    <div className="client-portal-content">
      <p className="crm-eyebrow">ESPACIO DE CLIENTES</p>
      <h1>Tu proyecto, <em>en perspectiva.</em></h1>
      {session === undefined && <p>Cargando acceso…</p>}
      {session === null && <section className="client-portal-card">
        <h2>Accede con tu correo</h2>
        <p>Te enviaremos un enlace de acceso. Usa el correo asociado a tu proyecto con Zenubit.</p>
        {sent ? <p role="status">Revisa tu correo y abre el enlace en este dispositivo.</p> : <form onSubmit={requestAccess}><label htmlFor="client-email">Correo electrónico</label><input id="client-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} /><button type="submit" disabled={busy}>{busy ? 'Enviando…' : 'Enviar enlace de acceso'}</button></form>}
      </section>}
      {session && <>
        <div className="client-portal-greeting"><p>Sesión de {session.user.email}</p><button type="button" onClick={() => supabase.auth.signOut()}>Cerrar sesión</button></div>
        {!data && !error && <p>Cargando tus proyectos…</p>}
        {data && <>
          {data.clients?.length === 0 && <p className="client-portal-card">Todavía no hay un cliente vinculado a este correo. Escríbenos para revisar el acceso.</p>}
          <section><h2>Proyectos</h2><div className="client-portal-grid">{data.projects?.length ? data.projects.map((project) => <article className="client-portal-card" key={project.id}>
            <span>{project.status?.replaceAll('_', ' ')}</span><h3>{project.name}</h3><p>{project.description || 'Pronto compartiremos más detalles.'}</p>{project.due_date && <small>Entrega prevista: {project.due_date}</small>}{project.url && /^https?:\/\//i.test(project.url) && <a href={project.url} target="_blank" rel="noreferrer">Abrir proyecto ↗</a>}
            {data.updates?.filter((item) => item.project_id === project.id).length > 0 && <div className="client-project-details"><h4>Avances compartidos</h4>{data.updates.filter((item) => item.project_id === project.id).map((item) => <div key={item.id}><strong>{item.title}</strong><small>{new Date(item.created_at).toLocaleDateString('es-CO')}</small><p>{item.body}</p></div>)}</div>}
            {data.files?.filter((item) => item.project_id === project.id).length > 0 && <div className="client-project-details"><h4>Archivos</h4>{data.files.filter((item) => item.project_id === project.id).map((item) => <button type="button" key={item.id} onClick={() => download(item)}>Descargar {item.file_name}</button>)}</div>}
          </article>) : <p>Aún no hay proyectos para mostrar.</p>}</div></section>
          <section><h2>Presupuestos compartidos</h2><div className="client-portal-grid">{data.budgets?.length ? data.budgets.map((budget) => <article className="client-portal-card" key={budget.id}><span>{budget.status}</span><h3>{budget.title}</h3><strong>{money(budget.amount, budget.currency)}</strong><p>{budget.details}</p>{budget.valid_until && <small>Válido hasta: {budget.valid_until}</small>}</article>) : <p>Cuando compartamos un presupuesto, aparecerá aquí.</p>}</div></section>
        </>}
      </>}
      {error && <p role="alert" className="form-error">{error}</p>}
      <p className="client-portal-help">¿Necesitas ayuda? <a href="https://wa.me/573008144727" target="_blank" rel="noreferrer">Escríbenos por WhatsApp ↗</a></p>
    </div>
  </main>;
}
