import React from 'react';
import { motion } from 'framer-motion';
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

const TechStack = () => {
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
        }

        .tech-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2rem;
          border-radius: 1.5rem;
          text-align: center;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 260px;
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .tech-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #33ccff, #a855f7);
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
          filter: blur(12px);
        }

        .tech-card:hover::before {
          opacity: 0.25;
        }

        .tech-card:hover {
          transform: scale(1.05);
        }

        .tech-card:hover .tech-icon {
          transform: scale(1.1);
        }

        .tech-icon {
          font-size: 3rem;
          animation: float 3s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .tech-name {
          margin-top: 1rem;
          font-weight: 700;
          font-size: 1.1rem;
          color: #ccc;
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

      {/* Tech Grid */}
      <div className="tech-wrapper">
        <div className="tech-grid">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-card"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
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



// import React from 'react';
// import { motion } from 'framer-motion';

// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaBootstrap,
//   FaReact,
//   FaNodeJs,
//   FaFigma,
//   FaDocker,
//   FaGithub,
// } from 'react-icons/fa';
// import { SiTailwindcss, SiRedux } from 'react-icons/si';

// const techs = [
//   { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
//   { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
//   { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
//   { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> },
//   { name: 'React', icon: <FaReact color="#61dafb" /> },
//   { name: 'Redux', icon: <SiRedux color="#764abc" /> },
//   { name: 'Tailwind', icon: <SiTailwindcss color="#38bdf8" /> },
//   { name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
//   { name: 'Figma', icon: <FaFigma color="#f24e1e" /> },
//   { name: 'Docker', icon: <FaDocker color="#0db7ed" /> },
//   { name: 'GitHub', icon: <FaGithub color="#fff" /> },
// ];

// const TechStack = () => {
//   return (
// <section
//   id="techstack"
//   style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 1rem', minHeight: '100vh' }}
// >
//   <style>{`
//     .tech-wrapper {
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 0 1rem;
      
//     }

//     .tech-grid {
//       display: grid;
//       gap: 2rem;
//       grid-template-columns: repeat(auto-fit, minmax(200px, 220px));
//       justify-content: center;
//     }

//     .tech-card {
//       background: #111;
//       border: 1px solid #333;
//       padding: 2rem;
//       border-radius: 1.5rem;
//       text-align: center;
//       transition: all 0.3s ease;
//       min-width: 220px;
//     }

//     .tech-card:hover {
//       background-color: #1a1a1a;
//       border-color: #555;
//       box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
//       transform: scaleY(1.05); /* Slight height increase */
//     }

//     .tech-icon {
//       font-size: 2.8rem;
//       transition: transform 0.3s ease, filter 0.3s ease;
//     }

//     .tech-icon:hover {
//       transform: scale(1.2);
      
//       filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
//     }

//     .tech-name {
//       margin-top: 0.8rem;
//       font-weight: 700;
//       font-size: 1.1rem;
//     }

//     @media (max-width: 768px) {
//       .tech-grid {
//         grid-template-columns: repeat(2, 1fr);
//       }
//     }

//     @media (max-width: 480px) {
//       .tech-grid {
//         grid-template-columns: 1fr;
//       }
//     }
//   `}</style>
//   <motion.div
//   initial={{ opacity: 0, scaleX: 0 }}
//   whileInView={{ opacity: 1, scaleX: 1 }}
//   transition={{ duration: 0.6, ease: 'easeOut' }}
//   style={{
//     height: '4px',
//     width: '100%',
//     background: 'linear-gradient(to right, #0d6dfc, #33ccff)',
//     margin: '64px 0',
//     transformOrigin: 'left center',
//     borderRadius: '2px',
//     boxShadow: '0 0 16px rgba(13, 109, 252, 0.4)',
//   }}
// />

//   <div className="text-center mb-5">
//     <h2>🌟 My Tech Stack</h2>
//     <p className="text-secondary">
//       Tools and technologies I use to build seamless digital experiences.
//     </p>
//   </div>

//   {/* ➤ Wrapping container with padding and center */}
//   <div className="tech-wrapper">
//     <div className="tech-grid">
//       {techs.map((tech, index) => (
//         <motion.div
//           key={tech.name}
//           className="tech-card"
//           initial={{ opacity: 0, scale: 0.6 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: index * 0.1 }}
//         >
//           <div className="tech-icon">{tech.icon}</div>
//           <div className="tech-name">{tech.name}</div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// };

// export default TechStack;
