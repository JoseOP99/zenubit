# Pasos Pendientes — Zenubit

## 1. Actualizar URLs de Redes Sociales

Las redes sociales en el footer tienen URLs genéricas. Actualízalas con tus perfiles reales.

### Archivo a editar
`src/components/Footer.jsx`

### Busca y reemplaza estas URLs

| Red | URL actual (placeholder) | Reemplazar con |
|-----|--------------------------|----------------|
| Facebook | `https://www.facebook.com/zenubit` | Tu URL real de Facebook |
| YouTube | `https://www.youtube.com/@zenubit` | Tu URL real de YouTube |
| Instagram | `https://www.instagram.com/zenubit` | Tu URL real de Instagram |
| LinkedIn | `https://www.linkedin.com/in/joseortizp` | Verificar que sea correcta |
| GitHub | `https://github.com/JoseOP99` | Verificar que sea correcta |
| WhatsApp | `https://wa.link/6fdprv` | Verificar que sea correcta |

> Si no tienes alguna red social, elimina el bloque `<a>...</a>` correspondiente del archivo.

---

## 2. Configurar Google Search Console (GSC)

Esto es **esencial** para que "zenubit" aparezca en los resultados de Google.

### Paso 1: Acceder a GSC
1. Ve a [https://search.google.com/search-console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google

### Paso 2: Agregar propiedad
1. Clic en **"Agregar propiedad"** (esquina superior izquierda)
2. Selecciona **"Prefijo de URL"**
3. Escribe tu dominio completo: `https://tusitio.com` (reemplaza con tu dominio real)
4. Clic en **"Continuar"**

### Paso 3: Verificar propiedad
Google te dará varias opciones. La más sencilla:

**Opción A — Archivo HTML (recomendada):**
1. Descarga el archivo HTML que Google te da (algo como `google1234abc.html`)
2. Colócalo en la carpeta `public/` de tu proyecto
3. Haz deploy de nuevo
4. Vuelve a GSC y clic en **"Verificar"**

**Opción B — Meta tag:**
1. Google te da una etiqueta como:
   ```html
   <meta name="google-site-verification" content="tu-codigo-aqui" />
   ```
2. Abre `index.html`
3. Pega esa etiqueta dentro del `<head>`, debajo de las otras meta tags
4. Haz deploy y verifica en GSC

### Paso 4: Enviar Sitemap
1. Una vez verificado, ve a **"Sitemaps"** en el menú lateral de GSC
2. En el campo escribe: `sitemap.xml`
3. Clic en **"Enviar"**
4. Debería aparecer como **"Correcto"** después de unos minutos

### Paso 5: Solicitar indexación
1. En GSC, ve a **"Inspección de URLs"** (barra superior)
2. Escribe tu URL principal: `https://tusitio.com`
3. Clic en **"Solicitar indexación"**
4. Repite para URLs importantes si las tienes

### Tiempos esperados
| Acción | Tiempo estimado |
|--------|----------------|
| Verificación de propiedad | Inmediato |
| Indexación inicial | 2-7 días |
| Aparecer en búsquedas | 1-4 semanas |
| Posicionamiento estable | 2-3 meses |

> Google puede tardar hasta 4 semanas en indexar un sitio nuevo. Sé paciente.

---

## 3. Limpiar archivo de respaldo del logo

Hay un archivo de 3.8MB sin trackear en el repositorio:
```
src/assets/logoZenubit_original_backup.png
```

### Opciones:

**Opción A — Eliminar** (si ya no lo necesitas):
```bash
rm src/assets/logoZenubit_original_backup.png
```

**Opción B — Ignorar en Git** (mantenerlo local pero sin subirlo):
Agrega esta línea al archivo `.gitignore`:
```
src/assets/logoZenubit_original_backup.png
```

---

## 4. Hacer deploy

Después de actualizar las URLs de redes sociales y configurar GSC:

```bash
npm run build
```

Sube la carpeta `dist/` a tu hosting (Vercel, Netlify, GitHub Pages, etc.).

### Si usas Vercel:
```bash
npx vercel --prod
```

### Si usas Netlify:
```bash
npx netlify deploy --prod --dir=dist
```

### Si usas GitHub Pages:
Configura el deploy automático desde el repositorio en GitHub Settings > Pages.

---

## Checklist Final

- [ ] URLs de redes sociales actualizadas en `Footer.jsx`
- [ ] Google Search Console verificado
- [ ] Sitemap enviado en GSC
- [ ] Indexación solicitada en GSC
- [ ] Archivo de respaldo del logo limpiado
- [ ] Deploy realizado con cambios finales
