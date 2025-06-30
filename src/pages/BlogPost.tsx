import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Heart, MessageCircle, Share2, Tag, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-neutral-800 mb-4">Post Not Found</h1>
          <p className="text-neutral-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            <div className="mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                <Tag className="w-3 h-3 inline mr-1" />
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-neutral-500 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Ethereal Thoughts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-neutral-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-500 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-neutral max-w-none">
            <div className="text-lg leading-relaxed text-neutral-700 space-y-6">
              {post.content?.map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              )) || (
                <>
                  <p>
                    In our increasingly connected world, the concept of digital minimalism has emerged as a powerful antidote to the overwhelming presence of technology in our daily lives. This philosophy encourages us to be more intentional about our digital consumption, focusing on tools and platforms that truly add value to our existence.
                  </p>
                  <p>
                    The journey toward digital minimalism begins with a honest assessment of our current digital habits. How many hours do we spend scrolling through social media? How often do we check our phones throughout the day? These questions, while sometimes uncomfortable to answer, are essential for understanding our relationship with technology.
                  </p>
                  <p>
                    Digital minimalism isn't about rejecting technology entirely. Instead, it's about curating our digital environment to support our goals, values, and well-being. This might mean unsubscribing from newsletters that don't bring joy, deleting apps that consume time without providing value, or setting specific times for checking emails and social media.
                  </p>
                  <p>
                    The benefits of embracing digital minimalism extend far beyond just having more time. Many practitioners report improved focus, better sleep quality, stronger real-world relationships, and a greater sense of presence in their daily activities. By reducing digital noise, we create space for deeper thinking, creativity, and meaningful connections.
                  </p>
                  <p>
                    Starting your digital minimalism journey doesn't require dramatic changes overnight. Begin with small steps: turn off non-essential notifications, designate phone-free zones in your home, or commit to a daily digital sunset where you disconnect from devices an hour before bed. These small changes can lead to profound shifts in how you experience life.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Posts */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-8 text-center">
            Related Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-serif font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center space-x-3 text-xs text-neutral-500">
                        <span>{relatedPost.date}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;