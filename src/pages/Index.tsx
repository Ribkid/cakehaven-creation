import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import ServiceAreas from "@/components/ServiceAreas";
import About from "@/components/About";
import Contact from "@/components/Contact";
import KeyPoints from "@/components/KeyPoints";
import { FeatureStepsDemo } from "@/components/FeatureStepsDemo";
import Pricing from "@/pages/Pricing";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Custom Cakes Brisbane & Ipswich | Ribsys Cakes",
    "description": "Premium custom cakes in Brisbane and Ipswich. Specializing in wedding cakes, birthday cakes, and celebration cakes.",
    "url": "https://ribsys-cake.com",
    "mainEntity": {
      "@type": "Bakery",
      "name": "Ribsys Cakes",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "96 Almeida St",
        "addressLocality": "Indooroopilly",
        "addressRegion": "Queensland",
        "postalCode": "4068",
        "addressCountry": "Australia"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Custom Cakes Brisbane & Ipswich | Ribsys Cakes - Wedding & Birthday Specialists"
        description="Brisbane and Ipswich's premier custom cake maker. Specializing in wedding cakes, birthday celebrations, and artisan designs. Fresh baked daily with local delivery."
        keywords="custom cakes Brisbane, wedding cakes Ipswich, birthday cakes Brisbane, celebration cakes, cake delivery Brisbane, artisan cakes, local baker Brisbane"
        schemaData={schemaData}
      />
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
    </>
  );
};

export default Index;