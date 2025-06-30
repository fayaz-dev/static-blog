import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const BoltLogo = () => {
  const { isDarkMode } = useTheme();

  const logoUrl = isDarkMode 
    ? 'https://raw.githubusercontent.com/kickiniteasy/bolt-hackathon-badge/main/src/public/bolt-badge/white_circle_360x360/white_circle_360x360.png'
    : 'https://raw.githubusercontent.com/kickiniteasy/bolt-hackathon-badge/main/src/public/bolt-badge/black_circle_360x360/black_circle_360x360.png';

  return (
    <motion.div
      className="fixed top-20 right-4 md:right-8 z-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <motion.a
        href="https://bolt.new/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Powered by Bolt"
      >
        <div className="relative group">
          <img
            src={logoUrl}
            alt="Powered by Bolt"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl"
          />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
              Powered by Bolt
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900 dark:border-t-white"></div>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default BoltLogo;