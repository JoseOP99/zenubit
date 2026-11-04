create table public.crm_clients (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid unique references public.leads_automatizacion(id) on delete set null,
  name text not null,
  email text,
  phone text,
  company text,
  notes text,
  status text not null default 'prospecto' check (status in ('prospecto','activo','pausado','cerrado')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.crm_projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.crm_clients(id) on delete cascade,
  name text not null,
  description text,
  status text not null default 'planificacion' check (status in ('planificacion','en_progreso','revision','completado','cancelado')),
  url text,
  start_date date,
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.crm_budgets (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.crm_clients(id) on delete cascade,
  project_id uuid references public.crm_projects(id) on delete set null,
  title text not null,
  amount numeric(12,2) not null default 0 check (amount >= 0),
  currency text not null default 'COP',
  status text not null default 'borrador' check (status in ('borrador','enviado','aceptado','rechazado')),
  details text,
  valid_until date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.crm_tasks (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.crm_clients(id) on delete cascade,
  project_id uuid references public.crm_projects(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'pendiente' check (status in ('pendiente','en_progreso','completada')),
  priority text not null default 'media' check (priority in ('baja','media','alta')),
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (client_id is not null or project_id is not null)
);

do $$
declare
  table_name text;
begin
  foreach table_name in array array['crm_clients','crm_projects','crm_budgets','crm_tasks']
  loop
    execute format('alter table public.%I enable row level security', table_name);
    execute format('grant select, insert, update, delete on public.%I to authenticated', table_name);
    execute format('create policy "zenubit_admin_access" on public.%I for all to authenticated using ((select auth.jwt() ->> ''email'') = any (array[''padilla99j@gmail.com'',''jockrlos210@gmail.com'',''desarrolloszenubit@gmail.com''])) with check ((select auth.jwt() ->> ''email'') = any (array[''padilla99j@gmail.com'',''jockrlos210@gmail.com'',''desarrolloszenubit@gmail.com'']))', table_name);
  end loop;
end $$;
