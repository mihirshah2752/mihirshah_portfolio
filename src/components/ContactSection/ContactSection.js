// src\components\ContactSection\ContactSection.js

import React from 'react';
import { CONTACT_TITLE, CONTACT_INFO, CONTACT_HEADER } from '../../constants/contact.constants';
import SectionHeader from '../Custom/SectionHeader/SectionHeader';
import { FaLinkedin, FaUser, FaPhone, FaBlog, FaGithubSquare, FaStackOverflow } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './ContactSection.scss';

const getIcon = (key) => {
  switch (key) {
    case 'Name':
      return <FaUser />;
    case 'Address':
      return <FaLocationDot />;
    case 'Email':
      return <MdEmail />;
    case 'Contact':
      return <FaPhone />;
    case 'Blog':
      return <FaBlog />;
    case 'Linkedin':
      return <FaLinkedin />;
    case 'Stack Overflow':
      return <FaStackOverflow />;
    case 'GitHub':
      return <FaGithubSquare />;
    default:
      return null;
  }
};

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <SectionHeader title={CONTACT_TITLE} subtitle={CONTACT_HEADER} />
      <div className="contact-content">
        {CONTACT_INFO.map((item, index) => (
          <div key={index} className="contact-item">
            <div className="contact-icon">{getIcon(item.key)}</div>
            <div className="contact-details">
              <div className="contact-key">{item.key}</div>
              <div className="contact-value">
                {item.url || item.key === 'Email' || item.key === 'Contact' ? (
                  <a
                    href={
                      item.key === 'Email'
                        ? `mailto:${item.value}`
                        : item.key === 'Contact'
                          ? `tel:${item.value}`
                          : item.url
                    }
                    target={item.key === 'Email' || item.key === 'Contact' ? null : '_blank'}
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
