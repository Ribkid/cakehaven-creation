import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How far in advance should I order my cake?",
      answer: "We recommend placing your order at least 2 weeks in advance for standard cakes, and 3-4 weeks for custom or wedding cakes. During peak seasons (holidays, summer weddings), earlier booking is advised."
    },
    {
      question: "Do you offer cake tastings?",
      answer: "Yes! We offer cake tasting sessions by appointment. You can sample up to 4 different flavors and discuss your custom cake design with our team."
    },
    {
      question: "What is your delivery area and cost?",
      answer: "We deliver within a 25-mile radius of our location. Delivery fees start at $25 and may increase based on distance and cake size. Free pickup is also available at our shop."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Yes, we offer gluten-free, dairy-free, and vegan options. Please let us know about any allergies or dietary restrictions when placing your order."
    },
    {
      question: "What is your payment and deposit policy?",
      answer: "We require a 50% deposit to secure your order, with the remaining balance due one week before delivery. We accept all major credit cards, cash, and bank transfers."
    },
    {
      question: "Do you make wedding cakes?",
      answer: "Yes! We specialize in custom wedding cakes. We recommend scheduling a consultation at least 6 months before your wedding date to discuss designs and flavors."
    },
    {
      question: "What if I need to cancel or modify my order?",
      answer: "Modifications can be made up to 1 week before your delivery date. Cancellations made with more than 2 weeks' notice will receive a full deposit refund. Later cancellations may be subject to partial charges."
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-cream">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-brown-dark mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-brown mb-8 text-center max-w-2xl mx-auto">
          Find answers to common questions about our cakes and services. If you don't see your question here, feel free to contact us!
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-brown-dark hover:text-brown">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brown">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;