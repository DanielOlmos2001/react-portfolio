import { NavLink } from "react-router-dom";
import "./aside.css";

function Aside({ isOpen, toggleMenu }) {
  return (
    <aside
      className={`aside ${isOpen ? "open" : ""}`}
      aria-hidden={!isOpen}
    >
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Servicios
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Proyectos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
