import { useEffect } from 'react';

const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brown text-cream px-4 py-2 rounded z-50';
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus management for dynamic content
    const observeFocusableElements = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach(element => {
        if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
          console.warn('Focusable element without accessible name:', element);
        }
      });
    };

    // Run accessibility checks in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(observeFocusableElements, 1000);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;