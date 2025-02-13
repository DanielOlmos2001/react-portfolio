import React from "react";
import "./home.css";
import profilePic from "../../assets/profile.png"; // Agrega una imagen en la carpeta assets

const Home = () => {
  return (
    <section className="home">
      <div className="home-overlay"></div> {/* Fondo difuminado */}
      <div className="home-container">
        <img src={profilePic} alt="Perfil" className="home-profile-pic" />
        <h1>¡Bienvenido!</h1>
        <p>Desarrollador apasionado por aprender y crear experiencias digitales diferentes.</p>
        <a href="/react-portfolio/services" className="home-button-discover">Descubrir más</a>
      </div>
    </section>
  );
};

export default Home;

