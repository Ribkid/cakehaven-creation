
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Droplet, HelpCircle, DollarSign, Home, Image, Menu, X } from "lucide-react";
import { track } from '@vercel/analytics';
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (page: string) => {
    track('Navigation Click', { page });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", icon: <Home className="h-4 w-4" />, label: "Home" },
    { to: "/flavours", icon: <Droplet className="h-4 w-4" />, label: "Flavours" },
    { to: "/gallery", icon: <Image className="h-4 w-4" />, label: "Gallery" },
    { to: "/pricing", icon: <DollarSign className="h-4 w-4" />, label: "Pricing" },
    { to: "/faq", icon: <HelpCircle className="h-4 w-4" />, label: "FAQ" },
    { to: "/order", icon: <Mail className="h-4 w-4" />, label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md" 
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link 
            to="/" 
            className="flex items-center gap-4"
            onClick={() => handleNavClick('home')}
          >
            <motion.img 
              src="/lovable-uploads/f59f27a0-0fe7-4b7b-a197-cccc1cd9aded.png" 
              alt="Ribsys Cakes Logo" 
              className="h-16 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.span 
              className="text-4xl font-bold text-brown-dark hidden sm:inline" 
              style={{ fontFamily: "'Dancing Script', cursive" }}
              whileHover={{ scale: 1.03 }}
            >
              Ribsys Cakes
            </motion.span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`flex items-center gap-2 text-brown hover:text-brown-dark transition-colors py-2 px-1 relative group`}
                onClick={() => handleNavClick(link.label.toLowerCase())}
              >
                {link.icon}
                <span>{link.label}</span>
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-brown-dark"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brown-dark scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brown-dark hover:text-brown focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    to={link.to} 
                    className={`flex items-center gap-3 py-3 px-2 text-brown-dark hover:bg-cream/50 rounded-md transition-colors ${
                      location.pathname === link.to ? "bg-cream/50 font-medium" : ""
                    }`}
                    onClick={() => handleNavClick(link.label.toLowerCase())}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
