alter table public.crm_project_updates drop constraint crm_project_updates_project_id_fkey;
alter table public.crm_project_updates add constraint crm_project_updates_project_id_fkey
  foreign key (project_id) references public.crm_projects(id) on delete restrict;
alter table public.crm_project_files drop constraint crm_project_files_project_id_fkey;
alter table public.crm_project_files add constraint crm_project_files_project_id_fkey
  foreign key (project_id) references public.crm_projects(id) on delete restrict;
