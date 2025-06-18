
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_TRACKING_ID', {
        page_path: location.pathname,
      });
      
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);
};
