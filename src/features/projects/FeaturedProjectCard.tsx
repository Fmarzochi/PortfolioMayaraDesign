'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/core/domain/Project';
import { useTilt } from '@/hooks/useTilt';

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const tilt = useTilt(8);

  return (
    <Link href={`/projetos/${project.slug}`} className="group block">
      <article
        ref={tilt.ref as React.RefObject<HTMLElement>}
        className="flex flex-col overflow-hidden rounded-2xl"
        style={{ position: 'relative', ...tilt.style }}
        onMouseMove={tilt.onMouseMove as React.MouseEventHandler<HTMLElement>}
        onMouseLeave={tilt.onMouseLeave}
      >
        <div style={tilt.glareStyle} />
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ aspectRatio: '4/5', background: 'var(--card-bg)' }}
        >
          {project.imagemUrl ? (
            <Image
              src={project.imagemUrl}
              alt={project.titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: project.imagemObjectPosition ?? 'center center' }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-sans text-xs" style={{ color: 'var(--accent)' }}>
                {project.titulo}
              </span>
            </div>
          )}
        </div>

        <div className="px-1 pt-4 pb-2">
          <h3
            className="font-display text-lg font-medium transition-opacity group-hover:opacity-70"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.titulo}
          </h3>
          {project.descricao && (
            <p className="mt-1 font-sans text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--text-muted)' }}>
              {project.descricao}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
