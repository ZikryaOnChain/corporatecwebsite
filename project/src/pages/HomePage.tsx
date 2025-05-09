import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Partners from '../components/home/Partners';
import Awards from '../components/home/Awards';
import Vision from '../components/home/Vision';
import Services from '../components/home/Services';
import Team from '../components/home/Team';
import Contact from '../components/home/Contact';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Corporate Combat | Sales, Leadership & Revenue Ops';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Partners />
      <Awards />
      <Vision />
      <Services />
      <Team />
      <Contact />
    </main>
  );
};

export default HomePage;