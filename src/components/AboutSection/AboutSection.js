//src/components/AboutSection/AboutSection.js

import React from 'react';
import mihirImage from '../../assets/images/self_dp.jpg';
import {
  ABOUT_HEADER,
  ABOUT_TITLE,
  DOWNLOAD_CV_TEXT,
  INTRO_PARAGRAPH,
  INTRO_TITLE,
} from '../../constants/about-me.constants';
import { TITLE } from '../../constants/header.constants';
import './AboutSection.scss';
import SectionHeader from '../Custom/SectionHeader/SectionHeader';

const AboutSection = () => {
  const handleDownloadCV = () => {
    window.open(require('../../assets/pdf/cv.pdf'), '_blank');
  };

  return (
    <section id="about" className="about-section">
      <SectionHeader title={ABOUT_TITLE} subtitle={ABOUT_HEADER} />
      <div className="about-content">
        <div className="about-image">
          <img src={mihirImage} alt={TITLE} />
        </div>
        <div className="about-text">
          <p className="intro-text">{INTRO_TITLE}</p>
          <p>{INTRO_PARAGRAPH}</p>
          <button className="download-cv-button" onClick={handleDownloadCV}>
            {DOWNLOAD_CV_TEXT}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
