import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Coffee, Feather, Palette } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { icon: Sparkles, color: 'text-primary-400', delay: 0 },
    { icon: Heart, color: 'text-red-400', delay: 2 },
    { icon: Star, color: 'text-accent-400', delay: 4 },
    { icon: Coffee, color: 'text-amber-400', delay: 6 },
    { icon: Feather, color: 'text-indigo-400', delay: 8 },
    { icon: Palette, color: 'text-pink-400', delay: 10 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} opacity-20`}
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        >
          <element.icon className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;