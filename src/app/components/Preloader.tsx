import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Complete trigger
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-white overflow-hidden"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        
        {/* Flashing Words */}
        <div className="h-20 md:h-32 overflow-hidden relative w-full text-center">
           <motion.div 
             animate={{ y: ["0%", "-25%", "-50%", "-75%"] }}
             transition={{ duration: 2, times: [0, 0.33, 0.66, 1], ease: "easeInOut" }}
             className="flex flex-col items-center"
           >
              <span className="font-display font-bold text-6xl md:text-9xl uppercase leading-none h-20 md:h-32 flex items-center text-purple-600">IDEIAS</span>
              <span className="font-display font-bold text-6xl md:text-9xl uppercase leading-none h-20 md:h-32 flex items-center text-white">NEGÓCIOS</span>
              <span className="font-display font-bold text-6xl md:text-9xl uppercase leading-none h-20 md:h-32 flex items-center text-lime-400">NEXT LAB</span>
              <span className="font-display font-bold text-6xl md:text-9xl uppercase leading-none h-20 md:h-32 flex items-center text-white">FUTURO</span>
           </motion.div>
        </div>

        {/* Loading Bar & Counter */}
        <div className="w-full mt-12 flex items-end gap-4">
           <div className="h-4 bg-white/20 flex-1 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-lime-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
           </div>
           <span className="font-display font-bold text-4xl w-24 text-right tabular-nums">{count}%</span>
        </div>

      </div>
    </motion.div>
  );
}
