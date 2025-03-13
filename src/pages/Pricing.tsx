
import { CreativePricing } from "@/components/ui/creative-pricing";
import type { PricingTier } from "@/components/ui/creative-pricing";
import { Pencil, Star, Sparkles } from "lucide-react";

interface CakeSize {
  size: string;
  servings: string;
  prices: {
    basic: number | string;
    advanced: number | string;
  };
  note: string;
}

const cakeSizes: CakeSize[] = [
  {
    size: "6 inch round",
    servings: "Serves 8-10",
    prices: {
      basic: 90,
      advanced: 120
    },
    note: "Perfect for intimate gatherings"
  },
  {
    size: "8 inch round",
    servings: "Serves 12-15",
    prices: {
      basic: 90,
      advanced: 140
    },
    note: "Ideal for small parties"
  },
  {
    size: "9 inch round",
    servings: "Serves 20-25",
    prices: {
      basic: 90, 
      advanced: 160
    },
    note: "Great for medium-sized events"
  },
  {
    size: "10 inch round",
    servings: "Serves 30-35",
    prices: {
      basic: "Contact for pricing",
      advanced: "Contact for pricing"
    },
    note: "Perfect for large celebrations"
  }
];

// Convert cake sizes to creative pricing tiers format
const pricingTiers: PricingTier[] = cakeSizes.map((cake, index) => {
  const icons = [
    <Pencil key="pencil" className="w-6 h-6" />,
    <Star key="star" className="w-6 h-6" />,
    <Sparkles key="sparkles" className="w-6 h-6" />,
    <Sparkles key="sparkles-large" className="w-6 h-6" />
  ];
  
  const colors = ["amber", "purple", "amber", "purple"];
  
  return {
    name: cake.size,
    icon: icons[index],
    price: cake.prices.basic,
    description: cake.servings,
    color: colors[index],
    features: [
      `Basic design for ${typeof cake.prices.basic === 'number' ? `$${cake.prices.basic}` : cake.prices.basic}`,
      `Advanced design for ${typeof cake.prices.advanced === 'number' ? `$${cake.prices.advanced}` : cake.prices.advanced}`,
      cake.note
    ],
    popular: cake.size === "8 inch round" // Set 8 inch as most popular option
  };
});

const Pricing = () => {
  return (
    <div className="container mx-auto py-12">
      <CreativePricing 
        tag="Cake Pricing Guide"
        title="Sweet Celebrations"
        description="Choose the perfect cake size for your special occasion"
        tiers={pricingTiers} 
      />
    </div>
  );
};

export default Pricing;
