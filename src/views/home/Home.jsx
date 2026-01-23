import { Link } from "react-router-dom";
import "./home.css";
import profilePic from "../../assets/profile.webp";

function Home() {
  return (
    <section className="home animated-fade-in">
      <div className="home-overlay" aria-hidden="true" />

      <div className="home-container">
        <img
          src={profilePic}
          alt="Foto de perfil"
          className="home-profile-pic"
        />

        <h1>¡Bienvenido!</h1>

        <p>
          Desarrollador apasionado por aprender y crear experiencias digitales
          diferentes.
        </p>

        <Link
          to="/services"
          className="home-button-discover"
        >
          Descubrir más
        </Link>
      </div>
    </section>
  );
}

export default Home;
