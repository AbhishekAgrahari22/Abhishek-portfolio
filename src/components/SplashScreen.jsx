import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const SplashScreen = () => {
  const containerRef = useRef();

  // Mouse tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="splash"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(-45deg, #0f0f2d, #1f1f3d, #000000, #101030)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 15s ease infinite',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: '1000px',
        fontFamily: "'Inter', sans-serif",
        color: '#fff',
        position: 'relative',
      }}
    >
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Floating particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '3px',
            height: '3px',
            background: '#5ac8fa',
            borderRadius: '50%',
            opacity: 0.2 + Math.random() * 0.5,
            animation: `floatY ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Main Splash Content */}
      <motion.div
        ref={containerRef}
        style={{
          textAlign: 'center',
          zIndex: 10,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Name with character animation */}
        <h1
          style={{
            fontSize: '3.2rem',
            marginBottom: '1rem',
            fontWeight: 700,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[...`Abhishek Agrahari`].map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #ffffff, #3f5efb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Typing animation subtitle */}
        <h2
          style={{
            fontSize: '1.6rem',
            fontWeight: 400,
            color: '#ccc',
          }}
        >
          <TypeAnimation
            sequence={[
              'Web & App Developer',
              2000,
              'React & Flutter Specialist',
              2000,
              'Frontend Engineer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </h2>
      </motion.div>
    </section>
  );
};

export default SplashScreen;
