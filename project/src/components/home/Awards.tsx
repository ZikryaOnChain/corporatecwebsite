import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AnimatedElement from '../AnimatedElement';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Awards = () => {
  const awards = [
    {
      name: "The Canada Cup 2016",
      image: "/awards/canadacup.png",
      objectPosition: "center 10%",
      objectFit: "contain"
    },
    {
      name: "Top Canada Recruiter 2016",
      image: "/awards/frecruiter.png",
      objectPosition: "center",
      objectFit: "contain"
    },
    {
      name: "Top Charity Office (PRA) 2016",
      image: "/awards/tcharity.png",
      objectPosition: "center",
      objectFit: "contain"
    },
    {
      name: "NAT1 2017",
      image: "/awards/nat1.png",
      objectPosition: "center",
      objectFit: "contain"
    },
    {
      name: "2019 Cup Champions",
      image: "/awards/cupchamp.png",
      objectPosition: "center",
      objectFit: "contain"
    },
    {
      name: "Challenger Cup 2019",
      image: "/awards/challenger.PNG",
      objectPosition: "center",
      objectFit: "contain"
    },
    {
      name: "3 Years Consecutive Champions",
      image: "/awards/3ychamp.png",
      objectPosition: "center",
      objectFit: "contain"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Awards & <span className="gradient-text">Recognitions</span>
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ 
              clickable: true,
              el: '.awards-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="awards-carousel mb-8"
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index}>
                <div className="group rounded-lg overflow-hidden transition-all duration-300 transform hover:translate-y-[-8px] hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={award.image} 
                      alt={award.name}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ 
                        objectFit: award.objectFit || 'cover',
                        objectPosition: award.objectPosition || 'center'
                      }}
                    />
                  </div>
                  <div className="p-4 relative mt-2">
                    <h3 className="font-bold text-xl text-center relative">
                      {award.name}
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-3/4 h-[2px]"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgb(var(--cc-gold-rgb)), transparent)',
                          boxShadow: '0 2px 10px 1px rgba(var(--cc-gold-rgb), 0.4)'
                        }}
                      ></div>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="awards-pagination flex justify-center gap-2 mt-8"></div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Awards;