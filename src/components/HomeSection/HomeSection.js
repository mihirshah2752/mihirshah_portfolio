// src/components/HomeSection/HomeSection.js
import React from 'react';
import Header from '../Header/Header';
import './HomeSection.scss';
import { TITLE } from '../../constants/header.constants';
import {
  HIRE_ME_TEXT,
  ROLE_STARTING_TEXT,
  DESIGNATION_TEXT,
  CONTENT_STARTING_TEXT,
} from '../../constants/home-section.constants';
import CustomButton from '../Custom/CustomButton/CustomButton';

const HomeSection = () => {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-section-wrapper">
      <Header />
      <div className="home-section" id="home">
        <div className="content">
          <h1>
            {CONTENT_STARTING_TEXT} <span className="animated-text">{TITLE}</span>
          </h1>
          <h2 className="role">
            {ROLE_STARTING_TEXT} <span className="designation">{DESIGNATION_TEXT}</span>
          </h2>
          <CustomButton text={HIRE_ME_TEXT} handelClick={handleHireMeClick} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
