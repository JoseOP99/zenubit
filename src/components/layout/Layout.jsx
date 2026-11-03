import Navbar from '../Navbar';
import Footer from '../Footer';
import WhatsAppButton from '../WhatsAppButton';

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
