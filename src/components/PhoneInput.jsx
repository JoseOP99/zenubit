import React, { useState, useRef, useEffect, memo } from 'react';

/* Lista de países con código y bandera emoji */
const PAISES = [
  { code: '+57',  label: 'CO', nombre: 'Colombia' },
  { code: '+1',   label: 'US', nombre: 'Estados Unidos / Canadá' },
  { code: '+52',  label: 'MX', nombre: 'México' },
  { code: '+51',  label: 'PE', nombre: 'Perú' },
  { code: '+54',  label: 'AR', nombre: 'Argentina' },
  { code: '+56',  label: 'CL', nombre: 'Chile' },
  { code: '+593', label: 'EC', nombre: 'Ecuador' },
  { code: '+58',  label: 'VE', nombre: 'Venezuela' },
  { code: '+591', label: 'BO', nombre: 'Bolivia' },
  { code: '+595', label: 'PY', nombre: 'Paraguay' },
  { code: '+598', label: 'UY', nombre: 'Uruguay' },
  { code: '+506', label: 'CR', nombre: 'Costa Rica' },
  { code: '+507', label: 'PA', nombre: 'Panamá' },
  { code: '+503', label: 'SV', nombre: 'El Salvador' },
  { code: '+502', label: 'GT', nombre: 'Guatemala' },
  { code: '+504', label: 'HN', nombre: 'Honduras' },
  { code: '+505', label: 'NI', nombre: 'Nicaragua' },
  { code: '+1809',label: 'DO', nombre: 'República Dominicana' },
  { code: '+34',  label: 'ES', nombre: 'España' },
  { code: '+55',  label: 'BR', nombre: 'Brasil' },
];

/**
 * Campo de teléfono con selector de código de país.
 * Llama a onChange con el número completo (código + número) como string.
 *
 * Props:
 *   id         - id del input principal
 *   name       - nombre del campo (para el form)
 *   value      - valor actual (número sin código)
 *   onChange   - callback compatible con e.target.{name, value}
 *   required   - boolean
 *   disabled   - boolean
 */
const PhoneInput = memo(({ id, name, value, onChange, required, disabled }) => {
  const [codePais, setCodePais] = useState('+57');
  const [numero, setNumero] = useState('');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Propagar cambio al padre como número completo
  const propagar = (code, num) => {
    const completo = num.trim() ? `${code} ${num.trim()}` : '';
    onChange({ target: { name, value: completo } });
  };

  const handleNumero = (e) => {
    // Solo dígitos, espacios y guiones
    const limpio = e.target.value.replace(/[^\d\s\-]/g, '');
    setNumero(limpio);
    propagar(codePais, limpio);
  };

  const handlePais = (code) => {
    setCodePais(code);
    setOpen(false);
    propagar(code, numero);
  };

  // Sincronizar reseteo desde el padre (cuando el formulario se envía y se limpia)
  useEffect(() => {
    if (!value) {
      setNumero('');
      setCodePais('+57');
    }
  }, [value]);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  const paisActual = PAISES.find((p) => p.code === codePais) || PAISES[0];

  return (
    <div className="phone-input-wrapper" ref={dropdownRef}>
      {/* Selector de código de país */}
      <button
        type="button"
        className="phone-country-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Código de país: ${paisActual.nombre} (${paisActual.code})`}
        disabled={disabled}
      >
        <span className="phone-country-label">{paisActual.label}</span>
        <span className="phone-country-code">{paisActual.code}</span>
        <svg className="phone-country-chevron" viewBox="0 0 12 8" aria-hidden="true">
          <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Dropdown de países */}
      {open && (
        <ul
          className="phone-country-dropdown"
          role="listbox"
          aria-label="Selecciona el país"
        >
          {PAISES.map((p) => (
            <li
              key={p.code + p.label}
              role="option"
              aria-selected={p.code === codePais}
              className={`phone-country-option${p.code === codePais ? ' selected' : ''}`}
              onClick={() => handlePais(p.code)}
              onKeyDown={(e) => { if (e.key === 'Enter') handlePais(p.code); }}
              tabIndex={0}
            >
              <span className="phone-country-option-label">{p.label}</span>
              <span className="phone-country-option-name">{p.nombre}</span>
              <span className="phone-country-option-code">{p.code}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Input de número */}
      <input
        id={id}
        type="tel"
        className="form-input phone-number-input"
        placeholder="300 000 0000"
        value={numero}
        onChange={handleNumero}
        required={required}
        disabled={disabled}
        inputMode="tel"
        autoComplete="tel-national"
        aria-label="Número de teléfono"
      />
    </div>
  );
});
PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
