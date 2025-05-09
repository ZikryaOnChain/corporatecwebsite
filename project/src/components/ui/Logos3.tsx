"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
  containerClassName?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Partners we worked with",
  logos = [
    {
      id: "logo-1",
      description: "Corporate Combat",
      image: "/firefly.png",
      className: "h-24 w-auto transform hover:scale-150 transition-all duration-500",
      containerClassName: "-mt-4"
    },
    {
      id: "logo-2",
      description: "Vivint",
      image: "/vivint.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-3",
      description: "Telus",
      image: "/telus.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-4",
      description: "AG",
      image: "/ag.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-5",
      description: "Artini",
      image: "/artini.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-6",
      description: "ADT",
      image: "/adt.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-8",
      description: "Orizon",
      image: "/orizon.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-9",
      description: "Greenfoot",
      image: "/greenfoot.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-10",
      description: "Paanwaala",
      image: "/paanwaala.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-11",
      description: "Vibrant",
      image: "/vibrant.png",
      className: "h-16 w-auto transform hover:scale-150 transition-all duration-500",
    },
    {
      id: "logo-12",
      description: "SmartHeaven",
      image: "/smartheaven.png",
      className: "h-20 w-auto transform hover:scale-150 transition-all duration-500",
      containerClassName: "-mt-2",
    },
    {
      id: "logo-13",
      description: "Swift",
      image: "/swift.png",
      className: "h-24 w-auto transform hover:scale-150 transition-all duration-500",
      containerClassName: "-mt-4"
    }
  ],
}: Logos3Props) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="gradient-text">{heading}</span>
        </h2>
        
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{
              loop: true,
              align: "start",
              dragFree: true,
            }}
            plugins={[
              AutoScroll({ 
                playOnInit: true, 
                stopOnInteraction: false,
                speed: 1
              })
            ]}
          >
            <CarouselContent className="-ml-1">
              {[...logos, ...logos].map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,156,42,0.4)] overflow-hidden group ${logo.containerClassName || ''}`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={`${logo.className} object-contain brightness-0 invert opacity-50 group-hover:opacity-90 transition-all duration-500`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cc-bg to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cc-bg to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };