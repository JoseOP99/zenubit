import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { downloadProjectFile, FILE_TYPES, MAX_PROJECT_FILE_SIZE, PROJECT_BUCKET } from '../utils/projectFiles';

export default function ProjectTracking({ projects }) {
  const [projectId, setProjectId] = useState('');
  const [updates, setUpdates] = useState([]);
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [visible, setVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileVisible, setFileVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const refresh = useCallback(async () => {
    const [updatesResult, filesResult] = await Promise.all([
      supabase.from('crm_project_updates').select('*').order('created_at', { ascending: false }),
      supabase.from('crm_project_files').select('*').order('created_at', { ascending: false }),
    ]);
    if (updatesResult.error || filesResult.error) setError('No se pudo cargar el seguimiento. Revisa tu sesión.');
    else { setUpdates(updatesResult.data || []); setFiles(filesResult.data || []); }
    setLoading(false);
  }, []);

  useEffect(() => { void Promise.resolve().then(refresh); }, [refresh]);

  async function addUpdate(event) {
    event.preventDefault(); setBusy(true); setError(''); setNotice('');
    const { error: saveError } = await supabase.from('crm_project_updates').insert({ project_id: projectId, title: title.trim(), body: body.trim() || null, visible_to_client: visible });
    if (saveError) setError('No se pudo guardar el avance.');
    else { setTitle(''); setBody(''); setVisible(false); setNotice('Avance guardado.'); await refresh(); }
    setBusy(false);
  }

  async function uploadFile(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!selectedFile || !projectId) return;
    if (!FILE_TYPES[selectedFile.type] || selectedFile.size > MAX_PROJECT_FILE_SIZE || selectedFile.size === 0) {
      setError('Selecciona un PDF o imagen JPG, PNG o WebP de hasta 6 MB.'); return;
    }
    setBusy(true); setError(''); setNotice('');
    const path = `${projectId}/${crypto.randomUUID()}.${FILE_TYPES[selectedFile.type]}`;
    const { error: uploadError } = await supabase.storage.from(PROJECT_BUCKET).upload(path, selectedFile, { contentType: selectedFile.type, upsert: false });
    if (uploadError) setError('No se pudo subir el archivo.');
    else {
      const { error: metadataError } = await supabase.from('crm_project_files').insert({ project_id: projectId, storage_path: path, file_name: selectedFile.name, file_size: selectedFile.size, content_type: selectedFile.type, visible_to_client: fileVisible });
      if (metadataError) { await supabase.storage.from(PROJECT_BUCKET).remove([path]); setError('No se pudo registrar el archivo.'); }
      else { setSelectedFile(null); formElement.reset(); setFileVisible(false); setNotice('Archivo subido.'); await refresh(); }
    }
    setBusy(false);
  }

  async function toggleVisibility(table, item) {
    setError('');
    const { error: updateError } = await supabase.from(table).update({ visible_to_client: !item.visible_to_client }).eq('id', item.id);
    if (updateError) setError('No se pudo cambiar la visibilidad.');
    else await refresh();
  }

  async function removeUpdate(item) {
    if (!window.confirm(`¿Eliminar el avance “${item.title}”?`)) return;
    const { error: deleteError } = await supabase.from('crm_project_updates').delete().eq('id', item.id);
    if (deleteError) setError('No se pudo eliminar el avance.'); else await refresh();
  }

  async function removeFile(item) {
    if (!window.confirm(`¿Eliminar definitivamente “${item.file_name}”?`)) return;
    const { error: storageError } = await supabase.storage.from(PROJECT_BUCKET).remove([item.storage_path]);
    if (storageError) { setError('No se pudo eliminar el archivo almacenado.'); return; }
    const { error: metadataError } = await supabase.from('crm_project_files').delete().eq('id', item.id);
    if (metadataError) setError('El archivo se eliminó, pero no se pudo quitar su registro.'); else await refresh();
  }

  async function download(item) {
    try { await downloadProjectFile(item); } catch { setError('No se pudo descargar el archivo.'); }
  }

  const currentUpdates = updates.filter((item) => item.project_id === projectId);
  const currentFiles = files.filter((item) => item.project_id === projectId);

  return <section className="project-tracking" aria-label="Seguimiento de proyectos">
    <div className="crm-heading-row"><div><p className="crm-eyebrow">SEGUIMIENTO</p><h2 className="crm-title">Bitácora y <em>archivos</em></h2><p className="crm-intro">Guarda avances internos y comparte con el cliente solo lo que apruebes.</p></div></div>
    <label className="form-group"><span className="form-label">Proyecto</span><select className="form-input" value={projectId} onChange={(event) => setProjectId(event.target.value)}><option value="">Selecciona un proyecto</option>{projects.map((project) => <option key={project.id} value={project.id}>{project.name}</option>)}</select></label>
    {error && <p className="form-error" role="alert">{error}</p>}{notice && <p className="crm-notice crm-feedback" role="status">{notice}</p>}
    {!projectId && <p className="admin-empty-state">Selecciona un proyecto para ver su seguimiento.</p>}
    {projectId && <div className="project-tracking-grid">
      <section className="crm-form"><h3>Nuevo avance</h3><form onSubmit={addUpdate} className="project-tracking-form"><label>Título<input className="form-input" value={title} onChange={(event) => setTitle(event.target.value)} maxLength={120} required /></label><label>Detalle<textarea className="form-input" value={body} onChange={(event) => setBody(event.target.value)} maxLength={2000} rows={4} /></label><label className="crm-checkbox"><input type="checkbox" checked={visible} onChange={(event) => setVisible(event.target.checked)} />Visible para el cliente</label><button className="btn btn-primary" disabled={busy || loading}>Guardar avance</button></form>
        <div className="project-tracking-list"><h3>Historial</h3>{currentUpdates.map((item) => <article key={item.id} className="project-tracking-item"><div><strong>{item.title}</strong><small>{new Date(item.created_at).toLocaleString('es-CO')}</small><p>{item.body}</p></div><div className="project-tracking-actions"><button type="button" onClick={() => toggleVisibility('crm_project_updates', item)}>{item.visible_to_client ? 'Compartido · ocultar' : 'Interno · compartir'}</button><button type="button" onClick={() => removeUpdate(item)}>Eliminar</button></div></article>)}{!loading && !currentUpdates.length && <p>Sin avances todavía.</p>}</div>
      </section>
      <section className="crm-form"><h3>Archivos del proyecto</h3><form onSubmit={uploadFile} className="project-tracking-form"><label>Selecciona un archivo<input type="file" accept=".pdf,.png,.jpg,.jpeg,.webp" onChange={(event) => setSelectedFile(event.target.files?.[0] || null)} required /></label><small>PDF o imagen, máximo 6 MB.</small><label className="crm-checkbox"><input type="checkbox" checked={fileVisible} onChange={(event) => setFileVisible(event.target.checked)} />Visible para el cliente</label><button className="btn btn-primary" disabled={busy || loading}>Subir archivo</button></form>
        <div className="project-tracking-list"><h3>Documentos</h3>{currentFiles.map((item) => <article key={item.id} className="project-tracking-item"><div><strong>{item.file_name}</strong><small>{(item.file_size / 1024 / 1024).toFixed(2)} MB · {new Date(item.created_at).toLocaleDateString('es-CO')}</small></div><div className="project-tracking-actions"><button type="button" onClick={() => download(item)}>Descargar</button><button type="button" onClick={() => toggleVisibility('crm_project_files', item)}>{item.visible_to_client ? 'Compartido · ocultar' : 'Interno · compartir'}</button><button type="button" onClick={() => removeFile(item)}>Eliminar</button></div></article>)}{!loading && !currentFiles.length && <p>Sin archivos todavía.</p>}</div>
      </section>
    </div>}
  </section>;
}
