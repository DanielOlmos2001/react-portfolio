import "./home.css";
import { Link } from "react-router-dom";
import profilePic from "../../assets/profile.png"; // Agrega una imagen en la carpeta assets

const Home = () => {
  return (
    <section className="home animated-fade-in">
      <div className="home-overlay"></div> {/* Fondo difuminado */}
      <div className="home-container">
        <img src={profilePic} alt="Perfil" className="home-profile-pic" />
        <h1>¡Bienvenido!</h1>
        <p>Desarrollador apasionado por aprender y crear experiencias digitales diferentes.</p>
        <Link to="/services" className="home-button-discover">Descubrir más</Link>
      </div>
    </section>
  );
};

export default Home;

