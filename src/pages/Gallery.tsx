
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 bg-cream">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-cursive text-brown-dark mb-8 text-center">Our Cake Gallery</h1>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-center bg-cream border border-brown/20 mb-8">
            <TabsTrigger value="all" className="text-brown">All Cakes</TabsTrigger>
            <TabsTrigger value="wedding" className="text-brown">Wedding</TabsTrigger>
            <TabsTrigger value="birthday" className="text-brown">Birthday</TabsTrigger>
            <TabsTrigger value="custom" className="text-brown">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729", alt: "Wedding Cake", category: "wedding" },
              { src: "https://images.unsplash.com/photo-1562777717-dc6984f65a63", alt: "Birthday Cake", category: "birthday" },
              { src: "https://images.unsplash.com/photo-1557308536-ee471ef2c390", alt: "Custom Cake", category: "custom" },
              { src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729", alt: "Celebration Cake", category: "birthday" },
              { src: "https://images.unsplash.com/photo-1562777717-dc6984f65a63", alt: "Anniversary Cake", category: "wedding" },
              { src: "https://images.unsplash.com/photo-1557308536-ee471ef2c390", alt: "Special Cake", category: "custom" },
            ].map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`${image.src}?w=600&h=400&fit=crop`}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-cream text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          {["wedding", "birthday", "custom"].map((category) => (
            <TabsContent 
              key={category} 
              value={category}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729", alt: `${category} Cake 1` },
                { src: "https://images.unsplash.com/photo-1562777717-dc6984f65a63", alt: `${category} Cake 2` },
                { src: "https://images.unsplash.com/photo-1557308536-ee471ef2c390", alt: `${category} Cake 3` },
              ].map((image, index) => (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={`${image.src}?w=600&h=400&fit=crop`}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-cream text-lg font-semibold">{image.alt}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
