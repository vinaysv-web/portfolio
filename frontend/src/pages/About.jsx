import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1 className="fade-in">About Me</h1>
        <p className="fade-in">Hello! I'm Vinay Sv, a passionate Junior Full-Stack Web Developer with expertise in creating modern web applications.</p>
      </section>
      
      <section className="about-content">
        <div className="about-text">
          <h2 className="slide-in-left">My Journey</h2>
          <p className="slide-in-left">I specialize in building responsive and user-friendly websites using HTML, CSS, JavaScript, Node.js, and MySQL. With a strong foundation in UI/UX concepts, I strive to create digital experiences that are both aesthetically pleasing and highly functional.</p>
          
          <h2 className="slide-in-left">Approach</h2>
          <p className="slide-in-left">As a developer, I believe in writing clean, efficient code and staying up-to-date with the latest industry trends and technologies. My goal is to create web solutions that not only meet client requirements but also exceed user expectations.</p>
        </div>
        
        <div className="social-links">
          <h2 className="slide-in-right">Connect With Me</h2>
          <div className="links staggered-fade-in">
            <a href="https://github.com/vinaysv-git" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="http://www.linkedin.com/in/vinay-sv-726736313" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;