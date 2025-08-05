import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { label: 'JS', name: 'JavaScript', bg: '#f7df1e', color: '#000' },
  { label: 'TS', name: 'TypeScript', bg: '#3178c6', color: '#fff' },
  { label: 'RE', name: 'React', bg: '#61dafb', color: '#000' },
  { label: 'RX', name: 'Redux', bg: '#764abc', color: '#fff' },
  { label: 'BT', name: 'Bootstrap', bg: '#7952b3', color: '#fff' },
  { label: 'TW', name: 'Tailwind', bg: '#38bdf8', color: '#000' },
  { label: 'FL', name: 'Flutter', bg: '#02569B', color: '#fff' },
];

const Skills = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % skills.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const current = skills[index];

  return (
<section id="skills" style={{ 
//   padding: '1rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  fontFamily: 'sans-serif'
}}>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex',
            flexDirection: 'Row',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '1.2rem',
          }}
        >
          <span
            style={{
              backgroundColor: current.bg,
              color: current.color,
              padding: '0.2rem 0.5rem',
              borderRadius: '0.4rem',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            {current.label}
          </span>
          <span style={{ color: '#999', fontWeight: 400 }}>{current.name}</span>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
