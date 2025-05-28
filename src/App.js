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
import Thumbnail1 from './images/shop.png';
import Thumbnail2 from './images/art.png';
import conference1 from './images/conference_pic.png';
import robotics from './images/robotics.png';
import hospital from './images/hospital.png';
import certificate1 from './images/certificate1.png';
import counter from './images/counter.png';

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
      title: 'Shopping-Website',
      image: Thumbnail1,
      link: 'https://shoppinggwebsite.netlify.app/',
    },
    {
      title: 'Project 2',
      image: Thumbnail,
      link: 'https://github.com/Hadiyahh',
    },
    {
      title: 'Art Gallery',
      image: Thumbnail2,
      link: 'https://artgalleryyy.netlify.app/',
    },
    {
      title: 'Hospital Management Systems',
      image: hospital,
      link: 'https://www.canva.com/design/DAGjCmUITMA/quZPshsPzRhmDX8a_TUUfg/edit?utm_content=DAGjCmUITMA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      title: 'Train station counter app',
      image: counter,
      link: 'https://123-counter-app-123.netlify.app/',
    },
  ];



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
        <p>Hadiyah Arif</p>
        
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
          <p>Hello! I'm Hadiyah, a software developer with a passion for learning things.</p>
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
              <a href="https://www.uwindsor.ca/dailynews/2024-12-19/celebration-women-computing" target="_blank" rel="noopener noreferrer">
                <img src={conference1} alt="Conference participation" className="gallery-image" />
              </a>
            </div>
          </section>
          
          {/* Volunteer */}
          <section id="volunteer" className="volunteer fade-in">
            <h2>Volunteer</h2>
            <div className="gallery">
              <a href="https://www.linkedin.com/posts/activity-7317713648615845888-72ol?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB_ewVgB2Zmq3iPSuoKBN5HTuj5_iiJRXvU " target="_blank" rel="noopener noreferrer">
                <img src={robotics} alt="First Robotics Canada" className="gallery-image" />
                <p className="image-caption"> Safety Attendant at First Robotics Canada</p>
              </a>
            </div>
          </section>

          {/* Certificates */}
          <section id="certificates" className="certificates fade-in">
            <h2>Certificates</h2>
            <div className="gallery">
              <a href="certificate.pdf" download="certificate.pdf" target="_blank" rel="noopener noreferrer">
                <img src={certificate1} alt="C++ certificate" className="gallery-image" />
                <p className="image-caption"> OOP in C++ Programming Certificate</p>
              </a>
            </div>
          </section>

          <section className="timeline-section journey-section fade-in">
            <h2>My Journey Through Computer Science: mgpa: 80% </h2>
            <div className="timeline">
              {[
                {
                  year: 'Winter 2024',
                  title: 'COMP‑1000: Key Concepts in Computer Science',
                  description: 'Introduction to the basics of computing and problem-solving.'
                },
                {
                  year: 'Winter 2024',
                  title: 'COMP‑1400: Introduction to Algorithms and Programming I',
                  description: 'Learned foundational programming in C.'
                },
                {
                  year: 'Intersession 2024',
                  title: 'COMP‑1410: Introduction to Algorithms and Programming II',
                  description: 'Introduced recursion, pointers, files, and dynamic memory in C.'
                },
                {
                  year: 'Intersession 2024',
                  title: 'COMP‑2067: Programming for Beginners',
                  description: 'Built basic programming skills — primarily for early-stage or non-majors.'
                },
                {
                  year: 'Intersession 2024',
                  title: 'COMP‑2650: Computer Architecture I',
                  description: 'Focused on digital logic, CPU basics, and low-level computer structure.'
                },
                {
                  year: 'Fall 2024',
                  title: 'COMP‑2120: Object-Oriented Programming (Java)',
                  description: 'Explored OOP concepts using Java, including classes, inheritance, and polymorphism.'
                },
                {
                  year: 'Fall 2024',
                  title: 'COMP‑2540: Data Structures and Algorithms',
                  description: 'Covered trees, hash tables, sorting, and greedy algorithms.'
                },
                {
                  year: 'Fall 2024',
                  title: 'COMP‑2560: Systems Programming',
                  description: 'Worked with Unix systems, the shell, memory management, processes, and networking.'
                },
                {
                  year: 'Fall 2024',
                  title: 'COMP‑2660: Computer Architecture II',
                  description: 'Examined x86 assembly, memory mapping, and program tracing.'
                },
                {
                  year: 'Winter 2025',
                  title: 'COMP‑3150: Database Management Systems',
                  description: 'Explored SQL, relational schema, and DB design.'
                },
                {
                  year: 'Winter 2025',
                  title: 'COMP‑3220: Object-Oriented Software Analysis & Design',
                  description: 'Focused on UML, software development lifecycles, and design patterns.'
                },
                {
                  year: 'Winter 2025',
                  title: 'COMP‑3300: Operating Systems Fundamentals',
                  description: 'Covered processes, concurrency, memory, scheduling, and file systems.'
                },
                {
                  year: 'Winter 2025',
                  title: 'COMP‑3340: World Wide Web Information System Development',
                  description: 'Learned about modern web tech, server/client architecture, and frameworks.'
                },
                {
                  year: 'Winter 2025',
                  title: 'COMP‑3400: Advanced Object‑Oriented System Design Using C++',
                  description: 'Advanced OOP, design patterns, templates, and large-scale software structure.'
                },
                {
                  year: 'Summer 2025 - In progress',
                  title: 'COMP-3670: Computer Networks',
                  description: 'Exploring Internet architecture, protocols, performance, and security in modern computer networks.'
                }
              ].map((event, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{event.year}</h3>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
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
        <p>Designed & built by Hadiyah © {new Date().getFullYear()}</p>

      </main>
    </div>
  );
}

export default App;
