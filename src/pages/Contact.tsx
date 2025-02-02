import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const response = await fetch("https://formspree.io/f/xyzkjdjn", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Order submitted!",
          description: "Thank you for your cake order. We'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was a problem submitting your order. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your order. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-brown-dark mb-8">Order Your Custom Cake</h1>
        <p className="text-brown mb-8">
          Please fill out the form below to place your custom cake order. We'll get back to you with details and confirmation.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
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
              Type of Cake
            </label>
            <Input
              type="text"
              id="cakeType"
              name="cakeType"
              required
              className="w-full"
              placeholder="e.g., Birthday, Wedding, Custom Theme"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="servings" className="text-sm font-medium text-brown-dark">
              Number of Servings
            </label>
            <Input
              type="number"
              id="servings"
              name="servings"
              required
              className="w-full"
              placeholder="Estimated number of servings needed"
            />
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

          <Button type="submit" className="w-full">
            Submit Order
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;