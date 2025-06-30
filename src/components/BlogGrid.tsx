import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Tag, Heart, MessageCircle, Share2 } from 'lucide-react';

const BlogGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Lifestyle', 'Travel', 'Technology', 'Art', 'Philosophy'];

  const blogPosts = [
    {
      id: 1,
      title: "Digital Minimalism: Less Screen, More Life",
      excerpt: "Exploring how reducing our digital footprint can lead to a more fulfilling and present life.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Lifestyle",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      likes: 42,
      comments: 8
    },
    {
      id: 2,
      title: "The Hidden Gems of Kyoto's Temple Gardens",
      excerpt: "A journey through the serene and mystical temple gardens that capture the essence of Japanese aesthetics.",
      image: "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Travel",
      readTime: "5 min read",
      date: "Dec 5, 2024",
      likes: 67,
      comments: 12
    },
    {
      id: 3,
      title: "AI and Human Creativity: Partners or Rivals?",
      excerpt: "Examining the evolving relationship between artificial intelligence and human creative expression.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technology",
      readTime: "9 min read",
      date: "Dec 3, 2024",
      likes: 89,
      comments: 23
    },
    {
      id: 4,
      title: "The Renaissance of Analog Art in Digital Times",
      excerpt: "Why traditional art forms are experiencing a revival in our increasingly digital world.",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Art",
      readTime: "6 min read",
      date: "Nov 30, 2024",
      likes: 34,
      comments: 7
    },
    {
      id: 5,
      title: "The Philosophy of Slow Living",
      excerpt: "Embracing a slower pace of life as a form of resistance against modern society's rush.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Philosophy",
      readTime: "8 min read",
      date: "Nov 28, 2024",
      likes: 56,
      comments: 15
    },
    {
      id: 6,
      title: "Sustainable Fashion: Style with Conscience",
      excerpt: "How to build a wardrobe that's both stylish and environmentally responsible.",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Lifestyle",
      readTime: "5 min read",
      date: "Nov 25, 2024",
      likes: 78,
      comments: 19
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Latest <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Fresh perspectives and thoughtful insights on the topics that matter most.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                layout
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-neutral-700 text-sm font-medium rounded-full">
                        <Tag className="w-3 h-3 inline mr-1" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-neutral-500">
                        <span className="flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1 hover:text-primary-500 transition-colors cursor-pointer">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </span>
                        <button className="hover:text-primary-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;