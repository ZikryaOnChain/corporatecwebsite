import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Building, Clock } from 'lucide-react';
import AnimatedElement from '../AnimatedElement';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Ready to transform your sales operations? Contact us today to discuss 
              how we can help you achieve extraordinary results.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement>
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cc-gold/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[rgb(var(--cc-gold-rgb))]/10 p-2 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-[rgb(var(--cc-gold-rgb))]" />
                </div>
                <h3 className="text-2xl font-bold text-[rgb(var(--cc-text-rgb))]">Send Us A Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="button-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.3}>
            <div className="flex flex-col h-full">
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cc-gold/20 mb-8 flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[rgb(var(--cc-gold-rgb))]/10 p-2 rounded-lg">
                    <Building className="w-6 h-6 text-[rgb(var(--cc-gold-rgb))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--cc-text-rgb))]">Contact Information</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[rgb(var(--cc-gold-rgb))]/10 p-3 rounded-full mr-4">
                      <MapPin className="text-[rgb(var(--cc-gold-rgb))]" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Our Location</h4>
                      <p className="text-gray-400">
                        12414 82 Ave<br />
                        Surrey, BC V3W 3E9<br />
                        Canada
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[rgb(var(--cc-gold-rgb))]/10 p-3 rounded-full mr-4">
                      <Phone className="text-[rgb(var(--cc-gold-rgb))]" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone Number</h4>
                      <p className="text-gray-400">
                        <a href="tel:+13853014900" className="hover:text-[rgb(var(--cc-gold-rgb))] transition-colors">
                          +1 (385) 301-4900
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[rgb(var(--cc-gold-rgb))]/10 p-3 rounded-full mr-4">
                      <Mail className="text-[rgb(var(--cc-gold-rgb))]" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email Address</h4>
                      <p className="text-gray-400">
                        <a href="mailto:info@corporatecombat.com" className="hover:text-[rgb(var(--cc-gold-rgb))] transition-colors">
                          info@corporatecombat.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cc-gold/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[rgb(var(--cc-gold-rgb))]/10 p-2 rounded-lg">
                    <Clock className="w-6 h-6 text-[rgb(var(--cc-gold-rgb))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--cc-text-rgb))]">Business Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 text-sm">
                  <div className="text-[rgb(var(--cc-text-rgb))]">Monday - Friday:</div>
                  <div className="text-gray-300">9:00 AM - 5:00 PM</div>
                  <div className="text-[rgb(var(--cc-text-rgb))]">Saturday:</div>
                  <div className="text-gray-300">Closed</div>
                  <div className="text-[rgb(var(--cc-text-rgb))]">Sunday:</div>
                  <div className="text-gray-300">Closed</div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;