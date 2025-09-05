import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs,
  FaFigma, FaDocker, FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiFlutter } from 'react-icons/si';

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
  { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
];

const TechCard = ({ name, icon, onHover, onLeave }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    const rect = ref.current.getBoundingClientRect();
    onHover({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height,
    });
  };

  return (
    <div
      ref={ref}
      className="tech-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
    >
      <div className="tech-icon">{icon}</div>
      <div className="tech-name">{name}</div>
    </div>
  );
};

const TechStack = () => {
  const [hoverData, setHoverData] = useState(null);

  return (
    <section
      id="techstack"
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '6rem 1rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <style>{`
        .tech-wrapper {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          justify-items: center;
          position: relative;
        }

        .tech-card {
          position: relative;
          width: 260px;
          height: 180px;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform 0.3s ease;
          cursor: pointer;
          overflow: hidden;
          z-index: 10;
        }

        .tech-card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(177, 66, 245, 0.8), 0 0 40px rgba(177, 66, 245, 0.5);
  z-index: 11;
}


        .tech-icon {
          font-size: 3rem;
          z-index: 1;
          animation: float 3s ease-in-out infinite;
        }

        .tech-name {
          margin-top: 1rem;
          font-weight: 700;
          font-size: 1.1rem;
          color: #ccc;
          z-index: 1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @media (max-width: 480px) {
          .tech-card {
            width: 100%;
          }
        }
      `}</style>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          height: '4px',
          background: 'linear-gradient(to right, #0d6dfc, #33ccff)',
          marginBottom: '3rem',
          borderRadius: '2px',
          boxShadow: '0 0 16px rgba(13, 109, 252, 0.4)',
        }}
      />

      {/* Heading */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '3rem' }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(to right, #a855f7, #33ccff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            marginBottom: '0.5rem',
          }}
        >
          🚀 My Tech Stack
        </h2>
        <p style={{ color: '#aaa', fontSize: '1rem' }}>
          Tools & technologies I use to craft delightful user experiences.
        </p>
      </motion.div>

      {/* Tech Grid with glow */}
      <div className="tech-wrapper">
        <div className="tech-grid">
          {/* Shared glowing hover effect */}
          <AnimatePresence>
            {hoverData && (
              <motion.div
                className="absolute rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  top: hoverData.y - 16,
                  left: hoverData.x - 16,
                  width: hoverData.width + 32,
                  height: hoverData.height + 32,
                }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{
                  background: 'radial-gradient(circle at center, rgba(168,85,247,0.3), transparent 70%)',
                  filter: 'blur(40px)',
                  position: 'absolute',
                  zIndex: 0,
                }}
              />
            )}
          </AnimatePresence>

          {techs.map((tech, index) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              onHover={(data) => setHoverData(data)}
              onLeave={() => setHoverData(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

