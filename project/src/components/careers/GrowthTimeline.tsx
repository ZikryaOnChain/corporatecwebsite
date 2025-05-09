import React, { useState } from 'react';
import { revenueData } from '../../data/revenueData';
import AnimatedElement from '../AnimatedElement';

const GrowthTimeline = () => {
  const [activeYear, setActiveYear] = useState("2023");
  
  const activeData = revenueData.find(data => data.year === activeYear) || revenueData[revenueData.length - 1];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Growth <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-[rgb(var(--cc-text-rgb))] max-w-3xl mx-auto">
              Track our journey from a small team to a powerhouse revenue generator.
              Each year represents significant growth and new partnerships.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={0.2}>
          <div className="mb-12">
            <div className="flex justify-center space-x-2 md:space-x-4 mb-8 overflow-x-auto py-4">
              {revenueData.map((data) => (
                <button
                  key={data.year}
                  onClick={() => setActiveYear(data.year)}
                  className={`px-4 py-2 rounded-md transition-all min-w-16 ${
                    activeYear === data.year
                      ? 'bg-gradient-to-r from-[rgb(var(--cc-gold-rgb))] to-[rgb(var(--cc-accent-rgb))] text-[rgb(var(--cc-bg-rgb))] font-bold shadow-[0_0_10px_rgba(var(--cc-gold-rgb),0.3)]'
                      : 'bg-black/30 text-[rgb(var(--cc-text-rgb))] hover:text-[rgb(var(--cc-gold-rgb))]'
                  }`}
                >
                  {data.year}
                </button>
              ))}
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 md:p-10 rounded-lg border border-[rgb(var(--cc-gold-rgb))]/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-[rgb(var(--cc-text-rgb))]">
                    Year {activeYear}
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="text-[rgb(var(--cc-text-rgb))] mb-2">Revenue Generated</div>
                      <div className="text-4xl md:text-5xl font-bold gradient-text">
                        {activeData.revenue}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[rgb(var(--cc-text-rgb))] mb-2">Sales Representatives</div>
                      <div className="text-3xl font-bold text-[rgb(var(--cc-gold-rgb))]">
                        {activeData.reps}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-[rgb(var(--cc-text-rgb))] mb-2">Partner Companies</div>
                      <div className="flex flex-wrap gap-4 mt-2">
                        {activeData.companies.map((company, index) => (
                          <div key={index} className="bg-[rgb(var(--cc-gold-rgb))]/10 px-4 py-2 rounded-md border border-[rgb(var(--cc-gold-rgb))]/30">
                            <span className="text-[rgb(var(--cc-text-rgb))]">{company}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--cc-gold-rgb))]/20 to-[rgb(var(--cc-accent-rgb))]/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-7xl md:text-8xl font-bold gradient-text mb-2">
                        {activeYear}
                      </div>
                      <div className="text-xl md:text-2xl text-[rgb(var(--cc-text-rgb))]">
                        Growth Milestone
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default GrowthTimeline;