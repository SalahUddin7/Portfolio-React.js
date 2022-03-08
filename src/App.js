import React, { useState } from "react";

// import logo from './logo.svg';
import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";

import TechSectionArea from "./components/TechSectionArea";
import ModalContainer from "./components/ModalContainer";

// Rename App.js to .jsx
// Add export default here
function App() {
  const [modal, setModal] = useState(null);
  return (
    <div className="App">
      {/* The header tag is for a top element of the page, not the whole page as mentioned in the semantic html tags of the newspaper -1 */}
      <header className="App-header">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectSection setModal={setModal} />
        <ModalContainer modal={modal} setModal={setModal} />
        <TechSectionArea />
        <ContactSection />
        <Footer />
      </header>
    </div>
  );
}

export default App;
