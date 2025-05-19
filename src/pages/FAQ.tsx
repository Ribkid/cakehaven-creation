
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const faqs = [
    {
      question: "How far in advance should I order my cake?",
      answer: "We recommend placing your order at least 2 weeks in advance for standard cakes, and 3-4 weeks for custom or wedding cakes. During peak seasons (holidays, summer weddings), earlier booking is advised to secure your date. Last-minute orders may be accommodated depending on our schedule, but cannot be guaranteed."
    },
    {
      question: "Do you offer cake tastings?",
      answer: "Yes! We offer cake tasting sessions by appointment. You can sample up to 4 different flavors and discuss your custom cake design with our team. Tastings are complimentary for wedding cakes with a deposit, and there's a small fee for other tastings which is credited toward your final order."
    },
    {
      question: "What is your delivery area and cost?",
      answer: "We offer free delivery within a 15km radius of our Indooroopilly location. For locations beyond this area, a delivery fee applies based on distance. Our professional delivery service ensures your cake arrives in perfect condition. We recommend delivery for tiered and delicate cakes to avoid damage during transport."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Yes, we offer gluten-free, dairy-free, and vegan options for most of our cake flavors. We also accommodate nut-free requests and can work with other allergies or dietary concerns. Please let us know about any dietary requirements when placing your order so we can ensure your cake is both safe and delicious."
    },
    {
      question: "What is your payment and deposit policy?",
      answer: "We require a 50% deposit to secure your order, with the remaining balance due one week before delivery. For orders under $100, full payment is required at the time of booking. We accept all major credit cards, cash, and bank transfers. Deposits are non-refundable within 7 days of the delivery date."
    },
    {
      question: "Do you make wedding cakes?",
      answer: "Yes! We specialize in custom wedding cakes tailored to your vision and theme. We recommend scheduling a consultation at least 6 months before your wedding date to discuss designs, flavors, and logistics. Our wedding cake service includes design consultation, tasting session, delivery, and setup at your venue."
    },
    {
      question: "What if I need to cancel or modify my order?",
      answer: "Modifications can be made up to 1 week before your delivery date, depending on the nature of the changes. Cancellations made with more than 2 weeks' notice will receive a full deposit refund. Cancellations between 1-2 weeks notice receive a 50% deposit refund. Cancellations with less than 1 week notice will not be refunded."
    },
    {
      question: "How should I store my cake?",
      answer: "Our cakes are best enjoyed at room temperature for optimal flavor and texture. If you need to store leftover cake, keep it in an airtight container at room temperature for 1-2 days. For longer storage, refrigerate for up to 5 days or freeze for up to 3 months. Always bring refrigerated cake to room temperature before serving."
    },
    {
      question: "Do you offer mini cakes or cupcakes?",
      answer: "Yes! We offer mini cakes, cupcakes, and cake pops that are perfect for smaller gatherings, party favors, or as accompaniments to larger cakes. These can be customized with the same flavors and decorative elements as our larger cakes and are priced accordingly."
    },
    {
      question: "How do you ensure the quality of your ingredients?",
      answer: "We use premium, locally-sourced ingredients wherever possible. Our dairy comes from local farms, we use real butter (never shortening), free-range eggs, and high-quality chocolate and flavorings. We never use preservatives or artificial colors in our cakes, opting instead for natural food colorings and fresh ingredients."
    },
    {
      question: "Can you recreate a cake from a photo?",
      answer: "In most cases, yes! We specialize in custom designs and can recreate or draw inspiration from photos you provide. While we can match designs closely, please understand that each cake is handmade and will have subtle unique characteristics. We can also adapt designs to better suit your specific needs or theme."
    },
    {
      question: "What's the difference between fondant and buttercream?",
      answer: "Buttercream is a soft, creamy frosting made from butter and sugar that has a rich flavor and smooth texture. It's perfect for creating textured designs and simpler decorations. Fondant is a pliable sugar paste that creates a perfectly smooth, polished finish and allows for more intricate decorations and structural elements. We offer both options and can help you decide which is best for your cake design."
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-cursive text-brown-dark mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-brown mb-8 text-center max-w-2xl mx-auto font-cursive">
          Find answers to common questions about our cakes and services. If you don't see your question here, feel free to contact us!
        </p>
        
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for questions or keywords..."
              className="pl-10 font-cursive"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-brown-dark hover:text-brown font-cursive text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brown font-cursive">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8">
              <p className="text-brown-dark font-cursive">No questions found matching "{searchTerm}"</p>
              <p className="text-brown font-cursive mt-2">Try another search term or <a href="/contact" className="text-brown underline">contact us</a> directly with your question.</p>
            </div>
          )}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-cursive text-brown-dark mb-4 text-center">Still Have Questions?</h2>
          <p className="text-brown text-center font-cursive">
            We're here to help! Contact us directly at <span className="text-brown-dark">0467 613 972</span> or email us at <span className="text-brown-dark">rhys@ribsyscakes.net</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
