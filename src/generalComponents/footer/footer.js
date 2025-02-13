import React from "react";
import "./footer.css";
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaGithub, 
  FaLinkedin,
  FaYoutube, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Redes Sociales */}
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/DanielOlmosGtz/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/id_olmos_200/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@id_olmos_200" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://github.com/DanielOlmos2001/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/olmos-gutiérrez-luis-daniel-a72930350" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@id_olmos_200" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Ubicación */}
        <div className="footer-section">
          <h3>Ubicación</h3>
          <p><FaMapMarkerAlt /> Ciudad de México, México</p>
        </div>

        {/* Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p><FaEnvelope /> lotsaparrot93@gmail.com</p>
        </div>
      </div>

      {/* Derechos de Autor */}
      <div className="footer-bottom">
        <p>&copy; 2025 Luis Daniel Olmos Gutiérrez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
