import { motion } from "motion/react";
import { Linkedin, Instagram, Mail, Target, Zap, Shield, ArrowRight } from "lucide-react";
import rafaelImg from "figma:asset/1182ff53dd980e256f26aad516e3cc461abe8f52.png";

export const QuemSomos = () => {
  const values = [
    { 
      icon: <Target className="w-8 h-8" />,
      title: "Verdade Brutal", 
      text: "Não vendemos sonhos inalcançáveis. Entregamos a realidade crua necessária para o crescimento." 
    },
    { 
      icon: <Zap className="w-8 h-8" />,
      title: "Ação Imediata", 
      text: "Planejamento excessivo é paralisia. Focamos no 'fazer agora' e ajustar no caminho." 
    },
    { 
      icon: <Shield className="w-8 h-8" />,
      title: "Anti-Frágil", 
      text: "Preparamos negócios e jovens para prosperarem no caos, não apenas sobreviverem a ele." 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans pt-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="absolute top-10 right-0 w-64 h-64 bg-[#a3e635] rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="border-l-8 border-black pl-8 md:pl-16 mb-20"
        >
          <h1 className="font-['Oswald'] text-7xl md:text-9xl font-bold uppercase leading-[0.9]">
            Quem <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a052e] to-black" style={{ WebkitTextStroke: "2px black" }}>Somos</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="text-xl md:text-2xl font-bold leading-relaxed">
            <p className="mb-8">
              Não somos apenas uma consultoria, nem apenas um programa de extensão escolar. Somos um <span className="bg-[#a3e635] px-2 text-black inline-block transform -rotate-1">hub de desenvolvimento</span> de negócios e pessoas.
            </p>
            <p className="text-gray-600 font-medium">
              Nascemos da necessidade de quebrar padrões de formalidade. Trazemos o conhecimento prático — forjado em anos de experiência em grandes empresas e universidades — e o entregamos de forma acessível a todo empreendedor.
            </p>
          </div>
          
          <div className="border-4 border-black p-8 bg-[#1a052e] text-white shadow-[12px_12px_0px_0px_rgba(163,230,53,1)] transform rotate-1 hover:rotate-0 transition-transform duration-500">
             <h3 className="font-['Oswald'] text-3xl uppercase text-[#a3e635] mb-4">Nossa Missão</h3>
             <p className="text-lg leading-relaxed font-mono">
               "Apoiar empreendedores a quebrar ciclos viciosos de gestão e formar a próxima geração para dominar os desafios de um mundo que ainda nem existe."
             </p>
          </div>
        </div>
      </div>

      {/* Marquee Separator */}
      <div className="bg-black py-6 overflow-hidden border-y-4 border-[#a3e635]">
        <div className="whitespace-nowrap animate-marquee flex gap-8">
          {[...Array(10)].map((_, i) => (
             <span key={i} className="text-[#a3e635] font-['Oswald'] text-4xl uppercase font-bold mx-8 flex items-center gap-4">
               Gestão <span className="w-3 h-3 bg-white rounded-full block"></span> 
               Educação <span className="w-3 h-3 bg-white rounded-full block"></span> 
               Futuro <span className="w-3 h-3 bg-white rounded-full block"></span>
             </span>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Image Frame */}
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <div className="relative border-4 border-black bg-white p-2 z-10">
                  <img 
                    src={rafaelImg} 
                    alt="Rafael Toledo" 
                    className="w-full h-[600px] object-cover object-[50%_25%] filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                  />
                  <div className="absolute bottom-0 left-0 bg-black text-white px-6 py-3 border-t-4 border-r-4 border-black">
                    <p className="font-['Oswald'] text-3xl uppercase text-[#a3e635]">Rafael Toledo</p>
                    <p className="font-mono text-xs uppercase tracking-widest">Fundador & Consultor Líder</p>
                  </div>
                </div>
              </div>

              {/* Founder Text */}
              <div className="lg:w-1/2">
                <h2 className="font-['Oswald'] text-6xl font-bold uppercase mb-8 leading-none">
                  Onde Tudo <br/> <span className="text-[#1a052e]">Começou</span>
                </h2>
                
                <div className="space-y-6 text-lg font-medium text-gray-800">
                  <p className="border-l-4 border-[#a3e635] pl-4">
                    Filho de empreendedores, Rafael começou cedo. Aos 16, desenhou seu primeiro plano de negócios. Aos 18, abriu seu primeiro CNPJ.
                  </p>
                  <p>
                    Em 2019, fundou a <strong>S&T Consultoria</strong> com o objetivo de apoiar micro e pequenos empreendedores. Em 2021, essa visão evoluiu para se tornar o <strong>Ideias & Negócios</strong>.
                  </p>
                  <p>
                     Sua bagagem é multidisciplinar: passou pela indústria, construção civil, terceiro setor e, nos últimos 4 anos, liderou estratégias de crescimento na área da saúde.
                  </p>
                  <p className="font-bold text-[#1a052e]">
                    O resultado? Liderou com sucesso o investimento de quase 1 Bilhão de reais em iniciativas de crescimento orgânico e M&A.
                  </p>
                </div>

                <div className="flex gap-4 mt-10">
                  <a 
                    href="https://www.linkedin.com/in/rafael-toledo-6153a9221/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-black p-3 hover:bg-[#1a052e] hover:text-[#a3e635] hover:border-[#1a052e] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-1 active:translate-y-1 block"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <button className="border-2 border-black p-3 hover:bg-[#1a052e] hover:text-[#a3e635] hover:border-[#1a052e] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-1 active:translate-y-1">
                    <Instagram className="w-6 h-6" />
                  </button>
                  <button className="border-2 border-black px-6 py-3 font-bold uppercase flex items-center gap-2 hover:bg-[#a3e635] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-1 active:translate-y-1">
                    Fale com o Rafael <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#1a052e] py-24 px-4 text-white border-t-8 border-[#a3e635]">
         <div className="container mx-auto">
            <h2 className="font-['Oswald'] text-5xl md:text-7xl font-bold uppercase text-center mb-20">
              O Código <span className="text-[#a3e635]">Next</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-black border-4 border-white/20 p-8 hover:border-[#a3e635] transition-colors relative group"
                >
                  <div className="absolute -top-6 -right-6 bg-[#a3e635] text-black p-4 rotate-12 group-hover:rotate-0 transition-all border-4 border-black">
                    {value.icon}
                  </div>
                  <h3 className="font-['Oswald'] text-3xl uppercase mb-4 text-[#a3e635]">{value.title}</h3>
                  <p className="text-gray-300 font-mono leading-relaxed">
                    {value.text}
                  </p>
                </motion.div>
              ))}
            </div>
         </div>
      </div>

    </div>
  );
};