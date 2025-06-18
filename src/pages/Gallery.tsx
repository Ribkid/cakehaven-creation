import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

interface Cake {
  id: number;
  src: string;
  alt: string;
  category: string;
  rating: number;
}

const cakeData: Cake[] = [
  {
    id: 1,
    src: "/lovable-uploads/fada2d44-e418-4f7e-8555-17ffb22da323.png",
    alt: "Mind-blowing birthday cake that made Brisbane kids go crazy",
    category: "birthday",
    rating: 5,
  },
  {
    id: 2,
    src: "/lovable-uploads/8da62372-7190-478c-9f2c-aad64d5b47a0.png",
    alt: "Wedding cake that made Brisbane couples cry happy tears",
    category: "wedding",
    rating: 5,
  },
  {
    id: 3,
    src: "/lovable-uploads/31b08536-3836-4802-99df-1a951d0eecc1.png",
    alt: "Celebration cake that stopped Brisbane parties in their tracks",
    category: "celebration",
    rating: 5,
  },
  {
    id: 4,
    src: "/lovable-uploads/57abade7-1bde-4e03-98cf-327aa9387c9e.png",
    alt: "Custom cake design that blew Brisbane minds",
    category: "custom",
    rating: 5,
  },
  {
    id: 5,
    src: "/lovable-uploads/ba0b5b4f-dbe1-4912-8678-8cb9094b8cb2.png",
    alt: "Elegant buttercream cake with gold sprinkles",
    category: "wedding",
    rating: 5,
  },
  {
    id: 6,
    src: "/lovable-uploads/9a7c3d4e-bd7a-42dd-975b-21068bdf5482.png",
    alt: "Classic buttercream cake with gold and silver pearls",
    category: "birthday",
    rating: 5,
  },
  {
    id: 7,
    src: "/lovable-uploads/e7d96d7a-2c56-4d15-b865-b4626b25ca5c.png",
    alt: "Colorful cupcakes with two-tone swirl frosting",
    category: "cupcake",
    rating: 5,
  },
  {
    id: 8,
    src: "/lovable-uploads/cb6fcf95-6e37-4dbb-90c3-095318b259d2.png",
    alt: "Golf-themed birthday cake with green frosting",
    category: "birthday",
    rating: 5,
  },
  {
    id: 9,
    src: "/lovable-uploads/4378fa88-dfec-48f6-8bf7-d17076bab098.png",
    alt: "Elegant buttercream cake with gold crumbs",
    category: "wedding",
    rating: 5,
  },
  {
    id: 10,
    src: "/lovable-uploads/6746de6e-2e6d-47d7-9055-00c7e7ba9953.png",
    alt: "Mint green cake with fresh flowers and gold pearls",
    category: "wedding",
    rating: 5,
  },
  {
    id: 11,
    src: "/lovable-uploads/ceefad72-833c-4aea-9001-535d3621f06d.png",
    alt: "Gold lettered birthday cake",
    category: "birthday",
    rating: 5,
  },
  {
    id: 12,
    src: "/lovable-uploads/713a0c6a-6bda-4e0e-80b6-35334e025c52.png",
    alt: "Galaxy-themed blue cake with decorative sprinkles",
    category: "custom",
    rating: 5,
  },
  {
    id: 13,
    src: "/lovable-uploads/c5b2c8b8-259b-4763-8e1a-789553cd7245.png",
    alt: "Deep blue galaxy cake with sprinkles",
    category: "custom",
    rating: 5,
  },
  {
    id: 14,
    src: "/lovable-uploads/df6403d7-9297-47e3-9531-7615ce345ac0.png",
    alt: "Pastel pink and blue square cakes",
    category: "custom",
    rating: 5,
  },
  {
    id: 15,
    src: "/lovable-uploads/aa77b7d2-3ae0-4591-885f-0d7021694e2a.png",
    alt: "Collection of themed cakes including a race track design",
    category: "custom",
    rating: 5,
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const filteredCakes = selectedCategory === "all"
    ? cakeData
    : cakeData.filter((cake) => cake.category === selectedCategory);

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + filteredCakes.length) % filteredCakes.length;
    setSelectedImage(filteredCakes[newIndex].src);
    setCurrentImageIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % filteredCakes.length;
    setSelectedImage(filteredCakes[newIndex].src);
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <SEOHead 
        title="Custom Cake Gallery | Ribsys Cakes Brisbane - Wedding & Birthday Cake Designs"
        description="Browse our stunning collection of custom cakes in Brisbane. Wedding cakes, birthday designs, themed creations and more. Get inspired for your celebration!"
        keywords="cake gallery Brisbane, wedding cake designs, birthday cake ideas, custom cake photos, celebration cakes Brisbane, cake inspiration"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-cream to-white">
        {/* Header */}
        <header className="py-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-elegant text-brown-dark mb-4"
          >
            Our Cake Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brown max-w-3xl mx-auto font-clean leading-relaxed"
          >
            Explore our delicious gallery of custom cakes, each crafted with love and designed to make your celebration unforgettable.
          </motion.p>
        </header>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button
            variant="outline"
            className={`border-2 border-brown text-brown hover:bg-brown hover:text-cream font-clean transition-colors duration-300 ${selectedCategory === "all" ? "bg-brown text-cream" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All Cakes
          </Button>
          <Button
            variant="outline"
            className={`border-2 border-brown text-brown hover:bg-brown hover:text-cream font-clean transition-colors duration-300 ${selectedCategory === "wedding" ? "bg-brown text-cream" : ""}`}
            onClick={() => setSelectedCategory("wedding")}
          >
            Wedding Cakes
          </Button>
          <Button
            variant="outline"
            className={`border-2 border-brown text-brown hover:bg-brown hover:text-cream font-clean transition-colors duration-300 ${selectedCategory === "birthday" ? "bg-brown text-cream" : ""}`}
            onClick={() => setSelectedCategory("birthday")}
          >
            Birthday Cakes
          </Button>
          <Button
            variant="outline"
            className={`border-2 border-brown text-brown hover:bg-brown hover:text-cream font-clean transition-colors duration-300 ${selectedCategory === "custom" ? "bg-brown text-cream" : ""}`}
            onClick={() => setSelectedCategory("custom")}
          >
            Custom Cakes
          </Button>
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => openLightbox(cake.src, index)}
            >
              <img
                src={cake.src}
                alt={cake.alt}
                className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2">
                <div className="flex text-gold text-sm">
                  {[...Array(cake.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <span className="text-white font-clean font-semibold">View Cake</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-8"
        >
          <h3 className="text-3xl lg:text-4xl font-elegant text-brown-dark mb-6">
            Ready to Create Your Dream Cake?
          </h3>
          <p className="text-xl text-brown max-w-2xl mx-auto mb-8 font-clean leading-relaxed">
            Every celebration deserves a cake as unique as your story. Let's bring your vision to life!
          </p>
          <Button
            onClick={() => navigate('/order')}
            className="bg-brown hover:bg-brown-dark text-cream text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-clean"
            size="lg"
          >
            <Heart className="w-6 h-6 mr-3" />
            Order Your Dream Cake
          </Button>
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            ref={lightboxRef}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl max-h-screen flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Large cake view"
                className="max-w-full max-h-screen object-contain rounded-xl shadow-2xl"
              />
              <Button
                className="absolute top-4 right-4 bg-cream/80 text-brown hover:text-brown-dark rounded-full p-2"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <Button
                  className="bg-cream/80 text-brown hover:text-brown-dark rounded-full p-2"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <div className="text-cream font-clean">
                  {currentImageIndex + 1} / {filteredCakes.length}
                </div>
                <Button
                  className="bg-cream/80 text-brown hover:text-brown-dark rounded-full p-2"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
