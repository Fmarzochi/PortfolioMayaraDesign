import { Project } from '@/core/domain/Project';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section aria-labelledby="featured-heading" className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <Typography variant="h2" id="featured-heading">
          Projetos em destaque
        </Typography>
        <Button as="a" href="/projetos" variant="ghost" size="sm">
          Ver todos →
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
