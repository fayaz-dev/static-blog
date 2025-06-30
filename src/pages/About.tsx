import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Pen, Camera } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
              About <span className="text-gradient">Ethereal Thoughts</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Welcome to a space where creativity meets inspiration, and thoughts transform into beautiful stories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-neutral-800">
                Our Story
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Ethereal Thoughts was born from a simple belief: that everyone has a story worth telling and wisdom worth sharing. In a world filled with noise, we strive to create a sanctuary of thoughtful content that inspires, challenges, and delights.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our mission is to explore the beautiful intersection of creativity, mindfulness, and human experience through carefully crafted stories and insights.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Heart, title: 'Passion', description: 'Every piece is written with love and genuine care for our readers.' },
              { icon: Coffee, title: 'Comfort', description: 'Creating a cozy space where thoughts can flow freely and authentically.' },
              { icon: Pen, title: 'Craft', description: 'Dedicated to the art of storytelling and meaningful expression.' },
              { icon: Camera, title: 'Vision', description: 'Capturing moments and ideas that inspire and transform.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;