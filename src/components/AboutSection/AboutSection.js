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
import SectionHeader from '../Custom/SectionHeader/SectionHeader';
import CustomButton from '../Custom/CustomButton/CustomButton';
import './AboutSection.scss';

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
          <CustomButton text={DOWNLOAD_CV_TEXT} handelClick={handleDownloadCV} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
