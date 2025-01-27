import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Featured />
      <About />
      <Contact />
    </main>
  );
};

export default Index;