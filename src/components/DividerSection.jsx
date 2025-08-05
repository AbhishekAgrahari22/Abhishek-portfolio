import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const DividerSection = () => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      d: [
        'M0 0 Q720 80 1440 0',   // pulled tight (up)
        'M0 0 Q720 200 1440 0',  // big sag (down)
        'M0 0 Q720 60 1440 0',   // tighter
        'M0 0 Q720 180 1440 0',  // looser
        'M0 0 Q720 150 1440 0',  // rest
      ],
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      d: 'M0 0 Q720 150 1440 0', // reset to resting curve
      transition: { duration: 0.6 },
    });
  };

  return (
    <div
      style={{
        background: '#000',
        height: '30vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="100%"
        height="100"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.path
          animate={controls}
          initial={{ d: 'M0 0 Q720 150 1440 0' }}
          fill="transparent"
          stroke="url(#ropeGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="ropeGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DividerSection; 