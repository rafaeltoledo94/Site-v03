import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/', color: 'hover:text-black' },
    { name: 'Ideias e Negócios', path: '/ideias-negocios', color: 'hover:text-purple-600' },
    { name: 'NEXTLAB', path: '/nextlab', color: 'hover:text-lime-500' },
    { name: 'Newsletter', path: '/blog', color: 'hover:text-purple-600' },
    { name: 'Quem Somos', path: '/quem-somos', color: 'hover:text-lime-500' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black h-20 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center">
          <Link to="/" className="font-display font-bold text-2xl md:text-3xl tracking-tighter uppercase flex items-center gap-2">
            Ideias <span className="text-lime-500">&</span> Negócios <span className="text-black/20">|</span> <span className="text-purple-900">NEXT<span className="text-lime-500">LAB</span></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`font-bold uppercase tracking-wide text-sm transition-colors ${link.color} ${location.pathname === link.path ? 'underline decoration-2 underline-offset-4' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contato" className="bg-black text-white px-6 py-2 font-bold uppercase hover:bg-[#a3e635] hover:text-black transition-colors">
            Contato
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold uppercase border-b-2 border-black pb-4 flex justify-between items-center group"
                >
                  {link.name}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
               <a 
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold uppercase border-b-2 border-black pb-4 flex justify-between items-center group text-[#a3e635] bg-[#1a052e] px-2"
                >
                  Contato
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
