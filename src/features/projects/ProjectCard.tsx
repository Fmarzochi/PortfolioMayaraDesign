import { Project } from '@/core/domain/Project';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="aspect-video w-full bg-neutral-100" aria-hidden="true" />

      <CardHeader>
        <Typography variant="h3" className="text-lg">
          {project.titulo}
        </Typography>
      </CardHeader>

      <CardContent className="flex-1">
        <Typography variant="p" className="text-sm text-neutral-600">
          {project.descricao}
        </Typography>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {project.tecnologias.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700"
            >
              {tech}
            </li>
          ))}
        </ul>
      </CardContent>

      {project.linkProjeto && (
        <CardFooter>
          <Button as="a" href={project.linkProjeto} variant="outline" size="sm">
            Ver projeto
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
