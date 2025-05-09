import React, { useState } from 'react';
import AnimatedElement from '../AnimatedElement';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const CultureGallery = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = Array.from({ length: 24 }, (_, i) => ({
    src: `/culture/${i + 1}${
      (i + 1 >= 14 && i + 1 <= 19) || i + 1 === 2 ? '.JPG' : '.jpg'
    }`,
  }));

  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Culture</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At Corporate Combat, we work hard and celebrate success together. 
              Our culture is built on excellence, teamwork, and continuous growth.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
                onClick={() => {
                  setPhotoIndex(index);
                  setOpen(true);
                }}
              >
                <img
                  src={image.src}
                  alt={`Culture Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center">
                      <svg 
                        className="w-6 h-6 text-white/80" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedElement>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={photoIndex}
          slides={images}
        />
      </div>
    </section>
  );
};

export default CultureGallery;