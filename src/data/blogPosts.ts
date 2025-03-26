export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Mudanças nas Regras da Aposentadoria em 2024',
    excerpt: 'Confira as principais alterações nas regras previdenciárias para este ano.',
    content: `As regras para aposentadoria sofreram importantes alterações em 2024. Neste artigo, vamos explorar em detalhes todas as mudanças e como elas podem afetar seu processo de aposentadoria.

    Entre as principais alterações, destacam-se:
    
    1. Novos critérios de idade mínima
    2. Alterações no cálculo do benefício
    3. Regras de transição atualizadas
    4. Mudanças nos fatores previdenciários
    
    É fundamental entender como essas mudanças impactam seu planejamento previdenciário e quais medidas devem ser tomadas para garantir seus direitos.`,
    date: '15 Mar 2024',
    category: 'Aposentadoria',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
  },
  {
    id: 2,
    title: 'Como Solicitar o Auxílio-Doença',
    excerpt: 'Guia completo sobre o processo de solicitação do auxílio-doença.',
    content: `O auxílio-doença é um benefício essencial para trabalhadores que precisam se afastar de suas atividades por motivos de saúde. Este guia completo vai te ajudar a entender todo o processo de solicitação.

    Passo a passo para solicitar o auxílio-doença:
    
    1. Documentação necessária
    2. Agendamento da perícia médica
    3. Processo de avaliação
    4. Acompanhamento do pedido
    
    Além disso, abordaremos os principais motivos de indeferimento e como evitá-los, garantindo que seu benefício seja aprovado.`,
    date: '10 Mar 2024',
    category: 'Benefícios',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
  },
  {
    id: 3,
    title: 'Direitos dos Aposentados',
    excerpt: 'Conheça seus direitos e benefícios após a aposentadoria.',
    content: `Muitos aposentados desconhecem diversos direitos e benefícios aos quais têm direito. Neste artigo, apresentamos um panorama completo dos direitos dos aposentados no Brasil.

    Principais direitos dos aposentados:
    
    1. Revisão do benefício
    2. Isenções fiscais
    3. Benefícios sociais
    4. Descontos especiais
    
    É importante conhecer seus direitos para garantir que você esteja recebendo todos os benefícios que merece após anos de contribuição.`,
    date: '5 Mar 2024',
    category: 'Direitos',
    imageUrl: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0'
  },
  {
    id: 4,
    title: 'Aposentadoria Rural: O Que Você Precisa Saber',
    excerpt: 'Entenda os requisitos e direitos específicos para a aposentadoria rural.',
    content: `A aposentadoria rural possui características específicas que a diferem da aposentadoria urbana. Este guia completo aborda todos os aspectos importantes que você precisa conhecer.

    Pontos principais sobre a aposentadoria rural:

    1. Documentação comprobatória
    2. Tempo de trabalho necessário
    3. Idade mínima requerida
    4. Processo de solicitação

    Compreender essas particularidades é fundamental para garantir seu direito à aposentadoria rural.`,
    date: '1 Mar 2024',
    category: 'Aposentadoria',
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399'
  },
  {
    id: 5,
    title: 'Aposentadoria Especial: Guia Completo',
    excerpt: 'Descubra quem tem direito e como solicitar a aposentadoria especial.',
    content: `A aposentadoria especial é um benefício destinado aos trabalhadores expostos a condições prejudiciais à saúde. Saiba mais sobre este importante direito.

    Aspectos fundamentais da aposentadoria especial:

    1. Atividades que se enquadram
    2. Tempo de contribuição necessário
    3. Documentação exigida
    4. Processo de comprovação

    É essencial entender todos os requisitos para garantir seu direito a este benefício específico.`,
    date: '28 Fev 2024',
    category: 'Aposentadoria',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190'
  },
  {
    id: 6,
    title: 'BPC/LOAS: Quem Tem Direito?',
    excerpt: 'Entenda os critérios para receber o Benefício de Prestação Continuada.',
    content: `O BPC/LOAS é um benefício assistencial que garante um salário mínimo mensal a idosos e pessoas com deficiência que comprovem não possuir meios de prover a própria manutenção.

    Requisitos principais para o BPC/LOAS:

    1. Critérios de idade ou deficiência
    2. Análise da renda familiar
    3. Documentação necessária
    4. Processo de avaliação

    Conheça todos os detalhes para saber se você ou algum familiar tem direito a este benefício.`,
    date: '25 Fev 2024',
    category: 'Benefícios',
    imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c'
  }
];