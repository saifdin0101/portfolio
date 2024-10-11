import React from 'react';
import { motion } from 'framer-motion';

const MotionFadeIn = ({ children, direction = "up", delay = 0 }) => {
  const fadeIn = (direction) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 100 : 0,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 0.8,
          delay: delay,
        },
      },
    };
  };

  return (
    <motion.div
      variants={fadeIn(direction)}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeIn;
