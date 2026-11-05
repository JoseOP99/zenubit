# Privacidad: implementación y revisión pendiente

Esta revisión es una guía de implementación, no una declaración de cumplimiento legal. La Ley 1581 de 2012 y el Decreto 1377 de 2013 regulan el tratamiento de datos personales en Colombia. La SIC recuerda que el aviso de privacidad no reemplaza la autorización previa, expresa e informada.

## Datos y usos observados

- El formulario público recibe nombre, correo, teléfono e interés. Supabase conserva estos datos como prospectos.
- El formulario solicita autorización mediante casilla no premarcada y registra fecha y versión de la política. La política pública se muestra en `/privacidad`.
- El CRM guarda datos de contacto, notas internas, proyectos, presupuestos, tareas y metas.
- El portal usa autenticación por enlace de correo y devuelve solo proyectos, presupuestos enviados o aceptados, avances y archivos compartidos relacionados con el correo confirmado. Los detalles internos del cliente permanecen fuera de la respuesta. Los archivos se almacenan en un bucket privado.
- La sección pública de proyectos muestra únicamente nombre, resumen público y enlace de los trabajos aprobados manualmente en el CRM. Verificar autorización del cliente antes de publicar su nombre, marca o caso.
- El sitio incluye enlaces a WhatsApp y redes sociales. Revisar con herramientas del navegador si hay cookies o analítica de terceros antes de definir un aviso de cookies.

## Para publicar una política y consentimiento completos

Responsable identificado por el usuario: José Carlos Ortiz Padilla; correo de privacidad `padilla99j@gmail.com`; operación anunciada en Tuchín, Córdoba. No se guardó ni publicó su número de identificación. Falta confirmar una dirección física de notificaciones y someter el texto a revisión jurídica. La conservación se expresa por finalidad y obligaciones aplicables, sin inventar un plazo. La inspección de código no encontró scripts de analítica o publicidad; verificar periódicamente servicios externos, transferencias y políticas de los encargados. El acceso al portal por enlace requiere confirmar en Supabase la URL de redirección `/cliente`.

## Fuentes oficiales

- [Ley 1581 de 2012](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981)
- [Decreto 1377 de 2013](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646)
- [SIC sobre aviso y autorización](https://sedeelectronica.sic.gov.co/publicaciones/boletin-juridico/boletin/la-delegatura-para-la-proteccion-de-datos-personales-de-la-superintendencia-de-industria-y-comercio-confirma)
