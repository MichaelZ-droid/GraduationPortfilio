"use client";

import { motion } from "framer-motion";
import { PortfolioData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero({ data }: { data: PortfolioData["personal"] }) {
  const containerRef = useRef<HTMLElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle in degrees
      const angleRad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      let angleDeg = (angleRad * 180) / Math.PI;
      
      // Adjust so 0 is at top or matches css conic-gradient start
      // conic-gradient starts at 12 o'clock if we use 'from' correctly or 3 o'clock default?
      // CSS default 0deg is 12 o'clock? No, 0deg is usually 12 o'clock in standard rotation, but conic gradient 0deg is 12 o'clock.
      // Math.atan2 0 is 3 o'clock (positive X axis).
      // So we need to shift by 90 degrees.
      setRotation(angleDeg + 90);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-zinc-950 text-white"
    >
      {/* Eclipse Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* The Glow Ring Container */}
        <div className="relative w-[50vw] h-[50vw] min-w-[350px] min-h-[350px] max-w-[800px] max-h-[800px]">
           {/* Static faint ring */}
           <div className="absolute inset-0 rounded-full border border-zinc-800/50 shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]" />
           
           {/* Moving Highlight - Conic Gradient */}
           <div 
             className="absolute inset-[-10%] rounded-full opacity-60 blur-xl transition-transform duration-75 ease-out will-change-transform"
             style={{ 
               background: `conic-gradient(from ${rotation}deg at 50% 50%, transparent 0deg, transparent 140deg, rgba(255,255,255,0.4) 180deg, transparent 220deg, transparent 360deg)`,
             }}
           />
           
           {/* Sharp Rim Highlight */}
            <div 
             className="absolute inset-[-1px] rounded-full transition-transform duration-75 ease-out will-change-transform opacity-100"
             style={{ 
               background: `conic-gradient(from ${rotation}deg at 50% 50%, transparent 0deg, transparent 165deg, rgba(255,255,255,1) 180deg, transparent 195deg, transparent 360deg)`,
             }}
           />

           {/* The "Moon" (Black center) */}
           <div className="absolute inset-[1px] bg-zinc-950 rounded-full z-10" />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl"
      >
        <h2 className="text-indigo-400 font-medium tracking-wide mb-4 uppercase text-sm">
          {data.title}
        </h2>
        {/* Fixed: Added pb-2 to prevent descender clipping */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 pb-2">
          {data.name}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed mt-4">
          {data.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 mx-auto sm:mx-0"
          >
            查看项目 <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 mx-auto sm:mx-0"
          >
            关于我
          </a>
        </div>
      </motion.div>
    </section>
  );
}
