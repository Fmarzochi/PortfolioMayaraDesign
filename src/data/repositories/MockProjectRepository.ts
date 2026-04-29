import { Project } from '@/core/domain/Project';
import { IProjectRepository } from '@/core/interfaces/IProjectRepository';

const mockProjects: Project[] = [
  {
    id: '1',
    titulo: 'Projeto A — Identidade Visual',
    descricao:
      'Criação completa de identidade visual para marca do segmento de moda sustentável, incluindo logotipo, paleta de cores e guia de estilo.',
    tecnologias: ['Illustrator', 'Photoshop', 'Figma'],
    imagemUrl: '/assets/placeholder.png',
    linkProjeto: '#',
    destaque: true,
  },
  {
    id: '2',
    titulo: 'Projeto B — UI/UX para App Mobile',
    descricao:
      'Design de interface e experiência do usuário para aplicativo de bem-estar mental, com foco em acessibilidade e jornada intuitiva.',
    tecnologias: ['Figma', 'Principle', 'Adobe XD'],
    imagemUrl: '/assets/placeholder.png',
    linkProjeto: '#',
    destaque: true,
  },
  {
    id: '3',
    titulo: 'Projeto C — Design Editorial',
    descricao:
      'Projeto editorial para revista digital de arquitetura e design de interiores, com curadoria tipográfica e diagramação responsiva.',
    tecnologias: ['InDesign', 'Illustrator', 'Lightroom'],
    imagemUrl: '/assets/placeholder.png',
    linkProjeto: '#',
    destaque: false,
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
