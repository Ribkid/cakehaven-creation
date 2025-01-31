import { Card, CardContent } from "./ui/card";

const cakes = [
  {
    title: "Custom Birthday Cakes",
    description: "Personalized designs for your special day",
    image: "/lovable-uploads/611b457a-8483-45cc-94f8-c3deac059b48.png",
  },
  {
    title: "Theme Cakes",
    description: "From farm animals to airplanes - your imagination is the limit",
    image: "/lovable-uploads/31b08536-3836-4802-99df-1a951d0eecc1.png",
  },
  {
    title: "Elegant Celebration Cakes",
    description: "Simple, sophisticated designs with a touch of luxury",
    image: "/lovable-uploads/e0cbc0ec-20b2-47a1-807f-58c4cd30ed82.png",
  },
];

const additionalCakes = [
  {
    image: "/lovable-uploads/fada2d44-e418-4f7e-8555-17ffb22da323.png",
    alt: "Custom airplane themed cake",
  },
  {
    image: "/lovable-uploads/8da62372-7190-478c-9f2c-aad64d5b47a0.png",
    alt: "Birthday cake with pink flowers",
  }
];

const Featured = () => {
  return (
    <section id="featured" className="py-20 bg-cream">
      <div className="container">
        <h2 className="text-4xl font-serif text-brown-dark text-center mb-12">
          Our Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cakes.map((cake, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full h-64 object-cover"
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

        <h3 className="text-3xl font-serif text-brown-dark text-center mb-8">
          Recent Creations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalCakes.map((cake, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={cake.image}
                alt={cake.alt}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;