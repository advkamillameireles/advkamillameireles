import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <BlogPreview />
      <Contact />
    </>
  );
};

export default Home;