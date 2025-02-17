
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { track } from '@vercel/analytics';

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
        track('Contact Form Submit', { status: 'success' });
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        form.reset();
      } else {
        track('Contact Form Submit', { status: 'error' });
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
        });
      }
    } catch (error) {
      track('Contact Form Submit', { status: 'error', error: error.message });
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
      });
    }
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-serif text-brown-dark mb-6 text-center">
            Get in Touch
          </h2>
          <div className="grid gap-6">
            <div className="text-center">
              <p className="text-lg text-brown-light mb-2">
                96 Almeida St, Indooroopilly, QLD, 4068
              </p>
              <p className="text-lg text-brown-light mb-2">
                Tel: 0467 613 972
              </p>
              <p className="text-lg text-brown-light mb-6">
                Email: rhys@ribsyscakes.net
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label htmlFor="message" className="text-sm font-medium text-brown-dark">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-[150px] w-full"
                  placeholder="Tell us about your dream cake..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                onClick={() => track('Contact Form Button Click')}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
