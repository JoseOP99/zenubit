create table public.crm_project_updates (
 id uuid primary key default gen_random_uuid(),
 project_id uuid not null references public.crm_projects(id) on delete cascade,
 title text not null,
 body text,
 visible_to_client boolean not null default false,
 created_at timestamptz not null default now()
);
create table public.crm_project_files (
 id uuid primary key default gen_random_uuid(),
 project_id uuid not null references public.crm_projects(id) on delete cascade,
 storage_path text not null unique,
 file_name text not null,
 file_size bigint not null check (file_size > 0 and file_size <= 6291456),
 content_type text not null,
 visible_to_client boolean not null default false,
 created_at timestamptz not null default now()
);
create index crm_project_updates_project_id_idx on public.crm_project_updates(project_id);
create index crm_project_files_project_id_idx on public.crm_project_files(project_id);
alter table public.crm_project_updates enable row level security;
alter table public.crm_project_files enable row level security;
grant select, insert, update, delete on public.crm_project_updates, public.crm_project_files to authenticated;
create policy "zenubit_admin_access" on public.crm_project_updates for all to authenticated
 using ((select auth.jwt() ->> 'email') = any (array['padilla99j@gmail.com','jockrlos210@gmail.com','desarrolloszenubit@gmail.com']))
 with check ((select auth.jwt() ->> 'email') = any (array['padilla99j@gmail.com','jockrlos210@gmail.com','desarrolloszenubit@gmail.com']));
create policy "zenubit_admin_access" on public.crm_project_files for all to authenticated
 using ((select auth.jwt() ->> 'email') = any (array['padilla99j@gmail.com','jockrlos210@gmail.com','desarrolloszenubit@gmail.com']))
 with check ((select auth.jwt() ->> 'email') = any (array['padilla99j@gmail.com','jockrlos210@gmail.com','desarrolloszenubit@gmail.com']));
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
 values ('zenubit-project-files','zenubit-project-files',false,6291456,array['application/pdf','image/png','image/jpeg','image/webp'])
 on conflict (id) do nothing;
create schema if not exists private;
grant usage on schema private to authenticated;
create function private.can_read_project_file(object_name text) returns boolean
 language sql stable security definer set search_path = '' as $$
 select exists (
   select 1 from public.crm_project_files f
   join public.crm_projects p on p.id = f.project_id
   join public.crm_clients c on c.id = p.client_id
   join auth.users u on u.id = (select auth.uid())
   where f.storage_path = object_name and f.visible_to_client = true
     and u.email_confirmed_at is not null and c.email is not null
     and lower(c.email) = lower(u.email)
 )
 $$;
revoke all on function private.can_read_project_file(text) from public, anon;
grant execute on function private.can_read_project_file(text) to authenticated;
create policy "zenubit_admin_storage_read" on storage.objects for select to authenticated
 using (bucket_id = 'zenubit-project-files' and (select auth.jwt() ->> 'email') = any (array['padilla99j@gmail.com','jockrlos210@gmail.com','desarrolloszenubit@gmail.com']));
create policy "zenubit_client_storage_read" on storage.objects for select to authenticated
 using (bucket_id = 'zenubit-project-files' and private.can_read_project_file(name));
create policy "zenubit_admin_storage_insert" on storage.objects for insert to authenticated
 with check (bucket_id = 'zenubit-project-files' and (select auth.jwt() ->> 'email') = any (array['padilla99j@gmail.com','jockrlos210@gmail.com','desarrolloszenubit@gmail.com']));
create policy "zenubit_admin_storage_delete" on storage.objects for delete to authenticated
 using (bucket_id = 'zenubit-project-files' and (select auth.jwt() ->> 'email') = any (array['padilla99j@gmail.com','jockrlos210@gmail.com','desarrolloszenubit@gmail.com']));
create or replace function public.get_client_portal() returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare v_email text; v_clients jsonb; v_projects jsonb; v_budgets jsonb; v_updates jsonb; v_files jsonb;
begin
 select u.email into v_email from auth.users u where u.id = (select auth.uid()) and u.email_confirmed_at is not null;
 if v_email is null then return jsonb_build_object('clients','[]'::jsonb,'projects','[]'::jsonb,'budgets','[]'::jsonb,'updates','[]'::jsonb,'files','[]'::jsonb); end if;
 select coalesce(jsonb_agg(jsonb_build_object('id',c.id,'name',c.name,'company',c.company,'status',c.status)),'[]'::jsonb) into v_clients from public.crm_clients c where lower(c.email)=lower(v_email);
 select coalesce(jsonb_agg(jsonb_build_object('id',p.id,'name',p.name,'description',p.description,'status',p.status,'url',p.url,'start_date',p.start_date,'due_date',p.due_date)),'[]'::jsonb) into v_projects from public.crm_projects p join public.crm_clients c on c.id=p.client_id where lower(c.email)=lower(v_email);
 select coalesce(jsonb_agg(jsonb_build_object('id',b.id,'title',b.title,'amount',b.amount,'currency',b.currency,'details',b.details,'status',b.status,'valid_until',b.valid_until)),'[]'::jsonb) into v_budgets from public.crm_budgets b join public.crm_clients c on c.id=b.client_id where lower(c.email)=lower(v_email) and b.status in ('enviado','aceptado');
 select coalesce(jsonb_agg(jsonb_build_object('id',u.id,'project_id',u.project_id,'title',u.title,'body',u.body,'created_at',u.created_at) order by u.created_at desc),'[]'::jsonb) into v_updates from public.crm_project_updates u join public.crm_projects p on p.id=u.project_id join public.crm_clients c on c.id=p.client_id where u.visible_to_client=true and lower(c.email)=lower(v_email);
 select coalesce(jsonb_agg(jsonb_build_object('id',f.id,'project_id',f.project_id,'storage_path',f.storage_path,'file_name',f.file_name,'file_size',f.file_size,'content_type',f.content_type,'created_at',f.created_at) order by f.created_at desc),'[]'::jsonb) into v_files from public.crm_project_files f join public.crm_projects p on p.id=f.project_id join public.crm_clients c on c.id=p.client_id where f.visible_to_client=true and lower(c.email)=lower(v_email);
 return jsonb_build_object('clients',v_clients,'projects',v_projects,'budgets',v_budgets,'updates',v_updates,'files',v_files);
end $$;
