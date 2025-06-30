import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, Sparkles, Gift } from 'lucide-react';

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {/* Floating icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <motion.div
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Mail className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full"
              animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Gift className="w-6 h-6" />
            </motion.div>
          </div>

          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join the Journey
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Get weekly doses of inspiration, creativity tips, and exclusive content 
            delivered straight to your inbox.
          </motion.p>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-full text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Sparkles className="w-8 h-8 text-primary-500" />
                </motion.div>
                <h3 className="text-2xl font-serif font-bold mb-2">Welcome aboard!</h3>
                <p className="text-white/80">
                  Thank you for subscribing. Get ready for amazing content!
                </p>
              </motion.div>
            )}

            <p className="text-sm text-white/70 mt-4">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex justify-center space-x-8 mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-sm text-white/70">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-sm text-white/70">Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-white/70">Free</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;