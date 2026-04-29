import { Experience } from '@/core/domain/Experience';
import { Typography } from '@/components/ui/Typography';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section aria-labelledby="experience-heading" className="py-8">
      <Typography variant="h2" className="mb-8" id="experience-heading">
        Experiência
      </Typography>
      <ol className="relative border-l border-neutral-200">
        {experiences.map((exp) => (
          <li key={exp.id} className="mb-8 ml-6">
            <span className="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 ring-4 ring-white" />
            <div className="flex flex-col gap-1">
              <Typography variant="h4">{exp.cargo}</Typography>
              <Typography variant="small" className="text-neutral-600">
                {exp.empresa} · {exp.periodo}
                {exp.atual && (
                  <span className="ml-2 rounded-full bg-neutral-900 px-2 py-0.5 text-xs text-white">
                    Atual
                  </span>
                )}
              </Typography>
              <Typography variant="p" className="mt-1 text-sm text-neutral-600">
                {exp.descricao}
              </Typography>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
