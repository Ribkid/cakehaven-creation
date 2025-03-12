
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-cursive text-brown-dark mb-4">Our Cake Gallery</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brown to-brown-light mx-auto mb-6"></div>
          <p className="text-brown max-w-2xl mx-auto text-lg">
            Browse our collection of custom-designed cakes, each one crafted with care and creativity.
            From birthday celebrations to special events, we bring your cake dreams to life.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList className="w-full justify-center bg-cream/50 border border-brown/10 mb-12 rounded-full p-1">
              <TabsTrigger value="all" className="text-brown data-[state=active]:bg-white rounded-full data-[state=active]:text-brown-dark transition-all duration-300">All Cakes</TabsTrigger>
              <TabsTrigger value="birthday" className="text-brown data-[state=active]:bg-white rounded-full data-[state=active]:text-brown-dark transition-all duration-300">Birthday</TabsTrigger>
              <TabsTrigger value="custom" className="text-brown data-[state=active]:bg-white rounded-full data-[state=active]:text-brown-dark transition-all duration-300">Custom</TabsTrigger>
              <TabsTrigger value="celebration" className="text-brown data-[state=active]:bg-white rounded-full data-[state=active]:text-brown-dark transition-all duration-300">Celebration</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="all">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {allCakes.map((image, index) => (
                <GalleryItem 
                  key={index}
                  image={image}
                  setSelectedImage={setSelectedImage}
                  variants={item}
                />
              ))}
            </motion.div>
          </TabsContent>

          {["birthday", "custom", "celebration"].map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {allCakes
                  .filter(cake => cake.category === category)
                  .map((image, index) => (
                    <GalleryItem 
                      key={index}
                      image={image}
                      setSelectedImage={setSelectedImage}
                      variants={item}
                    />
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative max-w-4xl max-h-[90vh] w-full bg-white p-2 rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-4 -right-4 bg-brown-dark text-white p-2 rounded-full hover:bg-brown transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={18} />
            </button>
            <img
              src={selectedImage}
              alt="Selected cake"
              className="w-full h-full object-contain rounded-md"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

interface GalleryItemProps {
  image: {
    src: string;
    alt: string;
    category: string;
  };
  setSelectedImage: (src: string) => void;
  variants: any;
}

const GalleryItem = ({ image, setSelectedImage, variants }: GalleryItemProps) => {
  return (
    <motion.div 
      variants={variants}
      className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-64"
      onClick={() => setSelectedImage(image.src)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-sm">{image.alt}</h3>
        <span className="text-cream/80 text-xs capitalize">
          {image.category} Cake
        </span>
      </div>
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </motion.div>
  );
};

export default Gallery;
