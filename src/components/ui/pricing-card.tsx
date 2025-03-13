
import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PricingTier {
  name: string
  description: string
  price: string | number
  features: string[]
  cta: string
  highlighted?: boolean
}

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tier: PricingTier
}

export function PricingCard({ tier, className, ...props }: PricingCardProps) {
  return (
    <Card 
      className={cn(
        "flex flex-col justify-between",
        tier.highlighted && "border-primary bg-primary/5 shadow-lg",
        className
      )}
      {...props}
    >
      <div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {tier.name}
            {tier.highlighted && <Badge className="ml-2">Most Popular</Badge>}
          </CardTitle>
          <CardDescription>{tier.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className="text-3xl font-bold">
              {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
            </span>
          </div>
          <ul className="space-y-2 text-sm">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
      <CardFooter>
        <div className="text-muted-foreground text-sm">{tier.cta}</div>
      </CardFooter>
    </Card>
  )
}
