
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import ServiceAreas from "@/components/ServiceAreas";
import About from "@/components/About";
import Contact from "@/components/Contact";
import KeyPoints from "@/components/KeyPoints";
import { FeatureStepsDemo } from "@/components/FeatureStepsDemo";
import Pricing from "@/pages/Pricing";
import { useNavigate } from "react-router-dom";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Featured />
      <ServiceAreas />
      <Pricing />
      <About />
      <KeyPoints />
      <FeatureStepsDemo />
      <Contact />
    </main>
  );
};

export default Index;
