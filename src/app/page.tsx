import { MockProjectRepository } from '@/data/repositories/MockProjectRepository';
import { GetProjectsUseCase } from '@/core/useCases/GetProjectsUseCase';
import { ProjectList } from '@/features/projects/ProjectList';
import { Container } from '@/components/layout/Container';

export default async function HomePage() {
  const repository = new MockProjectRepository();
  const getProjects = new GetProjectsUseCase(repository);
  const projects = await getProjects.execute();

  return (
    <Container className="py-8">
      <ProjectList projects={projects} />
    </Container>
  );
}
