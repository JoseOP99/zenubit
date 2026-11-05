drop policy if exists "client_read_own_record" on public.crm_clients;
drop policy if exists "client_read_own_projects" on public.crm_projects;
drop policy if exists "client_read_sent_budgets" on public.crm_budgets;

create function public.get_client_portal() returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare
  v_email text;
  v_clients jsonb;
  v_projects jsonb;
  v_budgets jsonb;
begin
  select u.email into v_email from auth.users u
    where u.id = (select auth.uid()) and u.email_confirmed_at is not null;
  if v_email is null then
    return jsonb_build_object('clients', '[]'::jsonb, 'projects', '[]'::jsonb, 'budgets', '[]'::jsonb);
  end if;

  select coalesce(jsonb_agg(jsonb_build_object('id', c.id, 'name', c.name, 'company', c.company, 'status', c.status)), '[]'::jsonb)
    into v_clients from public.crm_clients c where lower(c.email) = lower(v_email);
  select coalesce(jsonb_agg(jsonb_build_object('id', p.id, 'name', p.name, 'description', p.description, 'status', p.status, 'url', p.url, 'start_date', p.start_date, 'due_date', p.due_date)), '[]'::jsonb)
    into v_projects from public.crm_projects p join public.crm_clients c on c.id = p.client_id
    where lower(c.email) = lower(v_email);
  select coalesce(jsonb_agg(jsonb_build_object('id', b.id, 'title', b.title, 'amount', b.amount, 'currency', b.currency, 'details', b.details, 'status', b.status, 'valid_until', b.valid_until)), '[]'::jsonb)
    into v_budgets from public.crm_budgets b join public.crm_clients c on c.id = b.client_id
    where lower(c.email) = lower(v_email) and b.status in ('enviado','aceptado');
  return jsonb_build_object('clients', v_clients, 'projects', v_projects, 'budgets', v_budgets);
end $$;

revoke all on function public.get_client_portal() from public, anon;
grant execute on function public.get_client_portal() to authenticated;
