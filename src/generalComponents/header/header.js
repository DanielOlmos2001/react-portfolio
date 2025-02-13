import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ toggleMenu }) => {
  return (
    <header className="header">
      <div className="header-left-section">
        <button className="header-hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <span className="header-name">Luis Daniel Olmos Gutiérrez<span className="header-name-point">.</span></span>
      </div>
      <div className="header-right-section">
        <nav className="header-nav-menu">
          <ul>
            <li><Link to="/react-portfolio/">Inicio</Link></li>
            <li><Link to="/react-portfolio/services">Servicios</Link></li>
            <li><Link to="/react-portfolio/projects">Proyectos</Link></li>
            <li><Link to="/react-portfolio/contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
