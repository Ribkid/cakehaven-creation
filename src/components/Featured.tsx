
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { Image } from "lucide-react";

const cakes = [
  {
    title: "Custom Birthday Cakes",
    description: "Personalized designs for your special day",
    image: "/lovable-uploads/a66c1bc4-f5d4-448e-8387-076d43f4c8ac.png",
  },
  {
    title: "Theme Cakes",
    description: "From farm animals to airplanes - your imagination is the limit",
    image: "/lovable-uploads/d5346ebd-fa3e-4ed7-91ea-290ca6481b26.png",
  },
  {
    title: "Elegant Celebration Cakes",
    description: "Simple, sophisticated designs with a touch of luxury",
    image: "/lovable-uploads/42c9cf37-22d3-4633-9508-75b2eea83a93.png",
  },
];

const Featured = () => {
  return (
    <section id="featured" className="py-12 bg-cream overflow-hidden">
      <div className="container">
        <h2 className="text-4xl font-serif text-brown-dark text-center mb-8 animate-fade-up relative inline-block mx-auto after:content-[''] after:block after:w-full after:h-1 after:bg-brown/20 after:mt-2">
          Our Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {cakes.map((cake, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'fade-up 0.5s ease-out forwards',
                opacity: 0 
              }}
            >
              <CardContent className="p-0">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-brown-dark mb-2">
                    {cake.title}
                  </h3>
                  <p className="text-brown-light">{cake.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-3xl font-serif text-brown-dark mb-6 animate-fade-up relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-brown/20 after:mt-2">
            Explore Our Gallery
          </h3>
          <div className="flex flex-col items-center space-y-4">
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
              <img
                src="/lovable-uploads/fada2d44-e418-4f7e-8555-17ffb22da323.png"
                alt="Gallery preview 1"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/8da62372-7190-478c-9f2c-aad64d5b47a0.png"
                alt="Gallery preview 2"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/31b08536-3836-4802-99df-1a951d0eecc1.png"
                alt="Gallery preview 3"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/57abade7-1bde-4e03-98cf-327aa9387c9e.png"
                alt="Gallery preview 4"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-brown hover:bg-brown-dark text-cream px-8 py-4 rounded-lg transition-colors text-lg font-semibold shadow-md hover:shadow-lg"
            >
              <Image className="w-5 h-5" />
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
