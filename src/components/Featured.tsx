
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { Image, Star } from "lucide-react";
import CakeCarousel from "./CakeCarousel";
import { cn } from "@/lib/utils";

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
    image: "/lovable-uploads/99e42365-08c3-475b-921a-7e5c1e2108eb.png",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    comment: "The cake was absolutely stunning and delicious! Everyone at my daughter's birthday party was impressed. Will definitely order again!",
    rating: 5,
  },
  {
    name: "Michael P.",
    comment: "Our wedding cake was perfect - exactly what we envisioned. The tasting session was wonderful and helped us choose the perfect flavor combination.",
    rating: 5,
  },
  {
    name: "Emma T.",
    comment: "The attention to detail on my son's dinosaur cake was amazing. He was so excited when he saw it, and it tasted even better than it looked!",
    rating: 5,
  },
  {
    name: "David L.",
    comment: "Ordered a last-minute birthday cake and they came through beautifully. Great customer service and an absolutely delicious cake.",
    rating: 4,
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
                  <h3 className="text-2xl font-cursive text-brown-dark mb-2">
                    {cake.title}
                  </h3>
                  <p className="text-brown-light font-cursive">{cake.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 mb-16">
          <h2 className="text-4xl font-cursive text-brown-dark text-center mb-2 animate-fade-up">
            What Our Customers Say
          </h2>
          <p className="text-center text-brown mb-10 font-cursive max-w-xl mx-auto">
            We take pride in creating cakes that not only look amazing but taste delicious too. Here's what some of our happy customers have to say.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-brown/10"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: 'fade-up 0.5s ease-out forwards',
                  opacity: 0 
                }}
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-5 h-5", 
                        i < testimonial.rating ? "text-gold fill-gold" : "text-gray-300"
                      )} 
                    />
                  ))}
                </div>
                <p className="text-brown mb-4 italic font-cursive">"{testimonial.comment}"</p>
                <p className="text-brown-dark font-cursive">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-cursive text-brown-dark mb-6 animate-fade-up">
            Explore Our Gallery
          </h3>
          <div className="flex flex-col items-center space-y-4">
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
              <img
                src="/lovable-uploads/fada2d44-e418-4f7e-8555-17ffb22da323.png"
                alt="Gallery preview 1"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/8da62372-7190-478c-9f2c-aad64d5b47a0.png"
                alt="Gallery preview 2"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/31b08536-3836-4802-99df-1a951d0eecc1.png"
                alt="Gallery preview 3"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/lovable-uploads/57abade7-1bde-4e03-98cf-327aa9387c9e.png"
                alt="Gallery preview 4"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-brown hover:bg-brown-dark text-cream px-8 py-4 rounded-lg transition-colors text-lg font-cursive shadow-md hover:shadow-lg"
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
