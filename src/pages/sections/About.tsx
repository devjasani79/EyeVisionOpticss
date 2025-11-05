import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
        <img src={store1} alt="" className="w-full h-full object-cover rounded-3xl rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10">
        <img src={store2} alt="" className="w-full h-full object-cover rounded-3xl -rotate-12" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">Your One-Stop Destination for Quality Eyewear</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We specialize in delivering high-quality prescription spectacles within just 1 hour.
            Looking for numbered sunglasses, coloured contact lenses, power contact lenses?
            We've got you covered with a wide range of brand options.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <p className="text-center mb-8 text-foreground/90">
            Proud to be an authorized seller of <strong className="text-primary font-semibold">Varilux Progressive Lenses</strong>, offering seamless transition & complete acclimation assurance.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground font-playfair group-hover:text-primary transition-colors">What Sets Us Apart</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2 group-hover:text-foreground transition-colors"><span className="text-primary mt-1">✓</span><span>Free Digital Eye Testing</span></li>
                  <li className="flex items-start gap-2 group-hover:text-foreground transition-colors"><span className="text-primary mt-1">✓</span><span>Personalized Eye Care Assistance</span></li>
                  <li className="flex items-start gap-2 group-hover:text-foreground transition-colors"><span className="text-primary mt-1">✓</span><span>Expert lens selection for vision & budget</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground font-playfair group-hover:text-primary transition-colors">Comprehensive Care</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2 group-hover:text-foreground transition-colors"><span className="text-primary mt-1">✓</span><span>Contact Lens Training for new users</span></li>
                  <li className="flex items-start gap-2 group-hover:text-foreground transition-colors"><span className="text-primary mt-1">✓</span><span>Proper usage guidelines & support</span></li>
                  <li className="flex items-start gap-2 group-hover:text-foreground transition-colors"><span className="text-primary mt-1">✓</span><span>Expert guidance tailored just for you</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
