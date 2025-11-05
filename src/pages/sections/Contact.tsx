import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [state, handleSubmit] = useForm("mkgplypp");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! We'll get back to you soon.");
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-playfair">Visit Us Today</h2>
          <p className="text-lg text-muted-foreground">Expert guidance & solutions tailored just for you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground font-playfair">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input type="text" name="user_name" placeholder="Your Name" required className="bg-background border-input focus:border-primary transition-colors" />
                    <ValidationError prefix="Name" field="user_name" errors={state.errors} />
                  </div>
                  <div>
                    <Input id="email" type="email" name="email" placeholder="Your Email" required className="bg-background border-input focus:border-primary transition-colors" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <Input type="tel" name="user_phone" placeholder="Phone Number" className="bg-background border-input focus:border-primary transition-colors" />
                    <ValidationError prefix="Phone" field="user_phone" errors={state.errors} />
                  </div>
                  <div>
                    <Textarea id="message" name="message" placeholder="Your Message" rows={5} required className="bg-background border-input resize-none focus:border-primary transition-colors" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <Button type="submit" disabled={state.submitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all group">
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3 group cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Shop No 3, Samadhan Building, 759/35, Bhandarkar Rd,
                        <br /> near Oak-wood Hotel, Deccan Gymkhana,
                        <br /> Pune, Maharashtra 411004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Phone</p>
                      <a href="tel:+919372224060" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 93722 24060</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Hours</p>
                      <p className="text-sm text-muted-foreground">Open: Mon-Sun, 10 AM - 9 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="h-full min-h-[500px] group">
            <div className="relative h-full rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25497.531165597265!2d73.80451891083986!3d18.517584499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf87e5f2b983%3A0x5b615b197a5dca4c!2sEye%20Vision%20Optics!5e1!3m2!1sen!2sin!4v1762264055668!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
