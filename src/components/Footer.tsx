"use client";

import { PortfolioData, SocialLink } from "@/data/portfolio";
import { Github, Mail, MessageCircle, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const icons = {
  Github,
  Mail,
  Wechat: MessageCircle
};

export function Footer({ data }: { data: PortfolioData["socials"] }) {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-center">
      <div className="flex justify-center gap-8 mb-8">
        {data.map((social) => (
          <SocialItem key={social.platform} social={social} />
        ))}
      </div>
      <p className="text-zinc-600 text-sm">
        © {new Date().getFullYear()} VibeCoding Graduation Showcase. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}

function SocialItem({ social }: { social: SocialLink }) {
  const [copied, setCopied] = useState(false);
  // @ts-expect-error - dynamic icon lookup
  const Icon = icons[social.icon] || Github;
  
  const handleCopy = () => {
    if (social.type === 'copy') {
      navigator.clipboard.writeText(social.value || social.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const Wrapper = social.type === 'link' ? 'a' : 'button';
  const props = social.type === 'link' 
    ? { href: social.url, target: "_blank", rel: "noopener noreferrer" }
    : { onClick: handleCopy };

  return (
    <div className="relative group">
      <Wrapper
        {...props}
        className="block text-zinc-500 hover:text-white transition-colors p-2 relative"
        aria-label={social.platform}
      >
        <Icon size={24} />
        
        {/* Success Indicator for Copy */}
        <AnimatePresence>
            {copied && (
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-1"
                >
                    <Check size={10} />
                </motion.div>
            )}
        </AnimatePresence>
      </Wrapper>

      {/* Tooltip for Copy Type */}
      {social.type === 'copy' && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-zinc-800 text-xs text-zinc-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-700">
          {copied ? "Copied!" : social.value}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-800" />
        </div>
      )}
    </div>
  );
}
