
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Flavours = () => {
  const cakeFlavours = [
    {
      name: "Classic Vanilla",
      description: "Light and airy vanilla chiffon cake layered with house-made raspberry compote",
      category: "classic",
      color: "bg-[#F5F1E3]"
    },
    {
      name: "Rich Chocolate",
      description: "Decadent chocolate cake made with premium cocoa powder",
      category: "classic",
      color: "bg-[#3A2618]"
    },
    {
      name: "Red Velvet",
      description: "Velvety smooth cake with a hint of cocoa and cream cheese frosting",
      category: "classic",
      color: "bg-[#A52A2A]"
    },
    {
      name: "Lemon Raspberry",
      description: "Zesty lemon cake with fresh raspberry filling",
      category: "fruit",
      color: "bg-[#FFF44F]"
    },
    {
      name: "Strawberry Champagne",
      description: "Elegant strawberry cake infused with champagne",
      category: "fruit",
      color: "bg-[#F7CAD0]"
    },
    {
      name: "Passionfruit Mango",
      description: "Tropical blend of passionfruit and mango in a light sponge",
      category: "fruit",
      color: "bg-[#FFC166]"
    },
    {
      name: "Salted Caramel",
      description: "Buttery caramel cake with a touch of sea salt",
      category: "specialty",
      color: "bg-[#C19A6B]"
    },
    {
      name: "Tiramisu",
      description: "Coffee-soaked layers with mascarpone cream",
      category: "specialty",
      color: "bg-[#E8DCCA]"
    },
    {
      name: "Matcha Green Tea",
      description: "Japanese matcha green tea cake with white chocolate",
      category: "specialty",
      color: "bg-[#BED792]"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-serif text-brown-dark mb-4">Our Flavours</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brown to-brown-light mx-auto mb-6"></div>
          <p className="text-brown mb-8 text-center max-w-2xl mx-auto text-lg">
            Discover our delicious range of cake flavours, each crafted with premium ingredients and years of expertise. 
            Whether you prefer classic, fruity, or specialty flavours, we have something to delight every palate.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto bg-cream/50 border border-brown/10 p-1 rounded-full">
              <TabsTrigger value="all" className="data-[state=active]:bg-white rounded-full data-[state=active]:text-brown-dark transition-all duration-300">All Flavours</TabsTrigger>
              <TabsTrigger value="classic" className="data-[state=active]:bg-white rounded-full data-[state=active]:text-brown-dark transition-all duration-300">Classic</TabsTrigger>
              <TabsTrigger value="fruit" className="data-[state=active]:bg-white rounded-full data-[state=active]:text-brown-dark transition-all duration-300">Fruit</TabsTrigger>
              <TabsTrigger value="specialty" className="data-[state=active]:bg-white rounded-full data-[state=active]:text-brown-dark transition-all duration-300">Specialty</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-12">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {cakeFlavours.map((flavour, index) => (
                  <motion.div key={flavour.name} variants={fadeInUp}>
                    <FlavourCard flavour={flavour} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {["classic", "fruit", "specialty"].map((category) => (
              <TabsContent key={category} value={category} className="mt-12">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {cakeFlavours
                    .filter((flavour) => flavour.category === category)
                    .map((flavour, index) => (
                      <motion.div key={flavour.name} variants={fadeInUp}>
                        <FlavourCard flavour={flavour} index={index} />
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

interface FlavourCardProps {
  flavour: {
    name: string;
    description: string;
    category: string;
    color: string;
  };
  index: number;
}

const FlavourCard = ({ flavour, index }: FlavourCardProps) => {
  return (
    <Card className="bg-white/90 backdrop-blur hover:shadow-xl transition-all duration-300 overflow-hidden h-full border-brown/10 group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brown-light to-gold"></div>
      <div className={`h-24 w-24 rounded-full ${flavour.color} absolute -top-8 -right-8 opacity-20 group-hover:scale-150 transition-transform duration-500 ease-out`}></div>
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full ${flavour.color} mr-3 shadow-sm`}></div>
          <CardTitle className="text-xl text-brown-dark font-serif">{flavour.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-brown">{flavour.description}</p>
      </CardContent>
    </Card>
  );
};

export default Flavours;
