import { Card, CardContent } from "./ui/card";

const cakes = [
  {
    title: "Wedding Cakes",
    description: "Elegant and customized for your special day",
    image: "/placeholder.svg",
  },
  {
    title: "Birthday Cakes",
    description: "Celebrate another year with our delicious creations",
    image: "/placeholder.svg",
  },
  {
    title: "Custom Cakes",
    description: "Your dream cake, exactly as you imagine it",
    image: "/placeholder.svg",
  },
];

const Featured = () => {
  return (
    <section id="featured" className="py-20 bg-cream">
      <div className="container">
        <h2 className="text-4xl font-serif text-brown-dark text-center mb-12">
          Our Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Featured;