import { Project } from '@/core/domain/Project';
import { IProjectRepository } from '@/core/interfaces/IProjectRepository';

export class GetProjectsUseCase {
  constructor(private readonly repository: IProjectRepository) {}

  async execute(): Promise<Project[]> {
    return this.repository.findAll();
  }
}
