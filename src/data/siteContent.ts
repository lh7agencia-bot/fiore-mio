export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  width: number;
  height: number;
  orientation: 'landscape' | 'portrait';
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  occasion: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'fachada',
    src: '/images/fiore-mio-01.jpg',
    alt: 'Fachada em madeira ripada do espaço Fiore Mio Flores com letreiro e jardim frontal',
    title: 'Nosso Espaço',
    category: 'Sítio Fiore Mio',
    width: 1024,
    height: 649,
    orientation: 'landscape',
  },
  {
    id: 'rosas',
    src: '/images/fiore-mio-02.jpg',
    alt: 'Seleção de rosas frescas em tons rosa quartzo preparadas para composição floral',
    title: 'Rosas Frescas Selecionadas',
    category: 'Matéria-Prima',
    width: 1024,
    height: 575,
    orientation: 'landscape',
  },
  {
    id: 'mesa-evento',
    src: '/images/fiore-mio-03.jpg',
    alt: 'Mesa decorada pela Fiore Mio Flores com arranjos de rosas e astromélias em vasos de cristal',
    title: 'Ambientação de Recepção',
    category: 'Decoração de Eventos',
    width: 1024,
    height: 768,
    orientation: 'landscape',
  },
  {
    id: 'buque-autoral',
    src: '/images/fiore-mio-04.jpg',
    alt: 'Buquê autoral envolvido em papel kraft com rosas champanhe, astromélias bordô e folhagens',
    title: 'Buquê Autoral em Kraft',
    category: 'Arranjos Exclusivos',
    width: 1024,
    height: 1536,
    orientation: 'portrait',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Decoração Floral para Eventos',
    description:
      'Projetamos a ambientação completa de casamentos, aniversários e recepções íntimas, equilibrando paleta botânica, vasos e disposição de mesas.',
    highlight: 'Montagem e curadoria presencial',
  },
  {
    number: '02',
    title: 'Buquês & Arranjos Autorais',
    description:
      'Composições feitas sob encomenda com flores frescas selecionadas diariamente, acabamento artesanal e harmonia cromática personalizada.',
    highlight: 'Encomendas sob medida',
  },
  {
    number: '03',
    title: 'Ambientação Residencial e Corporativa',
    description:
      'Arranjos permanentes ou assinaturas semanais para trazer leveza, perfume e presença natural a salas, consultórios e recepções.',
    highlight: 'Renovação programada',
  },
  {
    number: '04',
    title: 'Consultoria de Paleta e Estilo',
    description:
      'Atendimento próximo para definir espécies sazonais, texturas de folhagens e proporções ideais para cada espaço em Santo Antônio de Goiás e região.',
    highlight: 'Atendimento no Sítio Fiore Mio',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'camila-rodrigues',
    name: 'Camila Rodrigues',
    occasion: 'Decoração de Casamento',
    rating: 5,
    text: 'Cada mesa ficou exatamente como sonhávamos. As rosas frescas e a delicadeza na montagem transformaram o salão em um ambiente acolhedor e inesquecível.',
  },
  {
    id: 'fernanda-alves',
    name: 'Fernanda Alves',
    occasion: 'Aniversário em Família',
    rating: 5,
    text: 'Atendimento atencioso do primeiro contato até a entrega. Os arranjos duraram a semana inteira impecáveis e todos os convidados elogiaram a harmonia das cores.',
  },
  {
    id: 'rafael-monteiro',
    name: 'Rafael Monteiro',
    occasion: 'Buquê & Presente Especial',
    rating: 5,
    text: 'Encomendei um buquê autoral pelo WhatsApp e fui surpreendido pelo cuidado nos detalhes, desde a escolha das folhagens até o acabamento em papel kraft.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'antecedencia',
    question: 'Com quanto tempo de antecedência devo solicitar uma decoração de evento?',
    answer:
      'Para eventos completos como casamentos e recepções, recomendamos entrar em contato com pelo menos 30 a 60 dias de antecedência para garantirmos a disponibilidade de data e a reserva das flores sazonais. Para buquês e arranjos avulsos, atendemos pedidos com 24 a 48 horas de antecedência.',
  },
  {
    id: 'personalizacao',
    question: 'Posso personalizar as cores e espécies dos arranjos?',
    answer:
      'Sim. Trabalhamos de forma sob medida: você compartilha suas referências, estilo da celebração e paleta desejada, e nossa equipe sugere as melhores combinações de flores e folhagens da estação.',
  },
  {
    id: 'regiao',
    question: 'Qual região a Fiore Mio Flores atende?',
    answer:
      'Estamos localizados na GO-462, km 16,5, no Sítio Fiore Mio em Santo Antônio de Goiás - GO, e realizamos entregas e montagens tanto no município quanto em Goiânia e cidades vizinhas.',
  },
  {
    id: 'montagem',
    question: 'Vocês incluem vasos, suportes e montagem no local?',
    answer:
      'Nos projetos de decoração de eventos, cuidamos de toda a estrutura floral, incluindo locação de vasos, montagem prévia no espaço e desmontagem após a celebração, para que você não precise se preocupar com nada.',
  },
  {
    id: 'durabilidade',
    question: 'Como garantir que as flores permaneçam bonitas por mais tempo?',
    answer:
      'Todas as flores passam por hidratação e seleção rigorosa antes da entrega. Ao receber seu arranjo, mantenha-o em local fresco, longe de sol direto e correntes de vento, trocando a água do vaso a cada dois dias.',
  },
];
