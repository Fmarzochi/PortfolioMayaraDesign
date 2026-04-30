'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/core/domain/Project';
import { ProjectCard } from '@/features/projects/ProjectCard';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const get = (offset: number) => projects[(current + offset + total) % total];

  return (
    <section
      aria-labelledby="featured-heading"
      className="overflow-hidden py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:mb-12 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest sm:text-sm" style={{ color: 'var(--accent)' }}>
              Exclusivos
            </span>
            <h2 id="featured-heading" className="fluid-h2 font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
              Experiências que entregam resultado
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <p className="font-body text-sm leading-relaxed md:max-w-[28ch]" style={{ color: 'var(--text-muted)' }}>
              Cada projeto é pensado para resolver problemas reais e gerar impacto mensurável.
            </p>
            <Link
              href="/projetos"
              className="inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Explorar projetos
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--accent)' }}>
                <Image src="/assets/icons/arrow-up-right.svg" alt="" width={11} height={11} aria-hidden="true" className="brightness-[10]" />
              </span>
            </Link>
          </div>
        </div>

        {/* Carousel */}

        {/* Mobile: 1 card por vez */}
        <div className="md:hidden">
          <ProjectCard project={get(0)} />
        </div>

        {/* Tablet md–lg: 2 cards */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-5 lg:hidden">
          <ProjectCard project={get(0)} />
          <ProjectCard project={get(1)} />
        </div>

        {/* Desktop lg+: 3 cards com peek lateral */}
        <div className="hidden lg:flex lg:items-stretch lg:gap-4">
          {/* Peek esquerdo */}
          <div className="w-[200px] shrink-0 opacity-40 xl:w-[240px]" aria-hidden="true">
            <ProjectCard project={get(-1)} />
          </div>
          {/* Card principal */}
          <div className="flex-1 min-w-0">
            <ProjectCard project={get(0)} />
          </div>
          {/* Card secundário */}
          <div className="flex-1 min-w-0">
            <ProjectCard project={get(1)} />
          </div>
          {/* Peek direito */}
          <div className="w-[200px] shrink-0 opacity-40 xl:w-[240px]" aria-hidden="true">
            <ProjectCard project={get(2)} />
          </div>
        </div>

        {/* Controles */}
        <div className="mt-6 flex items-center justify-between sm:mt-8">
          <div className="flex items-center gap-3">
            <button
              type="button" onClick={prev} aria-label="Anterior"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-60 sm:h-10 sm:w-10"
              style={{ border: '1px solid var(--border)' }}
            >
              <Image src="/assets/icons/arrow-left.svg" alt="" width={16} height={16} aria-hidden="true" className="brightness-0 dark:brightness-100" />
            </button>
            <button
              type="button" onClick={next} aria-label="Próximo"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-60 sm:h-10 sm:w-10"
              style={{ border: '1px solid var(--border)' }}
            >
              <Image src="/assets/icons/arrow-right.svg" alt="" width={16} height={16} aria-hidden="true" className="brightness-0 dark:brightness-100" />
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            {projects.map((_, i) => (
              <button
                key={i} type="button" onClick={() => setCurrent(i)} aria-label={`Projeto ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{ width: current === i ? '20px' : '6px', background: current === i ? 'var(--text-primary)' : 'var(--border)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
