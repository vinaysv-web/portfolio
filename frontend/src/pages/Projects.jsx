import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <section className="projects-hero">
        <h1 className="fade-in">My Projects</h1>
        <p className="fade-in">Here are some of my recent projects. Check them out!</p>
      </section>
      
      {loading ? (
        <div className="loading fade-in">Loading projects...</div>
      ) : error ? (
        <div className="error fade-in">{error}</div>
      ) : (
        <section className="projects-grid">
          <h2 className="fade-in">Featured Projects</h2>
          <div className="projects-list staggered-fade-in">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="slide-in-left">{project.title}</h3>
                  <p className="slide-in-left">{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack && project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link pulse">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;