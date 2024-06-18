// src/App.js
import React from "react";
import Footer from "./components/Footer/Footer";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import ContactSection from "./components/ContactSection/ContactSection";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
