import React from "react";
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
            <li><a href="/">Inicio</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/projects">Proyectos</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
