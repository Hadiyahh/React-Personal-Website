import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './image.webp';

// Logos
import ccLogo from './logos/cc-logo.png';
import reactLogo from './logos/react-logo.png';
import nodeLogo from './logos/node.png';
import htmlCssjsLogo from './logos/html-js-css.png';
import javaLogo from './logos/java.png';
import bashLogo from './logos/bash.png';

// Images
import Thumbnail from './images/coming-soon.jpg';
import conference1 from './images/conference_pic.png';
import volunteer1 from './images/coming-soon.jpg';
import volunteer2 from './images/coming-soon.jpg';
import volunteer3 from './images/coming-soon.jpg';
import volunteer4 from './images/coming-soon.jpg';

function App() {
  // Dark Mode Toggle
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Project Data
  const projects = [
    {
      title: 'Project 1',
      image: Thumbnail,
      link: 'https://github.com/Hadiyahh/project1',
    },
    {
      title: 'Project 2',
      image: Thumbnail,
      link: 'https://github.com/Hadiyahh/project2',
    },
  ];

  // Volunteer Image Slider
  const scrollSlider = (direction) => {
    const slider = document.getElementById('volunteerSlider');
    const scrollAmount = 340;
    if (slider) {
      slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  // Image Modal
  const [modalImage, setModalImage] = useState(null);
  const handleImageClick = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <header className="App-header">
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>Hadiyah's website</p>

        <div className="App-links">
          <a className="App-link" href="https://www.linkedin.com/in/hadiyaharif10" target="_blank" rel="noopener noreferrer">LinkedIn |</a>
          <a className="App-link" href="https://github.com/Hadiyahh" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="App-link" href="./Resume.pdf" download>| Resume</a>
        </div>
      </header>

      <main className="App-main">
        {/* About Me */}
        <section id="about" className="about-me fade-in">
          <h2>About Me</h2>
          <p>Hello! I'm Hadiyah, a software developer with a passion for creating amazing web applications.</p>
        </section>

        {/* Skills */}
        <section id="skills" className="skills fade-in">
          <h2>Skills</h2>
          <ul>
            <li><img src={ccLogo} alt="C and C++ Logo" className="skill-logo" />C and C++</li>
            <li><img src={reactLogo} alt="React Logo" className="skill-logo" />React</li>
            <li><img src={nodeLogo} alt="Node.js Logo" className="skill-logo" />Node.js</li>
            <li><img src={htmlCssjsLogo} alt="HTML, CSS, JavaScript Logo" className="skill-logo" />HTML, CSS & JavaScript</li>
            <li><img src={javaLogo} alt="Java Logo" className="skill-logo" />Java</li>
            <li><img src={bashLogo} alt="Bash Logo" className="skill-logo" />Bash</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="projects fade-in">
          <h2>My Projects</h2>
          <div className="gallery">
            {projects.map((proj, index) => (
              <a href={proj.link} key={index} target="_blank" rel="noopener noreferrer">
                <img src={proj.image} alt={proj.title} className="gallery-image" />
              </a>
            ))}
          </div>
        </section>

        {/* Hackathons */}
        <section id="hackathons" className="hackathons-conferences fade-in">
          <h2>Hackathons and Conferences</h2>
          <div className="gallery">
            <img src={conference1} alt="Conference participation" className="gallery-image" />
          </div>
        </section>

        {/* Volunteer Experience */}
        <section id="volunteer" className="volunteer-experiences fade-in">
          <h2>Volunteer Experiences</h2>
          <div className="slider-wrapper">
            <button className="slider-button left" onClick={() => scrollSlider(-1)}>‹</button>
            <div className="slider-frame">
              <div className="slider-track" id="volunteerSlider">
                {[volunteer1, volunteer2, volunteer3, volunteer1, volunteer2, volunteer3].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Volunteer ${i + 1}`}
                    className="slider-image"
                    onClick={() => handleImageClick(img)}
                  />
                ))}
              </div>
            </div>
            <button className="slider-button right" onClick={() => scrollSlider(1)}>›</button>
          </div>
        </section>

        {/* Modal */}
        {modalImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="image-modal-close" onClick={closeModal}>×</span>
              <img src={modalImage} alt="Enlarged view" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
