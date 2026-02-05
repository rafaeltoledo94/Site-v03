import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, BarChart3, Users, Building2, TrendingUp, DollarSign, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export const IdeiasNegocios = () => {
  const services = [
    {
      title: "Diagnóstico 360",
      icon: <BarChart3 className="w-10 h-10 text-[#a3e635]" />,
      description: "Um raio-x completo do seu negócio para identificar onde você está perdendo dinheiro e onde pode ganhar mais.",
      items: [
        "Mapeamento de maturidade de gestão",
        "Análise de processos e gargalos operacionais",
        "Análise financeira (margens, ponto de equilíbrio)",
        "Plano de ações prioritárias (Quick-wins)"
      ]
    },
    {
      title: "Estratégia e Estruturação",
      icon: <Building2 className="w-10 h-10 text-[#a3e635]" />,
      description: "Profissionalize sua empresa. Saia do operacional e comece a gerir um negócio que funciona sem você o tempo todo.",
      items: [
        "Construção do plano estratégico",
        "Implantação de indicadores (KPIs)",
        "Criação de manuais de operação (SOP)",
        "Desenho de organograma e papéis claros"
      ]
    },
    {
      title: "Crescimento e Expansão",
      icon: <TrendingUp className="w-10 h-10 text-[#a3e635]" />,
      description: "Quer abrir filial? Franquear? Mudar de ponto? Não dê passos no escuro. Nós calculamos o risco para você.",
      items: [
        "Estudo de viabilidade econômica",
        "Cálculo de Payback e ROI",
        "Apoio na abertura de novas unidades",
        "Planejamento de expansão regional"
      ]
    },
    {
      title: "Sucessão Familiar",
      icon: <Users className="w-10 h-10 text-[#a3e635]" />,
      description: "O nicho de ouro. Prepare a próxima geração para assumir o negócio sem destruir o legado da família.",
      items: [
        "Diagnóstico de maturidade familiar",
        "Mediação de conflitos pais x filhos",
        "Acordo de convivência empresarial",
        "Implantação de governança simplificada"
      ]
    },
    {
      title: "Consultoria Financeira",
      icon: <DollarSign className="w-10 h-10 text-[#a3e635]" />,
      description: "Sem 'economês'. Finanças práticas para quem precisa ver a cor do dinheiro no final do mês.",
      items: [
        "Precificação correta de produtos/serviços",
        "Gestão de fluxo de caixa",
        "Análise de lucratividade real",
        "Construção de DRE gerencial"
      ]
    },
    {
      title: "Apoio Contínuo",
      icon: <RefreshCw className="w-10 h-10 text-[#a3e635]" />,
      description: "Não te deixamos na mão. Mentoria recorrente para garantir que o plano saia do papel.",
      items: [
        "Reuniões quinzenais ou mensais",
        "Acompanhamento de metas",
        "Ajustes de rota em tempo real",
        "Suporte direto via WhatsApp"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#1a052e] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="font-['Oswald'] text-6xl md:text-8xl font-bold uppercase leading-none mb-6">
              Ideias <span className="text-[#a3e635]">&</span> Negócios
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mb-8">
              Consultoria prática para quem carrega o Brasil nas costas. Do microempreendedor ao pequeno empresário, nós organizamos o caos para você crescer.
            </p>
            <button className="bg-[#a3e635] text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors">
              Agendar Diagnóstico Gratuito
            </button>
          </motion.div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="py-20 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="font-['Oswald'] text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
              Não é mágica.<br/>É <span className="bg-[#a3e635] px-2">Gestão.</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Sabemos que a vida do empreendedor é solitária. Você vende, entrega, cobra e ainda tem que apagar incêndios. O resultado? O negócio estagna e você se esgota.
            </p>
            <p className="text-lg text-gray-700 font-bold border-l-4 border-[#1a052e] pl-4">
              Nossa missão é simples: fazer com que seu negócio deixe de ser apenas um emprego bem remunerado que te prende na rotina, e te levar para uma gestão eficiente e realmente lucrativa.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-video bg-gray-200 relative z-10 border-4 border-black">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop" alt="Consultoria" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#a3e635] -z-0"></div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-24 px-4">
        <div className="container mx-auto">
          <h2 className="font-['Oswald'] text-5xl font-bold uppercase mb-16 text-center">Nossas Soluções</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-black p-8 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(163,230,53,1)] transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="font-['Oswald'] text-2xl font-bold uppercase mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm min-h-[60px]">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#a3e635] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#a3e635] py-20 px-4 text-center border-y-4 border-black">
        <h2 className="font-['Oswald'] text-4xl md:text-6xl font-bold uppercase mb-6 text-[#1a052e]">
          Pronto para profissionalizar?
        </h2>
        <p className="text-xl font-bold mb-8 max-w-2xl mx-auto text-[#1a052e]/80">
          Agende uma conversa de 30 minutos. Sem compromisso, apenas verdade sobre o seu negócio.
        </p>
        <button className="bg-[#1a052e] text-white px-10 py-4 text-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform">
          Falar com Consultor
        </button>
      </div>
    </div>
  );
};
