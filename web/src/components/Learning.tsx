"use client";

import { PortfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function Learning({ data }: { data: PortfolioData["learningReviews"] }) {
  return (
    <section id="learning" className="py-20 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-10 justify-center">
            <BookOpen className="text-indigo-400" />
            <h2 className="text-3xl font-bold text-center">Learning Review</h2>
        </div>
        
        <div className="grid gap-8">
          {data.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-indigo-200">{review.title}</h3>
              </div>
              <div className="space-y-4">
                {review.content.split('\n').map((line, i) => {
                  if (line.trim().startsWith('### ')) {
                    return (
                      <h4 key={i} className="text-lg font-bold text-white mt-6 mb-2">
                        {line.replace('### ', '')}
                      </h4>
                    );
                  }
                  if (line.trim().startsWith('- ')) {
                    return (
                      <div key={i} className="flex items-start gap-2 text-zinc-400 pl-1">
                        <span className="text-white mt-2 text-[6px] shrink-0">●</span>
                        <span className="leading-relaxed">{line.replace('- ', '')}</span>
                      </div>
                    );
                  }
                  if (line.trim() === '') {
                    return <div key={i} className="h-2" />;
                  }
                  return (
                    <p key={i} className="text-zinc-400 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
