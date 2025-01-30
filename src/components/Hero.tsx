import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/57abade7-1bde-4e03-98cf-327aa9387c9e.png"
          alt="Beautiful custom cake with blue frosting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-up">
          Custom Cakes
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-up">
          Handcrafted with love and premium ingredients
        </p>
        <Button
          className="bg-cream text-brown-dark hover:bg-cream/90 text-lg px-8 py-6"
          onClick={() => window.location.href = '#featured'}
        >
          Order Your Cake
        </Button>
      </div>
    </div>
  );
};

export default Hero;