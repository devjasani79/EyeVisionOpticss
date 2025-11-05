import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/bgvideo4.mp4";

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
      <motion.div 
        style={{ scale: videoScale, opacity: videoOpacity }} 
        className="absolute inset-0 z-0"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/20 to-white/80" />
      </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto transform-gpu"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif text-sky-900">
          <span>Sharp. Clear. Visionary.</span>
        </h1>
        <p className="text-xl md:text-2xl text-sky-700 mb-4 font-sans">Where Vision Meets Virtue</p>
        <p className="text-lg md:text-xl text-sky-600 mb-8 max-w-3xl mx-auto">
          Curating an unparalleled vision experience through precision and uncompromising refinement.
        </p>
        <Button
          size="lg"
          className="bg-sky-600 hover:bg-sky-700 text-white shadow-lg hover:shadow-sky-200 transition-all duration-300 group"
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
