import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop",
    label: "Consultoria"
  },
  {
    src: "https://images.unsplash.com/photo-1528249072419-472a928b71c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlcnMlMjBzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDAzMDA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: "NextLAB"
  },
  {
    src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3NwYXBlciUyMGRpZ2l0YWwlMjBuZXdzJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzcwMDMyNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: "Notícias"
  }
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20 min-h-screen flex flex-col justify-between overflow-hidden bg-white">
      <div className="grid md:grid-cols-12 h-full flex-1">
        
        {/* Left Side: Typography */}
        <div className="md:col-span-7 flex flex-col justify-center px-6 md:px-12 py-12 border-b-2 md:border-b-0 md:border-r-2 border-black relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-xl md:text-2xl uppercase tracking-widest mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-black block"></span>
              Ecossistema de Negócios
            </h2>
            
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter uppercase mb-8">
              Do <span className="text-purple-600">Caos</span> <br/>
              À <span className="bg-lime-400 px-2 text-black">Ordem</span>
            </h1>

            <p className="text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-10 text-slate-800">
              Transformamos micro negócios em máquinas de crescimento e preparamos jovens para liderar o futuro. 
              <span className="block mt-2 font-bold bg-black text-white w-fit px-2">Teoria aplicada na prática.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ideias-negocios" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider border-2 border-black hover:bg-black hover:text-white transition-colors text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                Para Empresas
              </Link>
              <Link to="/nextlab" className="px-8 py-4 bg-purple-900 text-lime-400 font-bold uppercase tracking-wider border-2 border-purple-900 hover:bg-lime-400 hover:text-purple-900 transition-colors text-center shadow-[4px_4px_0px_0px_rgba(163,230,53,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                Para Jovens
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image/Visuals */}
        <div className="md:col-span-5 relative bg-slate-100 overflow-hidden min-h-[50vh] md:min-h-auto border-b-2 border-black md:border-b-0 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img 
                src={heroImages[currentImage].src} 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                alt={heroImages[currentImage].label}
              />
              <div className="absolute inset-0 bg-purple-900 mix-blend-multiply opacity-20"></div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 right-6 bg-white border-2 border-black px-4 py-2 font-bold uppercase text-sm tracking-widest z-10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
            {heroImages[currentImage].label}
          </div>
        </div>
      </div>
    </section>
  );
}
