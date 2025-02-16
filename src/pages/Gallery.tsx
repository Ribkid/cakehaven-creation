
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 bg-cream">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-cursive text-brown-dark mb-8 text-center">Our Cake Gallery</h1>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-center bg-cream border border-brown/20 mb-8">
            <TabsTrigger value="all" className="text-brown">All Cakes</TabsTrigger>
            <TabsTrigger value="birthday" className="text-brown">Birthday</TabsTrigger>
            <TabsTrigger value="custom" className="text-brown">Custom</TabsTrigger>
            <TabsTrigger value="celebration" className="text-brown">Celebration</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/lovable-uploads/31a2e79f-957b-4fa6-b50d-203d70e01035.png", alt: "Custom Birthday Cake - Kieren", category: "birthday" },
              { src: "/lovable-uploads/16439788-f1b3-4ae4-9afe-3100055901d3.png", alt: "Dinosaur Fossil Birthday Cake", category: "birthday" },
              { src: "/lovable-uploads/b23d7760-20e9-49ef-b64d-524363c34691.png", alt: "Water Polo Themed Cake", category: "custom" },
              { src: "/lovable-uploads/63346d77-a2f3-4cba-86ef-178d8eef4934.png", alt: "Girl Guides 50th Anniversary Cake", category: "celebration" },
              { src: "/lovable-uploads/8d067daa-47f1-47ea-aee5-4195c89a3848.png", alt: "Fresh Flower Decorated Cake", category: "celebration" },
            ].map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-cream text-lg font-semibold text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="birthday" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/lovable-uploads/31a2e79f-957b-4fa6-b50d-203d70e01035.png", alt: "Custom Birthday Cake - Kieren" },
              { src: "/lovable-uploads/16439788-f1b3-4ae4-9afe-3100055901d3.png", alt: "Dinosaur Fossil Birthday Cake" },
            ].map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-cream text-lg font-semibold text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="custom" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/lovable-uploads/b23d7760-20e9-49ef-b64d-524363c34691.png", alt: "Water Polo Themed Cake" },
            ].map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-cream text-lg font-semibold text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="celebration" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/lovable-uploads/63346d77-a2f3-4cba-86ef-178d8eef4934.png", alt: "Girl Guides 50th Anniversary Cake" },
              { src: "/lovable-uploads/8d067daa-47f1-47ea-aee5-4195c89a3848.png", alt: "Fresh Flower Decorated Cake" },
            ].map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-cream text-lg font-semibold text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
