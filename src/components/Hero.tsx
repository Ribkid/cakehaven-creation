
import { Button } from "./ui/button";
import { track } from '@vercel/analytics';
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    track('Hero CTA Click', { button: 'Order Your Cake' });
    navigate('/order');
  };

  const handleGalleryClick = () => {
    track('Hero Gallery Click', { button: 'View Gallery' });
    navigate('/gallery');
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-cream to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brown/10"></div>
        <div className="absolute top-1/4 -left-12 w-48 h-48 rounded-full bg-gold/10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-brown-light/10"></div>
      </div>

      <div className="container mx-auto z-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-brown inline-block text-sm font-medium tracking-wider border border-brown/20 rounded-full px-3 py-1 bg-white/50 backdrop-blur-sm font-clean">
              BRISBANE'S SWEETEST OBSESSION
            </span>
            <div className="flex text-gold">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-elegant mb-6 text-brown-dark leading-tight"
          >
            Dreams Made 
            <br />
            <span className="relative">
              Delicious
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/30 -z-10"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg lg:text-xl mb-8 text-brown leading-relaxed font-clean"
          >
            🎂 <strong>Imagine biting into pure magic.</strong> Every cake we create isn't just dessert—it's the centerpiece that transforms your celebration into an unforgettable memory. From show-stopping wedding masterpieces to birthday cakes that make kids (and adults!) squeal with joy.
            <br /><br />
            <Heart className="w-5 h-5 inline text-red-500 mr-2" />
            <em>Fresh-baked daily • Delivered across Brisbane • Made with love since day one</em>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              className="bg-brown hover:bg-brown-dark text-cream text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 font-clean"
              onClick={handleOrderClick}
              size="lg"
            >
              Start Your Sweet Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-brown text-brown hover:bg-brown hover:text-cream text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 font-clean"
              onClick={handleGalleryClick}
              size="lg"
            >
              See The Magic
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex items-center gap-4 text-sm text-brown-light font-clean"
          >
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Taking orders now
            </span>
            <span>|</span>
            <span>Same-day delivery available</span>
            <span>|</span>
            <span>100% satisfaction guaranteed</span>
          </motion.div>
        </motion.div>

        {/* Right side image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full hidden lg:block"
        >
          <div className="relative w-full">
            <div className="absolute -top-8 -left-8 w-full h-full border-2 border-brown/10 rounded-3xl z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-gold/20 rounded-3xl z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-white">
              <img
                src="/lovable-uploads/382ad5db-e7ad-47d3-bd8d-960d2a4f04f0.png"
                alt="Stunning custom wedding cake Brisbane - Beautiful pink celebration cake that will make your special day unforgettable"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl z-20 border border-brown/10">
              <p className="text-brown-dark font-elegant text-base">
                <span className="text-gold font-bold text-lg">★★★★★</span>
                <br />
                <span className="font-clean font-semibold">"Absolutely magical!"</span>
                <br />
                <span className="text-xs text-brown font-clean">- Sarah M., Brisbane</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
