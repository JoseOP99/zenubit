# ZENUBIT — Brand & Design System

> **Documento de handoff completo.** Copia esto en tu próximo prompt a Claude / Antigravity / Cursor para que tenga todo el contexto de la marca.

---

## 1. SOBRE LA EMPRESA

**Nombre:** Zenubit (ZENUBIT)
**Origen:** Tuchin, Córdoba, Colombia
**Inspiración del nombre + logo:** La caña flecha y el sombrero vueltiao — tejido ancestral del pueblo Zenú. "ZEN" (equilibrio, calma) + "UBIT" (bit, unidad digital). El símbolo geométrico replica el "mot" del vueltiao: cada hilo entrelazado representa un dato, cada intersección un nodo de proceso.

**Tagline principal:** Automatización con alma. Código con raíces.
**Tagline corto:** Tecnología con raíces.
**Tagline mono/label:** TECNOLOGÍA · TUCHIN · COLOMBIA

**¿Qué hacemos?** Pequeña empresa de servicios de automatización inteligente y desarrollo digital.

**Servicios principales (4 áreas):**
1. **Power Platform** — Power Automate, Power Apps, Power BI, Dataverse, Copilot Studio
2. **AppSheet** — Apps móviles no-code sincronizadas con Google Sheets, Excel, bases de datos
3. **Vibecode & AI Development** — Desarrollo web/producto con IA: landings, dashboards, herramientas internas, prototipos
4. **RPA & Procesos** — UiPath, automatizaciones de email, facturación, conciliaciones, integraciones

**Promesa de valor:** Construimos código con la misma disciplina con la que se teje un sombrero fino: paciencia, precisión y un patrón que se sostiene a través del tiempo.

**Voz y tono:**
- Cálida pero técnica
- Castellano natural — no inglés forzado
- Confianza tranquila (no agresiva)
- Referencias culturales orgánicas (tejido, raíces, vueltiao)
- Frases cortas y directas
- Uso ocasional de itálicas en serif para énfasis poético

**Ubicación canónica:** Tuchin · Córdoba · Colombia

---

## 2. PALETA DE COLORES

### Tokens semánticos (CSS variables)

```css
:root {
  /* ── NEUTROS · Crema/cream ── */
  --cream-light:   #F3F0E9;  /* Fondos claros, superficies */
  --cream:         #E8E4DA;  /* Fondo principal claro */
  --cream-dark:    #D4CFC3;  /* Bordes, divisores en claro */
  --cream-dim:     #C8C4BC;  /* Texto sobre oscuro (secundario) */

  /* ── NEUTROS · Stone (medio) ── */
  --stone:         #8A8680;  /* Texto secundario / mono labels */
  --stone-dim:     #5A554F;  /* Bordes sutiles oscuros */

  /* ── NEUTROS · Negro ── */
  --charcoal-light: #3A332C; /* Border-color sobre negro */
  --charcoal:      #2A2520;  /* Bordes, divisores sobre negro */
  --black:         #141210;  /* Fondo principal oscuro */
  --black-deep:    #0C0A08;  /* Fondo extra oscuro (footer, nav) */

  /* ── PRIMARIO · Tan/Caña ── */
  --tan-light:     #DDD0B0;  /* Texto italic poético */
  --tan:           #C4A87A;  /* COLOR MARCA — caña flecha */
  --tan-dark:      #A8895A;  /* Hover, estado activo */

  /* ── ACENTO · Cyan/Tech ── */
  --cyan-glow:     #B8EEFF;  /* Glow extremo, highlight */
  --cyan:          #7DD4F0;  /* ACENTO PRINCIPAL — nodos, links */
  --cyan-deep:     #4AB8D8;  /* Hover de acento */
  --cyan-dim:      #1A4A5A;  /* Fondo tinted cyan */

  /* ── ESTADOS ── */
  --success:       #50C878;
  --warning:       #C8840A;
  --error:         #E05C5C;
}
```

### Tabla resumen

| Token | Hex | Rol semántico |
|---|---|---|
| `--cream-light` | `#F3F0E9` | Fondo claro, papel |
| `--cream` | `#E8E4DA` | Fondo principal claro |
| `--cream-dark` | `#D4CFC3` | Bordes claros |
| `--cream-dim` | `#C8C4BC` | Texto secundario sobre oscuro |
| `--stone` | `#8A8680` | Texto terciario, labels mono |
| `--charcoal` | `#2A2520` | Bordes sobre negro |
| `--black` | `#141210` | **Fondo oscuro principal** |
| `--black-deep` | `#0C0A08` | Fondos extra oscuros |
| `--tan` | `#C4A87A` | **Color marca · heritage** |
| `--tan-dark` | `#A8895A` | Hover heritage |
| `--tan-light` | `#DDD0B0` | Texto poético (cursivas) |
| `--cyan` | `#7DD4F0` | **Acento principal · tech glow** |
| `--cyan-deep` | `#4AB8D8` | Links, eyebrow labels |
| `--cyan-glow` | `#B8EEFF` | Glow máximo |

### Modos de uso

1. **Modo Oscuro (default)** — `--black` fondo, `--cream-light` texto, `--cyan` acento. Tech.
2. **Modo Claro / Editorial** — `--cream-light` fondo, `--black` texto, `--tan` acento. Print.
3. **Modo Heritage** — `--tan` fondo, `--black` texto. Cultural, premium.
4. **Modo Cyan Glow** — `--black` + glows cyan radiales. Hero, video, momentos dramáticos.

### Combinaciones aprobadas (alto contraste WCAG AA)

- `--black` + `--cream-light` ✓ (texto principal sobre dark)
- `--black` + `--cyan` ✓ (CTAs, accents)
- `--cream-light` + `--black` ✓ (texto sobre claro)
- `--tan` + `--black` ✓ (heritage)
- `--cream-dim` (#C8C4BC) sobre `--black` ✓ (texto secundario)

---

## 3. TIPOGRAFÍA

### Familias

```html
<!-- Google Fonts (pegar en <head>) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Rajdhani:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-head:    'Rajdhani', system-ui, sans-serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;
}
```

### Roles

| Fuente | Rol | Cuándo usar |
|---|---|---|
| **Cormorant Garamond** | Display, headlines hero, wordmark | Titulares grandes (40px+), ZENUBIT wordmark, énfasis poético en *itálicas* |
| **Rajdhani** | Headings funcionales, botones | H3-H5, botones, navegación, etiquetas de UI mayores |
| **DM Sans** | Body, párrafos, formularios | Texto corrido, descripciones, copy |
| **JetBrains Mono** | Labels, eyebrows, código, números técnicos | Eyebrows (`01 / SERVICIOS`), micro-labels, stats, monospaced data |

### Escala tipográfica

```css
/* Display — Cormorant Garamond, peso 400/500, line-height tight */
.t-hero    { font: 400 clamp(48px, 6.5vw, 96px)/0.95 var(--font-display); letter-spacing:-0.01em; }
.t-display { font: 500 clamp(36px, 4.5vw, 64px)/1.05 var(--font-display); }
.t-h2      { font: 500 32px/1.15 var(--font-display); }

/* Headings — Rajdhani */
.t-h3      { font: 600 22px/1.2 var(--font-head); letter-spacing:0.05em; text-transform:uppercase; }
.t-h4      { font: 600 16px/1.3 var(--font-head); letter-spacing:0.08em; }

/* Body — DM Sans */
.t-lead    { font: 400 17px/1.7 var(--font-body); }
.t-body    { font: 400 15px/1.65 var(--font-body); }
.t-small   { font: 400 13px/1.6 var(--font-body); }

/* Mono — JetBrains Mono */
.t-eyebrow { font: 500 11px/1 var(--font-mono); letter-spacing:0.2em; text-transform:uppercase; color: var(--cyan-deep); }
.t-label   { font: 400 10px/1 var(--font-mono); letter-spacing:0.15em; text-transform:uppercase; color: var(--stone); }
```

### Reglas de uso

- **Italics en Cormorant Garamond** = momentos poéticos / heritage (ej. *con alma*, *con raíces*, *tejemos*)
- **NUNCA** usar Cormorant para texto corrido — sólo titulares
- **Rajdhani uppercase + letter-spacing wide** para botones (`letter-spacing: 0.18em`)
- **JetBrains Mono** siempre con `letter-spacing: 0.15-0.2em` y `text-transform: uppercase`
- Tracking en wordmark ZENUBIT: `letter-spacing: 0.25em-0.28em`

---

## 4. LOGO Y SÍMBOLO

### Archivos disponibles

| Archivo | Tamaño | Uso |
|---|---|---|
| `zenubit-logo-1024.png` | 1024×1156 | Web HD, redes sociales |
| `zenubit-logo-2048.png` | 2048×2312 | Print mediano, presentaciones |
| `zenubit-logo-4096.png` | 4096×4623 | Print gran formato, video 4K |

**Logo limpio (transparente):** El símbolo no tiene fondo — se puede colocar sobre cualquier color.

### Composición visual del símbolo

- Patrón geométrico de diamantes entrelazados (mot del vueltiao)
- Color principal: tan/caña `#C4A87A`
- Outline negro `#141210`
- 4-5 puntos de luz cyan glow (`#7DD4F0`) en intersecciones
- Aspect ratio del archivo: 233/263 ≈ 0.886 (ligeramente más alto que ancho)

### Zona de respeto

Mínimo = altura de la letra "Z" del wordmark en todos los lados.

### Tamaños mínimos

- Digital: **40×40 px** mínimo
- Favicon: usar versión simplificada (16×16)
- Print: **15mm** mínimo

### Composición wordmark + símbolo

```
[símbolo]    ZENUBIT
              └ Cormorant Garamond, weight 500, letter-spacing 0.25em
```

Espacio horizontal entre símbolo y wordmark = altura del símbolo / 4

---

## 5. ELEMENTOS DE DISEÑO RECURRENTES

### Texturas/Fondos

```css
/* 1. Dot grid — para hero/CTA dark */
.bg-dots {
  background-color: var(--black);
  background-image: radial-gradient(circle, rgba(196,168,122,0.18) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* 2. Tejido caña — sutil */
.bg-weave {
  background-color: var(--black);
  background-image:
    repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(196,168,122,0.07) 14px, rgba(196,168,122,0.07) 28px),
    repeating-linear-gradient(-45deg, transparent 0, transparent 14px, rgba(196,168,122,0.05) 14px, rgba(196,168,122,0.05) 28px);
}

/* 3. Grid sutil — sections funcionales */
.bg-grid {
  background-color: var(--black);
  background-image:
    linear-gradient(rgba(196,168,122,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(196,168,122,0.04) 1px, transparent 1px);
  background-size: 80px 80px;
}

/* 4. Heritage tan — para section origen */
.bg-heritage {
  background-color: var(--tan);
  background-image:
    repeating-linear-gradient(45deg, transparent 0, transparent 10px, rgba(20,18,16,0.06) 10px, rgba(20,18,16,0.06) 20px),
    repeating-linear-gradient(-45deg, transparent 0, transparent 10px, rgba(20,18,16,0.04) 10px, rgba(20,18,16,0.04) 20px);
}
```

### Glow nodes (signature visual)

```css
.glow-node {
  width: 8px; height: 8px;
  background: var(--cyan);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--cyan), 0 0 24px rgba(125,212,240,0.4);
  animation: node-pulse 3s ease infinite;
}
@keyframes node-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.5); }
}
```

### Eyebrow line

```css
.eyebrow {
  font: 500 11px/1 var(--font-mono);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--cyan-deep);
  display: inline-flex; align-items: center; gap: 12px;
}
.eyebrow::before {
  content: ''; width: 30px; height: 1px;
  background: var(--cyan-deep);
}
```

### Radial glow (hero / CTA)

```css
.glow-bg::after {
  content: '';
  position: absolute;
  /* center it where you want the glow */
  width: 800px; height: 800px;
  background: radial-gradient(circle, rgba(125,212,240,0.12) 0%, transparent 65%);
  pointer-events: none;
}
```

### Animación de spin (anillos alrededor del logo)

```css
.ring {
  position: absolute;
  border: 1px dashed rgba(196,168,122,0.3);
  border-radius: 50%;
  animation: spin 60s linear infinite;
}
.ring-outer {
  border-style: dotted;
  border-color: rgba(125,212,240,0.15);
  animation: spin 90s linear infinite reverse;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

---

## 6. COMPONENTES

### Botones

```css
.btn {
  font-family: var(--font-head);
  font-size: 14px; font-weight: 600;
  letter-spacing: 0.18em; text-transform: uppercase;
  padding: 16px 32px; border-radius: 1px;
  text-decoration: none; cursor: pointer;
  border: 1px solid transparent;
  display: inline-flex; align-items: center; gap: 10px;
  transition: all 0.2s;
}

/* Primary — CTA principal, cyan */
.btn-primary {
  background: var(--cyan);
  color: var(--black);
  border-color: var(--cyan);
}
.btn-primary:hover {
  background: var(--cream-light);
  box-shadow: 0 0 24px rgba(125,212,240,0.4);
  transform: translateY(-1px);
}

/* Outline — secundario sobre dark */
.btn-outline {
  background: transparent;
  color: var(--cream-light);
  border-color: var(--charcoal-light);
}
.btn-outline:hover {
  border-color: var(--tan);
  color: var(--tan-light);
}
```

Botones siempre llevan flecha al final: `→` (con clase `.btn-arrow` que hace translate al hover).

### Badges / Tags

```css
.tag {
  font-family: var(--font-mono);
  font-size: 10px; letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 6px 14px;
  border: 1px solid var(--charcoal-light);
  color: var(--cream-dim);
  border-radius: 1px;
}
.tag.active {
  color: var(--cyan);
  border-color: var(--cyan-deep);
  background: rgba(125,212,240,0.05);
}
```

### Stat / KPI

```html
<div class="stat">
  <div class="num"><em>847</em><span class="unit">h</span></div>
  <div class="lbl">TIEMPO RECUPERADO POR MES</div>
</div>
```

```css
.stat .num {
  font: 500 64px/1 var(--font-display);
  color: var(--cream-light);
}
.stat .num em { font-style: italic; color: var(--cyan); }
.stat .num .unit { font-size: 30px; color: var(--tan-light); }
.stat .lbl {
  font: 500 11px/1 var(--font-mono);
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--stone); margin-top: 8px;
}
```

### Service / Feature card

```html
<div class="service-card">
  <div class="service-num">01 / AUTOMATIZACIÓN</div>
  <div class="service-icon"><svg>...</svg></div>
  <h3 class="service-title">Power Platform</h3>
  <p class="service-desc">...</p>
  <div class="service-tags">
    <span class="tag">Power Automate</span>
  </div>
  <a class="service-link">Cotizar este servicio →</a>
</div>
```

```css
.service-card {
  padding: 48px 40px;
  border: 1px solid var(--charcoal);
  background: rgba(20,18,16,0.6);
  cursor: pointer;
  transition: background 0.3s;
}
.service-card:hover { background: rgba(196,168,122,0.04); }
.service-title {
  font: 500 34px/1.1 var(--font-display);
  color: var(--cream-light);
  letter-spacing: -0.01em;
}
```

---

## 7. PATRONES DE LAYOUT

### Padding/Spacing scale

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
--space-12: 96px;
--space-16: 120px;  /* section padding vertical default */
```

### Section structure

```html
<section>
  <div class="sec-eyebrow">SERVICIOS · 04 ÁREAS</div>
  <h2 class="sec-title">Lo que <em>construimos</em> para tu empresa.</h2>
  <p class="sec-sub">Descripción de 1-2 líneas...</p>
  <!-- contenido -->
</section>
```

```css
section {
  padding: 120px 64px;
  position: relative;
}
.sec-title {
  font: 400 clamp(36px, 4.5vw, 64px)/1.05 var(--font-display);
  letter-spacing: -0.01em;
  color: var(--cream-light);
  max-width: 800px;
}
.sec-title em { font-style: italic; color: var(--tan-light); }
.sec-sub {
  font-size: 17px; line-height: 1.7;
  color: var(--cream-dim);
  max-width: 620px;
  margin-bottom: 64px;
}
```

### Grids estándar

- 2 columnas: `grid-template-columns: 1fr 1fr; gap: 24px;`
- 4 columnas: `grid-template-columns: repeat(4, 1fr); gap: 16px;`
- Hero (texto+visual): `grid-template-columns: 1.1fr 0.9fr; gap: 64px;`

### Border radius

- **Cards & buttons:** `border-radius: 1px` (casi rectangular, estética tech)
- **Pills/badges:** `border-radius: 1px` también
- **Símbolo/logo:** sin radius
- **Avatars:** `border-radius: 50%`

> ⚠️ NUNCA usar bordes muy redondeados (>8px). La marca es geométrica y angular.

---

## 8. SECCIONES TÍPICAS DE LA WEB

Orden recomendado:

1. **Hero** — Símbolo glow + headline serif italics + 3 stats
2. **Servicios** — Grid 2×2 de 4 cards (Power Platform, AppSheet, Vibecode/AI, RPA)
3. **Proceso** — 4 pasos horizontales (Diagnóstico → Diseño → Construcción → Operación)
4. **Resultados / Casos** — Stats grandes + 1-2 case cards
5. **Stack tecnológico** — Tags de herramientas agrupadas por proveedor
6. **Origen / Heritage** — Sección tan con historia de Tuchin + vueltiao
7. **CTA / Contacto** — Símbolo + headline + buttons + contact strip
8. **Footer** — Brand + columnas (Servicios, Empresa, Contacto) + bottom bar

---

## 9. COPY/CONTENIDO LISTO

### Headlines hero (rotables)
- *Automatización con alma. Código con raíces.*
- *Tecnología con la disciplina del tejedor.*
- *Del tejido ancestral al código moderno.*

### Tagline corto
- *Tecnología con raíces.*
- *Automatización inteligente desde Tuchin.*

### Descripción larga (about/meta)
> Construimos soluciones de automatización inteligente para empresas — desde flujos en Power Platform hasta apps con AppSheet y desarrollo asistido con IA. Tecnología precisa, hecha con la calma del tejedor.

### Stats reales/aspiracionales
- 1,200+ procesos automatizados
- 99.8% uptime garantizado
- 30+ empresas activas
- 847h tiempo recuperado por mes (promedio cliente)
- −68% errores de procesos
- 4.2x ROI promedio año 1
- 3 semanas tiempo promedio go-live

### Proceso (4 pasos)
1. **Diagnóstico** — Mapeamos tu proceso, identificamos cuellos de botella, calculamos ROI esperado.
2. **Diseño** — Diagramamos arquitectura, validamos flujo, definimos KPIs antes de codificar.
3. **Construcción** — Implementación ágil con entregas semanales y staging desde el primer sprint.
4. **Operación** — Deploy, capacitación, monitoreo 24/7 y soporte continuo.

### Origen story
> Zenubit viene de Tuchin, Córdoba — capital del sombrero vueltiao y cuna de los maestros tejedores zenú. El símbolo de la marca es el "mot" del vueltiao: cada hilo de caña flecha entrelazado representa un dato; cada intersección, un nodo de proceso. Construimos código con la misma disciplina con la que se teje un sombrero fino: paciencia, precisión y un patrón que se sostiene a través del tiempo.

### CTA principales
- "Agendar consulta →"
- "Cotizar este servicio →"
- "Conversemos 30 minutos"

### Contacto
- **Email:** hola@zenubit.co
- **Web:** zenubit.co
- **WhatsApp:** +57 300 000 0000 *(actualizar)*
- **LinkedIn:** /zenubit *(actualizar)*
- **Ubicación:** Tuchin · Córdoba · Colombia

---

## 10. TAILWIND CONFIG (si lo usas)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream:    { light: '#F3F0E9', DEFAULT: '#E8E4DA', dark: '#D4CFC3', dim: '#C8C4BC' },
        stone:    { DEFAULT: '#8A8680', dim: '#5A554F' },
        charcoal: { light: '#3A332C', DEFAULT: '#2A2520' },
        black:    { DEFAULT: '#141210', deep: '#0C0A08' },
        tan:      { light: '#DDD0B0', DEFAULT: '#C4A87A', dark: '#A8895A' },
        cyan:     { glow: '#B8EEFF', DEFAULT: '#7DD4F0', deep: '#4AB8D8', dim: '#1A4A5A' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        head:    ['Rajdhani', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'node-pulse': 'node-pulse 3s ease infinite',
        'spin-slow':  'spin 60s linear infinite',
      },
      keyframes: {
        'node-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':       { opacity: '0.4', transform: 'scale(1.5)' },
        },
      },
    },
  },
};
```

---

## 11. PROMPT TEMPLATE PARA CLAUDE / ANTIGRAVITY

Copia esto al inicio de tu próxima conversación:

```
Estoy construyendo el sitio web de mi empresa ZENUBIT — servicios de
automatización inteligente (Power Platform, AppSheet, Vibecode/AI, RPA)
desde Tuchin, Córdoba, Colombia.

La marca está inspirada en el sombrero vueltiao y la caña flecha. El
tono es cálido pero técnico, con momentos poéticos en castellano.

== SISTEMA VISUAL ==

Colores (modo oscuro default):
- Fondo: #141210 (black) / #0C0A08 (black-deep)
- Texto: #F3F0E9 (cream-light) / #C8C4BC (cream-dim secundario)
- Acento tech: #7DD4F0 (cyan) — para CTAs, links, glow nodes
- Acento heritage: #C4A87A (tan) — para sección origen y momentos cálidos
- Bordes: #2A2520 (charcoal) / #3A332C (charcoal-light)

Tipografía (Google Fonts):
- Display/headlines: Cormorant Garamond (serif, italics para énfasis poético)
- Headings/botones: Rajdhani (sans geometric, uppercase, letter-spacing wide)
- Body: DM Sans
- Mono/labels: JetBrains Mono

Patrones visuales recurrentes:
- Dot grid de fondo (radial-gradient rgba(196,168,122,0.18) sobre negro)
- Nodes glow cyan animados (box-shadow 0 0 12px cyan + pulse)
- Eyebrow labels: línea 30px + texto mono uppercase letter-spacing 0.2em cyan-deep
- Headlines: serif Cormorant 48-96px, *italics* en momentos clave
- Bordes muy sutiles (1px), border-radius 1px (NUNCA pills muy redondas)

== ESTRUCTURA DE PÁGINA ==
Hero → Servicios (4 cards) → Proceso (4 pasos) → Resultados → Stack →
Origen heritage → CTA → Footer

== PIDO ==
[Aquí escribes lo que necesitas]
```

---

## 12. ASSETS / ARCHIVOS DEL PROYECTO

```
/logo
  ├── zenubit-logo-1024.png          (1024 × 1156)
  ├── zenubit-logo-2048.png          (2048 × 2312)
  └── zenubit-logo-4096.png          (4096 × 4623)  ← maestro

/social
  ├── zenubit-perfil-01-dark.png     (1080²) ← recomendado
  ├── zenubit-perfil-02-cream.png
  ├── zenubit-perfil-03-tan.png
  ├── zenubit-perfil-04-minimal.png
  ├── zenubit-perfil-05-youtube.png
  ├── zenubit-linkedin-banner-01-dark.png    (1584×396)
  ├── zenubit-linkedin-banner-02-cream.png
  ├── zenubit-linkedin-banner-03-tan.png
  ├── zenubit-linkedin-banner-04-tech.png    ← favorito
  ├── zenubit-facebook-cover.png             (1640×664)
  ├── zenubit-youtube-banner.png             (2560×1440)
  ├── zenubit-instagram-story.png            (1080×1920)
  ├── zenubit-instagram-post.png             (1080×1080)
  └── zenubit-twitter-header.png             (1500×500)

/design
  ├── Zenubit Brand Guide.html       — sistema visual completo
  ├── Zenubit Assets.html            — recortes y wordmarks
  ├── Zenubit Social Kit.html        — galería redes sociales
  └── Zenubit Website.html           — diseño web completo
```

---

## 13. DON'TS — Lo que NO hacer

- ❌ NO usar gradientes brillantes/colorful (saturados pastel, neón, etc.)
- ❌ NO usar emojis decorativos (excepto labels funcionales en docs)
- ❌ NO usar bordes redondeados grandes (>4px) — es geométrico/angular
- ❌ NO usar fuentes overused (Inter, Roboto, Arial)
- ❌ NO usar el símbolo a menos de 40px
- ❌ NO recrear el símbolo manualmente — usar siempre el PNG provisto
- ❌ NO traducir mecánicamente del inglés — escribir en castellano natural
- ❌ NO agregar elementos visuales que no están en el sistema (degradados arcoíris, glassmorphism extremo, neumorfismo)

---

**Versión:** v.2026.05
**Última actualización:** Mayo 2026
**Origen:** Tuchin · Córdoba · Colombia
