import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import BlogGrid from './components/BlogGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ScrollProgress />
      <FloatingElements />
      
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 -z-10" />
      
      {/* Animated background shapes */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-200/20 to-primary-200/20 rounded-full blur-3xl"
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
        <Hero />
        <FeaturedPosts />
        <BlogGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;