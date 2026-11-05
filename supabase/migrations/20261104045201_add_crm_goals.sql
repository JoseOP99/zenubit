create table public.crm_goals (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  target_value numeric(12,2),
  current_value numeric(12,2) not null default 0,
  unit text not null default 'unidades',
  status text not null default 'activa' check (status in ('activa', 'completada', 'pausada')),
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.crm_goals enable row level security;
grant select, insert, update, delete on public.crm_goals to authenticated;

create policy "zenubit_admin_access" on public.crm_goals
  for all to authenticated
  using ((select auth.jwt() ->> 'email') = any (array[
    'padilla99@gmail.com',
    'jockrlos210@gmail.com',
    'desarrolloszenubit@gmail.com'
  ]))
  with check ((select auth.jwt() ->> 'email') = any (array[
    'padilla99@gmail.com',
    'jockrlos210@gmail.com',
    'desarrolloszenubit@gmail.com'
  ]));
