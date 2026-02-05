export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  content?: string; // Opcional por enquanto, para expansão futura
}

export const blogPosts: BlogPost[] = [
  {
    id: "0",
    title: 'Por que o "feito" é melhor que o "perfeito"?',
    excerpt: "O perfeccionismo é o maior inimigo da execução. Descubra como o conceito de MVP pode salvar seu projeto e tirar ideias do papel mais rápido.",
    date: "06 Fev 2026",
    category: "Mindset",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2340&auto=format&fit=crop",
    content: `
      <p>Quantas ideias geniais você já teve e nunca colocou em prática porque "ainda não estava pronto"? O perfeccionismo muitas vezes não é qualidade, é medo disfarçado.</p>
      
      <h3>A Cultura do MVP</h3>
      <p>No mundo das startups, usamos o conceito de <strong>MVP (Minimum Viable Product)</strong>. É a versão mais simples do seu produto que ainda gera valor. Não é sobre fazer mal feito, é sobre fazer o essencial para testar rápido.</p>

      <h3>Iteração > Perfeição</h3>
      <p>Quando você lança algo "imperfeito", você ganha o ativo mais valioso do mercado: <strong>feedback real</strong>. Planejar por 6 meses sem mostrar para ninguém é arriscado. Lançar em 1 mês e melhorar com base no que os clientes dizem é inteligência.</p>
      
      <p>No <strong>NEXTLAB</strong>, ensinamos os alunos a prototipar. Errar rápido, consertar rápido e aprender sempre. Feito é melhor que perfeito, porque o feito existe.</p>
    `
  },
  {
    id: "1",
    title: "O Fim do Emprego Tradicional: O que Esperar de 2030?",
    excerpt: "Estudos apontam que 85% das profissões de 2030 ainda não existem. Como preparar seu filho para esse cenário?",
    date: "04 Fev 2026",
    category: "Futuro do Trabalho",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop",
    content: `
      <p>Você já parou para pensar que o emprego que seu filho terá no futuro provavelmente ainda nem existe? Segundo um estudo da Dell Technologies, <strong>85% das profissões que existirão em 2030 ainda não foram inventadas</strong>.</p>
      
      <h3>O Que Está Mudando?</h3>
      <p>A automação e a inteligência artificial não estão apenas substituindo tarefas repetitivas, elas estão redefinindo o que significa "trabalhar". O modelo tradicional de "aprender uma profissão e exercê-la por 40 anos" morreu. A nova regra é a adaptabilidade.</p>

      <h3>Habilidades do Futuro</h3>
      <p>Nesse cenário, as <em>Hard Skills</em> (habilidades técnicas) tornam-se obsoletas rapidamente. O foco das escolas e empresas mais inovadoras do mundo migrou para as <strong>Soft Skills</strong>:</p>
      <ul>
        <li>Resolução de problemas complexos</li>
        <li>Pensamento crítico</li>
        <li>Criatividade</li>
        <li>Inteligência Emocional</li>
      </ul>

      <p>No <strong>NEXTLAB</strong>, não ensinamos apenas ferramentas. Ensinamos os jovens a pensar como solucionadores de problemas. Criar uma startup aos 15 anos não é sobre ficar milionário (embora possa acontecer), é sobre desenvolver a musculatura mental para navegar na incerteza.</p>
    `
  },
  {
    id: "2",
    title: "Gestão Financeira para Pequenos Negócios: O Erro nº 1",
    excerpt: "Misturar finanças pessoais com as da empresa é o caminho mais rápido para a falência. Veja como separar.",
    date: "01 Fev 2026",
    category: "Gestão",
    imageUrl: "https://images.unsplash.com/photo-1758598497429-6eb3895d5bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3NlZCUyMHBlcnNvbiUyMGxvb2tpbmclMjBhdCUyMGJpbGxzJTIwZmluYW5jaWFsJTIwbWVzc3xlbnwxfHx8fDE3NzAyOTA3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
      <p>É um clássico: o boleto da escola venceu, o caixa da empresa tem dinheiro, você paga. O cartão da empresa passa o almoço de domingo. Quando você vê, não sabe se a empresa dá lucro ou prejuízo.</p>

      <h3>O Princípio da Entidade</h3>
      <p>Na contabilidade, existe algo chamado "Princípio da Entidade". Basicamente, o patrimônio dos sócios não se mistura com o da empresa. Ignorar isso é o principal motivo de mortalidade de MPEs no Brasil.</p>

      <h3>Como Resolver (Método Caos Organizado)</h3>
      <p>Não precisa de um ERP de 5 mil reais. Precisa de disciplina:</p>
      <ol>
        <li>Defina um Pró-labore fixo (seu salário).</li>
        <li>Tenha contas bancárias separadas (hoje é grátis).</li>
        <li>Transfira o pró-labore no dia certo e viva com ele.</li>
      </ol>

      <p>Se a empresa não consegue pagar seu pró-labore, você tem um problema de negócio, não de finanças pessoais. Encarar essa realidade é o primeiro passo para a lucratividade real.</p>
    `
  },
  {
    id: "3",
    title: "Soft Skills: Por que as Escolas Estão Mudando?",
    excerpt: "O conteúdo técnico é commodity. A nova moeda de valor são as habilidades comportamentais e inteligência emocional.",
    date: "28 Jan 2026",
    category: "Educação",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2340&auto=format&fit=crop",
    content: `
      <p>Antigamente, a escola era o detentor do conhecimento. O professor falava, o aluno anotava. Hoje, o conhecimento está no Google. Qual o papel da escola então?</p>
      <p>O papel da escola moderna é ensinar a <strong>curadoria</strong> e a <strong>aplicação</strong> do conhecimento. É ensinar a trabalhar em equipe, a liderar, a comunicar ideias.</p>
      <p>Empresas como Google e Apple já declararam que contratam baseadas em curiosidade e capacidade de aprendizado, não apenas em diplomas. A educação precisa acompanhar esse ritmo, ou formaremos excelentes profissionais para um mundo que não existe mais.</p>
    `
  },
  {
    id: "4",
    title: "Caos Organizado: A Nova Estética do Sucesso",
    excerpt: "Entenda como a filosofia Neo-Brutalist reflete a realidade do mercado atual: crua, direta e funcional.",
    date: "20 Jan 2026",
    category: "Design & Cultura",
    imageUrl: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2340&auto=format&fit=crop",
    content: `
      <p>O minimalismo "clean" dominou a última década. Tudo branco, sans-serif, perfeito. Mas o mundo real não é assim. O mundo real é complexo, barulhento e cheio de texturas.</p>
      <p>O <strong>Neo-Brutalismo</strong> no design digital (bordas grossas, cores neon, fontes condensadas, assimetria) é uma resposta a essa esterilidade. Ele grita: "Aqui tem conteúdo de verdade".</p>
      <p>Nos negócios, chamamos isso de <strong>Caos Organizado</strong>. É aceitar que o empreendedorismo é uma bagunça, mas criar processos (a "Ordem") que funcionam dentro dessa bagunça, em vez de tentar fingir que ela não existe. É sobre ser funcional, impactante e real.</p>
    `
  },
  {
    id: "5",
    title: "Marketing Digital para Teens: Do TikTok ao Negócio",
    excerpt: "Seu filho passa o dia no celular? Descubra como transformar esse vício em uma habilidade lucrativa.",
    date: "10 Jan 2026",
    category: "NEXTLAB",
    imageUrl: "https://images.unsplash.com/photo-1701967341617-14499d8bf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMHdvcmtpbmclMjBvbiUyMGxhcHRvcCUyMGNyZWF0aXZlJTIwdmlicmFudHxlbnwxfHx8fDE3NzAyOTA3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
      <p>A geração Z já nasceu conectada. Enquanto muitos pais veem o tempo de tela como um problema, no NEXTLAB enxergamos uma oportunidade.</p>
      <h3>Criadores vs. Consumidores</h3>
      <p>A chave é virar a chave mental de "consumidor de conteúdo" para "criador de conteúdo". Quando o jovem entende o algoritmo, a edição, o storytelling e a monetização por trás de um vídeo viral, ele deixa de ser passivo e passa a ser um estrategista.</p>
      <p>Ensinamos marketing digital não para que todos sejam influencers, mas para que saibam vender qualquer ideia, produto ou serviço no mundo moderno.</p>
    `
  },
  {
    id: "6",
    title: "IA na Gestão: O Fim da Planilha?",
    excerpt: "Como ferramentas de Inteligência Artificial estão automatizando processos chatos e liberando tempo para estratégia.",
    date: "05 Jan 2026",
    category: "Tecnologia",
    imageUrl: "https://images.unsplash.com/photo-1553678324-f84674bd7b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjBvZmZpY2UlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MDI5MDcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: `
      <p>Planilhas são ótimas, mas elas dependem de você preencher. A nova onda de ferramentas de gestão usa IA para ler seus e-mails, categorizar seus gastos e até prever seu fluxo de caixa.</p>
      <p>No módulo de Inovação do Ideias & Negócios, mostramos como pequenos empresários podem usar ferramentas como ChatGPT, Notion AI e Zapier para criar um "funcionário digital" que trabalha 24h por dia organizando a bagunça.</p>
      <p>O futuro não é sobre saber usar o Excel, é sobre saber perguntar para a IA.</p>
    `
  }
];
