import React, { useEffect, useState } from 'react';
import { revenueData, totalRevenue } from '../../data/revenueData';
import AnimatedElement from '../AnimatedElement';
import { AnimatedNumber } from '../ui/animated-number';
import { SparklesCore } from '../ui/sparkles';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const [revenue, setRevenue] = useState(207000000);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleExploreClick = () => {
    navigate('/services');
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="rgba(207, 156, 42, 0.8)"
          speed={0.5}
        />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vh] aspect-square">
        <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--cc-gold-rgb))/40] via-[rgb(var(--cc-gold-rgb))/5] to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--cc-gold-rgb))/30] via-transparent to-transparent scale-90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--cc-gold-rgb))/20] to-transparent animate-pulse"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <AnimatedElement>
          <div className="relative mt-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-4 px-2">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute -inset-8 bg-gradient-radial from-[rgb(var(--cc-gold-rgb))/50] via-[rgb(var(--cc-gold-rgb))/20] to-transparent blur-2xl"></div>
                <span className="gradient-text relative inline-flex items-center">
                  $<AnimatedNumber value={revenue} className="mx-1" /> USD
                </span>
                <div className="absolute inset-0 bg-gradient-radial from-[rgb(var(--cc-gold-rgb))/30] to-transparent blur-xl"></div>
                <div className="absolute -inset-4 bg-gradient-radial from-[rgb(var(--cc-gold-rgb))/20] to-transparent blur-3xl animate-pulse"></div>
              </div>
            </h1>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <p className="text-base md:text-xl text-center text-[rgb(var(--cc-text-rgb))] mb-6 max-w-3xl mx-auto px-4">
            A decade of expertise, generating over {totalRevenue} in revenue for our partners. 
            We build sales champions and revenue machines that transform businesses.
          </p>
        </AnimatedElement>

        <AnimatedElement delay={0.4}>
          <div className="relative px-4 sm:px-6 md:px-8">
            <div className="bar-wrap mx-auto max-w-4xl mb-20">
              {revenueData.map((data, index) => (
                <div 
                  key={index} 
                  className="bar relative" 
                  style={{ 
                    '--h': animate ? data.barHeight : '0%' 
                  } as React.CSSProperties}
                  data-revenue={data.revenue}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-2">
                    {data.companies.map((company, i) => (
                      <img 
                        key={i}
                        src={`/${company}.png`}
                        alt={`${company} Logo`} 
                        className="w-3/4 h-auto brightness-0 invert opacity-50 hover:opacity-90 transition-all duration-300 hover:scale-110"
                      />
                    ))}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[rgb(var(--cc-text-rgb))]">
                    {data.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.8}>
          <div className="flex justify-center mt-20">
            <button 
              onClick={handleExploreClick}
              className="button-primary"
            >
              Explore Our Services
            </button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;