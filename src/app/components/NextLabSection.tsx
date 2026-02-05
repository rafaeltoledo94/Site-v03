import React from 'react';
import { Marquee } from './ui/Marquee';
import { motion } from 'motion/react';
import { CheckSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NextLabSection() {
  return (
    <section id="nextlab" className="bg-[#1a052e] text-white overflow-hidden border-b-2 border-black">
      <Marquee 
        text="Negócios • Inovação • Educação Disruptiva • Empreendedorismo • Laboratório de Idéias" 
        className="bg-lime-400 text-[#1a052e] border-y-2 border-black" 
        textClassName="text-xl md:text-3xl"
        reverse 
      />

      <div className="container mx-auto px-4 py-24 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div>
            <div className="inline-block border-2 border-lime-400 text-lime-400 px-4 py-1 font-bold uppercase tracking-wider mb-6 rotate-[-2deg]">
              Para Jovens de 12 a 18 anos
            </div>
            
            <h2 className="font-display font-bold text-5xl md:text-7xl uppercase leading-none mb-8">
              NEXT<span className="text-lime-400">LAB</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed border-l-4 border-lime-400 pl-6">
              Um programa desenvolvido para desbloquear o potencial <strong className="text-white">Criativo de Jovens e Adolescentes</strong>, fortalecendo e criando perfil de <strong className="text-white">Liderança e Resolução de Problemas</strong>, preparando-os para o jogo da vida.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Empreendedorismo', 
                'Gestão de Negócios', 
                'Marketing & Produto', 
                'Finanças Corporativas',
                'Gestão de Projetos'
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 bg-lime-400 text-black flex items-center justify-center font-bold">
                    <CheckSquare size={14} />
                  </div>
                  <span className="font-display text-2xl uppercase tracking-wide group-hover:translate-x-2 transition-transform text-white/80 group-hover:text-lime-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/nextlab" className="bg-lime-400 text-black font-bold uppercase px-8 py-4 text-lg hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] text-center">
                Seja uma Escola Parceira
              </Link>
              <Link to="/nextlab" className="bg-transparent border-2 border-lime-400 text-lime-400 font-bold uppercase px-8 py-4 text-lg hover:bg-lime-400 hover:text-black transition-colors flex items-center justify-center gap-2">
                Ver Grade Completa <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative">
             <div className="absolute top-0 right-0 w-full h-full border-2 border-lime-400 translate-x-4 translate-y-4"></div>
             <div className="relative bg-purple-900 border-2 border-lime-400 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1528249072419-472a928b71c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlcnMlMjBzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDAzMDA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Students Working" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-black text-lime-400 px-3 py-1 font-bold font-mono text-sm">
                  NEXTLAB_ACADEMY.EXE
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
