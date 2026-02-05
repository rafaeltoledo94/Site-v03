import { motion } from "motion/react";
import { Zap, Target, Users, Rocket, Calendar, Clock, Award, School, Briefcase } from "lucide-react";

export const NextLab = () => {
  const programs = [
    {
      title: "Programa de Férias",
      tag: "Imersão",
      duration: "15 Dias",
      description: "Os jovens criam uma empresa do zero em duas semanas. Um programa prático e completo, similar ao recorrente, focado na execução real e vivência de mercado.",
      features: ["Ideação de Negócio", "Prototipagem", "Finanças Básicas", "Pitch Final"],
      color: "bg-[#a3e635]"
    },
    {
      title: "Programa Recorrente",
      tag: "Shark Tank Style",
      duration: "7 Sábados",
      description: "Jornada completa de empreendedorismo. 7 encontros práticos culminando em um Pitch Day estilo Shark Tank e uma feira de exposições aberta aos pais.",
      features: ["Marketing & Vendas", "Finanças Pessoais e Empresariais", "Oratória e Pitch", "Feira de Negócios Real"],
      color: "bg-[#1a052e] text-white"
    },
    {
      title: "Mentoria & Coaching",
      tag: "Carreira",
      duration: "Personalizado",
      description: "Orientação individual para jovens que estão indecisos sobre o futuro profissional ou querem acelerar seu desenvolvimento pessoal.",
      features: ["Teste vocacional moderno", "Planejamento de carreira", "Desenvolvimento de Soft Skills", "Networking jovem"],
      color: "bg-white"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a052e] text-white font-sans pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center overflow-hidden border-b-4 border-[#a3e635]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2340&auto=format&fit=crop" 
            alt="Students" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a052e] to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="inline-block bg-[#a3e635] text-[#1a052e] font-bold px-4 py-1 text-sm uppercase tracking-widest mb-4">
              Programa de Negócios para Jovens de 12 – 18 anos
            </span>
            <h1 className="font-['Oswald'] text-7xl md:text-9xl font-bold uppercase leading-none mb-6">
              Next<span className="text-transparent stroke-white" style={{ WebkitTextStroke: "2px #a3e635" }}>Lab</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300 mb-8 border-l-4 border-[#a3e635] pl-6">
              Um programa desenhado para desbloquear toda a capacidade criativa e empreendedora dos jovens. Nosso objetivo é ser o parceiro estratégico das escolas, potencializando a formação dos alunos para o mercado real.
            </p>
            <button className="bg-[#a3e635] text-[#1a052e] px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2">
              <School className="fill-current" /> Seja uma Escola Parceira
            </button>
          </motion.div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-24 px-4 container mx-auto">
        <h2 className="font-['Oswald'] text-5xl font-bold uppercase mb-16 text-center text-white">
          Programas <span className="text-[#a3e635]">Oficiais</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 border-4 border-[#a3e635] relative flex flex-col ${prog.color === 'bg-white' ? 'text-[#1a052e]' : ''} ${prog.color}`}
            >
              <div className="absolute -top-5 right-4 bg-black text-white border border-[#a3e635] px-4 py-1 font-mono text-sm uppercase">
                {prog.tag}
              </div>

              <h3 className={`font-['Oswald'] text-4xl font-bold uppercase mb-2 leading-none ${prog.color === 'bg-[#1a052e] text-white' ? 'text-[#a3e635]' : ''}`}>
                {prog.title}
              </h3>
              
              <div className="flex items-center gap-2 font-bold mb-6 opacity-80 text-sm uppercase tracking-wide">
                <Clock className="w-4 h-4" /> {prog.duration}
              </div>

              <p className="mb-8 font-medium leading-relaxed opacity-90 flex-grow">
                {prog.description}
              </p>

              <ul className="space-y-3 mb-8">
                {prog.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold">
                    <div className={`w-2 h-2 rounded-full ${prog.color === 'bg-[#a3e635]' ? 'bg-black' : 'bg-[#a3e635]'}`}></div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 font-bold uppercase border-2 transition-all hover:translate-x-1 hover:translate-y-1
                ${prog.color === 'bg-[#a3e635]' ? 'border-black text-black hover:bg-black hover:text-white' : 
                  prog.color === 'bg-white' ? 'border-[#1a052e] text-[#1a052e] hover:bg-[#1a052e] hover:text-white' : 
                  'border-[#a3e635] text-[#a3e635] hover:bg-[#a3e635] hover:text-black'}`}
              >
                Saiba Mais
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Methodology / Why */}
      <div className="bg-white text-black py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="font-['Oswald'] text-5xl font-bold uppercase mb-8 leading-none">
              Por que inserir o programa na <span className="bg-[#a3e635] px-2">sua escola?</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                O mercado de trabalho mudou drasticamente. Empresas hoje buscam perfis intraempreendedores: profissionais com autonomia, capacidade de resolução de problemas e visão sistêmica.
              </p>
              <p>
                Estudos recentes mostram que <strong>85% das profissões de 2030 ainda não existem</strong> (Dell Technologies). O sistema tradicional foca no técnico, o <span className="font-bold text-[#1a052e]">NEXTLAB</span> foca na mentalidade e na adaptabilidade.
              </p>
              <p>
                Trazer o NEXTLAB para sua escola é entregar aos pais e alunos uma formação que vai além do vestibular: é preparar para a vida real e para o protagonismo profissional.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="flex items-center gap-3">
                 <Briefcase className="w-8 h-8 text-[#1a052e]" />
                 <span className="font-bold uppercase text-sm">Empregabilidade</span>
               </div>
               <div className="flex items-center gap-3">
                 <Rocket className="w-8 h-8 text-[#1a052e]" />
                 <span className="font-bold uppercase text-sm">Inovação</span>
               </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2340&auto=format&fit=crop" className="w-full h-64 object-cover border-4 border-black grayscale hover:grayscale-0 transition-all duration-500" alt="Learning" />
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2340&auto=format&fit=crop" className="w-full h-64 object-cover border-4 border-black mt-8 grayscale hover:grayscale-0 transition-all duration-500" alt="Teamwork" />
          </div>
        </div>
      </div>

      {/* Custom Programs Banner */}
      <div className="bg-[#a3e635] py-16 text-[#1a052e] text-center px-4">
        <div className="container mx-auto">
          <h2 className="font-['Oswald'] text-4xl font-bold uppercase mb-4">Programas Customizados</h2>
          <p className="max-w-2xl mx-auto font-bold mb-8">
            Quer levar o NEXTLAB para sua escola ou criar um workshop exclusivo para seu grupo?
          </p>
          <button className="border-4 border-[#1a052e] px-8 py-3 font-bold uppercase hover:bg-[#1a052e] hover:text-[#a3e635] transition-colors">
            Solicitar Proposta
          </button>
        </div>
      </div>
    </div>
  );
};
