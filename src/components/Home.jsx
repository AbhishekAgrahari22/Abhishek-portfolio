import React from 'react';
import { motion } from 'framer-motion';
import Skills from '../pages/Skills';
import laptopImage from '../assets/3d-rendering-laptop.jpg';

const Home = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '80px', // Adjust for navbar
        background: 'linear-gradient(135deg, #f8f9fc 0%, #e6f0ff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Embedded Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .hero-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          font-family: 'Inter', sans-serif;
        }

        .hero-left {
          flex: 1;
          min-width: 320px;
        }

        .hero-left h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #1a1a1a;
          background: linear-gradient(90deg, #1e1e2f, #3f5efb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-paragraphs-row {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          justify-content: center;
          margin-top: 1.5rem;
          flex-wrap: nowrap;
        }

        .hero-paragraphs-row p {
          max-width: 450px;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #333;
          text-align: justify;
        }

        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .hero-image {
          width: 520px;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .hero-image:hover {
          transform: scale(1.03);
        }

        .scroll-mouse {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          text-decoration: none;
          z-index: 10;
        }

        .mouse {
          width: 34px;
          height: 60px;
          border: 2px solid rgba(120, 120, 120, 0.6);
          border-radius: 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .scroll-wheel {
          width: 6px;
          height: 6px;
          background-color: #555;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .hero-left h1 {
            font-size: 2rem;
            text-align: center;
          }

          .hero-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .hero-paragraphs-row {
            flex-direction: column;
            gap: 1.2rem;
          }
        }
      `}</style>

      <div className="hero-container">
        {/* LEFT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Web and App Developer</h1>

          {/* Skill Rotator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Skills />
          </motion.div>

          {/* Paragraphs */}
          <div className="hero-paragraphs-row">
            {[
              "Hi! I'm Abhishek Agrahari, a front-end developer with 1.5 years of experience crafting responsive and user-friendly web applications that deliver real value.",
              "My goal is to continuously grow as a developer, contribute to impactful products, and master performance-driven front-end architectures that create seamless digital experiences."
            ].map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-image">
            <img
              src={laptopImage}
              alt="3D Engineering Illustration"
              style={{
                width: '100%',
                height: 'auto',
                minHeight: '400px', // or whatever height looks good
                objectFit: 'cover',
                display: 'block'
              }}
            />

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="scroll-mouse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="mouse">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="scroll-wheel"
          />
        </div>
      </motion.a>
    </section>
  );
};

export default Home;
