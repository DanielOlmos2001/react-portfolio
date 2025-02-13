import React from "react";
import { Link } from "react-router-dom";
import Profuturo from "../../assets/img/Profuturo.png";
import "./AppIneToJson.css";

function AppIneToJson() {
  return (
    <div className="AppIneToJson">
      <div className="welcome-container">
        <h1>¡Bienvenidos a la API "INE a JSON"!</h1>
        <p>Abróchense sus cinturones</p>
      </div>
      
      <div className="abstract-container">
        <Link to="/projects/AppIneToJson/peticion">
          <button className="button">Ver petición</button>
        </Link>
      </div>

      <div className="details-developer">
        <p>Propuesta desarrollada por <span>Olmos Gutiérrez Luis Daniel</span>, Desarrollador de software.</p>
        <p>Contacto <span>luis.olmos@profuturo.com.mx</span></p>
        <img src={Profuturo} alt="Imagen de Profuturo" />
      </div>
    </div>
  );
}

export default AppIneToJson;
