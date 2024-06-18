// src/components/Header.js
import React, { useState } from "react";
import { TITLE, NAV_MENU } from "../../constants/header.constants";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={"header"}>
      <div className="header-content">
        <div className="name">
          <h1>{TITLE}</h1>
        </div>
        <nav className="nav">
          {NAV_MENU.map((nav) => (
            <p key={nav.id} onClick={() => handleNavClick(nav.id)}>
              {nav.text}
            </p>
          ))}
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          ✖
        </div>
        {NAV_MENU.map((nav) => (
          <p key={nav.id} onClick={() => handleNavClick(nav.id)}>
            {nav.text}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Header;
