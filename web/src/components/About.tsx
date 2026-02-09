"use client";

import { PortfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function About({ data }: { data: PortfolioData["personal"] }) {
  return (
    <section id="about" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-zinc-300 leading-relaxed whitespace-pre-line">
            {data.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
