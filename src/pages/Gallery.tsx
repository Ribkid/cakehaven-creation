import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const allCakes = [
    { src: "/lovable-uploads/46f0c743-b2db-495a-b89e-c3aebe67c208.png", alt: "Construction Themed Birthday Cake - Oliver", category: "birthday" },
    { src: "/lovable-uploads/72059ea2-4e6a-4f36-83ba-3328dd2b2e08.png", alt: "Cookies and Cream Drip Cake", category: "celebration" },
    { src: "/lovable-uploads/7f7d02eb-df36-4fd2-8e0c-6236415f5cfe.png", alt: "Fresh Flower White Cake", category: "celebration" },
    { src: "/lovable-uploads/78f74e6c-5a1e-4e99-96ca-4bbcc4479eac.png", alt: "Elegant White and Gold Rose Cake", category: "celebration" },
    { src: "/lovable-uploads/cceed335-0f3a-4a16-ad54-7b841b9bd0bb.png", alt: "Minecraft Themed Birthday Cake", category: "birthday" },
    { src: "/lovable-uploads/6de14198-7217-4e51-8dfc-145b9a518f02.png", alt: "Floral Birthday Sheet Cake", category: "birthday" },
    { src: "/lovable-uploads/c3673dc0-510f-4d2c-b5fe-6d59a66901aa.png", alt: "Sunflower Cupcake Collection", category: "custom" },
    { src: "/lovable-uploads/b7f37337-318b-4983-8654-989f2b1503ac.png", alt: "Elegant White and Gold Flower Cake", category: "celebration" },
    { src: "/lovable-uploads/31a2e79f-957b-4fa6-b50d-203d70e01035.png", alt: "Custom Birthday Cake - Kieren", category: "birthday" },
    { src: "/lovable-uploads/16439788-f1b3-4ae4-9afe-3100055901d3.png", alt: "Dinosaur Fossil Birthday Cake", category: "birthday" },
    { src: "/lovable-uploads/b23d7760-20e9-49ef-b64d-524363c34691.png", alt: "Water Polo Themed Cake", category: "custom" },
    { src: "/lovable-uploads/63346d77-a2f3-4cba-86ef-178d8eef4934.png", alt: "Girl Guides 50th Anniversary Cake", category: "celebration" },
    { src: "/lovable-uploads/8d067daa-47f1-47ea-aee5-4195c89a3848.png", alt: "Fresh Flower Decorated Cake", category: "celebration" },
    { src: "/lovable-uploads/4ce76a28-f9c7-4fa2-85d3-471ac7089951.png", alt: "Among Us Themed Birthday Cake", category: "birthday" },
    { src: "/lovable-uploads/bd79691a-d6f0-48e2-8e32-3403506eec21.png", alt: "Peach Frosted Cupcake Collection", category: "custom" },
    { src: "/lovable-uploads/fd4e5b13-5c3f-4125-86cd-49b2762aad9b.png", alt: "80th Birthday Train Themed Cake", category: "birthday" },
    { src: "/lovable-uploads/130401eb-2f82-4bd8-93dd-b2466be8cf14.png", alt: "21st Birthday Floral Cake", category: "birthday" },
    { src: "/lovable-uploads/eb855df0-8364-4a78-94f3-d676b1bf8ddc.png", alt: "70th Birthday Elegant Floral Cake", category: "birthday" },
    { src: "/lovable-uploads/6a207504-c925-4a3f-8284-9cbe55f2516a.png", alt: "Bob's Birthday Cake with Blue Design", category: "birthday" },
    { src: "/lovable-uploads/32348c3e-87ae-4506-8692-cdec03ababfe.png", alt: "Sunflower Theme Celebration Cake", category: "celebration" },
    { src: "/lovable-uploads/d1ad5bbb-09ac-4496-b492-8b369bd16e0d.png", alt: "Nut & Bolt Factory Anniversary Cake", category: "celebration" },
    { src: "/lovable-uploads/8a5118da-7f18-4b4a-9848-613016fd036c.png", alt: "Gold and Silver Pearl Decorated Cake", category: "celebration" },
    { src: "/lovable-uploads/4c53d181-5c79-45ff-8e10-13106a0bda15.png", alt: "Gold Dust Celebration Cake", category: "celebration" },
    { src: "/lovable-uploads/a2c687c1-4994-4124-97de-24729a81db11.png", alt: "Golf Theme Birthday Cake", category: "birthday" },
  ];

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
            {allCakes.map((image, index) => (
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
            {allCakes.filter(cake => cake.category === "birthday").map((image, index) => (
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
            {allCakes.filter(cake => cake.category === "custom").map((image, index) => (
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
            {allCakes.filter(cake => cake.category === "celebration").map((image, index) => (
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
