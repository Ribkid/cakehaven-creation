
import { FeatureStepsDemo } from "@/components/FeatureStepsDemo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { track } from '@vercel/analytics';
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Order = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleNextClick = () => {
    track('Order Flow', { action: 'Next Button Click' });
    navigate("/contact");
  };

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-cursive text-brown-dark mb-4 text-center">
          Order Your Dream Cake
        </h1>
        <p className="text-center mb-8 text-brown font-cursive max-w-xl mx-auto">
          Creating your perfect cake is a simple process. Follow the steps below and we'll bring your vision to life!
        </p>
        
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for cake styles, flavors, or occasions..."
              className="pl-10 font-cursive"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <FeatureStepsDemo />
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-cursive text-brown-dark mb-6 text-center">Why Choose Our Custom Cakes?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-cursive text-brown-dark mb-3">Premium Quality</h3>
                <p className="text-brown font-cursive">We use only the finest ingredients to ensure your cake not only looks amazing but tastes delicious too.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-cursive text-brown-dark mb-3">Custom Designs</h3>
                <p className="text-brown font-cursive">Every cake is made to your specifications, ensuring a unique creation for your special occasion.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-cursive text-brown-dark mb-3">Free Delivery</h3>
                <p className="text-brown font-cursive">We offer free delivery to local areas to ensure your cake arrives in perfect condition.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-cursive text-brown-dark mb-3">Personalized Service</h3>
                <p className="text-brown font-cursive">From concept to creation, we work closely with you to bring your cake dreams to life.</p>
              </div>
            </div>
          
            <div className="text-center">
              <Button
                onClick={handleNextClick}
                className="bg-brown hover:bg-brown-dark text-cream text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 font-cursive"
              >
                Start Your Cake Order Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center text-brown font-cursive">
            <p>Have questions before ordering? Check our <a href="/faq" className="text-brown-dark underline">FAQ page</a> or contact us directly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
