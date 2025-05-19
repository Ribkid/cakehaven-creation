
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Flavours from "./pages/Flavours";
import FAQ from "./pages/FAQ";
import Order from "./pages/Order";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import SparkleEffect from "./components/SparkleEffect";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import * as React from 'react';

function App() {
  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: 1,
      },
    },
  }), []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SparkleEffect />
        <Toaster />
        <Sonner />
        <TooltipProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/flavours" element={<Flavours />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/order" element={<Order />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </TooltipProvider>
        <SpeedInsights />
        <Analytics />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
