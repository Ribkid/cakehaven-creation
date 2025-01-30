import { Link } from "react-router-dom";
import { Mail, Droplet, HelpCircle } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream/80 backdrop-blur-sm z-50 border-b border-brown/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-serif text-brown-dark hover:text-brown">
            CakeHaven
          </Link>
          <div className="flex items-center space-x-8">
            <Link 
              to="/flavors" 
              className="flex items-center gap-2 text-brown hover:text-brown-dark transition-colors"
            >
              <Droplet className="h-4 w-4" />
              <span>Flavors</span>
            </Link>
            <Link 
              to="/faq" 
              className="flex items-center gap-2 text-brown hover:text-brown-dark transition-colors"
            >
              <HelpCircle className="h-4 w-4" />
              <span>FAQ</span>
            </Link>
            <Link 
              to="/contact" 
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