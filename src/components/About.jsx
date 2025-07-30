import React from 'react';
import { motion } from 'framer-motion';
import abhishekImage from '../assets/Abhishek_img.jpg';

const About = () => {
  return (
    <div id="about" style={{ scrollMarginTop: '100px' }}>
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1c1b1d 0%, #2e2c30 100%)',
          padding: '3rem 1.5rem',
          color: '#f0f0f0',
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

          .about-container {
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-wrap: wrap;
            gap: 3rem;
            max-width: 1100px;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
          }

          .about-image {
            flex: 1;
            min-width: 320px;
            max-width: 420px;
            border-radius: 1.5rem;
            overflow: hidden;
            box-shadow: 0 12px 35px rgba(0,0,0,0.3);
            transition: transform 0.4s ease, filter 0.4s ease;
            cursor: pointer;
          }

          .about-image:hover {
            transform: scale(1.03);
            filter: brightness(1.1);
          }

          .about-text {
            flex: 1;
            min-width: 300px;
          }

          .about-text h2 {
            font-size: 2.8rem;
            margin-bottom: 1.2rem;
            color: #ffffff;
            background: linear-gradient(90deg, #ffffff, #5ac8fa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .about-text p {
            font-size: 1.1rem;
            line-height: 1.9;
            color: #d5d5d5;
          }

          @media (max-width: 768px) {
            .about-container {
              flex-direction: column;
              text-align: center;
            }

            .about-text h2 {
              font-size: 2rem;
            }
          }
        `}</style>

        <div className="about-container">
          {/* Local 3D Illustration */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={abhishekImage}
              alt="3D Engineering Illustration"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                display: 'block',
                bjectFit: 'fill',
              }}
            />

          </motion.div>

          {/* Animated Text Content */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2>About Me</h2>
            <p>
              I'm Abhishek Agrahari — a creative, detail‑oriented front‑end developer with 1.5 years of experience delivering performance‑optimized, modern web and mobile applications.
              <br /><br />
              I specialize in React and modern JavaScript frameworks, blending engineering rigor with elegant UI. Passionate about UI/UX and animation, I love turning technical challenges into seamless, human‑focused experiences.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
