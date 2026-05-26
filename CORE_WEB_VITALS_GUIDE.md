# ⚡ Guía: Core Web Vitals - Optimización de Performance

## ¿Qué son Core Web Vitals?

Google mide la velocidad y experiencia de usuario con 3 métricas clave:

| Métrica | Meta | Lo que mide | Status |
|---------|------|-----------|--------|
| **LCP** | < 2.5s | Tiempo hasta que carga el contenido principal | ✅ Optimizado |
| **FID** | < 100ms | Tiempo para responder a clicks/interacciones | ✅ OK (React) |
| **CLS** | < 0.1 | Movimientos de elementos durante carga | ⚠️ Revisar |

---

## Optimizaciones Aplicadas a Zenubit

### ✅ 1. LCP (Largest Contentful Paint) — < 2.5s
**Qué se hizo:**
- Logo en Hero tiene `width={300} height={340}` → evita Layout Shift
- Componentes lazy-loaded con `Suspense` (Stats, Services, Herramientas, etc.)
- CSS crítico inline (colors, fonts via Google Fonts)
- Logo es la imagen más grande → asegurarse que carga rápido

**Verificar en PageSpeed Insights:**
```
Navegador → DevTools → Lighthouse → Performance
Buscar: "Largest Contentful Paint"
Meta: < 2.5s
```

**Si ves LCP > 2.5s:**
- ¿La imagen del logo es muy grande? Optimizar PNG (usar TinyPNG.com)
- ¿Font de Google Fonts tarda? Agregar `font-display: swap` en CSS
- ¿JavaScript tarda? Revisar bundle size en build output

### ✅ 2. FID (First Input Delay) — < 100ms
**Qué se hizo:**
- React es relativamente rápido para FID
- Interacciones (botones, clicks) son responses rápidas
- No hay heavy computations en main thread

**Si ves FID > 100ms:**
- Revisar que no haya loops pesados en listeners
- Usar `requestIdleCallback()` para tareas de fondo

### ⚠️ 3. CLS (Cumulative Layout Shift) — < 0.1
**Qué se hizo:**
- Logo: agregado width/height
- Glow nodes animados con `transform` (no `top/left`)
- Fondos con `background-image` (no affect layout)

**Verificar en PageSpeed:**
```
DevTools → Lighthouse → Performance
Buscar: "Cumulative Layout Shift"
Meta: < 0.1
```

**Posibles culprables de CLS:**
- Imágenes sin dimensiones → ✅ FIJO (logo tiene width/height)
- Fuentes que carga late → ✅ FIJO (Google Fonts preconnect)
- Anuncios que cargan → N/A (no aplicable)
- Elementos con `position: absolute` mal baselines → Revisar si algo se mueve

---

## Cómo Medir en PageSpeed Insights

### Paso a Paso:
1. Ir a: **https://pagespeed.web.dev/**
2. Ingresar: `https://zenubit.com` (o tu URL en desarrollo)
3. Click **"Analizar"**
4. Esperar 30-60 segundos
5. Ver resultados

### Qué Buscar:
- **Score móvil** (más importante): Debe ser > 75/100
- **Score escritorio**: Debe ser > 80/100
- **Core Web Vitals**: Todos en verde (Good)
- **Opportunities**: Lee las sugerencias (es OK ignorar algunos)

### Ejemplo de Resultado Esperado:
```
✅ LCP: 2.1s (Good)
✅ FID: 45ms (Good)
✅ CLS: 0.05 (Good)
📊 Performance Score: 78/100 (Needs Work) ← Normal para sitios con animaciones
```

---

## Optimizaciones Avanzadas (Si Score < 75)

### 1. Optimizar Imagen Logo
```bash
# Comprimir PNG sin perder calidad
# En: https://tinypng.com
# Bajar de 3.9MB a < 500KB

# Actualizar en src/assets/logoZenubit.png
```

### 2. Minify CSS
Ya hecho por Vite en `npm run build` ✅

### 3. Defer Non-Critical JavaScript
```jsx
// En lugar de:
import Casos from './components/Casos';

// Hacer:
const Casos = lazy(() => import('./components/Casos'));
```
✅ YA ESTÁ HECHO en App.jsx

### 4. Preload Critical Fonts
En `index.html`, agregar en `<head>`:
```html
<link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" crossorigin>
```

### 5. Generar WebP
Si imagen PNG es pesada, convertir a WebP:
```html
<picture>
  <source srcset="logo.webp" type="image/webp">
  <img src="logo.png" alt="...">
</picture>
```

---

## Checklist de Performance

- [ ] Build completado: `npm run build`
- [ ] Imagen logo: < 500KB
- [ ] PageSpeed Insights: Score > 75 móvil
- [ ] Lighthouse LCP: < 2.5s
- [ ] Lighthouse FID: < 100ms
- [ ] Lighthouse CLS: < 0.1
- [ ] Meta tags presentes (favicon, og:image, etc.)
- [ ] Robots.txt y sitemap.xml accesibles

---

## Timeline

| Semana | Acción | Métrica |
|--------|--------|---------|
| **Ahora** | Build + PageSpeed check | Score base |
| **+1 sem** | Google Search Console indexa | N/A |
| **+2 sem** | Zenubit aparece en búsquedas | Rankings iniciales |
| **+4 sem** | Performance stabiliza | Stable CWV |

---

## Recursos

- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Google Core Web Vitals:** https://web.dev/vitals/
- **Lighthouse Scoring:** https://developer.chrome.com/en/docs/lighthouse/scoring/
- **Image Optimization:** https://tinypng.com

---

**Próximo paso:** Ejecuta tu URL en PageSpeed después de deploy en producción.
