
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
          <h2 className="text-4xl font-cursive text-brown-dark mb-6 text-center">
            Get in Touch
          </h2>
          <div className="grid gap-6">
            <div className="text-center">
              <p className="text-lg text-brown-light mb-2 font-cursive">
                96 Almeida St, Indooroopilly, QLD, 4068
              </p>
              <p className="text-lg text-brown-light mb-2 font-cursive">
                Tel: 0467 613 972
              </p>
              <p className="text-lg text-brown-light mb-6 font-cursive">
                Email: rhys@ribsyscakes.net
              </p>
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
                          placeholder="Tell us about your dream cake..."
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
