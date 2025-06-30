import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import BoltLogo from './components/BoltLogo';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import FloatingElements from './components/FloatingElements';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative overflow-x-hidden transition-colors duration-300">
          <ScrollProgress />
          <FloatingElements />
          <BoltLogo />
          
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 -z-10 transition-colors duration-300" />
          
          {/* Animated background shapes */}
          <div className="fixed inset-0 -z-10">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-200/30 to-accent-200/30 dark:from-primary-800/20 dark:to-accent-800/20 rounded-full blur-3xl transition-colors duration-300"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-200/20 to-primary-200/20 dark:from-accent-800/20 dark:to-primary-800/20 rounded-full blur-3xl transition-colors duration-300"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;