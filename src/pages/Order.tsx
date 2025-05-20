import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { track } from '@vercel/analytics';
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Users, 
  Search,
  Circle,
  Square,
  Heart,
  CakeSlice,
  CheckCircle
} from "lucide-react";

// UI Components
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import CakeSizeSelector from "@/components/CakeSizeSelector";
import OrderTestimonials from "@/components/OrderTestimonials";

// Define step validation schemas
const personalInfoSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
});

const cakeDetailsSchema = z.object({
  cakeShape: z.enum(["circle", "square", "number", "heart"], {
    required_error: "Please select a cake shape",
  }),
  cakeSize: z.enum(["6", "8", "10", "12"], {
    required_error: "Please select a cake size",
  }),
  guests: z.string().min(1, { message: "Please enter number of guests" }).transform(Number),
  flavor: z.string().min(1, { message: "Please select a cake flavor" }),
  date: z.date({
    required_error: "Please select a delivery date",
  }),
  message: z.string().min(10, { message: "Please provide details about your order" }),
});

// Combined schema for the whole form
const orderFormSchema = personalInfoSchema.merge(cakeDetailsSchema);
type OrderFormValues = z.infer<typeof orderFormSchema>;

const Order = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const totalSteps = 3; // Now we have 3 steps: personal info, cake shape/details, and cake size/flavor
  
  // Calculate progress percentage
  const progressPercentage = (step / totalSteps) * 100;

  // Form with validation
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cakeShape: "circle",
      cakeSize: "8",
      guests: "",
      flavor: "",
      message: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  // Navigation functions
  const nextStep = async () => {
    let fieldsToValidate: string[] = [];
    
    if (step === 1) {
      fieldsToValidate = ["name", "email", "phone"];
    } else if (step === 2) {
      fieldsToValidate = ["cakeShape"];
    } else {
      fieldsToValidate = ["cakeSize", "guests", "flavor", "date", "message"];
    }
    
    // Trigger validation only for the current step's fields
    const result = await form.trigger(fieldsToValidate as any);
    
    if (result) {
      setStep(step + 1);
      track('Order Flow', { action: 'Next Step', step: step + 1 });
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    track('Order Flow', { action: 'Previous Step', step: step - 1 });
    window.scrollTo(0, 0);
  };

  // Form submission
  const handleSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);
    
    try {
      track('Order Form Submit', { status: 'initiated' });
      
      // Create form data
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("cakeShape", data.cakeShape);
      formData.append("cakeSize", data.cakeSize);
      formData.append("guests", String(data.guests));
      formData.append("flavor", data.flavor);
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

  // Available cake flavors
  const cakeFlavors = [
    "Vanilla",
    "Chocolate",
    "Red Velvet",
    "Carrot",
    "Lemon",
    "Marble",
    "Funfetti",
    "Strawberry",
    "Coconut",
    "Coffee"
  ];

  // Filter flavors based on search
  const filteredFlavors = cakeFlavors.filter(flavor => 
    flavor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-cursive text-brown-dark mb-4 text-center">
          Order Your Dream Cake
        </h1>
        
        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-brown mb-2 text-center font-cursive">Order Progress</p>
            <Progress value={progressPercentage} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-brown font-cursive">
              <span className={cn(step === 1 ? "font-bold" : "")}>Your Details</span>
              <span className={cn(step === 2 ? "font-bold" : "")}>Cake Shape</span>
              <span className={cn(step === 3 ? "font-bold" : "")}>Cake Details</span>
            </div>
          </div>
        </div>
        
        {/* Order Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-cursive text-brown-dark text-center mb-6">Step 1: Your Details</h2>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your full name"
                            className="font-cursive text-base text-gray-800"
                          />
                        </FormControl>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Your Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            className="font-cursive text-base text-gray-800"
                          />
                        </FormControl>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="Your phone number"
                            className="font-cursive text-base text-gray-800"
                          />
                        </FormControl>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end pt-4">
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-brown hover:bg-brown-dark text-cream font-cursive text-base"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-cursive text-brown-dark text-center mb-6">Step 2: Choose Your Cake Shape</h2>
                  
                  <FormField
                    control={form.control}
                    name="cakeShape"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Cake Shape</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-2 gap-4"
                          >
                            <div className="col-span-1">
                              <RadioGroupItem
                                value="circle"
                                id="shape-circle"
                                className="peer sr-only"
                              />
                              <label
                                htmlFor="shape-circle"
                                className={cn(
                                  "flex flex-col items-center justify-center rounded-md border-2 border-muted p-4 hover:border-brown hover:bg-cream/50 cursor-pointer transition-all",
                                  field.value === "circle" ? "border-brown bg-cream/50" : ""
                                )}
                              >
                                <Circle className={cn("h-20 w-20 mb-2", field.value === "circle" ? "text-brown" : "text-gray-400")} />
                                <span className="font-cursive text-center text-base text-gray-800">Circle Cake</span>
                              </label>
                            </div>

                            <div className="col-span-1">
                              <RadioGroupItem
                                value="square"
                                id="shape-square"
                                className="peer sr-only"
                              />
                              <label
                                htmlFor="shape-square"
                                className={cn(
                                  "flex flex-col items-center justify-center rounded-md border-2 border-muted p-4 hover:border-brown hover:bg-cream/50 cursor-pointer transition-all",
                                  field.value === "square" ? "border-brown bg-cream/50" : ""
                                )}
                              >
                                <Square className={cn("h-20 w-20 mb-2", field.value === "square" ? "text-brown" : "text-gray-400")} />
                                <span className="font-cursive text-center text-base text-gray-800">Slab Cake</span>
                              </label>
                            </div>

                            <div className="col-span-1">
                              <RadioGroupItem
                                value="number"
                                id="shape-number"
                                className="peer sr-only"
                              />
                              <label
                                htmlFor="shape-number"
                                className={cn(
                                  "flex flex-col items-center justify-center rounded-md border-2 border-muted p-4 hover:border-brown hover:bg-cream/50 cursor-pointer transition-all",
                                  field.value === "number" ? "border-brown bg-cream/50" : ""
                                )}
                              >
                                <div className={cn("h-20 w-20 mb-2 flex items-center justify-center text-4xl font-bold", field.value === "number" ? "text-brown" : "text-gray-400")}>
                                  123
                                </div>
                                <span className="font-cursive text-center text-base text-gray-800">Number Cake</span>
                              </label>
                            </div>

                            <div className="col-span-1">
                              <RadioGroupItem
                                value="heart"
                                id="shape-heart"
                                className="peer sr-only"
                              />
                              <label
                                htmlFor="shape-heart"
                                className={cn(
                                  "flex flex-col items-center justify-center rounded-md border-2 border-muted p-4 hover:border-brown hover:bg-cream/50 cursor-pointer transition-all",
                                  field.value === "heart" ? "border-brown bg-cream/50" : ""
                                )}
                              >
                                <Heart className={cn("h-20 w-20 mb-2", field.value === "heart" ? "text-brown" : "text-gray-400")} />
                                <span className="font-cursive text-center text-base text-gray-800">Heart Cake</span>
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="button" 
                      onClick={prevStep}
                      className="w-1/3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-cursive text-base"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="w-2/3 bg-brown hover:bg-brown-dark text-cream font-cursive text-base"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-cursive text-brown-dark text-center mb-6">Step 3: Cake Details</h2>
                  
                  <FormField
                    control={form.control}
                    name="cakeSize"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Cake Size</FormLabel>
                        <FormControl>
                          <CakeSizeSelector 
                            value={field.value} 
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Number of Guests</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                              {...field}
                              type="number"
                              min="1"
                              placeholder="How many guests are you expecting?"
                              className="pl-10 font-cursive text-base text-gray-800"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="flavor"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Cake Flavor</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="relative mb-3">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                              <Input
                                type="text"
                                placeholder="Search for flavors..."
                                className="pl-10 font-cursive text-base text-gray-800"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                              />
                            </div>
                            
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 gap-2 sm:grid-cols-3"
                            >
                              {filteredFlavors.map((flavor) => (
                                <div key={flavor}>
                                  <RadioGroupItem
                                    value={flavor}
                                    id={`flavor-${flavor}`}
                                    className="peer sr-only"
                                  />
                                  <label
                                    htmlFor={`flavor-${flavor}`}
                                    className={cn(
                                      "flex items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground font-cursive cursor-pointer transition-all text-base text-gray-800",
                                      field.value === flavor ? "border-primary bg-primary/10" : ""
                                    )}
                                  >
                                    {flavor}
                                    {field.value === flavor && <CheckCircle className="ml-2 h-4 w-4" />}
                                  </label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Desired Delivery Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-cursive text-base",
                                  !field.value && "text-muted-foreground",
                                  field.value && "text-gray-800"
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
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <p className="text-xs text-muted-foreground font-cursive">
                          Please select a date at least 2 days from today
                        </p>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-cursive text-brown-dark text-base md:text-lg">Special Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="min-h-[150px] w-full font-cursive text-base text-gray-800"
                            placeholder="Please describe your cake requirements, including design preferences and any dietary restrictions..."
                          />
                        </FormControl>
                        <FormMessage className="text-sm md:text-base" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="button" 
                      onClick={prevStep}
                      className="w-1/3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-cursive text-base"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="w-2/3 bg-brown hover:bg-brown-dark text-cream font-cursive text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Order"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </Form>
        
        {/* Testimonials Section */}
        <OrderTestimonials />
        
        <div className="mt-12 text-center text-brown font-cursive text-lg">
          <p>Have questions before ordering? Check our <a href="/faq" className="text-brown-dark underline">FAQ page</a> or contact us directly.</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
