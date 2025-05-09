import React, { useEffect } from 'react';
import GrowthTimeline from '../components/careers/GrowthTimeline';
import CareersCTA from '../components/careers/CareersCTA';
import CultureGallery from '../components/careers/CultureGallery';
import AnimatedElement from '../components/AnimatedElement';

const CareersPage = () => {
  useEffect(() => {
    document.title = 'Careers | Corporate Combat';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join The <span className="gradient-text">Elite</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're building a team of exceptional individuals who are ready to crush targets, 
              develop their skills, and achieve extraordinary success.
            </p>
            <a href="#apply" className="button-primary">
              Join Our Team
            </a>
          </AnimatedElement>
        </div>
      </section>
      
      <GrowthTimeline />
      <CultureGallery />
      <div id="apply">
        <CareersCTA />
      </div>
    </main>
  );
};

export default CareersPage;