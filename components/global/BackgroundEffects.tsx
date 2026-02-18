'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

const createRandomMeteors = () => {
  return Array.from({ length: 5 }).map(() => ({
    top: `${Math.random() * 20}%`,
    left: `${Math.random() * 80 + 20}%`,
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 5,
  }));
};

export const BackgroundEffects = () => {
  // Compute all random values once
  const meteors = useMemo(() => {
    return createRandomMeteors();
  }, []);

  return (
    <>
      {/* Gradient Orb - top right */}
      <div className='fixed -top-40 right-0 size-96 bg-primary/20 rounded-full blur-[100px] opacity-60 dark:opacity-80 pointer-events-none' />

      {/* Gradient Orb - bottom left */}
      <div className='fixed bottom-32 -left-20 size-72 bg-blue-500/20 rounded-full blur-[100px] opacity-70 dark:opacity-40 pointer-events-none' />

      {/* Background pattern */}
      <div className='fixed inset-0 bg-background opacity-[0.03] pointer-events-none grid-pattern' />

      {/* Meteor effect */}
      {meteors.map((meteor, i) => {
        return (
          <motion.div
            key={i}
            className='meteor fixed opacity-60 dark:opacity-80'
            initial={{
              top: meteor.top,
              left: meteor.left,
              translateX: '0px',
            }}
            animate={{ translateX: '-500px', opacity: [0.9, 1, 1, 0] }}
            transition={{
              duration: meteor.duration,
              repeat: Infinity,
              delay: meteor.delay,
              ease: 'linear',
            }}
          />
        );
      })}
    </>
  );
};
