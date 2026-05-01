'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/core/domain/Project';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTilt } from '@/hooks/useTilt';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t, locale } = useLanguage();
  const href = `/projetos/${project.slug}`;
  const tilt = useTilt(6);
  const loc = locale !== 'pt' ? project.locales?.[locale as 'en' | 'es'] : undefined;
  const titulo = loc?.titulo ?? project.titulo;
  const descricao = loc?.descricao ?? project.descricao;

  return (
    <article
      ref={tilt.ref as React.RefObject<HTMLElement>}
      className="group flex flex-col overflow-hidden rounded-xl transition-all duration-200"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        position: 'relative',
        ...tilt.style,
      }}
      onMouseMove={tilt.onMouseMove as React.MouseEventHandler<HTMLElement>}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div style={tilt.glareStyle} />
      {/* Thumbnail */}
      <Link href={href} className="block">
        <div className="aspect-video w-full overflow-hidden relative" style={{ background: 'var(--glow)' }}>
          {project.imagemUrl ? (
            <Image
              src={project.imagemUrl}
              alt={project.titulo}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectPosition: project.imagemObjectPosition ?? 'center center' }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-sans text-xs" style={{ color: 'var(--accent)' }}>{project.titulo}</span>
            </div>
          )}
        </div>
      </Link>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5 lg:p-6">
        <Link href={href} className="hover:opacity-70 transition-opacity">
          <h3
            className="font-display text-lg font-medium sm:text-xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {titulo}
          </h3>
        </Link>
        <p
          className="font-sans text-xs leading-relaxed sm:text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          {descricao}
        </p>

        <ul className="mt-2 flex flex-wrap gap-2" aria-label="Ferramentas utilizadas">
          {project.tecnologias.map((tech) => (
            <li
              key={tech}
              className="rounded-full px-2.5 py-0.5 font-sans text-xs font-medium tracking-wide uppercase"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Rodapé */}
      <div
        className="px-4 py-3 sm:px-5 sm:py-4 lg:px-6"
        style={{ borderTop: '1px solid var(--card-border)' }}
      >
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors hover:opacity-70"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t.projects.viewProject}
          <Image
            src="/assets/icons/arrow-up-right.svg"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
            className="brightness-0 dark:brightness-100"
          />
        </Link>
      </div>
    </article>
  );
}
