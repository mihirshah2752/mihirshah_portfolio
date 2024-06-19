// src/components/Footer.js

import React from 'react';
import { FOOTER_TEXT } from '../../constants/footer.constants';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{FOOTER_TEXT}</p>
      </div>
    </footer>
  );
};

export default Footer;
