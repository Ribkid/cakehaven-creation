import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Beautiful cake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-up">
          Artisanal Cakes
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-up">
          Handcrafted with love and premium ingredients
        </p>
        <Button
          className="bg-cream text-brown-dark hover:bg-cream/90 text-lg px-8 py-6"
          onClick={() => window.location.href = '#featured'}
        >
          Explore Our Cakes
        </Button>
      </div>
    </div>
  );
};

export default Hero;