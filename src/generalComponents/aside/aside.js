import { Link } from "react-router-dom";
import "./aside.css";

const Aside = ({ isOpen, toggleMenu }) => {
  return (
    <aside className={`aside ${isOpen ? "open" : ""}`}>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;