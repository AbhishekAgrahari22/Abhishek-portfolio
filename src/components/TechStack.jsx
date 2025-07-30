import React from 'react';
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaDocker,
  FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux } from 'react-icons/si';

const techs = [
  { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> },
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'Redux', icon: <SiRedux color="#764abc" /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#38bdf8" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
  { name: 'Figma', icon: <FaFigma color="#f24e1e" /> },
  { name: 'Docker', icon: <FaDocker color="#0db7ed" /> },
  { name: 'GitHub', icon: <FaGithub color="#fff" /> },
];

const TechStack = () => {
  return (
<section
  id="techstack"
  style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 1rem', minHeight: '100vh' }}
>
  <style>{`
    .tech-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      
    }

    .tech-grid {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 220px));
      justify-content: center;
    }

    .tech-card {
      background: #111;
      border: 1px solid #333;
      padding: 2rem;
      border-radius: 1.5rem;
      text-align: center;
      transition: all 0.3s ease;
      min-width: 220px;
    }

    .tech-card:hover {
      background-color: #1a1a1a;
      border-color: #555;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
      transform: scaleY(1.05); /* Slight height increase */
    }

    .tech-icon {
      font-size: 2.8rem;
      transition: transform 0.3s ease, filter 0.3s ease;
    }

    .tech-icon:hover {
      transform: scale(1.2);
      
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
    }

    .tech-name {
      margin-top: 0.8rem;
      font-weight: 700;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .tech-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .tech-grid {
        grid-template-columns: 1fr;
      }
    }
  `}</style>

  <div className="text-center mb-5">
    <h2>🌟 My Tech Stack</h2>
    <p className="text-secondary">
      Tools and technologies I use to build seamless digital experiences.
    </p>
  </div>

  {/* ➤ Wrapping container with padding and center */}
  <div className="tech-wrapper">
    <div className="tech-grid">
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="tech-card"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="tech-icon">{tech.icon}</div>
          <div className="tech-name">{tech.name}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default TechStack;
