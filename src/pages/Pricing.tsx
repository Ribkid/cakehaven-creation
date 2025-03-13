
import { CreativePricing } from "@/components/ui/creative-pricing";
import type { PricingTier } from "@/components/ui/creative-pricing";
import { Pencil, Star, Cake, Sparkles } from "lucide-react";

const pricingTiers: PricingTier[] = [
  {
    name: "Basic Cake Package",
    icon: <Cake className="w-6 h-6" />,
    price: 90,
    description: "Perfect for birthdays and simple celebrations",
    color: "amber",
    features: [
      "6\" cake: $90",
      "8\" cake: $120",
      "Smooth buttercream finish",
      "Decorative borders",
      "Simple message writing"
    ],
  },
  {
    name: "Premium Cake Package",
    icon: <Star className="w-6 h-6" />,
    price: 110,
    description: "For those special memorable occasions",
    color: "purple",
    features: [
      "6\" cake: $110",
      "8\" cake: $150",
      "Custom fondant toppers",
      "Personalized decorations",
      "Theme-based designs",
      "Specialty flavors",
      "Custom sizing options"
    ],
    popular: true,
  },
];

const Pricing = () => {
  return (
    <div className="container mx-auto py-12">
      <CreativePricing 
        tag="Cake Pricing Guide"
        title="Sweet Celebrations"
        description="Choose the perfect cake package for your special occasion"
        tiers={pricingTiers} 
      />
    </div>
  );
};

export default Pricing;
