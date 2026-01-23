import { Link } from "react-router-dom";
import "./services.css";

import uxDesign from "../../assets/ux-design.webp";
import webDev from "../../assets/web-dev.webp";
import marketing from "../../assets/marketing.webp";

const servicesData = [
  {
    title: "Arquitectura de mejores experiencias.",
    category: "Diseño UX/UI - Creación de Interfaces",
    description:
      "Transformamos tus ideas en interfaces elegantes y funcionales, optimizadas para una experiencia de usuario inolvidable para tus clientes.",
    button: "¡Mira estas vistas!",
    link: "https://www.figma.com/design/OzeGtEcLohOozcS8twj0rk/Matheando?node-id=0-1&t=akExgTl5OJ3dy3F8-1",
    external: true,
    image: uxDesign,
  },
  {
    title: "Innovación y Desarrollo de Apps funcionales.",
    category: "Desarrollo Web - Web Apps",
    description:
      "Elevamos el estándar de las aplicaciones web con soluciones personalizadas que impulsan el crecimiento de tu marca y tu presencia en línea.",
    button: "¡Mira más!",
    link: "/projects",
    external: false,
    image: webDev,
  },
  {
    title: "Estrategia de Presencia Online.",
    category: "Content Marketing - Redes sociales",
    description:
      "Nos encargamos de conectar tu marca con la audiencia correcta mediante estrategias de marketing de contenidos.",
    button: "¡Usamos Figma!",
    link: "https://www.instagram.com/algoritmo_de_baile/",
    external: true,
    image: marketing,
  },
];

function Services() {
  return (
    <section className="services animated-fade-in">
      <header className="services-header">
        <h1>
          Nuestros Servicios<span className="dot">.</span>
        </h1>
        <p>Ofrecemos las soluciones perfectas para la revolución digital.</p>
      </header>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <article key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

            <div className="service-content">
              <span className="service-category">{service.category}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>

              {service.external ? (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  <button className="service-button">
                    {service.button}
                  </button>
                </a>
              ) : (
                <Link to={service.link} className="service-link">
                  <button className="service-button">
                    {service.button}
                  </button>
                </Link>
              )}
            </div>
          </article>
        ))}

        <div className="cta-container">
          <h2>¡Solicita tu primera página web con un 10% de descuento!</h2>
          <Link to="/contact">
            <button className="cta-button">¡Aprovecha ahora!</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
