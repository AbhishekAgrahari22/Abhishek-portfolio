import React from 'react';
import { motion } from 'framer-motion';
import abhishekImage from '../assets/Abhishek_img.jpg';

const About = () => {
  return (
    <div id="about" style={{ scrollMarginTop: '100px' }}>
      <section
        style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 1rem', minHeight: '100vh' }}
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
            min-width: 300px;
            max-width: 420px;
            border-radius: 1.5rem;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: transform 0.4s ease, filter 0.4s ease;
            cursor: pointer;
          }

          .about-image:hover {
            transform: scale(1.04);
            filter: brightness(1.1);
          }

          .about-text {
            flex: 1;
            min-width: 300px;
            padding: 0 0.5rem;
          }

          .about-text h2 {
            font-size: 2.8rem;
            margin-bottom: 1.2rem;
            background: linear-gradient(90deg, #ffffff, #5ac8fa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .about-text p {
            font-size: 1.1rem;
            line-height: 1.9;
            color: #cccccc;
            text-align: justify;
            text-shadow: 0 0 1px rgba(255, 255, 255, 0.05);
          }

          @media (max-width: 768px) {
            .about-container {
              flex-direction: column;
              text-align: center;
            }

            .about-text h2 {
              font-size: 2rem;
            }

            .about-text p {
              text-align: center;
            }
          }
        `}</style>

        <div className="about-container">
          {/* Profile Image with Motion */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={abhishekImage}
              alt="Abhishek Agrahari"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* About Text with Animation */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h2>About Me</h2>
            <p>
              I'm <strong>Abhishek Agrahari</strong> — a creative, detail-oriented front-end developer with <strong>1.5 years of experience</strong> building performance-optimized, modern web and mobile applications.
              <br /><br />
              I specialize in <strong>React</strong>, <strong>JavaScript</strong>, and component-driven architecture, combining engineering rigor with refined UI/UX. I thrive on delivering seamless, user-focused experiences enhanced by animation and visual storytelling.
              <br /><br />
              Let’s build intuitive, scalable, and beautiful digital solutions together.
            </p>
          </motion.div>
        </div>
        
      </section>
    </div>
  );
};

export default About;
