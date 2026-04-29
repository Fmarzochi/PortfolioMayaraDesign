import { Project } from '@/core/domain/Project';
import { IProjectRepository } from '@/core/interfaces/IProjectRepository';
import projectsData from '@/data/projects.json';

export class LocalProjectRepository implements IProjectRepository {
  private projects: Project[] = projectsData as Project[];

  async findAll(): Promise<Project[]> {
    return this.projects;
  }

  async findById(id: string): Promise<Project | null> {
    return this.projects.find((p) => p.id === id) ?? null;
  }

  async findFeatured(): Promise<Project[]> {
    return this.projects.filter((p) => p.destaque);
  }
}
