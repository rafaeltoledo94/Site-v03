import React from 'react';
import { Target, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Gestão",
    desc: "Processos que funcionam sem você precisar estar lá 24h.",
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Finanças",
    desc: "Conhecer seus números é tudo que importa, pare de perder dinheiro.",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: "Liderança",
    desc: "Treine seu time para resolver problemas, não criá-los.",
    icon: <Users className="w-8 h-8" />
  }
];

export function ConsultancySection() {
  return (
    <section id="consultoria" className="bg-white border-b-2 border-black">
      <div className="grid md:grid-cols-12">
        {/* Header Block */}
        <div className="md:col-span-4 p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black bg-purple-50">
          <span className="inline-block px-3 py-1 bg-purple-900 text-white font-bold uppercase text-xs mb-6">
            @ideiasenegociosbr
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase leading-none mb-6">
            Consultoria <br/>
            <span className="text-purple-700">Prática</span>
          </h2>
          <p className="font-medium text-lg text-slate-700 mb-8">
            Para micro e pequenos empreendedores que precisam de apoio para construir resultados sérios e prosperar.
          </p>
          <Link to="/ideias-negocios" className="inline-flex items-center gap-2 font-bold text-sm uppercase bg-black text-white px-6 py-3 hover:bg-purple-900 transition-colors">
            Ver Detalhes dos Serviços <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid Blocks */}
        <div className="md:col-span-8 grid sm:grid-cols-2">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`
                p-8 md:p-12 border-b-2 border-black flex flex-col justify-between hover:bg-slate-50 transition-colors group
                ${idx % 2 === 0 ? 'sm:border-r-2' : ''}
              `}
            >
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-none mb-6 group-hover:bg-purple-900 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl uppercase mb-3">{service.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
          
          {/* Last Block - CTA */}
          <div className="bg-black text-white p-8 md:p-12 flex flex-col justify-center items-start sm:border-r-2 border-black relative overflow-hidden">
             <div className="absolute inset-0 bg-purple-900 opacity-0 hover:opacity-100 transition-opacity duration-300 z-0"></div>
             <div className="relative z-10">
               <h3 className="font-display font-bold text-3xl uppercase mb-4">Workshops & Mentoria</h3>
               <p className="text-slate-300 mb-6 text-sm">Imersões práticas para desbloquear o próximo nível.</p>
               <Link to="/ideias-negocios" className="border-b border-white hover:border-lime-400 hover:text-lime-400 transition-colors pb-1 text-sm uppercase font-bold tracking-wider">
                  Saiba Mais
               </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
