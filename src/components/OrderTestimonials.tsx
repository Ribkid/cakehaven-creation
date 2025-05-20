import * as React from "react";
import { useEffect } from "react";
import { Star } from "lucide-react";

// Keep a simplified version of the testimonials for fallback
// in case the Elfsight widget fails to load
const fallbackTestimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    comment: "The birthday cake for my daughter was absolutely stunning! Not only did it look beautiful, but it tasted amazing. Everyone at the party was impressed!",
    rating: 5,
    date: "March 15, 2023",
    occasion: "Birthday"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    comment: "We ordered a wedding cake and couldn't have been happier. The design was exactly what we asked for, and the flavors were incredible. Our guests kept asking where we got it!",
    rating: 5,
    date: "June 22, 2023",
    occasion: "Wedding"
  },
  {
    id: 3,
    name: "Emily Johnson",
    comment: "I've ordered several cakes over the years and have never been disappointed. The attention to detail is remarkable, and they always accommodate my special requests.",
    rating: 5,
    date: "November 8, 2023",
    occasion: "Various"
  }
];

const OrderTestimonials: React.FC = () => {
  // Load Elfsight script dynamically
  useEffect(() => {
    // Check if script already exists to avoid duplication
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Return cleanup function
    return () => {
      // Optional: Clean up the script when component unmounts
      // Note: In most cases, you might want to keep the script loaded
      // const script = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
      // if (script) document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="max-w-4xl mx-auto mb-12">
      <h2 className="text-3xl font-cursive text-brown-dark text-center mb-8">
        Real Customer Reviews
      </h2>
      
      {/* Elfsight Google Reviews Widget */}
      <div className="elfsight-app-78d23f26-fd37-4d22-a28d-e5debf999b0c" data-elfsight-app-lazy></div>
      
      {/* Fallback testimonials - will only be visible if we want to show them */}
      <div className="hidden">
        <div className="grid md:grid-cols-3 gap-6">
          {fallbackTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              
              <p className="text-brown mb-4 font-cursive italic">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t pt-4">
                <p className="text-brown-dark font-cursive font-semibold">
                  {testimonial.name}
                </p>
                <div className="flex justify-between text-xs text-brown-light font-cursive">
                  <span>{testimonial.occasion}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderTestimonials;
