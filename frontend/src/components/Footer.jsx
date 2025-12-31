import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Vinay Sv</h3>
            <p>Junior Full-Stack Web Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/vinaysv-git" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="http://www.linkedin.com/in/vinay-sv-726736313" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vinay Sv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;