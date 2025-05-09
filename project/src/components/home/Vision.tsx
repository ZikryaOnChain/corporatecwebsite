import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import AnimatedElement from '../AnimatedElement';

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Vision</span>
              </h2>
              
              <p className="text-[rgb(var(--cc-text-rgb))] mb-6 leading-relaxed">
                Corporate Combat was founded with a singular mission: to create wealth through sales mastery. Over the past decade, we've proudly developed 11 millionaires and 100+ six-figure earners through our proprietary training methods and strategic partnerships. We don't just sell - we transform organizations by implementing battle-tested systems that consistently deliver exceptional results across industries.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-[rgb(var(--cc-gold-rgb))] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-[rgb(var(--cc-text-rgb))]">Proprietary sales methodology with proven track record</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[rgb(var(--cc-gold-rgb))] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-[rgb(var(--cc-text-rgb))]">Training programs that create six-figure earners</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[rgb(var(--cc-gold-rgb))] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-[rgb(var(--cc-text-rgb))]">Strategic partnerships with industry leaders</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[rgb(var(--cc-gold-rgb))] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-[rgb(var(--cc-text-rgb))]">Data-driven performance analytics</span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.3}>
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-[rgb(var(--cc-gold-rgb))]/20 shadow-[0_0_30px_rgba(var(--cc-gold-rgb),0.1)]">
              <h3 className="text-2xl font-bold mb-6 text-center text-[rgb(var(--cc-text-rgb))]">
                Ready to Join the Elite?
              </h3>
              
              <p className="text-[rgb(var(--cc-text-rgb))] mb-6 text-center">
                We're looking for the next generation of sales champions who are ready to crush targets and build extraordinary careers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                  <div className="text-3xl font-bold text-[rgb(var(--cc-gold-rgb))] mb-2">$207M</div>
                  <div className="text-sm text-[rgb(var(--cc-text-rgb))] text-center">Revenue Generated</div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                  <div className="text-3xl font-bold text-[rgb(var(--cc-gold-rgb))] mb-2">10+</div>
                  <div className="text-sm text-[rgb(var(--cc-text-rgb))] text-center">Years Experience</div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                  <div className="text-3xl font-bold text-[rgb(var(--cc-gold-rgb))] mb-2">100+</div>
                  <div className="text-sm text-[rgb(var(--cc-text-rgb))] text-center">Six-Figure Earners</div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                  <div className="text-3xl font-bold text-[rgb(var(--cc-gold-rgb))] mb-2">11</div>
                  <div className="text-sm text-[rgb(var(--cc-text-rgb))] text-center">Millionaires Created</div>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/careers" className="button-primary">
                  Explore Careers
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Vision;