
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Contact from "@/components/Contact";
import KeyPoints from "@/components/KeyPoints";
import { FeatureStepsDemo } from "@/components/FeatureStepsDemo";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <KeyPoints />
      <FeatureStepsDemo />
      <Featured />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
