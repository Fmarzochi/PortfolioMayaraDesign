import { Project } from '@/core/domain/Project';

export interface IProjectRepository {
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project | null>;
  findFeatured(): Promise<Project[]>;
  findBySlug(slug: string): Promise<Project | null>;
}
