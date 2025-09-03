// src/App.jsx

import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';

function App() {
  // Your UPDATED projects data
  const projectsData = [
    {
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070",
      title: "KFC G20 Showcase Website",
      description: "Developed a concept website for KFC to present at G20 SMBIT, focusing on branding, UI/UX, and responsiveness."
    },
    {
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2070",
      title: "Web Development Intern – Purple Technologies",
      description: "Built a responsive animated company website using React, Tailwind CSS, and Framer Motion."
    },
    {
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070",
      title: "PassCipher – Hackathon Runner-Up",
      description: "A hackathon project by the Microsoft Student Community in collaboration with Purple Technologies."
    }
  ];

  // Your skills data
  const skillsData = [
    {
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070",
      title: "Technical Skills",
      description: "HTML, CSS, JavaScript, Python, SQL, and Database Design."
    },
    {
      image: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2070",
      title: "Software & Tools",
      description: "Visual Studio Code, GitHub, Microsoft Azure, and Safari."
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
      title: "Soft Skills",
      description: "Problem-Solving, Critical Thinking, Time Management, Leadership, and Teamwork."
    }
  ];

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <section>
          <h2>My Projects</h2>
          <div className="card-container">
            {projectsData.map((card, index) => (
              <Card 
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="card-container">
            {skillsData.map((card, index) => (
              <Card 
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;