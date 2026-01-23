import "./projects.css";

import project1 from "../../assets/juntadecabeza.webp";
import project2 from "../../assets/ineajson.webp";

function Projects() {
  return (
    <section className="projects animated-fade-in">
      <header className="projects-header">
        <h1>
          Proyectos<span className="dot">.</span>
        </h1>
        <p>Explora nuestros proyectos y casos de éxito.</p>
      </header>

      <div className="projects-container">
        {/* Proyecto 1 */}
        <article className="project">
          <img
            src={project1}
            alt="Reconocimiento de juntas de cabeza para motores"
            className="project-image"
          />

          <div className="project-content">
            <h2>
              Aplicación Web para el reconocimiento de imágenes de Juntas de
              Cabeza para motores de combustión de gasolina
            </h2>

            <p>
              Como proyecto de titulación en la Ingeniería de Sistemas
              Computacionales, en ESCOM del IPN, desarrollamos una Aplicación Web
              relacionada a la administración e identificación de Juntas de
              Cabeza para motores de combustión de gasolina. En esta implementación usamos React.js, Node.js, Express.js,
              MySQL, TensorFlow y Python, destacando la implementación de un
              modelo de visión por computadora que identificar la Junta de Cabeza a partir
              de una imagen.
            </p>

            <a
              href="https://drive.google.com/drive/folders/1Xs7epLG0sNGyzKyzW5v0kVXTJ7_mJAZQ?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Revisa nuestra documentación aquí!
            </a>
          </div>
        </article>

        {/* Proyecto 2 */}
        <article className="project project-reverse">
          <div className="project-content">
            <h2>API INE a JSON</h2>

            <p>
              Servicio REST desarrollado con Node.js y Express.js para obtener
              información desde una imagen de una credencial de INE y devolverla
              en formato JSON. Se utiliza un servicio de Microsoft Azure para el
              procesamiento de imagen y la extracción de datos.

              El componente se encuntra desplegado en Azure, se consume a través de
              peticiones HTTP y es ideal para integrarse en aplicaciones web o
              móviles que requieran la digitalización de datos de credenciales
              INE.
            </p>

            <a
              href="https://drive.google.com/file/d/1UMq-APWQ-QLyVpN7jsHTHf74TRH-oSp2/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Revisa nuestro reporte aquí!
            </a>
          </div>

          <img
            src={project2}
            alt="Servicio API para extracción de datos INE"
            className="project-image"
          />
        </article>
      </div>
    </section>
  );
}

export default Projects;
