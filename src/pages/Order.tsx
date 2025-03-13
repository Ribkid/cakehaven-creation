
import { FeatureStepsDemo } from "@/components/FeatureStepsDemo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { track } from '@vercel/analytics';
import { ArrowRight } from "lucide-react";

const Order = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    track('Order Flow', { action: 'Next Button Click' });
    navigate("/contact");
  };

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-brown-dark mb-8 text-center">Order Your Custom Cake</h1>
        
        <div className="max-w-5xl mx-auto">
          <FeatureStepsDemo />
          
          <div className="mt-12 text-center">
            <Button
              onClick={handleNextClick}
              className="bg-brown hover:bg-brown-dark text-cream text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Proceed to Order Form
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
