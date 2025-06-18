
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CakeCarousel = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cakes = [
    {
      id: 1,
      src: "/lovable-uploads/ba0b5b4f-dbe1-4912-8678-8cb9094b8cb2.png",
      alt: "Elegant buttercream cake with gold sprinkles",
      style: "Buttercream Swirl"
    },
    {
      id: 2,
      src: "/lovable-uploads/9a7c3d4e-bd7a-42dd-975b-21068bdf5482.png",
      alt: "Classic buttercream cake with gold and silver pearls",
      style: "Classic Celebration"
    },
    {
      id: 3,
      src: "/lovable-uploads/e7d96d7a-2c56-4d15-b865-b4626b25ca5c.png",
      alt: "Colorful cupcakes with two-tone swirl frosting",
      style: "Gourmet Cupcakes"
    },
    {
      id: 4,
      src: "/lovable-uploads/cb6fcf95-6e37-4dbb-90c3-095318b259d2.png",
      alt: "Golf-themed birthday cake with green frosting",
      style: "Sports Theme"
    },
    {
      id: 5,
      src: "/lovable-uploads/4378fa88-dfec-48f6-8bf7-d17076bab098.png", 
      alt: "Elegant buttercream cake with gold crumbs",
      style: "Gold Accent"
    },
    {
      id: 6,
      src: "/lovable-uploads/6746de6e-2e6d-47d7-9055-00c7e7ba9953.png",
      alt: "Mint green cake with fresh flowers and gold pearls",
      style: "Floral Elegance"
    },
    {
      id: 7,
      src: "/lovable-uploads/ceefad72-833c-4aea-9001-535d3621f06d.png",
      alt: "Gold lettered birthday cake",
      style: "Golden Celebration"
    },
    {
      id: 8,
      src: "/lovable-uploads/713a0c6a-6bda-4e0e-80b6-35334e025c52.png",
      alt: "Galaxy-themed blue cake with decorative sprinkles",
      style: "Galaxy Theme"
    },
    {
      id: 9,
      src: "/lovable-uploads/c5b2c8b8-259b-4763-8e1a-789553cd7245.png",
      alt: "Deep blue galaxy cake with sprinkles",
      style: "Cosmic Design"
    },
    {
      id: 10,
      src: "/lovable-uploads/df6403d7-9297-47e3-9531-7615ce345ac0.png",
      alt: "Pastel pink and blue square cakes",
      style: "Pastel Collection"
    },
    {
      id: 11,
      src: "/lovable-uploads/aa77b7d2-3ae0-4591-885f-0d7021694e2a.png",
      alt: "Collection of themed cakes including a race track design",
      style: "Custom Shapes"
    }
  ];

  return (
    <div className="py-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h2 className="cake-title mb-4">Our Latest Creations</h2>
        <p className="cake-text max-w-2xl mx-auto">
          Swipe through our most recent cake designs, each one handcrafted with love and creativity.
        </p>
      </motion.div>

      <Carousel
        className="max-w-5xl mx-auto px-4"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {cakes.map((cake, index) => (
            <CarouselItem key={cake.id} className="md:basis-1/2 lg:basis-1/3 h-80 pl-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigate('/gallery')}
              >
                <div className="relative h-full overflow-hidden rounded-xl group cursor-pointer">
                  <img
                    src={cake.src}
                    alt={cake.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white font-cursive text-xl mb-1"
                    >
                      {cake.style}
                    </motion.span>
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={hoveredIndex === index ? { width: "100%" } : { width: "0%" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="h-0.5 bg-gold mb-2"
                    />
                    <motion.span
                      initial={{ y: 10, opacity: 0 }}
                      animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-cream/90 text-sm"
                    >
                      Click to view in gallery
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-cream/80 text-brown text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                      New
                    </span>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 bg-cream/70 hover:bg-cream text-brown border-brown/20 hover:text-brown-dark">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="hidden md:flex -right-4 bg-cream/70 hover:bg-cream text-brown border-brown/20 hover:text-brown-dark">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>

      <div className="flex justify-center mt-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex space-x-1"
        >
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-brown/30"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CakeCarousel;
