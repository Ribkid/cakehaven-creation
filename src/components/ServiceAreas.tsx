
import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ServiceAreas = () => {
  const brisbaneAreas = [
    "Fortitude Valley", "South Brisbane", "West End", "New Farm", "Teneriffe", 
    "Paddington", "Milton", "Toowong", "Indooroopilly", "Chapel Hill", 
    "Ashgrove", "Chermside", "Stafford", "Clayfield", "Hamilton", "Spring Hill"
  ];

  const ipswichAreas = [
    "Ipswich CBD", "Springfield", "Redbank Plains", "Booval", "Goodna", 
    "Yamanto", "Bundamba", "Riverview", "Augustine Heights", "Brookwater", 
    "Karalee", "Bellbird Park", "Collingwood Park", "One Mile"
  ];

  const services = [
    {
      icon: <MapPin className="w-6 h-6 text-brown" />,
      title: "Local Brisbane Delivery",
      description: "Fresh cake delivery across all Brisbane council areas including CBD, inner suburbs, and outer regions.",
      areas: brisbaneAreas
    },
    {
      icon: <MapPin className="w-6 h-6 text-brown" />,
      title: "Ipswich Coverage",
      description: "Complete Ipswich council area coverage with same-day delivery available for urgent orders.",
      areas: ipswichAreas
    }
  ];

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
          <h2 className="text-4xl font-cursive text-brown-dark mb-4">
            Brisbane & Ipswich Cake Delivery Areas
          </h2>
          <p className="text-lg text-brown max-w-3xl mx-auto">
            Proudly serving the greater Brisbane and Ipswich communities with premium custom cakes. 
            Our local expertise ensures fresh delivery and personalized service across Queensland's southeast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-cursive text-brown-dark">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-brown mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {service.areas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="text-sm bg-cream text-brown-dark px-3 py-1 rounded-full text-center"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cream to-white rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-cursive text-brown-dark mb-6">
            Why Choose Local Brisbane & Ipswich Cake Makers?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-brown mb-3" />
              <h4 className="font-cursive text-xl text-brown-dark mb-2">
                Same-Day Delivery
              </h4>
              <p className="text-brown text-sm">
                Fresh cakes delivered within hours across Brisbane and Ipswich councils
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-brown mb-3" />
              <h4 className="font-cursive text-xl text-brown-dark mb-2">
                Local Knowledge
              </h4>
              <p className="text-brown text-sm">
                Understanding of Queensland traditions and local event requirements
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-brown mb-3" />
              <h4 className="font-cursive text-xl text-brown-dark mb-2">
                Personal Service
              </h4>
              <p className="text-brown text-sm">
                Direct consultation with local cake artists who know the community
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
