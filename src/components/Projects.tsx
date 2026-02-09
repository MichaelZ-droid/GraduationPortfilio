"use client";

import { PortfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Projects({ data }: { data: PortfolioData["projects"] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const currentProject = data[currentIndex];

  return (
    <section id="projects" className="py-20 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <h2 className="text-3xl font-bold mb-12 text-center">Project Showcase</h2>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Project Visual Placeholder (Left/Top) */}
              <div className="bg-zinc-800 md:w-[60%] min-h-[300px] md:min-h-[500px] relative group overflow-hidden">
                {currentProject.image ? (
                  <>
                    {/* Blurred Background Layer - Fills the space */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={currentProject.image} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl scale-110 transition-transform duration-700 group-hover:scale-125" 
                    />
                    
                    {/* Main Image Layer - Contained to show full content */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title} 
                      className="relative w-full h-full object-contain p-4 z-10 transition-transform duration-500 group-hover:scale-[1.02]" 
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-600 font-mono text-sm border-r border-zinc-700 bg-zinc-800/50">
                    [Project Preview]
                  </div>
                )}
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
              </div>

              {/* Project Info (Right/Bottom) */}
              <div className="p-8 md:p-10 md:w-[40%] flex flex-col justify-center bg-zinc-900/50 backdrop-blur-sm border-l border-zinc-800">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {currentProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                  {currentProject.title}
                </h3>
                
                <p className="text-zinc-400 mb-8 text-base leading-relaxed">
                  {currentProject.description}
                </p>
                
                {currentProject.painPoints && (
                  <div className="mb-8 p-4 bg-zinc-800/50 rounded-xl border border-zinc-800">
                    <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Pain Points</h4>
                    <ul className="space-y-2">
                      {currentProject.painPoints.map((point, i) => (
                        <li key={i} className="text-zinc-300 text-sm flex items-start gap-2">
                          <span className="text-red-400/80 mt-1 text-xs">●</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {currentProject.features && (
                    <div className="mb-8">
                        <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Solution Features</h4>
                        <ul className="space-y-2">
                            {currentProject.features.map((feature, i) => (
                            <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                                <CheckCircle size={14} className="text-emerald-500 mt-1 shrink-0" /> {feature}
                            </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                <div className="mt-auto">
                    {currentProject.link && (
                    <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-8 py-3 bg-white text-zinc-950 rounded-xl font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                        {currentProject.linkText || "View on Web"} <ExternalLink size={18} />
                    </a>
                    )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full backdrop-blur-sm border border-zinc-700 transition-all z-10"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full backdrop-blur-sm border border-zinc-700 transition-all z-10"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-zinc-700 hover:bg-zinc-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
