import React from "react";
import { motion } from "framer-motion";
import abhishekImage from "../assets/abhishek.png";

const About = () => {
  return (
    <div id="about" style={{ scrollMarginTop: "100px" }}>
      <section
        style={{
          backgroundColor: "#0d0d0d",
          color: "#fff",
          padding: "5rem 1.5rem",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

          .about-container {
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-wrap: wrap;
            gap: 4rem;
            max-width: 1100px;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
          }

          .about-image {
            flex: 1;
            min-width: 300px;
            max-width: 400px;
            border-radius: 1.5rem;
            overflow: hidden;
            position: relative;
            box-shadow: 0 0 40px rgba(90, 200, 250, 0.15);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .about-image:hover {
            transform: scale(1.05);
            box-shadow: 0 0 60px rgba(90, 200, 250, 0.35);
          }

          .about-text {
            flex: 1;
            min-width: 300px;
            padding: 0 0.5rem;
          }

          .about-text h2 {
            font-size: 3rem;
            margin-bottom: 1.2rem;
            background: linear-gradient(90deg, #5ac8fa, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
          }

          .about-text p {
            font-size: 1.15rem;
            line-height: 1.9;
            color: #cccccc;
            text-align: justify;
            text-shadow: 0 0 1px rgba(255, 255, 255, 0.05);
          }

          .highlight {
            color: #5ac8fa;
            font-weight: 600;
          }

          .skills {
            margin-top: 2rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
          }

          .skill-badge {
            background: rgba(90, 200, 250, 0.1);
            color: #5ac8fa;
            border: 1px solid rgba(90, 200, 250, 0.2);
            border-radius: 8px;
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .skill-badge:hover {
            background: rgba(90, 200, 250, 0.25);
            transform: translateY(-3px);
          }

          @media (max-width: 900px) {
            .about-container {
              flex-direction: column;
              text-align: center;
            }

            .about-text h2 {
              font-size: 2.3rem;
            }

            .about-text p {
              text-align: center;
            }

            .skills {
              justify-content: center;
            }

            .about-image {
              max-width: 320px;
            }
          }
        `}</style>

        <div className="about-container">
          {/* Profile Image */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={abhishekImage}
              alt="Abhishek Agrahari"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2>About Me</h2>
            <p>
              I’m <span className="highlight">Abhishek Agrahari</span>, a
              passionate <span className="highlight">Flutter & React Developer</span> 
              with <span className="highlight">1.5+ years of experience</span> in
              crafting cross-platform mobile and web applications that are fast,
              user-friendly, and visually engaging.
              <br /><br />
              Currently working at{" "}
              <span className="highlight">RTF Insurance Brokers Pvt. Ltd.</span>, 
              I focus on building scalable apps using{" "}
              <span className="highlight">Flutter</span> for Android & iOS, 
              while developing modern dashboards in{" "}
              <span className="highlight">React.js</span> and{" "}
              <span className="highlight">Redux</span>.
              <br /><br />
              My goal is to design and engineer products that blend{" "}
              <span className="highlight">clean architecture</span>, 
              <span className="highlight"> smooth animations</span>, and 
              <span className="highlight"> delightful UX</span> — 
              creating digital experiences that truly stand out.
            </p>

            {/* Skills Section */}
            <div className="skills">
              <span className="skill-badge">Flutter</span>
              <span className="skill-badge">React.js</span>
              <span className="skill-badge">Redux</span>
              <span className="skill-badge">Firebase</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">REST API</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">Tailwind CSS</span>
              <span className="skill-badge">AWS</span>
              <span className="skill-badge">Figma</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
