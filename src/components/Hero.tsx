import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Hero = () => {
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
          onClick={() => window.location.href = '#featured'}
        >
          Order Your Cake
        </Button>
      </div>

      {/* Right side carousel */}
      <div className="hidden lg:block w-1/2 h-screen">
        <Carousel className="w-full h-full">
          <CarouselContent className="h-full">
            <CarouselItem className="h-full">
              <img
                src="/lovable-uploads/57abade7-1bde-4e03-98cf-327aa9387c9e.png"
                alt="Beautiful custom cake with blue frosting"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
            <CarouselItem className="h-full">
              <img
                src="/lovable-uploads/243900b8-b6a6-4aa9-9ce2-eed4c60a9c52.png"
                alt="Gothic themed cake with black roses"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
            <CarouselItem className="h-full">
              <img
                src="/lovable-uploads/35f68459-0077-4d2d-841a-c70bd5184ac4.png"
                alt="Heart shaped cake with gold pearls"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;