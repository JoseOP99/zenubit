import { supabase } from '../supabaseClient';

export const PROJECT_BUCKET = 'zenubit-project-files';
export const MAX_PROJECT_FILE_SIZE = 6 * 1024 * 1024;
export const FILE_TYPES = {
  'application/pdf': 'pdf',
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
};

export async function downloadProjectFile(file) {
  const { data, error } = await supabase.storage.from(PROJECT_BUCKET).download(file.storage_path);
  if (error) throw error;
  const url = URL.createObjectURL(data);
  const link = document.createElement('a');
  link.href = url;
  link.download = file.file_name;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
