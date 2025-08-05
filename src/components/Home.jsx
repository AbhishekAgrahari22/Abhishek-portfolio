import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import RobotModel from './RobotModel';

const Home = () => {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <section
      id="home"
      onMouseMove={e => {
        mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      }}
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0f2d, #12121d)',
        color: '#fff',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <style>{`
        @keyframes pulseTech {
          0%,100% { transform: scale(1); opacity:0.6; }
          50% { transform: scale(1.4); opacity:1; }
        }
      `}</style>

      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: '18%',
        left: '12%',
        width: '500px',
        height: '500px',
        background: 'rgba(80,180,220,0.12)',
        filter: 'blur(140px)',
        borderRadius: '50%',
        animation: 'pulseTech 10s ease-in-out infinite',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '12%',
        width: '550px',
        height: '550px',
        background: 'rgba(200,200,255,0.08)',
        filter: 'blur(160px)',
        borderRadius: '50%',
        animation: 'pulseTech 12s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Main Content Container (Text + Robot) */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        padding: '4.5rem 2rem',
        flexWrap: 'wrap',
      }}>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ flex: '1 1 500px', minWidth: '300px' }}
        >
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '1.2rem',
            background: 'linear-gradient(90deg, #ffffff, #3fd6b9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            display: 'inline-block',
          }}>
            {"Engineering Digital Experiences".split('').map((c, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}>
                {c}
              </motion.span>
            ))}
          </h1>
          <h2 style={{ fontSize: '1.4rem', color: '#ccc' }}>
            <TypeAnimation
              sequence={[
                'Abhishek Agrahari', 2000,
                'Frontend Engineer', 2000,
                'React • Flutter • UI/UX', 2000,
                'Precision. Performance. Passion.', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h2>
        </motion.div>

        {/* Robot Section */}
        <div style={{
          flex: '1 1 500px',
          height: '600px',
          minWidth: '300px',
        }}>
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[4, 5, 5]} intensity={1} />
            <Environment preset="warehouse" />
            <OrbitControls enableZoom={false} enablePan={false} />
            <RobotModel mouse={mouse} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Home;




// import React from 'react';
// import { motion } from 'framer-motion';
// import Skills from '../pages/Skills';
// import laptopImage from '../assets/3d-rendering-laptop.jpg';

// const Home = () => {
//   return (
//     <section
//       id="home"
//       style={{
//         backgroundColor: '#000', color: '#fff', width: '100%',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//         justifyContent: 'center',
//         padding: '3rem 1.5rem',
//         overflow: 'hidden',
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

//         .hero-container {
//           max-width: 1100px;
//           margin: 0 auto;
//           padding: 4rem 2rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;
//           gap: 2rem;
//           font-family: 'Inter', sans-serif;
//         }

//         .hero-left {
//           flex: 1;
//           min-width: 320px;
//         }

//         .hero-left h1 {
//           font-size: 3.5rem;
//           font-weight: 700;
//           background: linear-gradient(90deg, #ffffff, #3f5efb);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .hero-paragraphs-row {
//           display: flex;
//           flex-direction: row;
//           gap: 2rem;
//           justify-content: center;
//           margin-top: 1.5rem;
//           flex-wrap: nowrap;
//         }

//         .hero-paragraphs-row p {
//           max-width: 450px;
//           font-size: 1.05rem;
//           line-height: 1.7;
//           color: #cccccc;
//           text-align: justify;
//         }

//         .hero-right {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//         }

//         .hero-image {
//           width: 520px;
//           border-radius: 1.5rem;
//           overflow: hidden;
//           box-shadow: 0 12px 40px rgba(0,0,0,0.3);
//           background-color: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           transition: transform 0.3s ease;
//         }

//         .hero-image:hover {
//           transform: scale(1.03);
//         }

//         .scroll-mouse {
//           position: absolute;
//           bottom: 2rem;
//           left: 50%;
//           transform: translateX(-50%);
//           text-decoration: none;
//           z-index: 10;
//         }

//         .mouse {
//           width: 34px;
//           height: 60px;
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 20px;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(6px);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.4);
//         }

//         .scroll-wheel {
//           width: 6px;
//           height: 6px;
//           background-color: #aaa;
//           border-radius: 50%;
//         }

//         @media (max-width: 768px) {
//           .hero-left h1 {
//             font-size: 2rem;
//             text-align: center;
//           }

//           .hero-container {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }

//           .hero-paragraphs-row {
//             flex-direction: column;
//             gap: 1.2rem;
//           }
//         }
//       `}</style>

//       <div className="hero-container">
//         {/* LEFT */}
//         <motion.div
//           className="hero-left"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1>Web and App Developer</h1>

//           {/* Skill Rotator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Skills />
//           </motion.div>

//           {/* Paragraphs */}
//           <div className="hero-paragraphs-row">
//             {[
//               "Hi! I'm Abhishek Agrahari, a front-end developer with 1.5 years of experience crafting responsive and user-friendly web applications that deliver real value.",
//               "My goal is to continuously grow as a developer, contribute to impactful products, and master performance-driven front-end architectures that create seamless digital experiences."
//             ].map((text, idx) => (
//               <motion.p
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//               >
//                 {text}
//               </motion.p>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           className="hero-right"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="hero-image">
//             <img
//               src={laptopImage}
//               alt="3D Engineering Illustration"
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 minHeight: '400px',
//                 objectFit: 'cover',
//                 display: 'block'
//               }}
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.a
//         href="#about"
//         className="scroll-mouse"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//       >
//         <div className="mouse">
//           <motion.span
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="scroll-wheel"
//           />
//         </div>
//       </motion.a>
//     </section>
//   );
// };

// export default Home;
