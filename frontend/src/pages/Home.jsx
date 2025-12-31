import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title fade-in">Vinay Sv</h1>
          <p className="hero-subtitle fade-in">Junior Full-Stack Web Developer</p>
          <div className="hero-buttons staggered-fade-in">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/src/assets/images/porfile.jpeg" alt="Vinay Sv - Developer" className="profile-image" />
        </div>
      </section>
      
      <section className="skills">
        <h2 className="fade-in">Skills</h2>
        <div className="skills-grid staggered-fade-in">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">UI/UX Concepts</div>
        </div>
      </section>
    </div>
  );
};

export default Home;