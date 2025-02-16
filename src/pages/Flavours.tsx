
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Flavours = () => {
  const cakeFlavours = [
    {
      name: "Classic Vanilla",
      description: "Light and airy vanilla chiffon cake layered with house-made raspberry compote",
      category: "classic"
    },
    {
      name: "Rich Chocolate",
      description: "Decadent chocolate cake made with premium cocoa powder",
      category: "classic"
    },
    {
      name: "Red Velvet",
      description: "Velvety smooth cake with a hint of cocoa and cream cheese frosting",
      category: "classic"
    },
    {
      name: "Lemon Raspberry",
      description: "Zesty lemon cake with fresh raspberry filling",
      category: "fruit"
    },
    {
      name: "Strawberry Champagne",
      description: "Elegant strawberry cake infused with champagne",
      category: "fruit"
    },
    {
      name: "Passionfruit Mango",
      description: "Tropical blend of passionfruit and mango in a light sponge",
      category: "fruit"
    },
    {
      name: "Salted Caramel",
      description: "Buttery caramel cake with a touch of sea salt",
      category: "specialty"
    },
    {
      name: "Tiramisu",
      description: "Coffee-soaked layers with mascarpone cream",
      category: "specialty"
    },
    {
      name: "Matcha Green Tea",
      description: "Japanese matcha green tea cake with white chocolate",
      category: "specialty"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-brown-dark mb-8 text-center">Our Flavours</h1>
        <p className="text-brown mb-8 text-center max-w-2xl mx-auto">
          Discover our delicious range of cake flavours, each crafted with premium ingredients and years of expertise. 
          Whether you prefer classic, fruity, or specialty flavours, we have something to delight every palate.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="all">All Flavours</TabsTrigger>
            <TabsTrigger value="classic">Classic</TabsTrigger>
            <TabsTrigger value="fruit">Fruit</TabsTrigger>
            <TabsTrigger value="specialty">Specialty</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cakeFlavours.map((flavour) => (
                <Card key={flavour.name} className="bg-white/80 backdrop-blur hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-brown-dark">{flavour.name}</CardTitle>
                    <CardDescription className="text-brown">{flavour.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["classic", "fruit", "specialty"].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cakeFlavours
                  .filter((flavour) => flavour.category === category)
                  .map((flavour) => (
                    <Card key={flavour.name} className="bg-white/80 backdrop-blur hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-brown-dark">{flavour.name}</CardTitle>
                        <CardDescription className="text-brown">{flavour.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Flavours;
