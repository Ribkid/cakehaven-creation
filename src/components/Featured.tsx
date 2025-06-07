
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { Image, Star } from "lucide-react";
import CakeCarousel from "./CakeCarousel";
import { cn } from "@/lib/utils";

const cakes = [
  {
    title: "Custom Birthday Cakes Brisbane",
    description: "Personalized birthday cake designs for celebrations across Brisbane and Ipswich",
    image: "/lovable-uploads/a66c1bc4-f5d4-448e-8387-076d43f4c8ac.png",
  },
  {
    title: "Themed Celebration Cakes",
    description: "From farm animals to airplanes - custom themed cakes with local Brisbane delivery",
    image: "/lovable-uploads/d5346ebd-fa3e-4ed7-91ea-290ca6481b26.png",
  },
  {
    title: "Wedding Cakes Ipswich & Brisbane",
    description: "Elegant wedding cake designs with professional decorating and tiered specialties",
    image: "/lovable-uploads/6de14198-7217-4e51-8dfc-145b9a518f02.png",
  },
];

const Featured = () => {
  return (
    <section id="featured" className="py-16 bg-cream overflow-hidden">
      <div className="container">
        {/* New Carousel Section */}
        <CakeCarousel />
        
        <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-brown/20 to-transparent my-16"></div>
        
        <h2 className="text-4xl font-cursive text-brown-dark text-center mb-8 animate-fade-up">
          Brisbane & Ipswich Cake Specialties
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
                  <h3 className="text-2xl font-cursive text-brown-dark mb-2">
                    {cake.title}
                  </h3>
                  <p className="text-brown-light font-cursive">{cake.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section removed - now using Elfsight widget in OrderTestimonials */}

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-cursive text-brown-dark mb-6 animate-fade-up">
            Custom Cake Gallery - Brisbane & Ipswich
          </h3>
          <p className="text-lg font-cursive text-brown mb-6 max-w-2xl mx-auto">
            Discover our artisan cake creations, from wedding cakes to birthday celebrations. 
            Each custom design showcases our commitment to quality cake decorating across Brisbane and Ipswich.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
              <img
                src="/lovable-uploads/fada2d44-e418-4f7e-8555-17ffb22da323.png"
                alt="Custom birthday cake Brisbane design"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/8da62372-7190-478c-9f2c-aad64d5b47a0.png"
                alt="Wedding cake Ipswich specialty design"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/31b08536-3836-4802-99df-1a951d0eecc1.png"
                alt="Celebration cake Brisbane with custom decorating"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/57abade7-1bde-4e03-98cf-327aa9387c9e.png"
                alt="Artisan cake design Brisbane local baker"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-brown hover:bg-brown-dark text-cream px-8 py-4 rounded-lg transition-colors text-lg font-cursive shadow-md hover:shadow-lg"
            >
              <Image className="w-5 h-5" />
              View Full Brisbane & Ipswich Cake Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
