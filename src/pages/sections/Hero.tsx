import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/6009721_4k_Video_Attractive_3840x2160.mp4";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale: videoScale, opacity: videoOpacity }} className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </motion.div>

      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-playfair">
          <span className=" animate-shimmer bg-[length:200%_auto]">Sharp. Clear. Visionary.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-inter">Where Vision Meets Virtue</p>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
          Curating an unparalleled vision experience through precision and uncompromising refinement.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Discover More
          <motion.span className="ml-2 inline-block" animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            ↓
          </motion.span>
        </Button>
      </motion.div>
    </section>
  );
}
