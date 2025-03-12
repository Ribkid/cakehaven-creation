
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
            basic: 90,
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
            basic: 90,
            advanced: 140
          },
          note: "Great for office parties"
        },
        {
          size: "Half Sheet",
          servings: "Serves 50 people",
          prices: {
            basic: 90,
            advanced: 180
          },
          note: "Perfect for larger gatherings"
        },
        {
          size: "Full Sheet",
          servings: "Serves 90 people",
          prices: {
            basic: 90,
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
            basic: 90,
            advanced: 75
          },
          note: "Perfect for any occasion"
        }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-serif text-brown-dark mb-4">
            Our Pricing
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brown to-brown-light mx-auto mb-6"></div>
          <p className="text-brown mb-8 max-w-2xl mx-auto text-lg">
            All our cakes are made with premium ingredients and decorated with attention to detail. 
            Choose between our Basic and Advanced options to suit your needs and budget.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {cakes.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-brown/20 w-16"></div>
                <h2 className="text-3xl font-serif text-brown-dark text-center">
                  {category.category}
                </h2>
                <div className="h-px bg-brown/20 w-16"></div>
              </div>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.items.map((item, itemIdx) => (
                  <motion.div key={itemIdx} variants={item}>
                    <Card className="bg-white backdrop-blur-sm border-brown/10 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative h-full">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brown-light to-gold"></div>
                      <CardHeader className="pt-8">
                        <CardTitle className="text-2xl text-brown-dark font-serif">
                          {item.size}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <Badge variant="outline" className="bg-cream/50 text-brown border-brown/20 px-3 py-1">
                          {item.servings}
                        </Badge>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 rounded-lg bg-cream/30 border border-brown/10">
                            <span className="text-brown font-medium">Basic</span>
                            <span className="font-semibold text-brown-dark text-xl">
                              {typeof item.prices.basic === 'number' ? `$${item.prices.basic}` : item.prices.basic}
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-3 rounded-lg bg-brown/5 border border-brown/10">
                            <span className="text-brown font-medium">Advanced</span>
                            <span className="font-semibold text-brown-dark text-xl">
                              {typeof item.prices.advanced === 'number' ? `$${item.prices.advanced}` : item.prices.advanced}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-brown/80 italic pt-2 border-t border-brown/10">{item.note}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-brown/10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif text-brown-dark mb-6 text-center">About Our Options</h3>
          <div className="grid md:grid-cols-2 gap-8 text-brown">
            <div className="space-y-3 p-4 rounded-xl bg-cream/30 border border-brown/10">
              <h4 className="font-semibold text-brown-dark text-lg flex items-center">
                <span className="w-8 h-8 rounded-full bg-brown text-white flex items-center justify-center mr-2 text-sm">1</span>
                Basic
              </h4>
              <p className="pl-10">Includes classic decorations with your choice of our standard flavors and basic design elements.</p>
            </div>
            <div className="space-y-3 p-4 rounded-xl bg-cream/30 border border-brown/10">
              <h4 className="font-semibold text-brown-dark text-lg flex items-center">
                <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center mr-2 text-sm">2</span>
                Advanced
              </h4>
              <p className="pl-10">Features premium decorations, multiple flavors, advanced design elements, and special finishing touches.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
