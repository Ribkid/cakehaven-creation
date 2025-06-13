import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { track } from '@vercel/analytics';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    track('Page View', {
      path: location.pathname,
      search: location.search,
      hash: location.hash
    });

    // Update page title for analytics
    const pageTitle = document.title;
    
    // Send to Google Analytics if available
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }

    // Track time on page
    const startTime = Date.now();
    
    return () => {
      const timeOnPage = Date.now() - startTime;
      track('Time on Page', {
        path: location.pathname,
        duration: timeOnPage
      });
    };
  }, [location]);
};