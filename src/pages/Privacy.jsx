import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Política de privacidad | Zenubit';
    return () => { document.title = previous; };
  }, []);

  return <main className="privacy-page">
    <header className="client-portal-header"><Link to="/" className="client-portal-brand">Zenubit</Link><Link to="/">Volver al sitio ↗</Link></header>
    <article className="privacy-content">
      <p className="crm-eyebrow">VERSIÓN 5 DE NOVIEMBRE DE 2026</p>
      <h1>Política de <em>privacidad.</em></h1>
      <p>Zenubit es una iniciativa de José Carlos Ortiz Padilla, ubicada en Tuchín, Córdoba, Colombia. Puedes escribir a <a href="mailto:padilla99j@gmail.com">padilla99j@gmail.com</a> para consultas sobre tus datos personales.</p>
      <section><h2>Datos que recibimos</h2><p>Cuando envías el formulario de contacto recibimos tu nombre, correo, teléfono y la descripción que decidas compartir. Si trabajamos contigo, podemos registrar información del cliente, proyectos, tareas, presupuestos, avances y archivos relacionados. El portal de clientes usa tu correo para autenticarte mediante un enlace y guarda la sesión técnica en el navegador.</p></section>
      <section><h2>Para qué los usamos</h2><p>Respondemos tu consulta, evaluamos un posible proyecto, coordinamos y documentamos el trabajo acordado y mostramos a cada cliente sus avances y presupuestos compartidos. La publicación de un proyecto en la vitrina pública requiere una aprobación específica antes de mostrar información que lo identifique.</p></section>
      <section><h2>Quiénes pueden acceder</h2><p>El administrador de Zenubit gestiona los expedientes. Cada cliente autenticado ve únicamente la información que le corresponde y que fue marcada para compartir. Usamos proveedores de alojamiento y base de datos para operar el sitio y el portal, entre ellos Vercel y Supabase; el tratamiento técnico puede involucrar infraestructura fuera de Colombia.</p></section>
      <section><h2>Conservación y seguridad</h2><p>Conservamos los datos mientras sean necesarios para atender la consulta, gestionar el proyecto y cumplir las obligaciones aplicables. Revisamos la necesidad de conservarlos y atendemos solicitudes de supresión cuando proceda. El acceso al CRM requiere autenticación; los archivos de proyectos se guardan en un depósito privado.</p></section>
      <section><h2>Tus derechos</h2><p>Puedes solicitar conocer, actualizar, rectificar o suprimir tus datos, pedir prueba de la autorización o revocarla en los casos permitidos. Envía tu solicitud a <a href="mailto:padilla99j@gmail.com">padilla99j@gmail.com</a> indicando cómo podemos identificar tu registro. También puedes presentar una queja ante la Superintendencia de Industria y Comercio después de agotar el trámite correspondiente.</p></section>
      <section><h2>Cookies y sitios externos</h2><p>La versión actual de Zenubit no incorpora scripts propios de analítica o publicidad. El inicio de sesión necesita almacenamiento técnico en el navegador. Si abres enlaces a WhatsApp o redes sociales, esos servicios aplican sus propias políticas. Revisaremos esta sección si incorporamos nuevas herramientas.</p></section>
      <section><h2>Cambios</h2><p>Si cambiamos finalidades o medios relevantes, actualizaremos esta política y mostraremos la fecha de la nueva versión.</p></section>
    </article>
  </main>;
}
