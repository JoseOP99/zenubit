import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logoZenubit-small.webp';

const links = [
  ['servicios', 'Servicios'],
  ['proceso', 'Cómo trabajamos'],
  ['origen', 'Origen'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
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
      <button ref={toggle} className="mobile-menu-btn" type="button" aria-expanded={open}
        aria-controls="navigation-links" onClick={() => setOpen(!open)}>
        {open ? 'Cerrar' : 'Menú'}
      </button>
      <div id="navigation-links" className="nav-links" data-open={open}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className="nav-link" onClick={followSection}>{label}</a>
        ))}
        <a href="#contacto" className="btn btn-primary" onClick={followSection}>Contacto →</a>
      </div>
    </nav>
  );
}
