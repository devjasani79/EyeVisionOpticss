import React from "react";
import { motion } from "framer-motion";
import { Eye, Clock, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import store3 from "@/assets/store-3.jpg";
import store4 from "@/assets/store-4.jpg";

const services = [
  { icon: Eye, title: "Free Digital Eye Testing", description: "Comprehensive computerized vision testing and prescription consultation.", price: "Free", image: store1 },
  { icon: Clock, title: "1-Hour Spectacles", description: "High-quality prescription spectacles delivered within just 1 hour.", price: "Fast Service", image: store2 },
  { icon: Shield, title: "Varilux Progressive Lenses", description: "Authorized seller with seamless transition & complete acclimation assurance.", price: "Premium", image: store3 },
  { icon: Award, title: "Designer Frames", description: "Vast collection of branded sunglasses & designer frames to match your style.", price: "Curated", image: store4 },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-sky-50 to-white relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-900 font-serif">Professional Services</h2>
          <p className="text-lg text-sky-700 font-sans">Comprehensive eye care solutions tailored to your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
              <Card className="h-full bg-white shadow-lg hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                </div>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-200 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-sky-900 font-serif group-hover:text-sky-600 transition-colors">{service.title}</h3>
                  <p className="text-sky-700 mb-4 flex-grow group-hover:text-sky-900 transition-colors font-sans">{service.description}</p>
                  <span className="text-sky-600 font-semibold text-lg font-sans">{service.price}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
