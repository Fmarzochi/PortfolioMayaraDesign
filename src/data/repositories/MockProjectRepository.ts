import { Project } from '@/core/domain/Project';
import { IProjectRepository } from '@/core/interfaces/IProjectRepository';

const mockProjects: Project[] = [
  {
    id: '1',
    titulo: 'Drakorys Game UI',
    descricao: 'Interface de jogo com foco em imersão, narrativa e estética impactante. Desenvolvi uma experiência envolvente alinhando UI, atmosfera e usabilidade.',
    tecnologias: ['FIGMA', 'WEBSITE'],
    categoria: 'Game UI',
    imagemUrl: '/assets/images/projeto-drakorys.png',
    linkProjeto: '/projetos/drakorys',
    destaque: true,
    cor: '#0a0a1a',
  },
  {
    id: '2',
    titulo: 'Caffe Express',
    descricao: 'Sistema de gestão e pedidos para cafeteria com foco em agilidade operacional. Estruturei fluxos simples e eficientes para melhorar a experiência do usuário.',
    tecnologias: ['APP MOBILE'],
    categoria: 'App Mobile',
    imagemUrl: '/assets/images/projeto-caffe-express.png',
    linkProjeto: '/projetos/caffe-express',
    destaque: true,
    cor: '#2d1b0a',
  },
  {
    id: '3',
    titulo: 'Essencial Perfumaria',
    descricao: 'Website institucional com foco em elegância e posicionamento de marca. Criei um visual sofisticado com navegação clara e foco em conversão.',
    tecnologias: ['FIGMA', 'WEBSITE'],
    categoria: 'E-commerce',
    imagemUrl: '/assets/images/projeto-essencial.png',
    linkProjeto: '/projetos/essencial',
    destaque: false,
    cor: '#f5f0eb',
  },
  {
    id: '4',
    titulo: 'Planejamento Financeiro',
    descricao: 'Dashboard financeiro pessoal com visualizações de dados claras e intuitivas para apoiar a tomada de decisão.',
    tecnologias: ['FIGMA', 'APP'],
    categoria: 'Fintech',
    imagemUrl: '/assets/images/projeto-planejamento.png',
    linkProjeto: '/projetos/planejamento',
    destaque: false,
    cor: '#0f0a1e',
  },
  {
    id: '5',
    titulo: 'NeoBank',
    descricao: 'Aplicativo bancário com foco em simplicidade e experiência do usuário. Desenvolvi uma interface moderna com fluxos otimizados e acessíveis.',
    tecnologias: ['APP'],
    categoria: 'Fintech',
    imagemUrl: '/assets/images/projeto-neobank.png',
    linkProjeto: '/projetos/neobank',
    destaque: false,
    cor: '#0d1117',
  },
  {
    id: '6',
    titulo: 'Redesign Itaú — Parceria com a Ebac',
    descricao: 'Redesign focado em melhorar usabilidade e experiência do usuário. Apliquei boas práticas de UX para tornar a navegação mais fluida e eficiente.',
    tecnologias: ['APP', 'WEBSITE', 'SMARTWATCHES'],
    categoria: 'Banking',
    imagemUrl: '/assets/images/projeto-itau.png',
    linkProjeto: '/projetos/itau',
    destaque: false,
    cor: '#ff6500',
  },
  {
    id: '7',
    titulo: 'Resident Evil',
    descricao: 'Interface conceitual para plataforma de games com estética horror, imersão e alta performance visual.',
    tecnologias: ['FIGMA', 'WEBSITE'],
    categoria: 'Game UI',
    imagemUrl: '/assets/images/projeto-resident-evil.png',
    linkProjeto: '/projetos/resident-evil',
    destaque: false,
    cor: '#1a0000',
  },
  {
    id: '8',
    titulo: 'Recheiae',
    descricao: 'App de delivery e personalização para rede de alimentação com experiência intuitiva e fidelização.',
    tecnologias: ['APP MOBILE'],
    categoria: 'Foodtech',
    imagemUrl: '/assets/images/projeto-recheiae.png',
    linkProjeto: '/projetos/recheiae',
    destaque: false,
    cor: '#1a0a00',
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
}
