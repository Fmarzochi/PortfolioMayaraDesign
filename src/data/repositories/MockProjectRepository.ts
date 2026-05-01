import { Project } from '@/core/domain/Project';
import { IProjectRepository } from '@/core/interfaces/IProjectRepository';

const mockProjects: Project[] = [
  {
    id: '1',
    slug: 'catchup-tech',
    titulo: 'CatchUp Tech',
    descricao: 'Plataforma institucional focada em apresentar soluções digitais com clareza e estratégia. Estruturei a navegação e o visual para transmitir inovação e gerar conversão.',
    locales: {
      en: {
        titulo: 'CatchUp Tech',
        descricao: 'Institutional platform focused on presenting digital solutions with clarity and strategy. I structured navigation and visuals to convey innovation and drive conversion.',
        meuPapel: 'ui/ux designer',
        servicos: 'ux design, ui design, branding & handoff',
      },
      es: {
        titulo: 'CatchUp Tech',
        descricao: 'Plataforma institucional enfocada en presentar soluciones digitales con claridad y estrategia. Estructuré la navegación y el visual para transmitir innovación y generar conversión.',
        meuPapel: 'ui/ux designer',
        servicos: 'ux design, ui design, branding y handoff',
      },
    },
    caseLocales: {
      en: {
        problema: {
          usuario: 'Users who access institutional websites often find unclear information, too much content, or difficulty quickly understanding what the company offers.\n\nThis compromises the experience and reduces interest in continuing to browse.',
          negocio: 'The absence of a well-defined visual identity and a structured landing page can hinder brand positioning, reduce credibility, and negatively impact lead generation.',
        },
        solucao: {
          estrategiaMarca: 'The brand strategy was designed to convey innovation, technology, and trust.\n\nVisual elements were defined to create a strong, consistent identity, using colors and typography that reinforce the company\'s digital positioning.\n\nThe communication aims to be direct, modern, and accessible.',
        },
        processo: {
          descricao: 'The process involved building the brand identity, defining the landing page structure, and developing the interface, ensuring a consistent and strategic experience.',
          etapas: [
            'UX Research / UX Strategy',
            'Synthesis and problem definition',
            'Ideation (UX Design / Product Strategy)',
            'Concept and Experience Definition',
            'Solution Structure (Information Architecture)',
            'Interface Design (UI Design)',
            'Prototyping and Validation',
            'Developer Handoff',
          ],
        },
        conclusao: {
          insight: 'The project resulted in a stronger digital presence, aligning visual identity and user experience.\n\nThe developed solution contributes to clearer communication, greater credibility, and better user direction within the platform.',
          designInterface: 'The landing page design was structured with a focus on organization, clarity, and user direction.\n\nThe interface was built to guide navigation naturally, highlighting important information and facilitating understanding of the services offered.',
          learnings: [
            'Clear communication increases engagement',
            'A well-defined structure facilitates navigation',
            'Visual consistency strengthens the brand',
            'Strategic design directly impacts user perception',
          ],
        },
        imagens: [
          '/assets/case-studies/catchup/screen-2.png',
          '/assets/case-studies/catchup/screen-3.png',
          '/assets/case-studies/catchup/screen-4.png',
        ],
      },
      es: {
        problema: {
          usuario: 'Los usuarios que acceden a sitios web institucionales a menudo encuentran información poco clara, exceso de contenido o dificultad para entender rápidamente qué ofrece la empresa.\n\nEsto compromete la experiencia y reduce el interés en continuar navegando.',
          negocio: 'La ausencia de una identidad visual bien definida y una landing page estructurada puede dificultar el posicionamiento de la marca, reducir la credibilidad e impactar negativamente en la generación de leads.',
        },
        solucao: {
          estrategiaMarca: 'La estrategia de marca fue pensada para transmitir innovación, tecnología y confianza.\n\nSe definieron elementos visuales para crear una identidad fuerte y consistente, utilizando colores y tipografía que refuerzan el posicionamiento digital de la empresa.\n\nLa comunicación busca ser directa, moderna y accesible.',
        },
        processo: {
          descricao: 'El proceso involucró la construcción de la identidad de marca, la definición de la estructura de la landing page y el desarrollo de la interfaz, garantizando una experiencia consistente y estratégica.',
          etapas: [
            'UX Research / UX Strategy',
            'Síntesis y definición del problema',
            'Ideación (UX Design / Product Strategy)',
            'Definición del Concepto y Experiencia',
            'Estructura de la Solución (Arquitectura de Información)',
            'Diseño de la interfaz (UI Design)',
            'Prototipado y Validación',
            'Handoff para Desarrolladores',
          ],
        },
        conclusao: {
          insight: 'El proyecto resultó en una presencia digital más sólida, alineando identidad visual y experiencia del usuario.\n\nLa solución desarrollada contribuye a una comunicación más clara, mayor credibilidad y mejor dirección del usuario dentro de la plataforma.',
          designInterface: 'El diseño de la landing page fue estructurado con foco en organización, claridad y dirección del usuario.\n\nLa interfaz fue construida para guiar la navegación de forma natural, destacando información importante y facilitando la comprensión de los servicios ofrecidos.',
          learnings: [
            'La claridad en la comunicación aumenta el engagement',
            'Una estructura bien definida facilita la navegación',
            'La consistencia visual fortalece la marca',
            'El diseño estratégico impacta directamente en la percepción del usuario',
          ],
        },
        imagens: [
          '/assets/case-studies/catchup/screen-2.png',
          '/assets/case-studies/catchup/screen-3.png',
          '/assets/case-studies/catchup/screen-4.png',
        ],
      },
    },
    tecnologias: ['UI/UX DESIGN', 'BRANDING', 'FIGMA'],
    categoria: 'website',
    imagemUrl: '/assets/images/projeto-catchup.png',
    imagemObjectPosition: '45% top',
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
        '/assets/case-studies/catchup/screen-2.png',
        '/assets/case-studies/catchup/screen-3.png',
        '/assets/case-studies/catchup/screen-4.png',
      ],
    },
  },
  {
    id: '2',
    slug: 'cardapio-recheia',
    titulo: 'Cardápio Inteligente e Sistema Administrativo Recheiaê',
    descricao: 'Sistema digital de cardápio com foco em usabilidade e agilidade no pedido. Projetei uma experiência intuitiva tanto para clientes quanto para gestão do negócio.',
    locales: {
      en: {
        titulo: 'Smart Menu & Administrative System Recheiaê',
        descricao: 'Digital menu system focused on usability and order agility. I designed an intuitive experience for both customers and business management.',
        meuPapel: 'ui/ux designer',
        servicos: 'ux design, ui design, branding & responsiveness',
      },
      es: {
        titulo: 'Menú Inteligente y Sistema Administrativo Recheiaê',
        descricao: 'Sistema de menú digital centrado en usabilidad y agilidad en el pedido. Diseñé una experiencia intuitiva tanto para clientes como para la gestión del negocio.',
        meuPapel: 'ui/ux designer',
        servicos: 'ux design, ui design, branding y responsividad',
      },
    },
    caseLocales: {
      en: {
        problema: {
          usuario: 'Users face difficulties navigating poorly organized menus, with too much information or lack of clarity in item presentation.\n\nThis makes the selection process longer and often frustrating, directly impacting the experience.',
          negocio: 'The lack of a well-structured menu can negatively impact sales, making customer decision-making harder and reducing the conversion rate.\n\nFurthermore, an unintuitive experience can lead to order abandonment and lost sales opportunities.',
        },
        solucao: {
          estrategiaMarca: 'The brand strategy was aimed at conveying a modern, accessible, and reliable experience, aligned with users\' digital behavior.\n\nVisual elements were defined to reinforce clarity and proximity, using strategic colors to highlight important actions and encourage interaction.\n\nThe visual communication was designed to enhance products and make the process more engaging and intuitive.',
        },
        processo: {
          descricao: 'The process was structured to understand user behavior, identify opportunities, and build an efficient and intuitive solution.\n\nFrom this, experience and interface strategies were defined, transforming the menu into a simple, organized, and conversion-oriented journey.',
          etapas: [
            'Research and understanding',
            'Brand positioning',
            'Experience structuring',
            'Visual identity creation',
            'Information architecture',
            'Interface design',
            'Prototyping and Validation',
            'Developer Handoff',
          ],
        },
        conclusao: {
          insight: 'The project resulted in a more intuitive, organized, and efficient digital menu, providing a smoother user experience.\n\nBy aligning user needs with business objectives, it was possible to create a solution that not only improves navigation but also enhances decision-making.\n\nThis project reinforces the importance of strategic design, capable of transforming experiences and generating real value.',
          designInterface: 'The interface design was developed with a focus on visual hierarchy, information organization, and ease of use.\n\nElements were structured to guide the user naturally during navigation, with emphasis on categories, products, and main actions.',
          designInterfacePrioridades: [
            'Clarity in item presentation',
            'Ease of interaction',
            'Friction reduction in the journey',
            'Visual consistency between elements',
          ],
          learnings: [
            'Simple interfaces facilitate quick decisions',
            'Information organization directly impacts the experience',
            'Visual elements influence user behavior',
            'Reducing friction significantly improves the journey',
          ],
        },
        imagens: [
          '/assets/case-studies/cardapio-web/screen-2.png',
          '/assets/case-studies/cardapio-web/screen-3.png',
          '/assets/case-studies/cardapio-web/screen-4.png',
        ],
      },
      es: {
        problema: {
          usuario: 'Los usuarios enfrentan dificultades al navegar por menús poco organizados, con exceso de información o falta de claridad en la presentación de los ítems.\n\nEsto hace que el proceso de selección sea más lento y, muchas veces, frustrante, impactando directamente en la experiencia.',
          negocio: 'La falta de un menú bien estructurado puede impactar negativamente en las ventas, dificultando la toma de decisiones del cliente y reduciendo la tasa de conversión.\n\nAdemás, una experiencia poco intuitiva puede generar abandono del pedido y pérdida de oportunidades de venta.',
        },
        solucao: {
          estrategiaMarca: 'La estrategia de marca fue orientada a transmitir una experiencia moderna, accesible y confiable, alineada con el comportamiento digital de los usuarios.\n\nSe definieron elementos visuales que refuerzan claridad y proximidad, utilizando colores estratégicos para destacar acciones importantes e incentivar la interacción.\n\nLa comunicación visual fue pensada para valorizar los productos y hacer el proceso más envolvente e intuitivo.',
        },
        processo: {
          descricao: 'El proceso fue estructurado para entender el comportamiento del usuario, identificar oportunidades y construir una solución eficiente e intuitiva.\n\nA partir de eso, se definieron estrategias de experiencia e interfaz, transformando el menú en un recorrido simple, organizado y orientado a la conversión.',
          etapas: [
            'Investigación y comprensión',
            'Posicionamiento de marca',
            'Estructuración de la experiencia',
            'Creación de identidad visual',
            'Arquitectura de la información',
            'Diseño de interfaz',
            'Prototipado y Validación',
            'Handoff para Desarrolladores',
          ],
        },
        conclusao: {
          insight: 'El proyecto resultó en un menú digital más intuitivo, organizado y eficiente, proporcionando una experiencia más fluida para el usuario.\n\nAl alinear las necesidades del usuario con los objetivos del negocio, fue posible crear una solución que no solo mejora la navegación, sino que también potencia la toma de decisiones.\n\nEste proyecto refuerza la importancia de un diseño estratégico, capaz de transformar experiencias y generar valor real.',
          designInterface: 'El diseño de la interfaz fue desarrollado con foco en jerarquía visual, organización de la información y facilidad de uso.\n\nLos elementos fueron estructurados para guiar al usuario de forma natural durante la navegación, con énfasis en categorías, productos y acciones principales.',
          designInterfacePrioridades: [
            'Claridad en la presentación de los ítems',
            'Facilidad de interacción',
            'Reducción de fricción en el recorrido',
            'Consistencia visual entre los elementos',
          ],
          learnings: [
            'Las interfaces simples facilitan decisiones rápidas',
            'La organización de la información impacta directamente en la experiencia',
            'Los elementos visuales influyen en el comportamiento del usuario',
            'Reducir la fricción mejora significativamente el recorrido',
          ],
        },
        imagens: [
          '/assets/case-studies/cardapio-web/screen-2.png',
          '/assets/case-studies/cardapio-web/screen-3.png',
          '/assets/case-studies/cardapio-web/screen-4.png',
        ],
      },
    },
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
    locales: {
      en: {
        titulo: 'Resident Evil Requiem',
        descricao: 'Visual reinterpretation of a website focused on immersion and narrative. I worked on aesthetics, hierarchy, and interaction to create an engaging experience.',
      },
      es: {
        titulo: 'Resident Evil Requiem',
        descricao: 'Reinterpretación visual de un sitio web con foco en inmersión y narrativa. Trabajé estética, jerarquía e interacción para crear una experiencia envolvente.',
      },
    },
    tecnologias: ['FIGMA', 'WEBSITE'],
    categoria: 'website',
    imagemUrl: '/assets/images/projeto-resident-evil.png',
    imagemObjectPosition: 'right top',
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
    locales: {
      en: {
        titulo: 'Drakorys Game UI',
        descricao: 'Game interface focused on immersion, narrative, and impactful visual aesthetics. I developed an engaging experience aligning UI, atmosphere, and usability.',
      },
      es: {
        titulo: 'Drakorys Game UI',
        descricao: 'Interfaz de juego centrada en inmersión, narrativa y estética visual impactante. Desarrollé una experiencia envolvente alineando UI, atmósfera y usabilidad.',
      },
    },
    tecnologias: ['FIGMA', 'WEBSITE'],
    categoria: 'website',
    imagemUrl: '/assets/images/projeto-drakorys.png',
    imagemObjectPosition: 'left top',
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
    locales: {
      en: {
        titulo: 'Caffe Express',
        descricao: 'Order and management system for a coffee shop focused on operational agility. I structured simple and efficient flows to improve the user experience.',
      },
      es: {
        titulo: 'Caffe Express',
        descricao: 'Sistema de gestión y pedidos para cafetería con foco en agilidad operacional. Estructuré flujos simples y eficientes para mejorar la experiencia del usuario.',
      },
    },
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
    locales: {
      en: {
        titulo: 'Essencial Perfumaria',
        descricao: 'Institutional website focused on elegance and brand positioning. I created a sophisticated visual with clear navigation and a focus on conversion.',
      },
      es: {
        titulo: 'Essencial Perfumaria',
        descricao: 'Sitio web institucional centrado en elegancia y posicionamiento de marca. Creé un visual sofisticado con navegación clara y foco en conversión.',
      },
    },
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
    locales: {
      en: {
        titulo: 'Financial Planning',
        descricao: 'Financial dashboard designed for control and decision-making. I designed clear and intuitive data visualization to facilitate daily use.',
      },
      es: {
        titulo: 'Planificación Financiera',
        descricao: 'Dashboard financiero diseñado para el control y la toma de decisiones. Diseñé una visualización de datos clara e intuitiva para facilitar el uso diario.',
      },
    },
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
    locales: {
      en: {
        titulo: 'NeoBank',
        descricao: 'Banking app focused on simplicity and user experience. I developed a modern interface with optimized and accessible flows.',
      },
      es: {
        titulo: 'NeoBank',
        descricao: 'Aplicación bancaria centrada en simplicidad y experiencia del usuario. Desarrollé una interfaz moderna con flujos optimizados y accesibles.',
      },
    },
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
    locales: {
      en: {
        titulo: 'Itaú Redesign — Partnership with Ebac',
        descricao: 'Redesign focused on improving usability and user experience. I applied UX best practices to make navigation more fluid and efficient.',
      },
      es: {
        titulo: 'Rediseño Itaú — Alianza con Ebac',
        descricao: 'Rediseño enfocado en mejorar la usabilidad y la experiencia del usuario. Apliqué buenas prácticas de UX para hacer la navegación más fluida y eficiente.',
      },
    },
    tecnologias: ['APP', 'WEBSITE', 'SMARTWATCHES'],
    categoria: 'app',
    imagemUrl: '/assets/images/projeto-itau.png',
    imagemObjectPosition: '50% 60%',
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
