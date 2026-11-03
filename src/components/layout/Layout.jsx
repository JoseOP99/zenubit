import { useScrollEntrance } from '../../hooks/useScrollEntrance';
import WovenBackground from '../WovenBackground';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WhatsAppButton from '../WhatsAppButton';

export default function Layout({ children }) {
  const contentRef = useScrollEntrance();
  return (
    <div className="app-container">
      <WovenBackground />
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main ref={contentRef} id="contenido" tabIndex={-1}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
