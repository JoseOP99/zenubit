# 📋 Guía: Setup de Google Search Console para Zenubit

## Paso a Paso para Implementar

### 1️⃣ Acceder a Google Search Console
1. Ir a: **https://search.google.com/search-console**
2. Iniciar sesión con tu cuenta de Google (preferiblemente la misma del dominio zenubit.co)

### 2️⃣ Agregar Propiedad
1. Click en **"Agregar propiedad"** (arriba a la izquierda)
2. Seleccionar **"Dominio"** (no URL prefix)
3. Ingresar: `zenubit.co` (sin https://)
4. Click en **"Continuar"**

### 3️⃣ Verificar Propiedad
Google te dará opciones de verificación:

**Opción Recomendada: Registro de DNS**
```
Tipo:  TXT
Nombre: zenubit.co
Valor: google-site-verification=XXXXXXXXXXXXXXXXXX
```

⚠️ **NOTA:** Necesitas acceso a tu proveedor DNS (donde está registrado el dominio)
- Si está en GoDaddy, Namecheap, Google Domains, etc., ve a sus DNS settings

**Alternativa rápida (si no puedes modificar DNS):**
- Subir archivo `google-verification.html` a raíz del servidor
- O agregar `<meta name="google-site-verification"...>` al HTML

Una vez verificado, Google confirmará automáticamente en 24-48h.

### 4️⃣ Submitir Sitemap
1. En GSC, ir a **"Sitemaps"** (menú izquierdo)
2. Click en **"Nueva URL de sitemap"**
3. Ingresar: `https://zenubit.com/sitemap.xml`
4. Click en **"Enviar"**

Google comenzará a rastrear las URLs del sitemap en 24-72h.

### 5️⃣ Verificar Robots.txt
1. En GSC, ir a **"Configuración"** → **"Lectores de exploradores"**
2. Debería mostrar que el archivo `/robots.txt` es accesible
3. Si dice "Error", contacta hosting para asegurar que `/public/robots.txt` está públicamente accesible

### 6️⃣ Monitorear Indexación
En GSC:
- **"Cobertura"** — muestra qué páginas están indexadas
- **"Rendimiento"** — verás búsquedas donde apareces ("zenubit", "power platform colombia", etc.)
- **"Validación de Markups"** — verifique que FAQ Schema se detecte correctamente

---

## Timeline Esperado

| Fase | Tiempo | Acciones |
|------|--------|----------|
| **Verificación en GSC** | 24-48h | Google valida propiedad |
| **Rastreo inicial** | 2-7 días | Google descubre e indexa URLs |
| **Visibilidad en búsquedas** | 1-2 semanas | "zenubit" aparece en SERPs |
| **Posicionamiento estable** | 4-8 semanas | Rankings se estabilizan |

---

## Checklist Post-Setup

### ✅ Verificar en GSC
- [ ] Propiedad verificada exitosamente
- [ ] Sitemap enviado y rastreado
- [ ] Robots.txt accesible
- [ ] FAQ Schema detectado en "Validación de Markups"
- [ ] 0 errores críticos en "Cobertura"

### ✅ Antes de Ir a Producción
- [ ] `npm run build` completado sin errores
- [ ] `/dist/robots.txt` existe y es accesible
- [ ] `/dist/sitemap.xml` existe y es accesible
- [ ] Dominio apunta correctamente a servidor
- [ ] HTTPS está habilitado (obligatorio para SEO moderno)

### ✅ Monitoreo Continuo (Semanal)
- [ ] Revisar "Rendimiento" en GSC
- [ ] Notar dónde aparece "zenubit"
- [ ] Verificar CTR (Click-Through Rate)
- [ ] Revisar errores de rastreo

---

## URLs a Monitorear en GSC Rendimiento

Después de 2 semanas, deberías ver en GSC:
- ✅ Búsquedas: `zenubit`, `zenubit colombia`, `automatización colombia`
- ✅ Búsquedas: `power platform colombia`, `appsheet colombia`
- ✅ Búsquedas: `automatización tuchin`, `rpa colombia`

Si no ves "zenubit" en búsquedas después de 4 semanas:
1. Verifica que el sitio está indexado (`site:zenubit.co` en Google)
2. Revisa "Cobertura" en GSC para errores
3. Mejora enlace internos (internal linking)
4. Considera crear más contenido keyword-rich

---

## Contacto Google Support
Si tienes problemas:
1. Click en el **icono ?** en GSC
2. Selecciona **"Ir a Centro de Ayuda"**
3. O enviá a: support@google.com/webmasters

---

**Próximos pasos:** Una vez completado, monitorea GSC semanalmente para track de "zenubit" en búsquedas. 🚀
