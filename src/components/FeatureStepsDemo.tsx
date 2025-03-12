
import { FeatureSteps } from "@/components/ui/feature-steps"
import { track } from '@vercel/analytics';

const features = [
  { 
    step: 'Step 1', 
    title: 'Consultation',
    content: 'We discuss your vision and preferences to create your perfect cake.', 
    image: '/lovable-uploads/382ad5db-e7ad-47d3-bd8d-960d2a4f04f0.png'
  },
  { 
    step: 'Step 2',
    title: 'Design & Planning',
    content: 'Our expert bakers plan every detail of your custom cake creation.',
    image: '/lovable-uploads/31a2e79f-957b-4fa6-b50d-203d70e01035.png'
  },
  { 
    step: 'Step 3',
    title: 'Baking & Decorating',
    content: 'We carefully bake and decorate your cake with attention to every detail.',
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
      title="Our Cake Creation Process"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  );
}
