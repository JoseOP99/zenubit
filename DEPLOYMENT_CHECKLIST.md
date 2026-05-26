# ✅ Deployment Checklist - Zenubit

**Objetivo:** Asegurar que todo esté listo antes de ir a producción

---

## 📋 PRE-DEPLOYMENT (Local)

### Code Quality
- [ ] `npm run lint` ejecutado sin errores
- [ ] `npm run build` completado exitosamente
- [ ] No hay warnings en build output
- [ ] Git status limpio (`git status` = clean)

### SEO Verification
- [ ] `index.html` contiene FAQ Schema (valida en https://schema.org/validator)
- [ ] Meta tags presentes: title, description, og:*, twitter:*
- [ ] Robots.txt en `/public/robots.txt`
- [ ] Sitemap.xml en `/public/sitemap.xml`
- [ ] Geo-targeting correcto: Tuchin, Córdoba (9.3029, -75.6107)

### Images & Performance
- [ ] Logo optimizado: < 500KB (seguir OPTIMIZAR_IMAGEN.md)
- [ ] Logo en dist/: correcto tamaño
- [ ] Favicon presente: `favicon.png`
- [ ] BuildSize: CSS < 20KB, JS < 400KB gzipped

### Links & Navigation
- [ ] Hero CTA: WhatsApp link funciona (`https://wa.link/6fdprv`)
- [ ] Navbar links: #servicios, #proceso, #herramientas, #stack, #origen, #contacto
- [ ] Footer links: todas las secciones correctas
- [ ] No hay links rotos internos

### Responsive & Accessibility
- [ ] Mobile view: navbar, buttons, text readable
- [ ] Tablet view: layout se adapta
- [ ] Desktop view: diseño correcto
- [ ] Color contrast: WCAG AA cumplido
- [ ] ARIA labels: buttons tienen aria-label

### Analytics Ready (Opcional)
- [ ] Google Analytics script listo (si lo necesitas)
- [ ] Pixel de Facebook listo (si lo necesitas)
- [ ] Conversion tracking code (si lo necesitas)

---

## 🚀 DEPLOYMENT (Server Setup)

### Server Configuration
- [ ] HTTPS habilitado (obligatorio)
- [ ] HTTP redirige a HTTPS
- [ ] GZIP compression habilitada
- [ ] Cache headers configurados:
  ```
  *.html: no-cache
  *.css, *.js: 1 año
  *.png, *.svg: 30 días
  ```

### File Structure
```
/public/
├── index.html          ← Main file
├── robots.txt          ← ✅ Presente
├── sitemap.xml         ← ✅ Presente
├── favicon.png
└── assets/
    ├── logoZenubit.png ← ✅ Optimizado
    └── ... otros assets
```

- [ ] `/dist/robots.txt` es accesible en: `https://zenubit.com/robots.txt`
- [ ] `/dist/sitemap.xml` es accesible en: `https://zenubit.com/sitemap.xml`
- [ ] Todos los assets cargan correctamente

### DNS & Domain
- [ ] Dominio apunta a servidor correcto (CNAME/A record)
- [ ] DNS resuelve correctamente
- [ ] HTTPS certificate válido (SSL/TLS)
- [ ] No hay warnings de certificado

---

## ✔️ POST-DEPLOYMENT (Verification)

### Accessibility Check
- [ ] Página carga sin errores en navegador
- [ ] Todos los estilos CSS cargan
- [ ] Imágenes se ven correctamente
- [ ] Animaciones funcionan
- [ ] Formularios/CTAs responden

### SEO Files Accessible
- [ ] `curl https://zenubit.com/robots.txt` retorna archivo
- [ ] `curl https://zenubit.com/sitemap.xml` retorna archivo
- [ ] No hay errores 404 en console

### Performance Check
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
  - [ ] Mobile score: > 75/100
  - [ ] LCP: < 2.5s
  - [ ] FID: < 100ms
  - [ ] CLS: < 0.1

- [ ] Lighthouse audit: https://web.dev/measure/
  - [ ] Performance: > 80
  - [ ] Accessibility: > 90
  - [ ] Best Practices: > 85
  - [ ] SEO: > 90

### Mobile Testing
- [ ] Viewport meta tag presente
- [ ] Mobile navbar funciona (hamburger menu)
- [ ] Touch targets > 44x44px
- [ ] Text readable sin zoom
- [ ] Formularios accesibles en mobile

---

## 🔍 GOOGLE SEARCH CONSOLE

### Setup (Completar después de deployment)
- [ ] Propiedad agregada: `zenubit.co`
- [ ] Verificación completada (DNS o archivo)
- [ ] Sitemap enviado: `/sitemap.xml`
- [ ] Robots.txt validado (debe mostrar "accesible")

### Initial Check (24-48h después)
- [ ] Coverage: páginas detectadas
- [ ] Errors: ninguno crítico
- [ ] Valid: todas las URLs sin errores

---

## 📊 MONITORING (Primeras 4 Semanas)

### Week 1: Indexación
- [ ] Google empieza a rastrear
- [ ] URLs aparecen en Search Console
- [ ] No hay errores de rastreo

### Week 2: Visibilidad
- [ ] "zenubit" aparece en búsquedas
- [ ] 0-10 impressions esperadas
- [ ] CTR posiblemente 0% (muy bajo ranking)

### Week 3-4: Posicionamiento
- [ ] "power platform colombia" aparece
- [ ] "automatización colombia" aparece
- [ ] Ranking: posición 50-100 (normal al inicio)

### Ongoing
- [ ] Core Web Vitals: monitoreados en Google Console
- [ ] Search Performance: revisar CTR y impressions
- [ ] Ranking: buscar "zenubit" semanalmente
- [ ] Errors: resolver cualquier error de rastreo

---

## 📞 Troubleshooting

### Si robots.txt da error 404:
```bash
# Verificar que existe
ls -la public/robots.txt

# Si no existe, crear
echo "User-agent: *
Allow: /
Sitemap: https://zenubit.com/sitemap.xml" > public/robots.txt

# Rebuild
npm run build
```

### Si LCP > 2.5s en PageSpeed:
- [ ] Imagen logo optimizada? (seguir OPTIMIZAR_IMAGEN.md)
- [ ] HTTPS/HTTP2 habilitado?
- [ ] Cache headers configurados?
- [ ] JavaScript minificado?

### Si Google no indexa:
- [ ] Esperar 7 días (es normal)
- [ ] Verificar que robots.txt permite crawl
- [ ] Verificar que HTTPS funciona
- [ ] Revisar "Coverage" en GSC para errores

---

## ✨ Final Checklist Antes de Ir a Producción

```
Pre-Deploy:
☐ npm run build exitoso
☐ Logo optimizado < 500KB
☐ robots.txt y sitemap.xml en public/

Deploy:
☐ Files en servidor
☐ HTTPS habilitado
☐ Dominio apunta correctamente

Post-Deploy:
☐ robots.txt accesible
☐ sitemap.xml accesible
☐ Página carga sin errores
☐ Mobile responsive

Google Setup:
☐ GSC propiedad verificada
☐ Sitemap enviado
☐ Robots.txt validado

Monitoring:
☐ Plan de monitoreo en marcha
☐ PageSpeed Insights track
☐ Search Console monitoreado
```

---

**Estimated Time:**
- Pre-Deploy: 30 min
- Deployment: 15 min
- Post-Deploy Verification: 30 min
- GSC Setup: 20 min

**Total: ~95 minutos**

**Status:** 🟢 Ready to Deploy
