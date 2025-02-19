import React from "react";
import "./projects.css";
import project1 from "../../assets/juntadecabeza.jpg";
import project2 from "../../assets/ineajson.jpg";
import project3 from "../../assets/algoritmodebaile.png";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-header">
        <h1>Proyectos<span className="dot">.</span></h1>
        <p>Explora nuestros proyectos y casos de éxito.</p>
      </div>

      <div className="projects-container">

        {/* Proyecto 1 - Imagen Izquierda, Texto Derecha */}
        <div className="project">
          <img src={project1} alt="Proyecto 1" className="project-image" />
          <div className="project-content">
            <h2>Aplicación Web para el reconocimiento de imágenes de Juntas de Cabeza para motores</h2>
            <p>
              Como proyecto de titulación en la Ingeniería de Sistemas Computacionales, en ESCOM del IPN, desarrollamos
              una Aplicación Web relacionada a la administración e identificación de Juntas de Cabeza para motores. Para este proyecto se utilizó
              React.js, Node.js, Express.js, MySQL, TensorFlow, Python, etc. Destacando por la implementación de un modelo para que, através de una imagen,
              se pueda identificar la Junta de Cabeza y los códigos en las diferentes marcas del mercado, si y sólo si están registradas por el administrador.
            </p>
            <a href="https://drive.google.com/drive/folders/1Xs7epLG0sNGyzKyzW5v0kVXTJ7_mJAZQ?usp=sharing">¡Revisa nuestra documentación aquí!</a>
            <button className="project-button">Ver vídeo demostrativo</button>
          </div>
        </div>

        {/* Proyecto 2 - Texto Izquierda, Imagen Derecha */}
        <div className="project-reverse">
          <div className="project-content">
            <h2>API INE a JSON</h2>
            <p>
              En la empresa Profuturo se desarroló un servicio REST con ayuda de Node.js y Express.js para obtener la información de una fotografía de una credencial del INE y devolverla en formato JSON.
              Se utilizó un recurso de la nube de Microsoft Azure para el procesamiento de la imagen y la extracción de la información, posteriormente con el uso de expresiones regulares se obtuvo la información necesaria en el formato requerido.
            </p>
            <a href="https://drive.google.com/file/d/1UMq-APWQ-QLyVpN7jsHTHf74TRH-oSp2/view">¡Revisa nuestro reporte aquí!</a>
            <button className="project-button">Ver funcionamiento</button>
          </div>
          <img src={project2} alt="Proyecto 2" className="project-image" />
        </div>

        {/* Proyecto 3 - Imagen Izquierda, Texto Derecha */}
        <div className="project">
          <img src={project3} alt="Proyecto 3" className="project-image" />
          <div className="project-content">
            <h2>AlgoRitmo de Baile</h2>
            <p>
              Se está desarrollando la página web de un club de baile en la que se mostrarán los diferentes ritmos de baile que se imparten, 
              así como los horarios e información. Se implementará un sistema con ayuda de tecnologías JS.
            </p>
            <button className="project-button">¡Estamos trabajando en ella!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
