import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus(result.message);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus(result.message || 'Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('Error sending message. Please try again.');
    } finally {
      setIsLoading(false);
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1 className="fade-in">Contact Me</h1>
        <p className="fade-in">Have a project in mind or want to connect? Feel free to reach out!</p>
      </section>
      
      <section className="contact-content">
        <div className="contact-info slide-in-left">
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          
          <div className="contact-details">
            <div className="detail-item">
              <h3>Email</h3>
              <p>vinaysv@example.com</p>
            </div>
            
            <div className="detail-item">
              <h3>Social Media</h3>
              <div className="social-links staggered-fade-in">
                <a href="https://github.com/vinaysv-git" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="http://www.linkedin.com/in/vinay-sv-726736313" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <a href="/resume.pdf" download className="btn btn-resume pulse">Download Resume</a>
        </div>
        
        <div className="contact-form slide-in-right">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-submit glow" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus && <div className="submit-status">{submitStatus}</div>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;