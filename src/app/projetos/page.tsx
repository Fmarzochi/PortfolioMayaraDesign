import type { Metadata } from 'next';
import { MockProjectRepository } from '@/data/repositories/MockProjectRepository';
import { GetProjectsUseCase } from '@/core/useCases/GetProjectsUseCase';
import { ProjectList } from '@/features/projects/ProjectList';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Todos os projetos de design — identidade visual, UI/UX e editorial.',
};

export default async function ProjetosPage() {
  const repository = new MockProjectRepository();
  const getProjects = new GetProjectsUseCase(repository);
  const projects = await getProjects.execute();

  return (
    <div
      className="min-h-screen py-16 transition-colors duration-300"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
