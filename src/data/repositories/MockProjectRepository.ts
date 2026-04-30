import { Project } from '@/core/domain/Project';
import { IProjectRepository } from '@/core/interfaces/IProjectRepository';

const mockProjects: Project[] = [
  {
    id: '1',
    titulo: 'NeoBank',
    descricao: 'Redesign completo de plataforma fintech com foco em simplicidade, confiança e conversão de novos usuários.',
    tecnologias: ['UI Design', 'UX Research', 'Design System', 'Figma'],
    categoria: 'Fintech',
    imagemUrl: '/assets/images/projeto-neobank.png',
    linkProjeto: '/projetos/neobank',
    destaque: true,
    cor: '#0d1117',
  },
  {
    id: '2',
    titulo: 'Essencial Perfumaria',
    descricao: 'E-commerce minimalista para marca de perfumaria premium com foco em conversão e experiência de luxo.',
    tecnologias: ['UI Design', 'E-commerce', 'Figma'],
    categoria: 'E-commerce',
    imagemUrl: '/assets/images/projeto-essencial.png',
    linkProjeto: '/projetos/essencial',
    destaque: true,
    cor: '#f5f0eb',
  },
  {
    id: '3',
    titulo: 'Caffe Express',
    descricao: 'Identidade visual e app para rede de cafeterias artesanais, integrando pedidos digitais e fidelidade.',
    tecnologias: ['Branding', 'UI Design', 'Figma'],
    categoria: 'Branding & App',
    imagemUrl: '/assets/images/projeto-caffe-express.png',
    linkProjeto: '/projetos/caffe-express',
    destaque: false,
    cor: '#2d1b0a',
  },
  {
    id: '4',
    titulo: 'Planejamento Financeiro',
    descricao: 'App de planejamento financeiro pessoal com visualizações de dados, metas e gamificação.',
    tecnologias: ['UI Design', 'Data Viz', 'Figma'],
    categoria: 'App Mobile',
    imagemUrl: '/assets/images/projeto-planejamento.png',
    linkProjeto: '/projetos/planejamento',
    destaque: false,
    cor: '#0f0a1e',
  },
  {
    id: '5',
    titulo: 'Drakorys',
    descricao: 'Plataforma de entretenimento com design imersivo, sistema de recomendação e experiência cinematográfica.',
    tecnologias: ['UI Design', 'Motion', 'Figma'],
    categoria: 'Produto Digital',
    imagemUrl: '/assets/images/projeto-drakorys.png',
    linkProjeto: '/projetos/drakorys',
    destaque: false,
    cor: '#0a0a1a',
  },
  {
    id: '6',
    titulo: 'Itaú',
    descricao: 'Redesign de fluxo de onboarding e dashboard para o aplicativo de um dos maiores bancos do Brasil.',
    tecnologias: ['UI Design', 'UX Research', 'Figma'],
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
    tecnologias: ['UI Design', 'Game Design', 'Figma'],
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
    tecnologias: ['UI Design', 'UX Research', 'Figma'],
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
