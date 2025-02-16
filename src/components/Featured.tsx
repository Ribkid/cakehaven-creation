
import { Card, CardContent } from "./ui/card";

const cakes = [
  {
    title: "Custom Birthday Cakes",
    description: "Personalized designs for your special day",
    image: "/lovable-uploads/3883cdc6-8080-472b-be4f-6722431640d7.png",
  },
  {
    title: "Theme Cakes",
    description: "From farm animals to airplanes - your imagination is the limit",
    image: "/lovable-uploads/d5346ebd-fa3e-4ed7-91ea-290ca6481b26.png",
  },
  {
    title: "Elegant Celebration Cakes",
    description: "Simple, sophisticated designs with a touch of luxury",
    image: "/lovable-uploads/e0cbc0ec-20b2-47a1-807f-58c4cd30ed82.png",
  },
];

const additionalCakes = [
  {
    image: "/lovable-uploads/c5f89265-82b9-4843-9248-7d0b47557e6e.png",
    alt: "Elegant cream cake with gold accents and spiral design",
  },
  {
    image: "/lovable-uploads/8da62372-7190-478c-9f2c-aad64d5b47a0.png",
    alt: "Birthday cake with pink flowers",
  }
];

const Featured = () => {
  return (
    <section id="featured" className="py-20 bg-cream overflow-hidden">
      <div className="container">
        <h2 className="text-4xl font-serif text-brown-dark text-center mb-12 animate-fade-up">
          Our Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        <h3 className="text-3xl font-serif text-brown-dark text-center mb-8 animate-fade-up">
          Recent Creations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalCakes.map((cake, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ 
                animationDelay: `${(index + 4) * 200}ms`,
                animation: 'fade-up 0.5s ease-out forwards',
                opacity: 0 
              }}
            >
              <img
                src={cake.image}
                alt={cake.alt}
                className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
