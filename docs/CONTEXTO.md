# Contexto de Zenubit

## Propósito

Sitio público para presentar los servicios de Zenubit, recibir solicitudes de contacto y facilitar la gestión privada de sus oportunidades y trabajos.

## Funciones implementadas

- Sitio público React + Vite en `/`, con formularios de contacto y sección de proyectos.
- Panel privado `/jose`, con acceso por Supabase Auth, recuperación/cambio de contraseña y cierre de sesión.
- El espacio privado permite revisar prospectos recibidos, pasarlos a clientes y administrar clientes, proyectos, presupuestos, tareas y metas.
- Se conservan los formularios recibidos existentes; el CRM no crea ni migra sus datos.

## Arquitectura y datos

- Frontend React y `@supabase/supabase-js`; el panel usa el cliente en `src/supabaseClient.js`.
- Única base autorizada: Supabase, proyecto `eblklqrbyhdmyruumqsp` (Zenubit).
- Tablas de CRM en `public`: `leads_automatizacion`, `crm_clients`, `crm_projects`, `crm_budgets`, `crm_tasks` y `crm_goals`.
- Las tablas del CRM tienen RLS. Las operaciones privadas se restringen a las cuentas autorizadas existentes; no se usa una clave `service_role` en el navegador.
- Migraciones versionadas en `supabase/migrations/`.

## Límites actuales

El panel es para el administrador de Zenubit. Todavía no ofrece cuentas para clientes, carga de archivos, historial/auditoría, notificaciones automáticas, envío de cotizaciones ni facturación. Las tareas pueden relacionarse con cliente y/o proyecto; presupuestos se registran en COP.

## Verificación y operación

Desde la raíz, `npm run lint` analiza el código y `npm run build` genera la versión de producción. Las operaciones sobre tablas requieren iniciar sesión con una de las cuentas autorizadas. Antes de operar sobre Supabase, confirmar que el destino sigue siendo el proyecto indicado y preservar sus datos.
