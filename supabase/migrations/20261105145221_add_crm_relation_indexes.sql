create index if not exists crm_projects_client_id_idx
  on public.crm_projects (client_id);

create index if not exists crm_budgets_client_id_idx
  on public.crm_budgets (client_id);

create index if not exists crm_budgets_project_id_idx
  on public.crm_budgets (project_id);

create index if not exists crm_tasks_client_id_idx
  on public.crm_tasks (client_id);

create index if not exists crm_tasks_project_id_idx
  on public.crm_tasks (project_id);
