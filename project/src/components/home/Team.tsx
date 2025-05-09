import React from 'react';
import { teamData } from '../../data/teamData';
import AnimatedElement from '../../components/AnimatedElement';

const Team = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet The <span className="gradient-text">Team</span>
            </h2>
            <p className="text-[rgb(var(--cc-text-rgb))] max-w-3xl mx-auto">
              Our leadership team brings decades of experience in sales, 
              operations, and business development.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamData.map((member, index) => (
            <AnimatedElement key={member.id} delay={0.1 * (index % 5)}>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(var(--cc-gold-rgb))]/20 hover:border-[rgb(var(--cc-gold-rgb))]/40 transition-all duration-300">
                <div className="aspect-square mb-4 overflow-hidden rounded-2xl border-2 border-[rgb(var(--cc-gold-rgb))]/20 group">
                  <div className="w-full h-full relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className={`absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        member.name === "Faraz Siddiqui" || 
                        member.name === "Muhammad Zikrya" ||
                        member.name === "Xavier Khan" ||
                        member.name === "Ammar Ghouri"
                          ? "object-top" 
                          : "object-center"
                      }`}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-1 text-[rgb(var(--cc-text-rgb))]">{member.name}</h3>
                  <p className="text-[rgb(var(--cc-gold-rgb))] mb-2 text-sm">{member.role}</p>
                  <p className="text-[rgb(var(--cc-text-rgb))] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;