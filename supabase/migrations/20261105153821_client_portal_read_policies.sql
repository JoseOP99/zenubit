create policy "client_read_own_record" on public.crm_clients for select to authenticated
  using (email is not null and lower(email) = lower((select auth.jwt() ->> 'email')));
create policy "client_read_own_projects" on public.crm_projects for select to authenticated
  using (exists (select 1 from public.crm_clients c where c.id = client_id and c.email is not null and lower(c.email) = lower((select auth.jwt() ->> 'email'))));
create policy "client_read_sent_budgets" on public.crm_budgets for select to authenticated
  using (status in ('enviado','aceptado') and exists (select 1 from public.crm_clients c where c.id = client_id and c.email is not null and lower(c.email) = lower((select auth.jwt() ->> 'email'))));
