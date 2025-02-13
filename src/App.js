// src/App.js
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/App.css";

import Header from "./generalComponents/header/header.js";
import Aside from "./generalComponents/aside/aside.js";
import Footer from "./generalComponents/footer/footer.js";

import Home from "./views/home/home.js";
import Services from "./views/services/services.js";
import Projects from "./views/projects/projects.js";
import AppIneToJson from "./views/projects/ineToJson/components/app/AppIneToJson.js";
import Peticion from "./views/projects/ineToJson/components/peticion/peticion.js";
import Contact from "./views/contact/contact.js";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Detecta el cambio de ruta

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el Aside solo si la pantalla es menor a 768px
  React.useEffect(() => {
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
          <Route path="/projects/AppIneToJson" element={<AppIneToJson />} />
          <Route path="/projects/AppIneToJson/peticion" element={<Peticion />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

