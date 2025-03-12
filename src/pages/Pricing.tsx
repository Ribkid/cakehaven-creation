import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

const Pricing = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Cake Pricing Guide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cakeSizes.map((cake, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{cake.size}</CardTitle>
              <CardDescription>{cake.servings}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Basic Design:</span>
                  <span>
                    {typeof cake.prices.basic === 'number' ? `$${cake.prices.basic}` : cake.prices.basic}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Advanced Design:</span>
                  <span>
                    {typeof cake.prices.advanced === 'number' ? `$${cake.prices.advanced}` : cake.prices.advanced}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Badge>{cake.note}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
