
import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Phone, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const ServiceAreas = () => {
  const navigate = useNavigate();

  const brisbaneAreas = [
    "Fortitude Valley", "South Brisbane", "West End", "New Farm", "Teneriffe", 
    "Paddington", "Milton", "Toowong", "Indooroopilly", "Chapel Hill", 
    "Ashgrove", "Chermside", "Stafford", "Clayfield", "Hamilton", "Spring Hill",
    "Kangaroo Point", "Woolloongabba", "Kelvin Grove", "Bowen Hills"
  ];

  const handleOrderClick = () => {
    navigate('/order');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-elegant text-brown-dark mb-6">
            Delivering Sweet Dreams Across Brisbane
          </h2>
          <p className="text-xl text-brown max-w-4xl mx-auto font-clean leading-relaxed">
            From the city center to the suburbs, we're spreading cake joy across every corner of Brisbane. 
            <strong> Your perfect cake is just a delivery away!</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="hover:shadow-2xl transition-all duration-500 border-2 border-brown/10 hover:border-brown/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brown/10 rounded-full">
                  <MapPin className="w-8 h-8 text-brown" />
                </div>
                <div>
                  <h3 className="text-3xl font-elegant text-brown-dark">
                    All Across Beautiful Brisbane
                  </h3>
                  <p className="text-brown font-clean text-lg">Every neighborhood, every celebration covered</p>
                </div>
              </div>
              
              <p className="text-brown mb-6 leading-relaxed font-clean text-lg">
                🚗 <strong>Reliable delivery service</strong> brings your dream cake straight to your door. 
                Cakes are typically delivered the afternoon before your event to ensure freshness and perfect timing.
              </p>

              <div className="bg-cream/50 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-brown" />
                  <strong className="text-brown-dark font-clean">Food Safety & Quality</strong>
                </div>
                <p className="text-brown font-clean">
                  All our cakes are crafted in a fully licensed commercial kitchen following strict food safety standards. 
                  Every creation is made fresh to order and handled with the highest hygiene protocols.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {brisbaneAreas.map((area, areaIndex) => (
                  <span
                    key={areaIndex}
                    className="text-sm bg-gradient-to-r from-cream to-white text-brown-dark px-4 py-2 rounded-full text-center font-clean font-medium shadow-sm hover:shadow-md transition-shadow duration-300 border border-brown/10"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="text-center">
                <Button
                  onClick={handleOrderClick}
                  className="bg-brown hover:bg-brown-dark text-cream px-8 py-4 rounded-full font-clean text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Order For My Area
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cream via-white to-cream rounded-3xl p-8 text-center shadow-lg"
        >
          <h3 className="text-3xl lg:text-4xl font-elegant text-brown-dark mb-8">
            Why Brisbane Families Keep Coming Back
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center group">
              <div className="p-4 bg-white rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Clock className="w-10 h-10 text-brown" />
              </div>
              <h4 className="font-elegant text-2xl text-brown-dark mb-3">
                Perfect Timing
              </h4>
              <p className="text-brown text-lg font-clean leading-relaxed">
                We deliver your cake the afternoon before your event, ensuring it arrives fresh and ready to impress your guests.
              </p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="p-4 bg-white rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Heart className="w-10 h-10 text-brown" />
              </div>
              <h4 className="font-elegant text-2xl text-brown-dark mb-3">
                Made With Love
              </h4>
              <p className="text-brown text-lg font-clean leading-relaxed">
                Every cake tells your story. We create edible memories that bring families together in our licensed commercial kitchen.
              </p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="p-4 bg-white rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <Phone className="w-10 h-10 text-brown" />
              </div>
              <h4 className="font-elegant text-2xl text-brown-dark mb-3">
                Personal Touch
              </h4>
              <p className="text-brown text-lg font-clean leading-relaxed">
                Chat directly with our cake artists who understand Brisbane's celebration style and your family's special needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
