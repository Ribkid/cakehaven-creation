
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const cakes = [
    {
      category: "Round Cakes",
      items: [
        {
          size: "6-inch Round",
          servings: "Serves 12 people",
          prices: {
            basic: 90,
            advanced: 110
          },
          note: "Perfect for intimate gatherings"
        },
        {
          size: "8-inch Round",
          servings: "Serves 24 people",
          prices: {
            basic: 120,
            advanced: 150
          },
          note: "Ideal for medium-sized celebrations"
        },
        {
          size: "10-inch Round",
          servings: "Available upon special request",
          prices: {
            basic: "Contact for pricing",
            advanced: "Contact for pricing"
          },
          note: "For larger celebrations"
        }
      ]
    },
    {
      category: "Sheet Cakes",
      items: [
        {
          size: "Quarter Sheet",
          servings: "Serves 20 people",
          prices: {
            basic: 110,
            advanced: 140
          },
          note: "Great for office parties"
        },
        {
          size: "Half Sheet",
          servings: "Serves 50 people",
          prices: {
            basic: 150,
            advanced: 180
          },
          note: "Perfect for larger gatherings"
        },
        {
          size: "Full Sheet",
          servings: "Serves 90 people",
          prices: {
            basic: 200,
            advanced: 230
          },
          note: "Ideal for big events and weddings"
        }
      ]
    },
    {
      category: "Cupcakes",
      items: [
        {
          size: "Dozen (12) Cupcakes",
          servings: "12 individual servings",
          prices: {
            basic: 50,
            advanced: 75
          },
          note: "Perfect for any occasion"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-brown-dark mb-4 text-center">
          Our Pricing
        </h1>
        <p className="text-brown mb-8 text-center max-w-2xl mx-auto">
          All our cakes are made with premium ingredients and decorated with attention to detail. 
          Choose between our Basic and Advanced options to suit your needs and budget.
        </p>
        
        <div className="space-y-12">
          {cakes.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-serif text-brown-dark text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card key={itemIdx} className="bg-white/80 backdrop-blur-sm border-brown/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-brown-dark">
                        {item.size}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-brown font-medium">{item.servings}</p>
                      <div className="space-y-2">
                        <p className="text-brown">
                          Basic: <span className="font-semibold">
                            {typeof item.prices.basic === 'number' ? `$${item.prices.basic}` : item.prices.basic}
                          </span>
                        </p>
                        <p className="text-brown">
                          Advanced: <span className="font-semibold">
                            {typeof item.prices.advanced === 'number' ? `$${item.prices.advanced}` : item.prices.advanced}
                          </span>
                        </p>
                      </div>
                      <p className="text-sm text-brown/80 italic">{item.note}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-brown/20">
          <h3 className="text-xl font-serif text-brown-dark mb-4">About Our Options</h3>
          <div className="space-y-4 text-brown">
            <p><span className="font-semibold">Basic:</span> Includes classic decorations with your choice of our standard flavors and basic design elements.</p>
            <p><span className="font-semibold">Advanced:</span> Features premium decorations, multiple flavors, advanced design elements, and special finishing touches.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
