import { Project } from '@/core/domain/Project';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>Nenhum projeto encontrado.</p>
      </div>
    );
  }

  return (
    <section aria-labelledby="projects-heading" className="py-12">
      <h2
        id="projects-heading"
        className="fluid-h2 mb-4 font-display font-semibold"
        style={{ color: 'var(--text-primary)' }}
      >
        Projetando produtos que moldam o futuro
      </h2>
      <p className="mb-10 font-body text-sm leading-relaxed sm:mb-12 sm:text-base" style={{ color: 'var(--text-secondary)' }}>
        Cada projeto nasce de um problema real e termina em uma solução que converte.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
