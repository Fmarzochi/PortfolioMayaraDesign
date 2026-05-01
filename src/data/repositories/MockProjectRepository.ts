import { Project } from '@/core/domain/Project';
import { IProjectRepository } from '@/core/interfaces/IProjectRepository';

const mockProjects: Project[] = [
  {
    id: '1',
    slug: 'catchup-tech',
    titulo: 'CatchUp Tech',
    descricao: 'Plataforma institucional focada em apresentar soluções digitais com clareza e estratégia. Estruturei a navegação e o visual para transmitir inovação e gerar conversão.',
    tecnologias: ['UI/UX DESIGN', 'BRANDING', 'FIGMA'],
    categoria: 'website',
    imagemUrl: '/assets/images/projeto-catchup.png',
    destaque: true,
    cor: '#0a0a1a',
    cliente: 'catchup tech',
    meuPapel: 'ui/ux designer',
    servicos: 'ux design, ui design, branding e handoff',
    tipo: 'website',
    case: {
      problema: {
        usuario: 'Usuários que acessam sites institucionais muitas vezes encontram informações pouco claras, excesso de conteúdo ou dificuldade em entender rapidamente o que a empresa oferece.\n\nIsso compromete a experiência e reduz o interesse em continuar navegando.',
        negocio: 'A ausência de uma identidade visual bem definida e de uma landing page estruturada pode dificultar o posicionamento da marca, reduzir a credibilidade e impactar negativamente na geração de leads.',
      },
      solucao: {
        estrategiaMarca: 'A estratégia de marca foi pensada para transmitir inovação, tecnologia e confiança.\n\nElementos visuais foram definidos para criar uma identidade forte e consistente, utilizando cores e tipografia que reforçam o posicionamento digital da empresa.\n\nA comunicação busca ser direta, moderna e acessível.',
      },
      processo: {
        descricao: 'O processo envolveu a construção da identidade da marca, definição da estrutura da landing page e desenvolvimento da interface, garantindo uma experiência consistente e estratégica.',
        etapas: [
          'UX Research / UX Strategy',
          'Síntese e definição do problema',
          'Ideação (UX Design / Product Strategy)',
          'Definição do Conceito e Experiência',
          'Estrutura da Solução (Arquitetura da Informação)',
          'Design da interface (UI Design)',
          'Prototipação e Validação',
          'Handoff para Desenvolvedores',
        ],
      },
      conclusao: {
        insight: 'O projeto resultou em uma presença digital mais forte, alinhando identidade visual e experiência do usuário.\n\nA solução desenvolvida contribui para uma comunicação mais clara, maior credibilidade e melhor direcionamento do usuário dentro da plataforma.',
        designInterface: 'O design da landing page foi estruturado com foco em organização, clareza e direcionamento do usuário.\n\nA interface foi construída para guiar a navegação de forma natural, destacando informações importantes e facilitando a compreensão dos serviços oferecidos.',
        learnings: [
          'Clareza na comunicação aumenta o engajamento',
          'Estrutura bem definida facilita a navegação',
          'Consistência visual fortalece a marca',
          'Design estratégico impacta diretamente na percepção do usuário',
        ],
      },
      imagens: [
        '/assets/case-studies/catchup/screen-1.png',
        '/assets/case-studies/catchup/screen-2.png',
        '/assets/case-studies/catchup/screen-3.png',
        '/assets/case-studies/catchup/screen-4.png',
      ],
    },
  },
  {
    id: '2',
    slug: 'cardapio-recheia',
    titulo: 'Cardápio Web Recheiaê',
    descricao: 'Sistema digital de cardápio com foco em usabilidade e agilidade no pedido. Projetei uma experiência intuitiva tanto para clientes quanto para gestão do negócio.',
    tecnologias: ['UI/UX DESIGN', 'MOBILE', 'FIGMA'],
    categoria: 'app',
    imagemUrl: '/assets/images/projeto-recheiae.png',
    destaque: true,
    cor: '#1a0a00',
    cliente: 'recheiaê delivery',
    meuPapel: 'ui/ux designer',
    servicos: 'ux design, ui design, branding e responsividade',
    tipo: 'app mobile',
    case: {
      problema: {
        usuario: 'Os usuários enfrentam dificuldades ao navegar em cardápios pouco organizados, com excesso de informações ou falta de clareza na apresentação dos itens.\n\nIsso torna o processo de escolha mais demorado e, muitas vezes, frustrante, impactando diretamente na experiência.',
        negocio: 'A falta de um cardápio bem estruturado pode impactar negativamente nas vendas, dificultando a tomada de decisão do cliente e reduzindo a taxa de conversão.\n\nAlém disso, uma experiência pouco intuitiva pode gerar abandono do pedido e perda de oportunidades de venda.',
      },
      solucao: {
        estrategiaMarca: 'A estratégia de marca foi direcionada para transmitir uma experiência moderna, acessível e confiável, alinhada ao comportamento digital dos usuários.\n\nForam definidos elementos visuais que reforçam clareza e proximidade, utilizando cores estratégicas para destacar ações importantes e incentivar a interação.\n\nA comunicação visual foi pensada para valorizar os produtos e tornar o processo mais envolvente e intuitivo.',
      },
      processo: {
        descricao: 'O processo foi estruturado para entender o comportamento do usuário, identificar oportunidades e construir uma solução eficiente e intuitiva.\n\nA partir disso, foram definidas estratégias de experiência e interface, transformando o cardápio em uma jornada simples, organizada e orientada à conversão.',
        etapas: [
          'Pesquisa e entendimento',
          'Posicionamento da marca',
          'Estruturação da experiência',
          'Criação da identidade visual',
          'Arquitetura da informação',
          'Design da interface',
          'Prototipação e Validação',
          'Handoff para Desenvolvedores',
        ],
      },
      conclusao: {
        insight: 'O projeto resultou em um cardápio digital mais intuitivo, organizado e eficiente, proporcionando uma experiência mais fluida para o usuário.\n\nAo alinhar necessidades do usuário com objetivos do negócio, foi possível criar uma solução que não apenas melhora a navegação, mas também potencializa a tomada de decisão.\n\nEste projeto reforça a importância de um design estratégico, capaz de transformar experiências e gerar valor real.',
        designInterface: 'O design da interface foi desenvolvido com foco em hierarquia visual, organização da informação e facilidade de uso.\n\nElementos foram estruturados para guiar o usuário de forma natural durante a navegação, com destaque para categorias, produtos e ações principais.',
        designInterfacePrioridades: [
          'Clareza na apresentação dos itens',
          'Facilidade de interação',
          'Redução de fricção na jornada',
          'Consistência visual entre os elementos',
        ],
        learnings: [
          'Interfaces simples facilitam decisões rápidas',
          'A organização da informação impacta diretamente na experiência',
          'Elementos visuais influenciam o comportamento do usuário',
          'Reduzir fricção melhora significativamente a jornada',
        ],
      },
      imagens: [
        '/assets/case-studies/cardapio-web/screen-1.png',
        '/assets/case-studies/cardapio-web/screen-2.png',
        '/assets/case-studies/cardapio-web/screen-3.png',
        '/assets/case-studies/cardapio-web/screen-4.png',
      ],
    },
  },
  {
    id: '3',
    slug: 'resident-evil-requiem',
    titulo: 'Resident Evil Requiem',
    descricao: 'Releitura visual de um site com foco em imersão e narrativa. Trabalhei estética, hierarquia e interação para criar uma experiência envolvente.',
    tecnologias: ['FIGMA', 'WEBSITE'],
    categoria: 'website',
    imagemUrl: '/assets/images/projeto-resident-evil.png',
    destaque: false,
    cor: '#1a0000',
    meuPapel: 'ui/ux designer',
    tipo: 'website',
  },
  {
    id: '4',
    slug: 'drakorys-game-ui',
    titulo: 'Drakorys Game UI',
    descricao: 'Interface de jogo com foco em imersão, narrativa e estética visual impactante. Desenvolvi uma experiência envolvente alinhando UI, atmosfera e usabilidade.',
    tecnologias: ['FIGMA', 'WEBSITE'],
    categoria: 'website',
    imagemUrl: '/assets/images/projeto-drakorys.png',
    destaque: false,
    cor: '#0a0a1a',
    meuPapel: 'ui/ux designer',
    tipo: 'website',
  },
  {
    id: '5',
    slug: 'caffe-express',
    titulo: 'Caffe Express',
    descricao: 'Sistema de gestão e pedidos para cafeteria com foco em agilidade operacional. Estruturei fluxos simples e eficientes para melhorar a experiência do usuário.',
    tecnologias: ['APP MOBILE'],
    categoria: 'app',
    imagemUrl: '/assets/images/projeto-caffe-express.png',
    destaque: false,
    cor: '#2d1b0a',
    meuPapel: 'ui/ux designer',
    tipo: 'app mobile',
  },
  {
    id: '6',
    slug: 'essencial-perfumaria',
    titulo: 'Essencial Perfumaria',
    descricao: 'Website institucional com foco em elegância e posicionamento de marca. Criei um visual sofisticado com navegação clara e foco em conversão.',
    tecnologias: ['FIGMA', 'WEBSITE'],
    categoria: 'ecommerce',
    imagemUrl: '/assets/images/projeto-essencial.png',
    destaque: false,
    cor: '#f5f0eb',
    meuPapel: 'ui/ux designer',
    tipo: 'website',
  },
  {
    id: '7',
    slug: 'planejamento-financeiro',
    titulo: 'Planejamento Financeiro',
    descricao: 'Dashboard financeiro pensado para controle e tomada de decisão. Projetei visualização de dados clara e intuitiva para facilitar o uso diário.',
    tecnologias: ['FIGMA', 'DASHBOARD'],
    categoria: 'dashboard',
    imagemUrl: '/assets/images/projeto-planejamento.png',
    destaque: false,
    cor: '#0f0a1e',
    meuPapel: 'ui/ux designer',
    tipo: 'dashboard',
  },
  {
    id: '8',
    slug: 'neobank',
    titulo: 'NeoBank',
    descricao: 'Aplicativo bancário com foco em simplicidade e experiência do usuário. Desenvolvi uma interface moderna com fluxos otimizados e acessíveis.',
    tecnologias: ['APP'],
    categoria: 'app',
    imagemUrl: '/assets/images/projeto-neobank.png',
    destaque: false,
    cor: '#0d1117',
    meuPapel: 'ui/ux designer',
    tipo: 'app mobile',
  },
  {
    id: '9',
    slug: 'redesign-itau',
    titulo: 'Redesign Itaú — Parceria com a Ebac',
    descricao: 'Redesign focado em melhorar usabilidade e experiência do usuário. Apliquei boas práticas de UX para tornar a navegação mais fluida e eficiente.',
    tecnologias: ['APP', 'WEBSITE', 'SMARTWATCHES'],
    categoria: 'app',
    imagemUrl: '/assets/images/projeto-itau.png',
    destaque: false,
    cor: '#ff6500',
    meuPapel: 'ui/ux designer',
    tipo: 'app',
  },
];

export class MockProjectRepository implements IProjectRepository {
  async findAll(): Promise<Project[]> {
    return mockProjects;
  }

  async findById(id: string): Promise<Project | null> {
    return mockProjects.find((p) => p.id === id) ?? null;
  }

  async findFeatured(): Promise<Project[]> {
    return mockProjects.filter((p) => p.destaque);
  }

  async findBySlug(slug: string): Promise<Project | null> {
    return mockProjects.find((p) => p.slug === slug) ?? null;
  }
}
