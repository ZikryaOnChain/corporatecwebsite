import React, { useState } from 'react';
import AnimatedElement from '../AnimatedElement';
import { useNavigate } from 'react-router-dom';

const CareersCTA = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: ''
    });
    // Redirect to home page
    navigate('/');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cc-bg to-black">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="bg-black/40 backdrop-blur-sm p-10 rounded-lg border border-cc-gold/30 shadow-[0_0_30px_rgba(207,156,42,0.15)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join Our <span className="gradient-text">Elite Team</span>
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We're looking for extraordinary talent to join our team of revenue champions. 
                  At Corporate Combat, we don't just offer jobs - we build careers, develop leaders, 
                  and create millionaires.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-4">
                    <div className="text-3xl font-bold gradient-text mb-1">11</div>
                    <div className="text-sm text-[rgb(var(--cc-text-rgb))]">Millionaires Created</div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-3xl font-bold gradient-text mb-1">100+</div>
                    <div className="text-sm text-[rgb(var(--cc-text-rgb))]">Six-Figure Earners</div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-3xl font-bold gradient-text mb-1">300+</div>
                    <div className="text-sm text-[rgb(var(--cc-text-rgb))]">Team Members</div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-3xl font-bold gradient-text mb-1">40%</div>
                    <div className="text-sm text-[rgb(var(--cc-text-rgb))]">Annual Growth</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cc-gold mr-3"></div>
                    <span className="text-[rgb(var(--cc-text-rgb))]">Industry-leading commission structure</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cc-gold mr-3"></div>
                    <span className="text-[rgb(var(--cc-text-rgb))]">Comprehensive training program</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cc-gold mr-3"></div>
                    <span className="text-[rgb(var(--cc-text-rgb))]">International travel incentives</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cc-gold mr-3"></div>
                    <span className="text-[rgb(var(--cc-text-rgb))]">Clear path to leadership positions</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/20 p-8 rounded-lg border border-cc-gold/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-[rgb(var(--cc-text-rgb))]">Apply Now</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-[rgb(var(--cc-text-rgb))] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[rgb(var(--cc-text-rgb))] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-[rgb(var(--cc-text-rgb))] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-[rgb(var(--cc-text-rgb))] mb-2">
                      Position of Interest
                    </label>
                    <select
                      id="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                    >
                      <option value="">Select a position</option>
                      <option value="sales-representative">Sales Representative</option>
                      <option value="team-leader">Team Leader</option>
                      <option value="sales-trainer">Sales Trainer</option>
                      <option value="operations-manager">Operations Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[rgb(var(--cc-text-rgb))] mb-2">
                      Why do you want to join Corporate Combat?
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-cc-bg border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-cc-gold transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="button-primary w-full"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CareersCTA;