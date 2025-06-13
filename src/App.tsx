import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
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
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import { usePageTracking } from "./hooks/usePageTracking";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import * as React from 'react';

// App content component to use hooks inside providers
const AppContent = () => {
  usePageTracking();
  
  return (
    <>
      <SparkleEffect />
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      <Toaster />
      <Sonner />
      <TooltipProvider>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
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
        </main>
      </TooltipProvider>
      <SpeedInsights />
      <Analytics />
    </>
  );
};

function App() {
  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  }), []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;