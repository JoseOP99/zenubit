import { useState, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/* ─────────────────────────────────────────
   Validación del cliente
───────────────────────────────────────── */
const CORREO_REGEX  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFONO_REGEX = /[\d]{6,}/; // al menos 6 dígitos en el string completo

const NOMBRES_CAMPO = {
  nombre:     'el nombre completo',
  correo:     'el correo electrónico',
  numero:     'el número de WhatsApp / teléfono',
  estudios:   'el nivel de estudios',
  motivacion: 'la motivación',
};

const CAMPOS_OPCIONALES = new Set(['interes']);

function validarCliente(form) {
  for (const [campo, valor] of Object.entries(form)) {
    if (CAMPOS_OPCIONALES.has(campo)) continue;

    const v = typeof valor === 'string' ? valor.trim() : valor;

    if (!v) {
      return `Por favor ingresa ${NOMBRES_CAMPO[campo] || campo}.`;
    }

    if (campo === 'correo' && !CORREO_REGEX.test(v)) {
      return 'El correo electrónico no tiene un formato válido.';
    }

    if (campo === 'numero' && !TELEFONO_REGEX.test(v)) {
      return 'El número de teléfono no es válido (incluye el código de país y al menos 6 dígitos).';
    }
  }
  return null;
}

/* ─────────────────────────────────────────
   Verificación de duplicados en Supabase
───────────────────────────────────────── */
async function verificarDuplicados(tabla, correo, numero) {
  const { data, error } = await supabase
    .from(tabla)
    .select('id, correo, numero')
    .or(`correo.eq.${correo},numero.eq.${numero}`)
    .limit(1);

  if (error) {
    // Si falla la consulta, dejamos pasar (no bloqueamos)
    console.warn('[useFormSubmit] No se pudo verificar duplicados:', error);
    return null;
  }

  if (data && data.length > 0) {
    const dup = data[0];
    if (dup.correo === correo) return 'Ya existe un registro con ese correo electrónico.';
    if (dup.numero === numero) return 'Ya existe un registro con ese número de teléfono.';
  }

  return null;
}

/* ─────────────────────────────────────────
   Hook principal
───────────────────────────────────────── */
/**
 * Hook reutilizable para enviar formularios a Supabase.
 * Incluye:
 *  - Validación del cliente (campos obligatorios, formato correo/teléfono)
 *  - Verificación de duplicados (correo y teléfono) antes de insertar
 *  - Normalización de datos (trim) antes de enviar
 *  - Estado centralizado: idle | loading | success | error
 *
 * @param {string} tabla - Nombre de la tabla en Supabase
 * @param {object} estadoInicial - Valores iniciales del formulario
 */
export function useFormSubmit(tabla, estadoInicial) {
  const [form, setForm]     = useState(estadoInicial);
  const [estado, setEstado] = useState('idle');
  const [error, setError]   = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  }, [error]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // 1. Validación del cliente
    const errCliente = validarCliente(form);
    if (errCliente) {
      setError(errCliente);
      // Foco en el primer campo inválido para accesibilidad
      const primerInvalido = e.currentTarget.querySelector(':invalid');
      if (primerInvalido) primerInvalido.focus();
      return;
    }

    setEstado('loading');
    setError('');

    try {
      // 2. Normalizar datos
      const datos = Object.fromEntries(
        Object.entries(form).map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v])
      );

      // 3. Verificar duplicados (solo si tiene correo y numero)
      if (datos.correo && datos.numero) {
        const errDuplicado = await verificarDuplicados(tabla, datos.correo, datos.numero);
        if (errDuplicado) {
          setEstado('error');
          setError(errDuplicado);
          return;
        }
      }

      // 4. Insertar en Supabase
      const { error: supabaseError } = await supabase
        .from(tabla)
        .insert([datos]);

      if (supabaseError) throw supabaseError;

      setEstado('success');
      setForm(estadoInicial);
    } catch (err) {
      console.error(`[useFormSubmit] Error en "${tabla}":`, err);
      setEstado('error');
      setError('Ocurrió un error al enviar. Por favor intenta nuevamente.');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, tabla]);

  const resetForm = useCallback(() => {
    setEstado('idle');
    setError('');
    setForm(estadoInicial);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { form, estado, error, handleChange, handleSubmit, resetForm };
}
