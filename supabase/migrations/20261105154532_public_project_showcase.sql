alter table public.crm_projects add column public_showcase boolean not null default false;
alter table public.crm_projects add column public_summary text;

create function public.get_public_projects() returns jsonb
language sql stable security definer set search_path = '' as $$
  select coalesce(jsonb_agg(jsonb_build_object('id', p.id, 'title', p.name, 'summary', p.public_summary, 'url', p.url) order by p.created_at desc), '[]'::jsonb)
  from public.crm_projects p
  where p.public_showcase = true and nullif(btrim(p.public_summary), '') is not null
$$;
revoke all on function public.get_public_projects() from public;
grant execute on function public.get_public_projects() to anon, authenticated;
