export const COMPANY = {
  name: "WL Colchões",
  slogan: "Reforma, Fabricação & Luxo em Colchões",
  tagline: "Transformamos seus colchões com excelência profissional",
  contact: {
    phone: "+55 81 8751-4699",
    phoneShort: "(81) 8751-4699",
    whatsapp:
      "https://wa.me/558187514699?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita%20para%20meu%20colch%C3%A3o.",
    email: "wlcolchoess@gmail.com",
    instagram: "https://www.instagram.com/wlcolchoesoficial/",
    location: "Paulista, PE",
    hours: "Seg-Sab: 8h-18h",
  },
} as const;

export const COPY = {
  hero: {
    mainHeadline: "Reforme seu colchão em 1 a 3 dias e pague até 70% menos que um novo",
    secondaryHeadline: "Reforma profissional e fabricação de colchões de luxo em Paulista",
    subheadline:
      "A WL Colchões restaura conforto com acabamento profissional, atendimento local e garantia de 90 dias.",
    cta: "Falar no WhatsApp e pedir avaliação gratuita",
  },
  painPoints: [
    { headline: "Seu colchão está mais mole a cada noite?", description: "Estrutura interna degradada, conforto perdido.", emoji: "😴" },
    { headline: "Acordando com dores nas costas?", description: "Colchão velho não oferece suporte correto à coluna.", emoji: "🤕" },
    { headline: "Colchão novo custa R$3.000-5.000+?", description: "Reforma profissional custa até 70% menos.", emoji: "💰" },
    { headline: "Desconfia da qualidade da reforma?", description: "Nossa técnica restaura a estrutura com acabamento profissional e garantia de 90 dias.", emoji: "✓" },
  ],
  solution: {
    headline: "A Solução WL Colchões: 3 Serviços Premium",
    intro:
      "Não somos apenas reforma. Somos especialistas em restaurar, reformar e fabricar colchões de qualidade premium.",
    services: [
      { title: "Reforma Profissional", description: "Restauramos a estrutura interna do seu colchão com acabamento profissional, renovação de componentes e garantia de 90 dias.", icon: "🔧", cta: "Avaliar Colchão" },
      { title: "Fabricação Sob Medida", description: "Fabricamos colchões sob medida em diferentes densidades e tipos. Você escolhe tamanho, espuma e design.", icon: "🏗️", cta: "Solicitar Orçamento" },
      { title: "Coleção de Luxo", description: "Linha premium com materiais selecionados, opções de conforto e acabamento sofisticado.", icon: "👑", cta: "Ver Coleção Luxury" },
    ],
  },
  benefits: [
    { title: "Economia de até 70%", description: "Reforma: R$1.200-1.800 vs colchão novo: R$3.000-5.000+.", icon: "💵" },
    { title: "Durabilidade Garantida", description: "Acabamento profissional com garantia de 90 dias para ajustes relacionados ao serviço.", icon: "⏰" },
    { title: "Conforto Restaurado", description: "Recuperamos o suporte e melhoramos o conforto com reforma profissional.", icon: "😊" },
    { title: "Sustentável & Ecológico", description: "Cada reforma evita um colchão na lixeira.", icon: "🌱" },
    { title: "Fabricação Customizada", description: "Crie seu colchão ideal: densidade, tamanho e firmeza.", icon: "⚙️" },
    { title: "Processo Rápido & Simples", description: "4 passos: Contato → Avaliação → Reforma/Fabricação → Entrega.", icon: "⚡" },
  ],
  testimonials: [
    { name: "Cliente de Paulista", location: "Paulista, PE", rating: 5, quote: "O colchão voltou muito melhor e o atendimento foi atencioso do início ao fim." },
    { name: "Cliente de Recife", location: "Recife, PE", rating: 5, quote: "Consegui encomendar um colchão sob medida para o espaço que eu precisava." },
    { name: "Cliente da região", location: "Paulista, PE", rating: 5, quote: "A reforma ficou caprichada e fez mais sentido do que trocar por um colchão novo." },
    { name: "Cliente de Olinda", location: "Olinda, PE", rating: 5, quote: "Gostei do acabamento e da proposta da linha de luxo." },
    { name: "Cliente local", location: "Paulista, PE", rating: 5, quote: "Equipe cuidadosa, serviço bem-feito e entrega dentro do combinado." },
    { name: "Cliente de Recife", location: "Recife, PE", rating: 5, quote: "O colchão sob medida ficou alinhado ao que eu pedi e atendeu bem à necessidade." },
  ],
  about: {
    headline: "Desde 2020 transformando o descanso em Paulista e região",
    story:
      "A WL Colchões nasceu em 2020, em Paulista, para resolver um problema real: colchões ainda bons sendo descartados e famílias pagando caro sem necessidade. Hoje, já são mais de +1.100 atendimentos com foco em reforma profissional e fabricação de colchões de luxo.",
    mission: "Restaurar conforto, economizar dinheiro, cuidar do planeta.",
    vision: "Ser referência em reforma e fabricação de colchões premium no Nordeste.",
    values: [
      { title: "Qualidade", description: "Reforma profissional com acabamento cuidadoso e materiais selecionados." },
      { title: "Honestidade", description: "Preços justos, avaliação gratuita e atendimento transparente." },
      { title: "Inovação", description: "Técnicas atualizadas e opções de conforto para diferentes necessidades." },
      { title: "Sustentabilidade", description: "Reduzindo desperdício e reaproveitando estruturas em bom estado." },
    ],
    stats: [
      { number: "+800", label: "Colchões Reformados" },
      { number: "+300", label: "Colchões Fabricados" },
      { number: "4.9★", label: "Satisfação Média" },
      { number: "+1.100", label: "Atendimentos" },
    ],
  },
  howItWorks: [
    { step: 1, title: "Contato inicial", description: "Você chama no WhatsApp e recebe retorno rápido.", detail: "Retorno em horário comercial" },
    { step: 2, title: "Avaliação gratuita", description: "Analisamos seu colchão e enviamos orçamento claro.", detail: "Sem compromisso" },
    { step: 3, title: "Reforma ou fabricação", description: "Executamos o serviço com padrão profissional.", detail: "Prazo médio de 1 a 3 dias" },
    { step: 4, title: "Entrega com garantia", description: "Você recebe o colchão pronto para uso.", detail: "Garantia de 90 dias" },
  ],
  guarantee: {
    headline: "90 Dias de Garantia para sua tranquilidade",
    promise: "É o nosso compromisso com ajustes relacionados ao serviço dentro de 90 dias.",
    description:
      "Você conta com 90 dias de garantia para ajustes relacionados ao serviço, com suporte rápido e acompanhamento da nossa equipe.",
    checks: [
      "Qualidade profissional em cada reforma/fabricação",
      "Ajustes relacionados ao serviço cobertos por 90 dias",
      "Atendimento sem burocracia para suporte necessário",
      "Suporte técnico durante o período da garantia",
    ],
  },
  finalCTA: {
    headline: "Pronto Para Transformar Seu Colchão?",
    subheadline: "Peça sua avaliação gratuita e receba um orçamento sem compromisso.",
    buttonText: "Pedir avaliação gratuita no WhatsApp",
    supportText: "Atendimento em horário comercial",
  },
  socialProofStats: {
    clients: "+1.100 Clientes Satisfeitos",
    rating: "4.9★ Avaliação Média",
    reformed: "+800 Colchões Reformados",
    manufactured: "+300 Colchões Fabricados",
  },
} as const;
