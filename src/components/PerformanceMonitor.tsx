
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface PerformanceEntryWithFID extends PerformanceEntry {
  processingStart?: number;
}

interface PerformanceEntryWithCLS extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Track LCP in analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(lastEntry.startTime),
            event_category: 'Performance'
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntryWithFID;
          if (fidEntry.processingStart) {
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
            
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(fidEntry.processingStart - fidEntry.startTime),
                event_category: 'Performance'
              });
            }
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as PerformanceEntryWithCLS;
          if (!clsEntry.hadRecentInput && clsEntry.value) {
            clsValue += clsEntry.value;
          }
        });
        console.log('CLS:', clsValue);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Performance'
          });
        }
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Resource loading performance
    const observeResourceTiming = () => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 1000) { // Log slow resources
            console.warn('Slow resource:', entry.name, entry.duration);
          }
        });
      }).observe({ entryTypes: ['resource'] });
    };

    // Initialize observers
    if ('PerformanceObserver' in window) {
      observeWebVitals();
      observeResourceTiming();
    }

    // Page load timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        console.log('Page Load Time:', loadTime);
        
        if (window.gtag) {
          window.gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            event_category: 'Performance'
          });
        }
      }, 0);
    });
  }, []);

  return null;
};

export default PerformanceMonitor;
