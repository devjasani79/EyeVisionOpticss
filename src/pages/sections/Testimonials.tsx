import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Hrushikesh Raiker", rating: 5, text: "Exceptional service! Got my prescription glasses in just 1 hour. The staff was incredibly helpful in choosing the perfect frame." },
  { name: "Sujay Swaar", rating: 5, text: "Best place for Varilux lenses in Pune. Professional eye testing and the frame collection is outstanding." },
  { name: "Aman Sharma", rating: 5, text: "Free eye testing was thorough and accurate. The team helped me find the perfect contact lenses with proper training." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-900 font-serif">What Our Customers Say</h2>
          <p className="text-lg text-sky-700 font-sans">Trusted by thousands across Pune and nearby areas</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
              <Card className="h-full bg-white shadow-lg hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-sky-900 font-serif group-hover:text-sky-600 transition-colors">{t.name}</h4>
                      <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-sky-400 text-sky-400" />)}</div>
                    </div>
                  </div>
                  <p className="text-sky-700 italic leading-relaxed group-hover:text-sky-900 transition-colors font-sans">"{t.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "1000+", label: "Happy Customers" },
            { number: "4.8★", label: "Average Rating" },
            { number: "500+", label: "Frame Styles" },
            { number: "1 Hour", label: "Quick Service" },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="text-center p-6 bg-white shadow-lg rounded-xl hover:shadow-xl hover:shadow-sky-100 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2 font-serif">{stat.number}</div>
              <div className="text-sky-700 text-sm font-sans">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
