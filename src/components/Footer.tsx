import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Twitter, Instagram, Github, Rss, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
    { icon: Rss, href: '#', label: 'RSS Feed' }
  ];

  const footerLinks = {
    'Explore': ['Latest Posts', 'Categories', 'Archives', 'Popular'],
    'Connect': ['About', 'Contact', 'Newsletter', 'RSS Feed'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
  };

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">E</span>
                  </div>
                  <span className="text-2xl font-serif font-bold text-gradient">
                    Ethereal Thoughts
                  </span>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                  A creative sanctuary where thoughts transform into stories, 
                  and inspiration finds its voice. Join us on this beautiful journey 
                  of discovery and expression.
                </p>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-neutral-800 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 rounded-full transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Footer links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-neutral-400 flex items-center space-x-2"
            >
              <span>© 2024 Ethereal Thoughts. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and creativity.</span>
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-neutral-800 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ArrowUp className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;