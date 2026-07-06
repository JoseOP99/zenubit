import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../supabaseClient';

const TABLA = 'leads_automatizacion';

const AdminForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/jose`,
    });
    setLoading(false);
    if (resetError) {
      setError('No se pudo enviar el enlace. Verifica el correo.');
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="admin-login-screen">
        <div className="admin-login-form">
          <h1 className="admin-login-title">Revisa tu <em>correo</em></h1>
          <p className="service-desc" style={{ margin: 0 }}>
            Te enviamos un enlace a <strong>{email}</strong> para que definas tu contraseña. Ábrelo desde este mismo dispositivo.
          </p>
          <button className="btn btn-outline" onClick={onBack}>Volver al inicio de sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-login-screen">
      <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
        <h1 className="admin-login-title">Recuperar <em>contraseña</em></h1>
        <div className="form-group">
          <label className="form-label" htmlFor="admin-reset-email">Correo</label>
          <input
            id="admin-reset-email"
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="btn btn-primary form-submit-btn" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar enlace'}
        </button>
        <button type="button" className="btn btn-outline" onClick={onBack}>Volver</button>
      </form>
    </div>
  );
};

const AdminLogin = () => {
  const [mode, setMode] = useState('login'); // 'login' | 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) {
      setError('Correo o contraseña incorrectos.');
      setLoading(false);
    }
  };

  if (mode === 'forgot') {
    return <AdminForgotPassword onBack={() => setMode('login')} />;
  }

  return (
    <div className="admin-login-screen">
      <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
        <h1 className="admin-login-title">Zenubit <em>Admin</em></h1>
        <div className="form-group">
          <label className="form-label" htmlFor="admin-email">Correo</label>
          <input
            id="admin-email"
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="admin-password">Contraseña</label>
          <input
            id="admin-password"
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="btn btn-primary form-submit-btn" disabled={loading}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
        <button
          type="button"
          className="admin-forgot-link"
          onClick={() => setMode('forgot')}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </form>
    </div>
  );
};

const AdminSetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    if (password !== confirm) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (updateError) {
      setError('No se pudo actualizar la contraseña.');
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className="admin-login-screen">
        <div className="admin-login-form">
          <h1 className="admin-login-title">Contraseña <em>actualizada</em></h1>
          <p className="service-desc" style={{ margin: 0 }}>Ya puedes usarla para entrar.</p>
          <a className="btn btn-primary form-submit-btn" href="/jose">Ir al panel</a>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-login-screen">
      <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
        <h1 className="admin-login-title">Define tu <em>contraseña</em></h1>
        <div className="form-group">
          <label className="form-label" htmlFor="admin-new-password">Nueva contraseña</label>
          <input
            id="admin-new-password"
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="admin-confirm-password">Confirmar contraseña</label>
          <input
            id="admin-confirm-password"
            type="password"
            className="form-input"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="btn btn-primary form-submit-btn" disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar contraseña'}
        </button>
      </form>
    </div>
  );
};

const ESTADOS = ['nuevo', 'contactado'];

const FILTROS_ESTADO = [
  { value: 'todos', label: 'Todos' },
  { value: 'nuevo', label: 'Nuevo' },
  { value: 'contactado', label: 'Contactado' },
];

const EstadoBadge = ({ estado }) => (
  <span className={`admin-badge admin-badge-${estado === 'contactado' ? 'ok' : 'new'}`}>
    {estado === 'contactado' ? 'Contactado' : 'Nuevo'}
  </span>
);

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [filtroDesde, setFiltroDesde] = useState('');
  const [filtroHasta, setFiltroHasta] = useState('');

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError('');
    const { data, error: fetchError } = await supabase
      .from(TABLA)
      .select('*')
      .order('created_at', { ascending: false });

    if (fetchError) {
      setError('No se pudieron cargar los registros. Verifica los permisos (RLS) de la tabla.');
    } else {
      setLeads(data ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const toggleEstado = async (lead) => {
    const actual = ESTADOS.includes(lead.estado) ? lead.estado : 'nuevo';
    const siguiente = actual === 'contactado' ? 'nuevo' : 'contactado';

    // Optimistic update
    setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, estado: siguiente } : l)));

    const { error: updateError } = await supabase
      .from(TABLA)
      .update({ estado: siguiente })
      .eq('id', lead.id);

    if (updateError) {
      // revertir si falla
      setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, estado: actual } : l)));
      setError('No se pudo actualizar el estado. Verifica los permisos (RLS) de la tabla.');
    }
  };

  const hayFiltrosActivos = filtroEstado !== 'todos' || filtroDesde || filtroHasta;

  const limpiarFiltros = () => {
    setFiltroEstado('todos');
    setFiltroDesde('');
    setFiltroHasta('');
  };

  const leadsFiltrados = useMemo(() => {
    return leads.filter((lead) => {
      const estado = ESTADOS.includes(lead.estado) ? lead.estado : 'nuevo';
      if (filtroEstado !== 'todos' && estado !== filtroEstado) return false;

      if (lead.created_at) {
        const fechaLead = lead.created_at.slice(0, 10); // YYYY-MM-DD
        if (filtroDesde && fechaLead < filtroDesde) return false;
        if (filtroHasta && fechaLead > filtroHasta) return false;
      }
      return true;
    });
  }, [leads, filtroEstado, filtroDesde, filtroHasta]);

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <span className="nav-wordmark">
          <span className="glow-node glow-node-inline" style={{ width: '6px', height: '6px' }}></span>
          Zenubit <em style={{ fontStyle: 'italic', opacity: 0.6 }}>Admin</em>
        </span>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-outline" onClick={fetchLeads} disabled={loading}>
            {loading ? 'Actualizando...' : 'Actualizar'}
          </button>
          <button className="btn btn-outline" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </header>

      <main className="container admin-dashboard">
        <h1 className="sec-title" style={{ marginBottom: '8px' }}>Registros <em className="poetic">recibidos</em></h1>
        <p className="admin-results-count">
          {leadsFiltrados.length} de {leads.length} {leads.length === 1 ? 'registro' : 'registros'}
        </p>

        <div className="admin-filter-bar">
          <div className="admin-filter-group" role="tablist" aria-label="Filtrar por estado">
            {FILTROS_ESTADO.map((f) => (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={filtroEstado === f.value}
                className={`admin-filter-pill${filtroEstado === f.value ? ' active' : ''}`}
                onClick={() => setFiltroEstado(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="admin-filter-dates">
            <label className="admin-filter-date">
              <span>Desde</span>
              <input
                type="date"
                className="form-input"
                value={filtroDesde}
                max={filtroHasta || undefined}
                onChange={(e) => setFiltroDesde(e.target.value)}
              />
            </label>
            <label className="admin-filter-date">
              <span>Hasta</span>
              <input
                type="date"
                className="form-input"
                value={filtroHasta}
                min={filtroDesde || undefined}
                onChange={(e) => setFiltroHasta(e.target.value)}
              />
            </label>
          </div>

          {hayFiltrosActivos && (
            <button type="button" className="admin-clear-filters" onClick={limpiarFiltros}>
              Limpiar filtros
            </button>
          )}
        </div>

        {error && <p className="form-error" role="alert">{error}</p>}

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Interés</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {leadsFiltrados.map((lead) => {
                const estado = ESTADOS.includes(lead.estado) ? lead.estado : 'nuevo';
                return (
                  <tr key={lead.id}>
                    <td>{lead.created_at ? new Date(lead.created_at).toLocaleString('es-CO') : '—'}</td>
                    <td>{lead.nombre || '—'}</td>
                    <td>{lead.correo || '—'}</td>
                    <td>{lead.numero || '—'}</td>
                    <td>{lead.interes || lead.motivacion || '—'}</td>
                    <td><EstadoBadge estado={estado} /></td>
                    <td>
                      <button className="btn btn-outline admin-row-action" onClick={() => toggleEstado(lead)}>
                        {estado === 'contactado' ? 'Marcar nuevo' : 'Marcar contactado'}
                      </button>
                    </td>
                  </tr>
                );
              })}
              {!loading && leadsFiltrados.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', color: 'var(--stone)' }}>
                    {leads.length === 0 ? 'Sin registros todavía.' : 'Ningún registro coincide con los filtros.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const Admin = () => {
  const [session, setSession] = useState(undefined);
  const [recovery, setRecovery] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);
      if (event === 'PASSWORD_RECOVERY') {
        setRecovery(true);
      }
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  if (session === undefined) {
    return <div className="admin-login-screen" />;
  }

  if (recovery) {
    return <AdminSetPassword />;
  }

  if (!session) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
};

export default Admin;
