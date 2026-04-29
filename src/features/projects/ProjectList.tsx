import { Project } from '@/core/domain/Project';
import { ProjectCard } from './ProjectCard';
import { Typography } from '@/components/ui/Typography';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-12 text-center">
        <Typography variant="muted">Nenhum projeto encontrado.</Typography>
      </div>
    );
  }

  return (
    <section aria-labelledby="projects-heading" className="py-12">
      <Typography variant="h2" className="mb-8 text-center" as="h2" id="projects-heading">
        Projetos
      </Typography>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
