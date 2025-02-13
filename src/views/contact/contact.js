import React, { useState } from "react";
import "./contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";
import profile from "../../assets/profile.png";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("https://formsubmit.co/lotsaparrot93@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          form.reset(); // Reiniciar el formulario
        } else {
          alert("Error al enviar el mensaje. Intenta nuevamente.");
        }
      })
      .catch(() => alert("Error de conexión. Verifica tu internet."));
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contacto</h1>
        <img src={profile} alt="Foto de perfil" className="profile-image" />
        <p>
          Soy estudiante de <b>Ingeniería en Sistemas Computacionales en ESCOM - IPN</b>.
          Me apasiona el desarrollo web y la tecnología, complementando mi formación con
          cursos en <b>EDteam</b> para mejorar mis habilidades en programación y diseño.
        </p>

        {/* Información de Contacto */}
        <div className="contact-info">
          <a href="mailto:lotsaparrot93@gmail.com">
            <FaEnvelope /> lotsaparrot93@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/olmos-gutiérrez-luis-daniel-a72930350" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/DanielOlmos2001/" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="tel:+525510212943">
            <FaPhone /> +52 55 1021 2943
          </a>
          <a href="https://wa.me/525510212943" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        {/* Mostrar mensaje de éxito si el formulario fue enviado */}
        {isSubmitted ? (
          <div className="success-message">
            <h2>¡Mensaje enviado con éxito! 🎉</h2>
            <p>Gracias por contactarme. Te responderé lo antes posible.</p>
          </div>
        ) : (
          /* Formulario de Contacto */
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Ingrese su nombre" required />
            <input type="text" name="phone" placeholder="Ingrese su número telefónico" required />
            <input type="email" name="email" placeholder="Ingrese su correo electrónico" required />
            <textarea name="message" placeholder="Escriba su mensaje..." rows="5" required></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;