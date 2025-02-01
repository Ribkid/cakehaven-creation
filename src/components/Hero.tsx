import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [api, setApi] = useState<any>();

  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      // Handle slide change if needed
    });
  }, [api]);

  return (
    <div className="relative min-h-screen flex items-center bg-cream">
      {/* Left side content */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-6xl font-serif mb-6 text-brown-dark animate-fade-up">
          Homemade Taste, 
          <br />
          Professional Touch
        </h1>
        <p className="text-lg lg:text-xl mb-8 text-brown leading-relaxed animate-fade-up">
          Every cake we create brings back memories of warm kitchens and the comforting 
          aroma of freshly baked treats. Our recipes combine traditional homemade 
          goodness with professional expertise.
        </p>
        <Button
          className="bg-brown hover:bg-brown-dark text-cream text-lg px-8 py-6 self-start"
          onClick={() => window.location.href = '/order'}
        >
          Order Your Cake
        </Button>
      </div>

      {/* Right side carousel */}
      <div className="hidden lg:block w-1/2 h-screen">
        <Carousel
          className="w-full h-full"
          plugins={[plugin]}
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {[
              {
                src: "/lovable-uploads/57abade7-1bde-4e03-98cf-327aa9387c9e.png",
                alt: "Beautiful custom cake with blue frosting"
              },
              {
                src: "/lovable-uploads/243900b8-b6a6-4aa9-9ce2-eed4c60a9c52.png",
                alt: "Gothic themed cake with black roses"
              },
              {
                src: "/lovable-uploads/35f68459-0077-4d2d-841a-c70bd5184ac4.png",
                alt: "Heart shaped cake with gold pearls"
              },
              {
                src: "/lovable-uploads/ebabba16-8b40-4c9f-a761-f45895ffaca9.png",
                alt: "Purple rose cupcakes"
              },
              {
                src: "/lovable-uploads/972d5c83-ea94-4254-8bd2-f08abe57b4fe.png",
                alt: "Farm themed first birthday cake"
              },
              {
                src: "/lovable-uploads/fc14ed3a-214b-48f3-a31b-db886686c98f.png",
                alt: "Pink bunny birthday cake"
              }
            ].map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;