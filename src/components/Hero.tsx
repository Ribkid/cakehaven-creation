import { Button } from "./ui/button";

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
          onClick={() => window.location.href = '/order'}
        >
          Order Your Cake
        </Button>
      </div>

      {/* Right side image */}
      <div className="hidden lg:block w-1/2 h-screen">
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <img
            src="/lovable-uploads/382ad5db-e7ad-47d3-bd8d-960d2a4f04f0.png"
            alt="Beautiful pink celebration cake with piped decorations"
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;