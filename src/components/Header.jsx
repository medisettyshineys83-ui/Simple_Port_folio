// src/components/Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <h1>SHINEY MEDISETTY</h1>
      <div className="contact-info">
        <span>+91 7989677697</span> ⋄
        <span> Visakhapatnam, AP</span> ⋄
        <span> shineymedisetty@gmail.com</span>
      </div>
      <div className="links">
        <a href="https://linkedin.com/in/shineymedisetty" target="_blank" rel="noopener noreferrer">LinkedIn</a> ⋄
        <a href="https://github.com/shineymedisetty" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p className="career-objective">
        Seeking an opportunity to work for an organization to have a platform to learn and explore new technologies and to improve my skills.
      </p>
    </div>
  );
}

export default Header;
