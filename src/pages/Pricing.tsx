
import { CreativePricing } from "@/components/ui/creative-pricing";
import type { PricingTier } from "@/components/ui/creative-pricing";
import { Cake, Star } from "lucide-react";

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
    <section id="pricing" className="py-16 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-brown-dark text-center mb-8 animate-fade-up">
          Our Pricing
        </h2>
        <CreativePricing 
          tag="Cake Pricing Guide"
          title="Sweet Celebrations"
          description="Choose the perfect cake package for your special occasion"
          tiers={pricingTiers} 
        />
      </div>
    </section>
  );
};

export default Pricing;
