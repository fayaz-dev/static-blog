import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Star } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const FeaturedPosts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 1);
  const secondaryPosts = blogPosts.slice(1, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Star className="w-6 h-6 text-accent-500" />
            <span className="text-accent-600 font-semibold uppercase tracking-wider text-sm">
              Featured Stories
            </span>
            <Star className="w-6 h-6 text-accent-500" />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6"
          >
            Curated with <span className="text-gradient">Love</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-2xl mx-auto"
          >
            Handpicked stories that inspire, challenge, and delight. 
            Each piece crafted to spark your imagination.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Main featured post */}
          {featuredPosts.length > 0 && (
            <Link to={`/blog/${featuredPosts[0].id}`}>
              <motion.article
                variants={itemVariants}
                className="lg:row-span-2 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift">
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <img
                      src={featuredPosts[0].image}
                      alt={featuredPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-4 text-sm mb-3">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPosts[0].date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPosts[0].readTime}</span>
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-accent-200 transition-colors">
                        {featuredPosts[0].title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                        {featuredPosts[0].category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {featuredPosts[0].excerpt}
                    </p>
                  </div>
                </div>
              </motion.article>
            </Link>
          )}

          {/* Secondary featured posts */}
          <div className="space-y-8">
            {secondaryPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <motion.article
                  variants={itemVariants}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
                    <div className="flex">
                      <div className="w-1/3 relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="w-2/3 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="text-lg font-serif font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center space-x-3 text-xs text-neutral-500">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPosts;