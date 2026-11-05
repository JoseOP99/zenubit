alter table public.leads_automatizacion add column privacy_consent_at timestamptz;
alter table public.leads_automatizacion add column privacy_policy_version text;
alter policy "Permitir insercion anonima leads" on public.leads_automatizacion
  with check (privacy_consent_at is not null and privacy_policy_version is not null);
alter policy "Permitir insercion autenticada leads" on public.leads_automatizacion
  with check (privacy_consent_at is not null and privacy_policy_version is not null);
