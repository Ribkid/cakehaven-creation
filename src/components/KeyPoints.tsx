import { Star, Clock, Cake, Sparkles, Award, ChefHat, Heart } from "lucide-react";

const KeyPoints = () => {
  const points = [
    {
      icon: <Cake className="text-gold" />,
      title: "Fully Customized Creations",
      description: "Every cake is uniquely designed and crafted to your exact specifications"
    },
    {
      icon: <ChefHat className="text-gold" />,
      title: "Professional Expertise",
      description: "Created by a professional pastry chef with years of experience"
    },
    {
      icon: <Clock className="text-gold" />,
      title: "Quick Turnaround",
      description: "48-hour turnaround available, including last-minute orders"
    },
    {
      icon: <Sparkles className="text-gold" />,
      title: "Made From Scratch",
      description: "Every component is freshly made using premium ingredients"
    },
    {
      icon: <Star className="text-gold" />,
      title: "Custom Flavors",
      description: "Choose from our extensive flavor menu or request your own unique combination"
    },
    {
      icon: <Heart className="text-gold" />,
      title: "Taste & Beauty Combined",
      description: "Stunning designs that taste as incredible as they look"
    }
  ];

  return (
    <section className="bg-cream py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-serif text-brown-dark text-center mb-12 animate-fade-up">
          Why Choose Our Cakes?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cream rounded-full">
                  {point.icon}
                </div>
                <h3 className="text-xl font-serif text-brown-dark">
                  {point.title}
                </h3>
              </div>
              <p className="text-brown leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;