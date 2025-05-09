import React from 'react';
import { useEffect } from "react";
import { servicesData } from "../data/servicesData";
import AnimatedElement from "../components/AnimatedElement";
import { CircleDot, CheckCircle2 } from "lucide-react";
import Contact from "../components/home/Contact";

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Services | Corporate Combat';
    window.scrollTo(0, 0);
  }, []);

  const getServiceImage = (service: string) => {
    switch (service) {
      case "Digital Marketing":
        return "/services/dmarketing.png";
      case "Door to Door Sales Programs":
        return "/services/d2d.jpg";
      case "Entrepreneurship & Leadership Development":
        return "/services/leader.png";
      case "Custom Software Solutions":
        return "/services/software.png";
      default:
        return `https://images.pexels.com/photos/3400/pexels-photo-3400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-20">
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive revenue solutions designed to transform your business
            into a high-performance sales machine.
          </p>
          <button onClick={scrollToContact} className="button-primary">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {servicesData.map((service, index) => (
            <AnimatedElement key={service.id} delay={0.1 * (index % 3)} className="mb-16 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-[rgb(var(--cc-gold-rgb))]/10 p-4 rounded-lg mr-4">
                      <service.icon className="text-[rgb(var(--cc-gold-rgb))] w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {service.description}. Our team of experts will work closely with you to develop
                    a customized solution that meets your unique business needs and goals.
                  </p>
                  
                  <div className="bg-black/20 p-8 rounded-lg border border-cc-gold/20 mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-[rgb(var(--cc-text-rgb))]">Key Benefits</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center group">
                        <div className="relative flex-shrink-0">
                          <div className="h-4 w-4 rounded-full bg-[rgb(var(--cc-gold-rgb))]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[2] transition-all duration-300"></div>
                          <CheckCircle2 className="w-6 h-6 text-[rgb(var(--cc-gold-rgb))] relative z-10" />
                        </div>
                        <span className="ml-4 text-[rgb(var(--cc-text-rgb))] group-hover:text-[rgb(var(--cc-gold-rgb))] transition-colors duration-300">
                          Increased revenue and profitability
                        </span>
                      </li>
                      <li className="flex items-center group">
                        <div className="relative flex-shrink-0">
                          <div className="h-4 w-4 rounded-full bg-[rgb(var(--cc-gold-rgb))]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[2] transition-all duration-300"></div>
                          <CheckCircle2 className="w-6 h-6 text-[rgb(var(--cc-gold-rgb))] relative z-10" />
                        </div>
                        <span className="ml-4 text-[rgb(var(--cc-text-rgb))] group-hover:text-[rgb(var(--cc-gold-rgb))] transition-colors duration-300">
                          Improved sales team performance
                        </span>
                      </li>
                      <li className="flex items-center group">
                        <div className="relative flex-shrink-0">
                          <div className="h-4 w-4 rounded-full bg-[rgb(var(--cc-gold-rgb))]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[2] transition-all duration-300"></div>
                          <CheckCircle2 className="w-6 h-6 text-[rgb(var(--cc-gold-rgb))] relative z-10" />
                        </div>
                        <span className="ml-4 text-[rgb(var(--cc-text-rgb))] group-hover:text-[rgb(var(--cc-gold-rgb))] transition-colors duration-300">
                          Enhanced customer acquisition and retention
                        </span>
                      </li>
                      <li className="flex items-center group">
                        <div className="relative flex-shrink-0">
                          <div className="h-4 w-4 rounded-full bg-[rgb(var(--cc-gold-rgb))]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[2] transition-all duration-300"></div>
                          <CheckCircle2 className="w-6 h-6 text-[rgb(var(--cc-gold-rgb))] relative z-10" />
                        </div>
                        <span className="ml-4 text-[rgb(var(--cc-text-rgb))] group-hover:text-[rgb(var(--cc-gold-rgb))] transition-colors duration-300">
                          Streamlined operations and processes
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/20 p-8 rounded-lg border border-cc-gold/20">
                    <h3 className="text-2xl font-bold mb-6 text-[rgb(var(--cc-text-rgb))]">Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center group">
                          <div className="relative flex-shrink-0">
                            <div className="h-3 w-3 rounded-full bg-[rgb(var(--cc-gold-rgb))]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[2] transition-all duration-300"></div>
                            <CircleDot className="w-5 h-5 text-[rgb(var(--cc-gold-rgb))] relative z-10" />
                          </div>
                          <span className="ml-4 text-[rgb(var(--cc-text-rgb))] group-hover:text-[rgb(var(--cc-gold-rgb))] transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/30 p-8 rounded-lg border border-cc-gold/20 shadow-[0_0_30px_rgba(207,156,42,0.1)]">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <img 
                      src={getServiceImage(service.title)} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default ServicesPage;