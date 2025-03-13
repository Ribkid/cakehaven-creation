
import { PricingCard } from "@/components/ui/pricing-card";

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

// Convert cake sizes to pricing tiers format
const pricingTiers = cakeSizes.map((cake) => ({
  name: cake.size,
  description: cake.servings,
  price: cake.prices.basic,
  features: [
    `Basic design for $${typeof cake.prices.basic === 'number' ? cake.prices.basic : 'Custom pricing'}`,
    `Advanced design for $${typeof cake.prices.advanced === 'number' ? cake.prices.advanced : 'Custom pricing'}`,
    cake.note
  ],
  cta: "Perfect for " + cake.note.toLowerCase().replace("perfect for ", "").replace("ideal for ", "").replace("great for ", ""),
  highlighted: cake.size === "8 inch round" // Set 8 inch as highlighted option
}));

const Pricing = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-4">Cake Pricing Guide</h1>
      <p className="text-center text-muted-foreground mb-8">
        Choose the perfect cake size for your occasion
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} tier={tier} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
