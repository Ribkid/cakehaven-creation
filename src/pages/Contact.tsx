
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { track } from '@vercel/analytics';
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  cakeType: z.string().min(1, { message: "Please select a cake package" }),
  date: z.date({
    required_error: "Please select a delivery date",
  }),
  message: z.string().min(10, { message: "Please provide details about your order" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 2;
  const whatsappNumber = "0467613972";
  
  // Initialize form with validation schema
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cakeType: "",
      message: "",
    },
  });

  // Calculate progress percentage
  const progressPercentage = (step / totalSteps) * 100;

  const nextStep = () => {
    form.trigger(["name", "email", "phone"]);
    
    const nameValid = form.getFieldState("name").invalid === false;
    const emailValid = form.getFieldState("email").invalid === false;
    const phoneValid = form.getFieldState("phone").invalid === false;
    
    if (nameValid && emailValid && phoneValid) {
      setStep(2);
      track('Order Form', { action: 'Next Step' });
    }
  };

  const prevStep = () => {
    setStep(1);
    track('Order Form', { action: 'Previous Step' });
  };

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      track('Order Form Submit', { status: 'initiated' });
      
      // Create form data from the validated form values
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("cakeType", data.cakeType);
      formData.append("date", format(data.date, "yyyy-MM-dd"));
      formData.append("message", data.message);
      
      const response = await fetch("https://formspree.io/f/xyzkjdjn", {
        method: "POST",
        body: formData,
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
        setStep(1);
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
        <h1 className="text-4xl font-cursive text-brown-dark mb-8 text-center">Complete Your Cake Order</h1>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-brown mb-2 text-center font-cursive">Order Progress</p>
            <Progress value={progressPercentage} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-brown font-cursive">
              <span>Personal Info</span>
              <span>Cake Details</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-3xl font-cursive text-brown-dark mb-6 text-center">Choose How to Order</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cream p-6 rounded-lg text-center flex flex-col items-center">
              <h3 className="text-xl font-cursive text-brown-dark mb-3">Contact via WhatsApp</h3>
              <p className="text-brown mb-4 font-cursive">Message me directly on WhatsApp to discuss your cake order</p>
              <p className="font-cursive text-brown mb-4">{whatsappNumber}</p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 mt-auto font-cursive"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Me
              </Button>
            </div>
            
            <div className="bg-cream p-6 rounded-lg text-center">
              <h3 className="text-xl font-cursive text-brown-dark mb-3">Fill Out the Form Below</h3>
              <p className="text-brown mb-4 font-cursive">Complete the order form and I'll get back to you soon</p>
            </div>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-md">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-cursive text-brown-dark text-center mb-6">Step 1: Your Details</h3>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-cursive text-brown-dark">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your full name"
                          className="font-cursive"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-cursive text-brown-dark">Your Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="font-cursive"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-cursive text-brown-dark">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Your phone number"
                          className="font-cursive"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="w-full bg-brown hover:bg-brown-dark text-cream font-cursive"
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-cursive text-brown-dark text-center mb-6">Step 2: Cake Details</h3>
                
                <FormField
                  control={form.control}
                  name="cakeType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-cursive text-brown-dark">Cake Package</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background font-cursive"
                        >
                          <option value="">Select a package</option>
                          <option value="Basic Package - 6 inch">Basic Package - 6" ($90)</option>
                          <option value="Basic Package - 8 inch">Basic Package - 8" ($120)</option>
                          <option value="Premium Package - 6 inch">Premium Package - 6" ($110)</option>
                          <option value="Premium Package - 8 inch">Premium Package - 8" ($150)</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="font-cursive text-brown-dark">Desired Delivery Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-cursive",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <Calendar className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setDate(new Date().getDate() + 2))
                            }
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-xs text-muted-foreground font-cursive">
                        Please select a date at least 2 days from today
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-cursive text-brown-dark">Special Requirements</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="min-h-[150px] w-full font-cursive"
                          placeholder="Please describe your cake requirements, including flavors, design preferences, and any dietary restrictions..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    onClick={prevStep}
                    className="w-1/3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-cursive"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="w-2/3 bg-brown hover:bg-brown-dark text-cream font-cursive"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Order"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
