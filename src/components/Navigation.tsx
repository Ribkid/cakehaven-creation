
import { Link } from "react-router-dom";
import { Mail, Droplet, HelpCircle, DollarSign, Home } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream/80 backdrop-blur-sm z-50 border-b border-brown/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/f59f27a0-0fe7-4b7b-a197-cccc1cd9aded.png" 
              alt="Ribsys Cakes Logo" 
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="text-4xl font-bold text-brown-dark hover:text-brown hidden sm:inline" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Ribsys Cakes
            </span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-brown hover:text-brown-dark transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/flavours" 
              className="flex items-center gap-2 text-brown hover:text-brown-dark transition-colors"
            >
              <Droplet className="h-4 w-4" />
              <span>Flavours</span>
            </Link>
            <Link 
              to="/pricing" 
              className="flex items-center gap-2 text-brown hover:text-brown-dark transition-colors"
            >
              <DollarSign className="h-4 w-4" />
              <span>Pricing</span>
            </Link>
            <Link 
              to="/faq" 
              className="flex items-center gap-2 text-brown hover:text-brown-dark transition-colors"
            >
              <HelpCircle className="h-4 w-4" />
              <span>FAQ</span>
            </Link>
            <Link 
              to="/order" 
              className="flex items-center gap-2 text-brown hover:text-brown-dark transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
