import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  text: string;
  className?: string;
  textClassName?: string;
  repeat?: number;
  reverse?: boolean;
}

export function Marquee({ text, className, textClassName, repeat = 10, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden whitespace-nowrap py-4 select-none", className)}>
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className={cn("font-display font-bold uppercase tracking-tighter text-4xl md:text-6xl", textClassName)}>
            {text} <span className="text-transparent text-stroke mx-4">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
