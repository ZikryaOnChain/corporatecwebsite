import React from 'react';
import { servicesData } from '../../data/servicesData';
import AnimatedElement from '../AnimatedElement';
import { CircleDot } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[rgb(var(--cc-text-rgb))] max-w-3xl mx-auto">
              We provide comprehensive business development and revenue generation services 
              designed to transform your organization into a high-performance operation.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <AnimatedElement key={service.id} delay={0.1 * (index % 2)}>
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-[rgb(var(--cc-gold-rgb))]/20 hover:border-[rgb(var(--cc-gold-rgb))]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--cc-gold-rgb),0.1)] group">
                <div className="flex items-center mb-6">
                  <div className="bg-[rgb(var(--cc-gold-rgb))]/10 p-3 rounded-lg mr-4 group-hover:bg-[rgb(var(--cc-gold-rgb))]/20 transition-all duration-300">
                    <service.icon className="text-[rgb(var(--cc-gold-rgb))] w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--cc-text-rgb))]">{service.title}</h3>
                </div>
                
                <p className="text-[rgb(var(--cc-text-rgb))] mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center group/item">
                      <div className="relative flex-shrink-0">
                        <div className="h-3 w-3 rounded-full bg-[rgb(var(--cc-gold-rgb))]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/item:scale-[2] transition-all duration-300"></div>
                        <CircleDot className="w-5 h-5 text-[rgb(var(--cc-gold-rgb))] relative z-10" />
                      </div>
                      <span className="ml-4 text-[rgb(var(--cc-text-rgb))] group-hover/item:text-[rgb(var(--cc-gold-rgb))] transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.4}>
          <div className="text-center mt-12">
            <a href="#contact" className="button-primary">
              Get Started
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Services;