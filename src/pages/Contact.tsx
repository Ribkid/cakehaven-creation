
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { track } from '@vercel/analytics';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Define form schema with validation
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Please provide at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if the URL has cake order related parameters
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('order') || urlParams.has('cake')) {
      navigate('/order');
    }
  }, [navigate]);

  // Initialize form with validation schema
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (data: FormValues) => {
    try {
      // Create form data from the validated form values
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("message", data.message);
      
      const response = await fetch("https://formspree.io/f/xyzkjdjn", {
        method: "POST",
        body: formData,
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
      track('Contact Form Submit', { status: 'error', error: String(error) });
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
      });
    }
  };

  const handleOrderClick = () => {
    track('Contact Order Button Click');
    navigate('/order');
  };

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-cursive text-brown-dark mb-8 text-center">
          Contact Us
        </h1>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-cursive text-brown-dark mb-6">Get in Touch</h2>
            
            <div className="mb-8">
              <p className="text-lg text-brown mb-2 font-cursive">
                96 Almeida St, Indooroopilly, QLD, 4068
              </p>
              <p className="text-lg text-brown mb-2 font-cursive">
                Tel: 0467 613 972
              </p>
              <p className="text-lg text-brown mb-6 font-cursive">
                Email: rhys@ribsyscakes.net
              </p>
              
              <Button 
                onClick={handleOrderClick} 
                className="bg-brown hover:bg-brown-dark text-cream w-full font-cursive"
              >
                Place a Cake Order
              </Button>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brown-dark font-cursive">Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="font-cursive"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brown-dark font-cursive">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your inquiry..."
                          className="min-h-[150px] font-cursive"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-brown hover:bg-brown-dark text-cream font-cursive"
                  onClick={() => track('Contact Form Button Click')}
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-cursive text-brown-dark mb-6">Our Hours</h2>
            
            <div className="space-y-3 mb-8">
              <div className="flex justify-between font-cursive">
                <span className="text-brown-dark">Monday - Friday</span>
                <span className="text-brown">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between font-cursive">
                <span className="text-brown-dark">Saturday</span>
                <span className="text-brown">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between font-cursive">
                <span className="text-brown-dark">Sunday</span>
                <span className="text-brown">Closed</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-cursive text-brown-dark mb-3">Frequently Asked</h2>
            <div className="space-y-3">
              <div className="border-b pb-2">
                <p className="text-brown-dark font-cursive font-semibold">How far in advance should I order?</p>
                <p className="text-brown font-cursive">For custom cakes, we recommend at least 1 week notice, but 2-3 weeks is ideal for complex designs.</p>
              </div>
              <div className="border-b pb-2">
                <p className="text-brown-dark font-cursive font-semibold">Do you deliver?</p>
                <p className="text-brown font-cursive">Yes, we offer delivery within 25km of our location. Delivery fees vary based on distance.</p>
              </div>
              <p className="text-center mt-4">
                <a href="/faq" className="text-brown-dark underline font-cursive">View all FAQs</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
