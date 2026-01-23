import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/App.css";

import Header from "./generalComponents/header/Header";
import Aside from "./generalComponents/aside/Aside";
import Footer from "./generalComponents/footer/Footer";

import Home from "./views/home/Home";
import Services from "./views/services/Services";
import Projects from "./views/projects/Projects";
import Contact from "./views/contact/Contact";
import NotFound from "./views/not-found/NotFound";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Cerrar el Aside solo en pantallas pequeñas cuando cambia la ruta
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <Aside isOpen={isOpen} toggleMenu={toggleMenu} />

      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
