
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { track } from '@vercel/analytics';
import { ArrowRight, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsappNumber = "0467613972";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      track('Order Form Submit', { status: 'initiated' });
      
      const response = await fetch("https://formspree.io/f/xyzkjdjn", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        track('Order Form Submit', { status: 'success' });
        toast({
          title: "Order submitted!",
          description: "Thank you for your cake order. We'll get back to you soon.",
        });
        form.reset();
      } else {
        track('Order Form Submit', { status: 'error' });
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was a problem submitting your order. Please try again.",
        });
      }
    } catch (error) {
      track('Order Form Submit', { status: 'error' });
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your order. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    track('WhatsApp Contact Click');
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-brown-dark mb-8 text-center">Complete Your Cake Order</h1>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-serif text-brown-dark mb-6 text-center">Choose How to Order</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cream p-6 rounded-lg text-center flex flex-col items-center">
              <h3 className="text-xl font-medium text-brown-dark mb-3">Contact via WhatsApp</h3>
              <p className="text-brown-light mb-4">Message me directly on WhatsApp to discuss your cake order</p>
              <p className="font-medium text-brown mb-4">{whatsappNumber}</p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 mt-auto"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Me
              </Button>
            </div>
            
            <div className="bg-cream p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-brown-dark mb-3">Fill Out the Form Below</h3>
              <p className="text-brown-light mb-4">Complete the order form and I'll get back to you soon</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-brown-dark">
              Your Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="w-full"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-brown-dark">
              Your Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="w-full"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-brown-dark">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full"
              placeholder="Your phone number"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="cakeType" className="text-sm font-medium text-brown-dark">
              Cake Package
            </label>
            <select
              id="cakeType"
              name="cakeType"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="">Select a package</option>
              <option value="Basic Package - 6 inch">Basic Package - 6" ($90)</option>
              <option value="Basic Package - 8 inch">Basic Package - 8" ($120)</option>
              <option value="Premium Package - 6 inch">Premium Package - 6" ($110)</option>
              <option value="Premium Package - 8 inch">Premium Package - 8" ($150)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium text-brown-dark">
              Desired Delivery Date
            </label>
            <Input
              type="date"
              id="date"
              name="date"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-brown-dark">
              Special Requirements
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="min-h-[150px] w-full"
              placeholder="Please describe your cake requirements, including flavors, design preferences, and any dietary restrictions..."
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-brown hover:bg-brown-dark text-cream"
            onClick={() => track('Order Form Button Click')}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Order"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
