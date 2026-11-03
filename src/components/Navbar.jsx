import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logoZenubit.webp';

const links = [
  ['servicios', 'Servicios'],
  ['origen', 'Origen'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark');
  const toggle = useRef(null);

  useEffect(() => {
    let previous = window.scrollY;
    function onScroll() {
      const current = Math.max(0, window.scrollY);
      if (current < 80 || Math.abs(current - previous) >= 8) {
        setHidden(current >= 80 && current > previous);
        previous = current;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function changeTheme() {
    const theme = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    setDark(!dark);
    try { localStorage.setItem('zenubit-theme', theme); } catch { /* Storage may be disabled. */ }
  }

  function followSection(event) {
    const target = document.querySelector(event.currentTarget.hash);
    target?.setAttribute('tabindex', '-1');
    target?.focus({ preventScroll: true });
    setOpen(false);
  }

  return (
    <nav
      className={hidden && !open ? 'nav-hidden' : ''}
      aria-label="Principal"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a href="/" className="nav-left">
        <img src={logo} alt="" width="40" height="40" />
        <span className="nav-wordmark">Zenubit</span>
      </a>
      <button className="theme-toggle" type="button" aria-label={dark ? 'Activar tema claro' : 'Activar tema oscuro'} onClick={changeTheme}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {dark ? (
            <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>
          ) : (
            <path d="M21 13a9 9 0 0 1-10-10 9 9 0 1 0 10 10Z" />
          )}
        </svg>
      </button>
      <button ref={toggle} className="mobile-menu-btn" type="button" aria-expanded={open}
        aria-controls="navigation-links" onClick={() => setOpen(!open)}>
        {open ? 'Cerrar' : 'Menú'}
      </button>
      <div id="navigation-links" className="nav-links" data-open={open}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className="nav-link" onClick={followSection}>{label}</a>
        ))}
        <a href="#contacto" className="btn btn-primary" onClick={followSection}>Conversemos →</a>
      </div>
    </nav>
  );
}
