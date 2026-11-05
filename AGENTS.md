# Zenubit

React + Vite + Supabase. Ver [contexto](docs/CONTEXTO.md), [diseño](docs/DISENO.md) y [privacidad](docs/PRIVACIDAD.md).

- Comandos: `npm ci`, `npm run lint`, `npm run build`.
- Una sola base Supabase: proyecto `eblklqrbyhdmyruumqsp`. Guardar cada DDL en `supabase/migrations/`.
- No incorporar datos reales de clientes en Git ni usar claves privilegiadas en el navegador.
- El panel `/jose` es privado. El portal `/cliente` entrega solo datos filtrados por una función de base de datos.
- Los trabajos públicos en `src/data/projects.js` deben ser reales y aprobados para difusión.
