import React from 'react';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import BlogGrid from '../components/BlogGrid';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <BlogGrid />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;