export type Locale = 'pt' | 'en' | 'es';

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

export const LOCALE_CYCLE: Record<Locale, Locale> = {
  pt: 'en',
  en: 'es',
  es: 'pt',
};

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      about: 'Sobre',
      experience: 'Experiência',
      contact: 'Contato',
    },
    header: {
      cta: 'Entrar em Contato',
      menuOpen: 'Abrir menu de navegação',
      menuClose: 'Fechar menu',
    },
    hero: {
      title1: 'Design de produtos que ',
      titleAccent: 'convertem, engajam',
      title2: ' e escalam negócios',
      subtitle:
        'Transformo problemas complexos em soluções digitais intuitivas, unindo estratégia, dados e experiência do usuário para gerar impacto real.',
      cta: 'Veja agora todos os projetos',
      timeLabel: 'Leva menos de 5 minutos.',
      badgeAlt: 'Conheça meu trabalho',
    },
    valueProps: {
      heading: 'Clareza, estratégia e performance para crescimento digital',
      descMain:
        'Cada projeto é pensado para resolver problemas reais, melhorar a experiência do usuário e gerar impacto mensurável.',
      descSub:
        'Tenha uma designer ao seu lado para transformar ideias em soluções reais e alcançar resultados com mais clareza e controle.',
      descMobile: 'Cada projeto é pensado para resolver problemas reais e gerar impacto mensurável.',
      cards: [
        { title: 'Visão de produto', desc: 'Interfaces alinhadas aos objetivos do negócio.' },
        { title: 'Experiência inteligente', desc: 'Soluções que simplificam sistemas complexos.' },
        { title: 'Foco em conversão', desc: 'Experiências pensadas para engajar e gerar ação.' },
        { title: 'Sistemas escaláveis', desc: 'Design estruturado para evoluir junto com o produto.' },
      ],
    },
    featured: {
      badge: 'Exclusivos',
      heading: 'Experiências que entregam resultado',
      desc: 'Cada projeto é pensado para resolver problemas reais e gerar impacto mensurável.',
      ctaBtn: 'Explorar projetos',
      prev: 'Anterior',
      next: 'Próximo',
      dotLabel: 'Projeto',
    },
    about: {
      miniCards: [
        { label: 'Experiências', sub: 'Fintech, sistemas e plataformas digitais' },
        { label: 'Processo completo', sub: 'Do discovery à prototipação e validação' },
        { label: 'Foco em resultado', sub: 'Usabilidade, conversão e experiência do usuário' },
        { label: 'Ferramentas', sub: 'Figma, prototipação, design systems e handoff para desenvolvimento' },
      ],
      photoAlt: 'Talessa Rodrigues — UX/UI Designer',
      heading: 'UX/UI Designer focada em transformar ideias em produtos eficientes',
      body1:
        'Sou uma UX/UI Designer com foco em criação de produtos digitais que equilibram experiência do usuário, objetivos de negócio e viabilidade técnica.',
      body2:
        'Atuo desde a fase de discovery até a entrega final, estruturando fluxos, interfaces e soluções que não só funcionam bem — mas geram resultado.',
      body3:
        'Tenho experiência com projetos de fintech, sistemas e plataformas digitais, sempre buscando clareza, usabilidade e impacto real.',
    },
    experience: {
      heading: 'Minha experiência em produtos digitais',
      subtitle: 'Atuação prática em projetos reais, do discovery à entrega de interfaces escaláveis.',
      items: [
        {
          title: 'Projetos Acadêmicos',
          period: '2022 — Atual',
          desc: [
            'Desenvolvo projetos próprios com foco em aplicar UX/UI na prática, explorando desde a concepção até a implementação de soluções digitais.',
            'Recentemente, projetei um cardápio digital para um delivery próprio, estruturando toda a jornada do usuário — navegação, escolha de produtos, checkout e entrega.',
            'A solução foi pensada para ser simples, intuitiva e eficiente, reduzindo fricções na experiência e otimizando o tempo tanto do usuário quanto da operação.',
            'O projeto evoluiu para o desenvolvimento de um sistema administrativo, com foco em gestão de estoque, controle de vendas e análise de custos, ampliando o impacto do design para além da interface.',
          ],
        },
        {
          title: 'UX/UI Designer — CatchUp Tech',
          period: '03/2026 — Atual',
          desc: [
            'Atuação na fase de discovery, com pesquisa, mapeamento de jornadas e identificação de oportunidades.',
            'Criação de identidade visual e landing pages alinhadas ao usuário e aos objetivos do produto.',
            'Aplicação de princípios de acessibilidade (WCAG), garantindo experiências mais inclusivas.',
          ],
        },
        {
          title: 'UX/UI Designer — Front End Fusion',
          period: '2025 — Atual',
          desc: [
            'Atuo como voluntária em projetos digitais, contribuindo com iniciativas como Kalita Fotografia e o desenvolvimento do site da Front End Fusion.',
            'Participei das etapas de discovery e benchmark, evoluindo para a construção do design system (tipografia, cores, ícones e identidade visual) e definição de fluxos.',
            'O projeto iniciou como uma landing page e está evoluindo para uma plataforma com área administrativa, voltada à gestão da comunidade, voluntários e ONGs.',
          ],
        },
        {
          title: 'UX/UI Designer — Crimson Mind Tech',
          period: '08/2023 — 11/2025',
          desc: [
            'Atuei no desenvolvimento de um sistema de gestão de estoque e vendas para uma loja de perfumes e salão de beleza, com foco em simplicidade e eficiência operacional.',
            'O projeto foi pensado para ser intuitivo e fácil de usar no dia a dia, priorizando apenas as funcionalidades essenciais. Estruturei as áreas de controle de estoque, registro de vendas e cadastro de clientes e fornecedores.',
            'A solução permitiu que a gestão do negócio se tornasse mais ágil, possibilitando a geração de relatórios diários e eliminando a necessidade de controles feitos manualmente.',
          ],
        },
      ],
    },
    faq: {
      heading: 'Perguntas comuns sobre meu trabalho',
      ctaBtn: 'Me mande aqui sua dúvida',
      items: [
        {
          q: 'Como funciona seu processo de trabalho?',
          a: 'Começo com imersão no problema — pesquisa de usuário, análise de concorrentes e alinhamento de objetivos. Depois sigo um ciclo de ideação, prototipação e validação até chegar ao design final pronto para handoff.',
        },
        {
          q: 'Você trabalha com times ou projetos individuais?',
          a: 'Trabalho nos dois formatos. Tenho experiência colaborando com times de produto, engenharia e negócio, mas também conduzo projetos de forma autônoma do início ao fim.',
        },
        {
          q: 'Quais entregáveis você oferece?',
          a: 'Pesquisa UX, fluxos de usuário, wireframes, protótipos interativos, design system, especificações para desenvolvimento e handoff no Figma.',
        },
        {
          q: 'Você trabalha com prazos e metas?',
          a: 'Sim. Defino prazos claros na proposta e acompanho o progresso com rituais de alinhamento. Metas de resultado — conversão, retenção, usabilidade — fazem parte do processo desde o início.',
        },
        {
          q: 'Você também trabalha com redesign de produtos?',
          a: 'Sim. Redesigns envolvem diagnóstico profundo, pesquisa com usuários reais e estratégia focada em melhorar métricas específicas do produto.',
        },
        {
          q: 'Você desenvolve o código também?',
          a: 'Tenho conhecimento básico de HTML, CSS e JavaScript, o que me ajuda a entregar handoffs mais precisos e colaborar melhor com times de desenvolvimento.',
        },
      ],
    },
    cta: {
      heading: 'Comece hoje',
      subtitle: 'Criar um novo padrão de vida começa com uma decisão simples',
      btn: 'Converse comigo agora',
    },
    footer: {
      cta: 'Vamos trabalhar juntos',
      copyright: 'Todos os direitos reservados.',
    },
    projects: {
      heading: 'Projetando produtos que moldam o futuro',
      subtitle: 'Cada projeto nasce de um problema real e termina em uma solução que converte.',
      viewProject: 'Ver projeto',
      noProjects: 'Nenhum projeto encontrado.',
    },
    sobre: {
      pageHeading: 'Sobre mim',
      pageSubtitle: 'Designer com foco em produtos digitais que convertem.',
      photoAlt: 'Talessa Rodrigues — UX/UI Designer',
      cardHeading: 'UX/UI Designer focada em transformar ideias em produtos eficientes',
      body1:
        'Sou uma UX/UI Designer com foco em criação de produtos digitais que equilibram experiência do usuário, objetivos de negócio e viabilidade técnica.',
      body2:
        'Atuo desde a fase de discovery até a entrega final, estruturando fluxos, interfaces e soluções que não só funcionam bem — mas geram resultado.',
      body3:
        'Tenho experiência com projetos de fintech, sistemas e plataformas digitais, sempre buscando clareza, usabilidade e impacto real.',
      ctaBtn: 'Vamos conversar',
      skills: [
        { label: 'Figma', sub: 'Prototipação e handoff' },
        { label: 'Design System', sub: 'Componentização escalável' },
        { label: 'UX Research', sub: 'Discovery e jornadas' },
        { label: 'Acessibilidade', sub: 'WCAG e interfaces inclusivas' },
      ],
    },
    contato: {
      heading: 'Vamos trabalhar juntos',
      body1: 'Tem um projeto em mente? Me conta mais sobre o que você precisa e como posso ajudar.',
      body2:
        'Trabalho com times e projetos individuais — do discovery até a entrega de interfaces prontas para desenvolvimento.',
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      form: {
        nameLabel: 'Nome',
        namePlaceholder: 'Seu nome completo',
        emailLabel: 'E-mail',
        emailPlaceholder: 'seu@email.com',
        messageLabel: 'Mensagem',
        messagePlaceholder: 'Descreva seu projeto ou dúvida...',
        submit: 'Enviar mensagem',
      },
    },
    notFound: {
      badge: 'Erro 404',
      heading: 'Página Não Encontrada',
      body: 'A página que você está procurando não existe ou foi movida.',
      btn: 'Voltar ao início',
    },
    projectFilters: {
      all: 'All',
      website: 'Website',
      apps: 'Apps',
      dashboards: 'Dashboards',
      ecommerce: 'Ecommerce',
    },
    case: {
      badge: 'Projetos Selecionados',
      cliente: 'cliente',
      meuPapel: 'meu papel',
      servicos: 'serviços prestados',
      s1: 'SOBRE O PROBLEMA',
      s1User: 'USUÁRIO',
      s1Business: 'NEGÓCIO',
      s2: 'ENCONTRO DA SOLUÇÃO',
      s2Brand: 'ESTRATÉGIA DE MARCA',
      s3: 'PROCESSO DE DESIGN',
      s4: 'CONCLUSÃO',
      s4Insight: 'O INSIGHT',
      s4Interface: 'DESIGN DA INTERFACE',
      s4Ui: 'UI DESIGN',
      s4UiNote: 'Esses insights reforçam a importância de um design centrado no usuário aliado aos objetivos do negócio.',
      s5: 'CONFIRA TAMBÉM OUTROS PROJETOS INTERESSANTES ABAIXO',
      backToProjects: 'Voltar aos projetos',
    },
  },

  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      experience: 'Experience',
      contact: 'Contact',
    },
    header: {
      cta: 'Get in Touch',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close menu',
    },
    hero: {
      title1: 'Product design that ',
      titleAccent: 'converts, engages',
      title2: ' and scales businesses',
      subtitle:
        'I transform complex problems into intuitive digital solutions, combining strategy, data, and user experience to generate real impact.',
      cta: 'Explore all projects now',
      timeLabel: 'Takes less than 5 minutes.',
      badgeAlt: 'See my work',
    },
    valueProps: {
      heading: 'Clarity, strategy, and performance for digital growth',
      descMain:
        'Each project is designed to solve real problems, improve user experience, and generate measurable impact.',
      descSub:
        'Have a designer by your side to transform ideas into real solutions and achieve results with more clarity and control.',
      descMobile: 'Each project is designed to solve real problems and generate measurable impact.',
      cards: [
        { title: 'Product vision', desc: 'Interfaces aligned with business objectives.' },
        { title: 'Smart experience', desc: 'Solutions that simplify complex systems.' },
        { title: 'Conversion focus', desc: 'Experiences designed to engage and drive action.' },
        { title: 'Scalable systems', desc: 'Design structured to evolve with the product.' },
      ],
    },
    featured: {
      badge: 'Featured',
      heading: 'Experiences that deliver results',
      desc: 'Each project is designed to solve real problems and generate measurable impact.',
      ctaBtn: 'Explore projects',
      prev: 'Previous',
      next: 'Next',
      dotLabel: 'Project',
    },
    about: {
      miniCards: [
        { label: 'Experience', sub: 'Fintech, systems and digital platforms' },
        { label: 'Full process', sub: 'From discovery to prototyping and validation' },
        { label: 'Results-driven', sub: 'Usability, conversion and user experience' },
        { label: 'Tools', sub: 'Figma, prototyping, design systems and dev handoff' },
      ],
      photoAlt: 'Talessa Rodrigues — UX/UI Designer',
      heading: 'UX/UI Designer focused on turning ideas into efficient products',
      body1:
        'I am a UX/UI Designer focused on creating digital products that balance user experience, business objectives, and technical feasibility.',
      body2:
        'I work from discovery through final delivery, structuring flows, interfaces, and solutions that not only work well — but generate results.',
      body3:
        'I have experience with fintech projects, systems, and digital platforms, always seeking clarity, usability, and real impact.',
    },
    experience: {
      heading: 'My experience in digital products',
      subtitle: 'Hands-on work on real projects, from discovery to delivering scalable interfaces.',
      items: [
        {
          title: 'Academic Projects',
          period: '2022 — Present',
          desc: [
            'I develop personal projects focused on applying UX/UI in practice, exploring everything from conception to the implementation of digital solutions.',
            'Recently, I designed a digital menu for a food delivery service, structuring the entire user journey — navigation, product selection, checkout, and delivery.',
            'The solution was designed to be simple, intuitive, and efficient, reducing friction in the experience and optimizing time for both the user and the operation.',
            'The project evolved into an admin system focused on inventory management, sales tracking, and cost analysis, extending the design impact beyond the interface.',
          ],
        },
        {
          title: 'UX/UI Designer — CatchUp Tech',
          period: '03/2026 — Present',
          desc: [
            'Working in the discovery phase with research, journey mapping, and opportunity identification.',
            'Creating visual identity and landing pages aligned with user needs and product objectives.',
            'Applying accessibility principles (WCAG) to ensure more inclusive experiences.',
          ],
        },
        {
          title: 'UX/UI Designer — Front End Fusion',
          period: '2025 — Present',
          desc: [
            'I work as a volunteer on digital projects, contributing to initiatives like Kalita Photography and the Front End Fusion website.',
            'I participated in discovery and benchmark phases, progressing to building the design system (typography, colors, icons, and visual identity) and defining user flows.',
            'The project started as a landing page and is evolving into a platform with an admin area for managing the community, volunteers, and NGOs.',
          ],
        },
        {
          title: 'UX/UI Designer — Crimson Mind Tech',
          period: '08/2023 — 11/2025',
          desc: [
            'I worked on developing an inventory and sales management system for a perfume store and beauty salon, focused on simplicity and operational efficiency.',
            'The project was designed to be intuitive and easy to use daily, prioritizing only essential features. I structured inventory control, sales registration, and customer and supplier management areas.',
            'The solution made business management more agile, enabling daily report generation and eliminating the need for manual controls, optimizing time and decision-making.',
          ],
        },
      ],
    },
    faq: {
      heading: 'Common questions about my work',
      ctaBtn: 'Send me your question',
      items: [
        {
          q: 'How does your work process work?',
          a: 'I start with immersion in the problem — user research, competitor analysis, and objective alignment. Then I follow an ideation, prototyping, and validation cycle until reaching the final design ready for handoff.',
        },
        {
          q: 'Do you work with teams or individual projects?',
          a: 'I work in both formats. I have experience collaborating with product, engineering, and business teams, but I also lead projects autonomously from start to finish.',
        },
        {
          q: 'What deliverables do you offer?',
          a: 'UX research, user flows, wireframes, interactive prototypes, design system, development specifications, and Figma handoff.',
        },
        {
          q: 'Do you work with deadlines and goals?',
          a: 'Yes. I set clear deadlines in the proposal and track progress through alignment rituals. Result metrics — conversion, retention, usability — are part of the process from the start.',
        },
        {
          q: 'Do you also work with product redesigns?',
          a: 'Yes. Redesigns involve deep diagnosis, research with real users, and a strategy focused on improving specific product metrics.',
        },
        {
          q: 'Do you also develop code?',
          a: 'I have basic knowledge of HTML, CSS, and JavaScript, which helps me deliver more precise handoffs and collaborate better with development teams.',
        },
      ],
    },
    cta: {
      heading: 'Start today',
      subtitle: 'Creating a new standard of living starts with a simple decision',
      btn: 'Talk to me now',
    },
    footer: {
      cta: "Let's work together",
      copyright: 'All rights reserved.',
    },
    projects: {
      heading: 'Designing products that shape the future',
      subtitle: 'Each project starts from a real problem and ends in a solution that converts.',
      viewProject: 'View project',
      noProjects: 'No projects found.',
    },
    sobre: {
      pageHeading: 'About me',
      pageSubtitle: 'Designer focused on digital products that convert.',
      photoAlt: 'Talessa Rodrigues — UX/UI Designer',
      cardHeading: 'UX/UI Designer focused on turning ideas into efficient products',
      body1:
        'I am a UX/UI Designer focused on creating digital products that balance user experience, business objectives, and technical feasibility.',
      body2:
        'I work from discovery through final delivery, structuring flows, interfaces, and solutions that not only work well — but generate results.',
      body3:
        'I have experience with fintech projects, systems, and digital platforms, always seeking clarity, usability, and real impact.',
      ctaBtn: "Let's talk",
      skills: [
        { label: 'Figma', sub: 'Prototyping and handoff' },
        { label: 'Design System', sub: 'Scalable componentization' },
        { label: 'UX Research', sub: 'Discovery and journeys' },
        { label: 'Accessibility', sub: 'WCAG and inclusive interfaces' },
      ],
    },
    contato: {
      heading: "Let's work together",
      body1: 'Have a project in mind? Tell me more about what you need and how I can help.',
      body2:
        'I work with teams and individual projects — from discovery through delivering interfaces ready for development.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Describe your project or question...',
        submit: 'Send message',
      },
    },
    notFound: {
      badge: 'Error 404',
      heading: 'Page Not Found',
      body: 'The page you are looking for does not exist or has been moved.',
      btn: 'Back to home',
    },
    projectFilters: {
      all: 'All',
      website: 'Website',
      apps: 'Apps',
      dashboards: 'Dashboards',
      ecommerce: 'Ecommerce',
    },
    case: {
      badge: 'Selected Projects',
      cliente: 'client',
      meuPapel: 'my role',
      servicos: 'services provided',
      s1: 'ABOUT THE PROBLEM',
      s1User: 'USER',
      s1Business: 'BUSINESS',
      s2: 'FINDING THE SOLUTION',
      s2Brand: 'BRAND STRATEGY',
      s3: 'DESIGN PROCESS',
      s4: 'CONCLUSION',
      s4Insight: 'THE INSIGHT',
      s4Interface: 'INTERFACE DESIGN',
      s4Ui: 'UI DESIGN',
      s4UiNote: 'These insights reinforce the importance of user-centered design aligned with business objectives.',
      s5: 'CHECK OUT OTHER INTERESTING PROJECTS BELOW',
      backToProjects: 'Back to projects',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    header: {
      cta: 'Ponerse en Contacto',
      menuOpen: 'Abrir menú de navegación',
      menuClose: 'Cerrar menú',
    },
    hero: {
      title1: 'Diseño de productos que ',
      titleAccent: 'convierten, enganchan',
      title2: ' y escalan negocios',
      subtitle:
        'Transformo problemas complejos en soluciones digitales intuitivas, combinando estrategia, datos y experiencia del usuario para generar impacto real.',
      cta: 'Ver todos los proyectos ahora',
      timeLabel: 'Tarda menos de 5 minutos.',
      badgeAlt: 'Conoce mi trabajo',
    },
    valueProps: {
      heading: 'Claridad, estrategia y rendimiento para el crecimiento digital',
      descMain:
        'Cada proyecto está diseñado para resolver problemas reales, mejorar la experiencia del usuario y generar impacto medible.',
      descSub:
        'Ten una diseñadora a tu lado para transformar ideas en soluciones reales y lograr resultados con más claridad y control.',
      descMobile: 'Cada proyecto está diseñado para resolver problemas reales y generar impacto medible.',
      cards: [
        { title: 'Visión de producto', desc: 'Interfaces alineadas con los objetivos del negocio.' },
        { title: 'Experiencia inteligente', desc: 'Soluciones que simplifican sistemas complejos.' },
        { title: 'Foco en conversión', desc: 'Experiencias diseñadas para involucrar y generar acción.' },
        { title: 'Sistemas escalables', desc: 'Diseño estructurado para evolucionar con el producto.' },
      ],
    },
    featured: {
      badge: 'Destacados',
      heading: 'Experiencias que entregan resultados',
      desc: 'Cada proyecto está diseñado para resolver problemas reales y generar impacto medible.',
      ctaBtn: 'Explorar proyectos',
      prev: 'Anterior',
      next: 'Siguiente',
      dotLabel: 'Proyecto',
    },
    about: {
      miniCards: [
        { label: 'Experiencias', sub: 'Fintech, sistemas y plataformas digitales' },
        { label: 'Proceso completo', sub: 'Del discovery a la prototipación y validación' },
        { label: 'Foco en resultados', sub: 'Usabilidad, conversión y experiencia del usuario' },
        { label: 'Herramientas', sub: 'Figma, prototipado, design systems y handoff para desarrollo' },
      ],
      photoAlt: 'Talessa Rodrigues — UX/UI Designer',
      heading: 'UX/UI Designer enfocada en transformar ideas en productos eficientes',
      body1:
        'Soy UX/UI Designer enfocada en crear productos digitales que equilibran experiencia del usuario, objetivos de negocio y viabilidad técnica.',
      body2:
        'Trabajo desde la fase de discovery hasta la entrega final, estructurando flujos, interfaces y soluciones que no solo funcionan bien — sino que generan resultados.',
      body3:
        'Tengo experiencia en proyectos de fintech, sistemas y plataformas digitales, siempre buscando claridad, usabilidad e impacto real.',
    },
    experience: {
      heading: 'Mi experiencia en productos digitales',
      subtitle: 'Trabajo práctico en proyectos reales, del discovery a la entrega de interfaces escalables.',
      items: [
        {
          title: 'Proyectos Académicos',
          period: '2022 — Actualidad',
          desc: [
            'Desarrollo proyectos propios centrados en aplicar UX/UI en la práctica, explorando desde la concepción hasta la implementación de soluciones digitales.',
            'Recientemente diseñé un menú digital para un servicio de delivery propio, estructurando todo el recorrido del usuario — navegación, selección de productos, checkout y entrega.',
            'La solución fue pensada para ser simple, intuitiva y eficiente, reduciendo fricciones en la experiencia y optimizando el tiempo tanto del usuario como de la operación.',
            'El proyecto evolucionó hacia el desarrollo de un sistema administrativo con foco en gestión de inventario, control de ventas y análisis de costos.',
          ],
        },
        {
          title: 'UX/UI Designer — CatchUp Tech',
          period: '03/2026 — Actualidad',
          desc: [
            'Trabajo en la fase de discovery con investigación, mapeo de recorridos e identificación de oportunidades.',
            'Creación de identidad visual y landing pages alineadas con el usuario y los objetivos del producto.',
            'Aplicación de principios de accesibilidad (WCAG), garantizando experiencias más inclusivas.',
          ],
        },
        {
          title: 'UX/UI Designer — Front End Fusion',
          period: '2025 — Actualidad',
          desc: [
            'Trabajo como voluntaria en proyectos digitales, contribuyendo a iniciativas como Kalita Fotografía y el sitio web de Front End Fusion.',
            'Participé en las etapas de discovery y benchmark, evolucionando hacia la construcción del design system y la definición de flujos.',
            'El proyecto comenzó como una landing page y está evolucionando hacia una plataforma con área administrativa para gestión de comunidad, voluntarios y ONGs.',
          ],
        },
        {
          title: 'UX/UI Designer — Crimson Mind Tech',
          period: '08/2023 — 11/2025',
          desc: [
            'Trabajé en el desarrollo de un sistema de gestión de inventario y ventas para una tienda de perfumes y salón de belleza, enfocado en simplicidad y eficiencia operativa.',
            'El proyecto fue diseñado para ser intuitivo y fácil de usar en el día a día, priorizando solo las funcionalidades esenciales. Estructuré las áreas de control de inventario, registro de ventas y gestión de clientes y proveedores.',
            'La solución hizo la gestión del negocio más ágil, permitiendo la generación de informes diarios y eliminando la necesidad de controles manuales.',
          ],
        },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes sobre mi trabajo',
      ctaBtn: 'Envíame tu pregunta',
      items: [
        {
          q: '¿Cómo funciona tu proceso de trabajo?',
          a: 'Comienzo con inmersión en el problema — investigación de usuarios, análisis de competidores y alineación de objetivos. Luego sigo un ciclo de ideación, prototipado y validación hasta llegar al diseño final listo para handoff.',
        },
        {
          q: '¿Trabajas con equipos o proyectos individuales?',
          a: 'Trabajo en ambos formatos. Tengo experiencia colaborando con equipos de producto, ingeniería y negocio, pero también conduzco proyectos de forma autónoma de principio a fin.',
        },
        {
          q: '¿Qué entregables ofreces?',
          a: 'Investigación UX, flujos de usuario, wireframes, prototipos interactivos, design system, especificaciones para desarrollo y handoff en Figma.',
        },
        {
          q: '¿Trabajas con plazos y metas?',
          a: 'Sí. Defino plazos claros en la propuesta y hago seguimiento del progreso con rituales de alineación. Las metas de resultado — conversión, retención, usabilidad — forman parte del proceso desde el inicio.',
        },
        {
          q: '¿También trabajas con rediseño de productos?',
          a: 'Sí. Los rediseños implican un diagnóstico profundo, investigación con usuarios reales y una estrategia enfocada en mejorar métricas específicas del producto.',
        },
        {
          q: '¿También desarrollas código?',
          a: 'Tengo conocimientos básicos de HTML, CSS y JavaScript, lo que me ayuda a entregar handoffs más precisos y colaborar mejor con los equipos de desarrollo.',
        },
      ],
    },
    cta: {
      heading: 'Empieza hoy',
      subtitle: 'Crear un nuevo estándar de vida comienza con una decisión simple',
      btn: 'Habla conmigo ahora',
    },
    footer: {
      cta: 'Trabajemos juntos',
      copyright: 'Todos los derechos reservados.',
    },
    projects: {
      heading: 'Diseñando productos que moldean el futuro',
      subtitle: 'Cada proyecto nace de un problema real y termina en una solución que convierte.',
      viewProject: 'Ver proyecto',
      noProjects: 'No se encontraron proyectos.',
    },
    sobre: {
      pageHeading: 'Sobre mí',
      pageSubtitle: 'Diseñadora enfocada en productos digitales que convierten.',
      photoAlt: 'Talessa Rodrigues — UX/UI Designer',
      cardHeading: 'UX/UI Designer enfocada en transformar ideas en productos eficientes',
      body1:
        'Soy UX/UI Designer enfocada en crear productos digitales que equilibran experiencia del usuario, objetivos de negocio y viabilidad técnica.',
      body2:
        'Trabajo desde la fase de discovery hasta la entrega final, estructurando flujos, interfaces y soluciones que no solo funcionan bien — sino que generan resultados.',
      body3:
        'Tengo experiencia en proyectos de fintech, sistemas y plataformas digitales, siempre buscando claridad, usabilidad e impacto real.',
      ctaBtn: 'Hablemos',
      skills: [
        { label: 'Figma', sub: 'Prototipado y handoff' },
        { label: 'Design System', sub: 'Componentización escalable' },
        { label: 'UX Research', sub: 'Discovery y recorridos' },
        { label: 'Accesibilidad', sub: 'WCAG e interfaces inclusivas' },
      ],
    },
    contato: {
      heading: 'Trabajemos juntos',
      body1: '¿Tienes un proyecto en mente? Cuéntame más sobre lo que necesitas y cómo puedo ayudarte.',
      body2:
        'Trabajo con equipos y proyectos individuales — desde el discovery hasta la entrega de interfaces listas para desarrollo.',
      emailLabel: 'Correo electrónico',
      whatsappLabel: 'WhatsApp',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu@correo.com',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Describe tu proyecto o consulta...',
        submit: 'Enviar mensaje',
      },
    },
    notFound: {
      badge: 'Error 404',
      heading: 'Página No Encontrada',
      body: 'La página que buscas no existe o ha sido movida.',
      btn: 'Volver al inicio',
    },
    projectFilters: {
      all: 'Todos',
      website: 'Website',
      apps: 'Apps',
      dashboards: 'Dashboards',
      ecommerce: 'Ecommerce',
    },
    case: {
      badge: 'Proyectos Seleccionados',
      cliente: 'cliente',
      meuPapel: 'mi rol',
      servicos: 'servicios prestados',
      s1: 'SOBRE EL PROBLEMA',
      s1User: 'USUARIO',
      s1Business: 'NEGOCIO',
      s2: 'ENCONTRANDO LA SOLUCIÓN',
      s2Brand: 'ESTRATEGIA DE MARCA',
      s3: 'PROCESO DE DISEÑO',
      s4: 'CONCLUSIÓN',
      s4Insight: 'EL INSIGHT',
      s4Interface: 'DISEÑO DE INTERFAZ',
      s4Ui: 'UI DESIGN',
      s4UiNote: 'Estos insights refuerzan la importancia de un diseño centrado en el usuario alineado con los objetivos del negocio.',
      s5: 'TAMBIÉN MIRA OTROS PROYECTOS INTERESANTES',
      backToProjects: 'Volver a proyectos',
    },
  },
} as const;

export type Translations = typeof translations.pt;
