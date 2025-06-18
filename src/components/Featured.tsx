
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { Image, Star, ArrowRight } from "lucide-react";
import CakeCarousel from "./CakeCarousel";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const cakes = [
  {
    title: "Birthday Cakes That Steal The Show",
    description: "Turn your celebration into the talk of Brisbane with cakes so stunning, your guests will be begging for the recipe (sorry, it's a secret!)",
    image: "/lovable-uploads/a66c1bc4-f5d4-448e-8387-076d43f4c8ac.png",
  },
  {
    title: "Themed Creations That Wow",
    description: "From whimsical fairy tales to epic superhero adventures - we bring your wildest cake dreams to life with flavors that match the magic",
    image: "/lovable-uploads/d5346ebd-fa3e-4ed7-91ea-290ca6481b26.png",
  },
  {
    title: "Wedding Cakes Worth The Happy Tears",
    description: "Your wedding cake should be as unforgettable as your 'I do' moment. We create edible masterpieces that taste even better than they look",
    image: "/lovable-uploads/6de14198-7217-4e51-8dfc-145b9a518f02.png",
  },
];

const Featured = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order');
  };

  return (
    <section id="featured" className="py-16 bg-cream overflow-hidden">
      <div className="container">
        {/* New Carousel Section */}
        <CakeCarousel />
        
        <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-brown/20 to-transparent my-16"></div>
        
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-elegant text-brown-dark mb-4 animate-fade-up">
            Why Brisbane Chooses Us For Life's Sweetest Moments
          </h2>
          <p className="text-xl text-brown max-w-3xl mx-auto font-clean leading-relaxed">
            Because ordinary cakes are for ordinary days, and your celebrations deserve something <strong>extraordinary</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cakes.map((cake, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-gold/20"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'fade-up 0.5s ease-out forwards',
                opacity: 0 
              }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="flex text-gold text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-elegant text-brown-dark mb-3">
                    {cake.title}
                  </h3>
                  <p className="text-brown font-clean leading-relaxed">{cake.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <Button
            onClick={handleOrderClick}
            className="bg-brown hover:bg-brown-dark text-cream text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-clean"
            size="lg"
          >
            Let's Create Your Dream Cake
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl lg:text-4xl font-elegant text-brown-dark mb-6 animate-fade-up">
            Brisbane's Most Instagram-Worthy Cake Gallery
          </h3>
          <p className="text-lg font-clean text-brown mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready for some serious cake envy? Browse through our gallery of edible art that's been making Brisbane's celebrations unforgettable. 
            <strong> Warning: May cause immediate cake cravings!</strong>
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="relative group">
                <img
                  src="/lovable-uploads/fada2d44-e418-4f7e-8555-17ffb22da323.png"
                  alt="Mind-blowing birthday cake that made Brisbane kids go crazy"
                  className="w-full h-40 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white font-clean font-semibold">😍 WOW!</span>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="/lovable-uploads/8da62372-7190-478c-9f2c-aad64d5b47a0.png"
                  alt="Wedding cake that made Brisbane couples cry happy tears"
                  className="w-full h-40 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white font-clean font-semibold">💕 LOVE!</span>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="/lovable-uploads/31b08536-3836-4802-99df-1a951d0eecc1.png"
                  alt="Celebration cake that stopped Brisbane parties in their tracks"
                  className="w-full h-40 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white font-clean font-semibold">🎉 PARTY!</span>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="/lovable-uploads/57abade7-1bde-4e03-98cf-327aa9387c9e.png"
                  alt="Custom cake design that blew Brisbane minds"
                  className="w-full h-40 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white font-clean font-semibold">🤯 AMAZING!</span>
                </div>
              </div>
            </div>
            
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-brown to-brown-dark hover:from-brown-dark hover:to-brown text-cream px-10 py-5 rounded-full transition-all duration-300 text-lg font-clean shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Image className="w-6 h-6" />
              See All The Sweet Magic
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
