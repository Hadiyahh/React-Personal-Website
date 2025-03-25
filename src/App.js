import React from 'react'; // Import React library
import logo from './image.webp'; // Import the logo image
import './App.css'; // Import the CSS file for styling

// Import the language logos
import ccLogo from './logos/cc-logo.png';
import reactLogo from './logos/react-logo.png';
import nodeLogo from './logos/node.png';
import htmlCssjsLogo from './logos/html-js-css.png';
import javaLogo from './logos/java.png';
import bashLogo from './logos/bash.png';

// Import hackathon and conference images
//import hackathon1 from '../images/hackathon1.png';
//import hackathon2 from '../assets/images/hackathon2.png';
import Thumbnail from './images/coming-soon.jpg';

import conference1 from './images/conference_pic.png';
//import conference2 from '../assets/images/conference2.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Display the logo with a spinning animation */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Display a paragraph with the website title */}
        <p>
            Hadiyah's website
        </p>
        
        {/* Container for the links */}
        <div className="App-links">
          {/* LinkedIn link */}
          <a
            className="App-link"
            href="https://www.linkedin.com/in/hadiyaharif10"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn |
          </a>
          
          {/* GitHub link */}
          <a
            className="App-link"
            href="https://github.com/Hadiyahh"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>
      
      {/* Additional content section */}
      <main className="App-main">
        {/* Add a section with a heading and a paragraph */}
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hello! I'm Hadiyah, a software developer with a passion for creating amazing web applications.
          </p>
        </section>
        
        {/* Add another section with a list of skills */}
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              <img src={ccLogo} alt="JavaScript Logo" className="skill-logo" />
              C and C++
            </li>
            <li>
              <img src={reactLogo} alt="React Logo" className="skill-logo" />
              React
            </li>
            <li>
              <img src={nodeLogo} alt="Node.js Logo" className="skill-logo" />
              Node.js
            </li>
            <li>
              <img src={htmlCssjsLogo} alt="HTML, CSS and JavaScript Logo" className="skill-logo" />
              HTML, CSS & JavaScript
            </li>
            <li>
              <img src={javaLogo} alt="Java Logo" className="skill-logo" />
              Java
            </li>
            <li>
              <img src={bashLogo} alt="Bash Logo" className="skill-logo" />
              Bash
            </li>
          </ul>
        </section>
        
        {/* Add a section with an image */}
        <section className="projects">
          <img src={Thumbnail} alt="Project Thumbnail" />
          <p>
            Check out some of my projects on GitHub!
          </p>
        </section>
         {/* Add a new section for hackathons and conferences */}
        <section className="hackathons-conferences">
          <h2>Hackathons and Conferences</h2>
          <div className="gallery">
            <img src={conference1} alt="Conference 1" className="gallery-image" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; // Export the App component as the default export

