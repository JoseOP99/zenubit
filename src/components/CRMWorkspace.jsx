import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '../supabaseClient';
import ProjectTracking from './ProjectTracking';

const sections = {
  clients: { label: 'Clientes', table: 'crm_clients', title: 'Cliente', fields: [
    ['name', 'Nombre', 'text', true], ['company', 'Empresa', 'text'], ['email', 'Correo', 'email'], ['phone', 'Teléfono', 'tel'], ['notes', 'Notas', 'textarea'],
  ], status: ['prospecto', 'activo', 'pausado', 'cerrado'] },
  projects: { label: 'Proyectos', table: 'crm_projects', title: 'Proyecto', fields: [
    ['client_id', 'Cliente', 'client', true], ['name', 'Nombre', 'text', true], ['description', 'Descripción para el cliente', 'textarea'], ['url', 'Enlace del proyecto', 'url'], ['start_date', 'Inicio', 'date'], ['due_date', 'Entrega', 'date'], ['public_summary', 'Resumen público', 'textarea'], ['public_showcase', 'Mostrar en la web', 'checkbox'],
  ], status: ['planificacion', 'en_progreso', 'revision', 'completado', 'cancelado'] },
  budgets: { label: 'Presupuestos', table: 'crm_budgets', title: 'Presupuesto', fields: [
    ['client_id', 'Cliente', 'client', true], ['project_id', 'Proyecto', 'project'], ['title', 'Concepto', 'text', true], ['amount', 'Valor en COP', 'number', true], ['valid_until', 'Válido hasta', 'date'], ['details', 'Detalle', 'textarea'],
  ], status: ['borrador', 'enviado', 'aceptado', 'rechazado'] },
  tasks: { label: 'Tareas', table: 'crm_tasks', title: 'Tarea', fields: [
    ['client_id', 'Cliente (opcional)', 'client'], ['project_id', 'Proyecto (opcional)', 'project'], ['title', 'Tarea', 'text', true], ['description', 'Descripción', 'textarea'], ['priority', 'Prioridad', 'priority'], ['due_date', 'Fecha límite', 'date'],
  ], status: ['pendiente', 'en_progreso', 'completada'] },
  goals: { label: 'Metas', table: 'crm_goals', title: 'Meta', fields: [
    ['title', 'Meta', 'text', true], ['description', 'Descripción', 'textarea'], ['target_value', 'Objetivo', 'number'], ['current_value', 'Avance actual', 'number'], ['unit', 'Unidad', 'text'], ['due_date', 'Fecha límite', 'date'],
  ], status: ['activa', 'completada', 'pausada'] },
};

const statusLabels = {
  prospecto: 'Prospecto', activo: 'Activo', pausado: 'En pausa', cerrado: 'Cerrado',
  planificacion: 'Planificación', en_progreso: 'En progreso', revision: 'En revisión', completado: 'Completado', cancelado: 'Cancelado',
  borrador: 'Borrador', enviado: 'Enviado', aceptado: 'Aceptado', rechazado: 'Rechazado',
  pendiente: 'Pendiente', completada: 'Completada', activa: 'Activa',
};

const initialForm = (schema) => Object.fromEntries(schema.fields.map(([key]) => [key, key === 'public_showcase' ? false : key === 'current_value' || key === 'amount' ? '0' : key === 'unit' ? 'unidades' : key === 'priority' ? 'media' : '']));
const currency = (value) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(Number(value) || 0);

export default function CRMWorkspace() {
  const [active, setActive] = useState('overview');
  const [records, setRecords] = useState({});
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataReady, setDataReady] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const schema = sections[active];
  const rows = records[active] || [];
  const clients = records.clients || [];
  const projects = records.projects || [];
  const pendingTasks = useMemo(() => (records.tasks || [])
    .filter((task) => task.status !== 'completada')
    .sort((a, b) => (a.due_date || '9999-12-31').localeCompare(b.due_date || '9999-12-31')),
  [records.tasks]);
  const newLeadCount = leads.filter((lead) => lead.estado !== 'contactado').length;

  const refresh = useCallback(async () => {
    setLoading(true);
    setError('');
    const results = await Promise.all([
      ...Object.entries(sections).map(async ([key, section]) => {
        const { data, error: fetchError } = await supabase.from(section.table).select('*').order('created_at', { ascending: false });
        return { key, data, error: fetchError };
      }),
      supabase.from('leads_automatizacion').select('*').order('created_at', { ascending: false }),
    ]);
    const leadResult = results.pop();
    const failed = results.find(({ error: queryError }) => queryError);
    if (failed || leadResult.error) {
      setError('No se pudieron cargar todos los datos. Comprueba tu sesión y los permisos administrativos.');
    } else {
      setRecords(Object.fromEntries(results.map(({ key, data }) => [key, data || []])));
      setLeads(leadResult.data || []);
      setDataReady(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => { void Promise.resolve().then(refresh); }, [refresh]);
  function changeSection(key) {
    setActive(key);
    setForm(sections[key] ? initialForm(sections[key]) : {});
    setEditing(null);
    setError('');
    setNotice('');
  }

  function startEdit(row) {
    setEditing(row.id);
    setForm(Object.fromEntries(schema.fields.map(([key, , type]) => [key, type === 'checkbox' ? Boolean(row[key]) : row[key] == null ? '' : String(row[key])])));
  }

  async function saveRecord(event) {
    event.preventDefault();
    if (active === 'tasks' && !form.client_id && !form.project_id) {
      setError('Asocia la tarea a un cliente o a un proyecto para poder guardarla.');
      return;
    }
    if (active === 'projects' && form.public_showcase && !String(form.public_summary || '').trim()) {
      setError('Escribe un resumen público antes de mostrar el proyecto en la web.');
      return;
    }
    setSaving(true);
    setError('');
    const payload = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value === '' ? null : value]));
    for (const key of ['amount', 'target_value', 'current_value']) {
      if (payload[key] !== undefined && payload[key] !== null) payload[key] = Number(payload[key]);
    }
    const query = editing
      ? supabase.from(schema.table).update({ ...payload, updated_at: new Date().toISOString() }).eq('id', editing)
      : supabase.from(schema.table).insert(payload);
    const { error: saveError } = await query;
    if (saveError) setError('No se pudo guardar. Revisa los campos y vuelve a intentarlo.');
    else {
      setForm(initialForm(schema));
      setEditing(null);
      setNotice(`${schema.title} ${editing ? 'actualizado' : 'creado'} correctamente.`);
      await refresh();
    }
    setSaving(false);
  }

  async function changeStatus(row, status) {
    setError('');
    const { error: updateError } = await supabase.from(schema.table).update({ status, updated_at: new Date().toISOString() }).eq('id', row.id);
    if (updateError) setError('No se pudo actualizar el estado.');
    else { setNotice('Estado actualizado.'); await refresh(); }
  }

  async function convertLead(lead) {
    setError('');
    const { error: convertError } = await supabase.from('crm_clients').insert({
      lead_id: lead.id, name: lead.nombre || 'Nuevo cliente', email: lead.correo || null,
      phone: lead.numero || null, notes: lead.interes || lead.motivacion || null, status: 'prospecto',
    });
    if (convertError) setError(convertError.code === '23505' ? 'Este prospecto ya está vinculado a un cliente.' : 'No se pudo añadir el prospecto a clientes.');
    else { setNotice('Prospecto añadido a clientes.'); await refresh(); }
  }

  async function deleteRecord(row) {
    const label = row.name || row.title;
    const linked = active === 'clients'
      ? [...projects.filter((item) => item.client_id === row.id), ...(records.budgets || []).filter((item) => item.client_id === row.id), ...(records.tasks || []).filter((item) => item.client_id === row.id)].length
      : active === 'projects'
        ? [...(records.budgets || []).filter((item) => item.project_id === row.id), ...(records.tasks || []).filter((item) => item.project_id === row.id)].length
        : 0;
    if (linked) {
      setError(`No se puede eliminar ${active === 'clients' ? 'este cliente' : 'este proyecto'} porque tiene ${linked} registro(s) asociado(s). Elimínalos o reasígnalos primero.`);
      return;
    }
    if (!window.confirm(`¿Eliminar “${label}”? Esta acción no se puede deshacer.`)) return;
    const { error: deleteError } = await supabase.from(schema.table).delete().eq('id', row.id);
    if (deleteError) setError('No se pudo eliminar. Puede estar relacionado con otros registros.');
    else { setNotice('Registro eliminado.'); await refresh(); }
  }

  function renderField([key, label, type, required]) {
    if (type === 'checkbox') return <label className="crm-checkbox" key={key}><input type="checkbox" checked={Boolean(form[key])} disabled={saving} onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.checked }))} /><span>{label}</span></label>;
    const common = {
      id: `crm-${key}`, name: key, value: form[key] ?? '', required: Boolean(required), disabled: saving,
      onChange: (event) => setForm((current) => {
        const next = { ...current, [key]: event.target.value };
        if (key === 'client_id' && next.project_id && !projects.some((project) => project.id === next.project_id && project.client_id === next.client_id)) next.project_id = '';
        return next;
      }),
    };
    if (type === 'client' || type === 'project' || type === 'priority') {
      const projectOptions = projects.filter((project) => !form.client_id || project.client_id === form.client_id);
      const options = type === 'client' ? clients.map((item) => [item.id, item.company ? `${item.name} · ${item.company}` : item.name])
        : type === 'project' ? projectOptions.map((item) => [item.id, item.name])
          : [['baja', 'Baja'], ['media', 'Media'], ['alta', 'Alta']];
      return <label className="form-group" key={key}><span className="form-label">{label}</span><select className="form-input" {...common}><option value="">Selecciona</option>{options.map(([value, name]) => <option key={value} value={value}>{name}</option>)}</select></label>;
    }
    if (type === 'textarea') return <label className="form-group" key={key}><span className="form-label">{label}</span><textarea className="form-input" rows={3} {...common} /></label>;
    return <label className="form-group" key={key}><span className="form-label">{label}</span><input className="form-input" type={type} min={type === 'number' ? '0' : undefined} step={type === 'number' ? '0.01' : undefined} {...common} /></label>;
  }

  const navItems = [['overview', 'Resumen'], ['leads', 'Prospectos'], ...Object.entries(sections).map(([key, item]) => [key, item.label]), ['tracking', 'Bitácora y archivos']];

  return (
    <section className="crm-workspace" aria-label="Gestión de Zenubit">
      <div className="crm-heading-row">
        <div><p className="crm-eyebrow">ESPACIO PRIVADO</p><h1 className="crm-title">Gestión <em>Zenubit</em></h1><p className="crm-intro">Organiza oportunidades, clientes y el trabajo de cada proyecto.</p></div>
        <button type="button" className="admin-icon-btn crm-refresh" onClick={refresh} disabled={loading} aria-label="Actualizar datos" title="Actualizar">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" className={loading ? 'admin-icon-spin' : ''}><path d="M20 11a8 8 0 10-2.3 5.7M20 5v6h-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <nav className="crm-tabs" aria-label="Secciones de gestión">
        {navItems.map(([key, label]) => <button key={key} type="button" aria-current={active === key ? 'page' : undefined} className={active === key ? 'active' : ''} onClick={() => changeSection(key)}>{label}{key === 'leads' && <span>{leads.length}</span>}</button>)}
      </nav>
      {error && <p className="form-error crm-feedback" role="alert">{error}</p>}
      {notice && <p className="crm-notice crm-feedback" role="status">{notice}</p>}
      {active === 'tracking' && <ProjectTracking projects={projects} />}

      {active === 'overview' && <div className="crm-overview">
        <div className="crm-metrics">
          <button type="button" className="crm-metric" onClick={() => changeSection('leads')}><span>Oportunidades nuevas</span><strong>{newLeadCount}</strong><small>Formularios sin contactar</small></button>
          <button type="button" className="crm-metric" onClick={() => changeSection('clients')}><span>Clientes</span><strong>{clients.length}</strong><small>En tu espacio de gestión</small></button>
          <button type="button" className="crm-metric" onClick={() => changeSection('projects')}><span>Proyectos activos</span><strong>{projects.filter(({ status }) => ['planificacion', 'en_progreso', 'revision'].includes(status)).length}</strong><small>Planificación, desarrollo o revisión</small></button>
          <button type="button" className="crm-metric" onClick={() => changeSection('tasks')}><span>Tareas por resolver</span><strong>{pendingTasks.length}</strong><small>Seguimiento pendiente</small></button>
        </div>
        <div className="crm-overview-columns">
          <section className="crm-overview-panel"><div className="crm-panel-heading"><div><p className="crm-eyebrow">ENTRADAS RECIENTES</p><h2>Prospectos</h2></div><button type="button" className="crm-inline-link" onClick={() => changeSection('leads')}>Ver todos <span aria-hidden="true">→</span></button></div>
            {leads.slice(0, 4).map((lead) => <article className="crm-compact-row" key={lead.id}><div><strong>{lead.nombre || 'Sin nombre'}</strong><span>{lead.correo || lead.numero || 'Sin contacto'}</span></div><time>{lead.created_at ? new Date(lead.created_at).toLocaleDateString('es-CO') : ''}</time></article>)}
            {!loading && leads.length === 0 && <p className="crm-muted">Los nuevos formularios aparecerán aquí.</p>}
          </section>
          <section className="crm-overview-panel"><div className="crm-panel-heading"><div><p className="crm-eyebrow">SEGUIMIENTO</p><h2>Próximas tareas</h2></div><button type="button" className="crm-inline-link" onClick={() => changeSection('tasks')}>Organizar <span aria-hidden="true">→</span></button></div>
            {pendingTasks.slice(0, 4).map((task) => <article className="crm-compact-row" key={task.id}><div><strong>{task.title}</strong><span>{task.due_date ? `Fecha límite: ${new Date(`${task.due_date}T12:00:00`).toLocaleDateString('es-CO')}` : 'Sin fecha límite'}</span></div><span className={`crm-priority crm-priority-${task.priority}`}>{task.priority === 'alta' ? 'Alta' : task.priority === 'baja' ? 'Baja' : 'Media'}</span></article>)}
            {!loading && pendingTasks.length === 0 && <p className="crm-muted">No tienes tareas pendientes.</p>}
          </section>
        </div>
        <section className="crm-next-step"><div><p className="crm-eyebrow">ORDENA TU TRABAJO</p><h2>De una conversación a un proyecto claro.</h2><p>Convierte un prospecto en cliente y crea sus proyectos, presupuestos y tareas desde un solo lugar.</p></div><button type="button" className="btn btn-primary" onClick={() => changeSection(leads.length ? 'leads' : 'clients')}>{leads.length ? 'Revisar prospectos' : 'Añadir un cliente'} <span aria-hidden="true">→</span></button></section>
      </div>}

      {active === 'leads' && <div className="crm-record-list">
        {leads.map((lead) => {
          const converted = clients.some((client) => client.lead_id === lead.id);
          return <article className="crm-record" key={lead.id}><div><h3>{lead.nombre || 'Sin nombre'}</h3><p>{[lead.correo, lead.numero].filter(Boolean).join(' · ') || 'Sin datos de contacto'}</p><p>{lead.interes || lead.motivacion || 'Sin detalle del interés'}</p><small>{lead.created_at ? new Date(lead.created_at).toLocaleString('es-CO') : ''}</small></div><button type="button" className="btn btn-outline" disabled={!dataReady || converted} onClick={() => convertLead(lead)}>{converted ? 'Ya es cliente' : 'Añadir a clientes'}</button></article>;
        })}
        {!loading && leads.length === 0 && <p className="admin-empty-state">Aún no hay prospectos.</p>}
      </div>}

      {schema && <div className="crm-layout">
        <form className="crm-form" onSubmit={saveRecord}>
          <p className="crm-eyebrow">{editing ? 'ACTUALIZA LA INFORMACIÓN' : 'AÑADE UN REGISTRO'}</p><h2>{editing ? 'Editar' : 'Nuevo'} {schema.title.toLowerCase()}</h2>
          {schema.fields.map(renderField)}
          <div className="crm-form-actions"><button type="submit" className="btn btn-primary" disabled={!dataReady || saving || (active === 'projects' && clients.length === 0) || (active === 'budgets' && clients.length === 0)}>{saving ? 'Guardando…' : editing ? 'Guardar cambios' : `Crear ${schema.title.toLowerCase()}`}</button>{editing && <button type="button" className="btn btn-outline" onClick={() => { setEditing(null); setForm(initialForm(schema)); }}>Cancelar</button>}</div>
          {active === 'tasks' && <small>Vincula cada tarea a un cliente o proyecto.</small>}
          {(active === 'projects' || active === 'budgets') && clients.length === 0 && <small>Primero añade un cliente para poder crear {schema.label.toLowerCase()}.</small>}
        </form>
        <div className="crm-list-panel"><div className="crm-panel-heading"><div><p className="crm-eyebrow">REGISTROS</p><h2>{schema.label}<span className="crm-count">{rows.length}</span></h2></div></div>
          {loading && <p className="crm-muted">Cargando datos…</p>}
          {!loading && rows.map((row) => {
            const relatedClient = clients.find(({ id }) => id === row.client_id);
            const relatedProject = projects.find(({ id }) => id === row.project_id);
            const title = row.name || row.title;
            const detail = row.company || row.description || row.details || relatedClient?.name || relatedProject?.name || (row.amount != null ? currency(row.amount) : row.email || row.phone) || 'Sin descripción';
            const progress = active === 'goals' && Number(row.target_value) > 0 ? Math.min(100, Math.round((Number(row.current_value) / Number(row.target_value)) * 100)) : null;
            return <article className="crm-record" key={row.id}>
              <div className="crm-record-copy"><div className="crm-record-title"><h3>{title}</h3><span className="crm-status">{statusLabels[row.status] || row.status}</span></div><p>{detail}</p>
                {active === 'clients' && [row.email, row.phone].filter(Boolean).length > 0 && <small>{[row.email, row.phone].filter(Boolean).join(' · ')}</small>}
                {relatedClient && row.client_id && <small>Cliente: {relatedClient.name}{relatedProject ? ` · ${relatedProject.name}` : ''}</small>}
                {(row.due_date || row.valid_until) && <small>{active === 'budgets' ? 'Válido hasta: ' : 'Fecha límite: '}{new Date(`${row.due_date || row.valid_until}T12:00:00`).toLocaleDateString('es-CO')}</small>}
                {active === 'projects' && row.url && <a className="crm-project-link" href={row.url} target="_blank" rel="noreferrer">Abrir proyecto ↗</a>}
                {active === 'tasks' && <small>Prioridad: {row.priority === 'alta' ? 'Alta' : row.priority === 'baja' ? 'Baja' : 'Media'}</small>}
                {active === 'budgets' && <strong className="crm-money">{currency(row.amount)}</strong>}
                {progress !== null && <div className="crm-progress"><div><span>Avance</span><strong>{progress}%</strong></div><progress max="100" value={progress} aria-label={`Avance de la meta: ${progress}%`} /></div>}
              </div>
              <div className="crm-record-actions"><label className="crm-status-control"><span className="sr-only">Estado de {title}</span><select className="form-input" value={row.status} disabled={!dataReady || loading} onChange={(event) => changeStatus(row, event.target.value)}>{schema.status.map((status) => <option key={status} value={status}>{statusLabels[status] || status}</option>)}</select></label><button type="button" className="btn btn-outline" disabled={!dataReady || loading} onClick={() => startEdit(row)}>Editar</button><button type="button" className="crm-delete-btn" disabled={!dataReady || loading} onClick={() => deleteRecord(row)}>Eliminar</button></div>
            </article>;
          })}
          {!loading && rows.length === 0 && <p className="admin-empty-state">Todavía no hay {schema.label.toLowerCase()}. Puedes crear el primero desde el formulario.</p>}
        </div>
      </div>}
    </section>
  );
}
