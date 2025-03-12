
import { FeatureSteps } from "@/components/ui/feature-steps"
import { track } from '@vercel/analytics';

const features = [
  { 
    step: 'Step 1', 
    title: 'Reach Out',
    content: 'Contact us on mobile to start your cake ordering journey.', 
    image: '/lovable-uploads/382ad5db-e7ad-47d3-bd8d-960d2a4f04f0.png'
  },
  { 
    step: 'Step 2',
    title: 'Discuss With Us',
    content: "We'll talk through your ideas and preferences for your perfect cake.",
    image: '/lovable-uploads/31a2e79f-957b-4fa6-b50d-203d70e01035.png'
  },
  { 
    step: 'Step 3',
    title: 'Free Delivery',
    content: 'Enjoy free delivery of your custom cake on your special day.',
    image: '/lovable-uploads/8da62372-7190-478c-9f2c-aad64d5b47a0.png'
  },
]

export function FeatureStepsDemo() {
  const handleFeatureView = (index: number) => {
    track('Feature Step View', { step: features[index].title });
  };

  return (
    <FeatureSteps 
      features={features}
      title="Our Simple Ordering Process"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  );
}
