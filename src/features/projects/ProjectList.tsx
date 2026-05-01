'use client';

import { useState } from 'react';
import { Project } from '@/core/domain/Project';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { StaggerReveal } from '@/components/ui/StaggerReveal';

interface ProjectListProps {
  projects: Project[];
}

const FILTERS = ['all', 'website', 'app', 'dashboard', 'ecommerce'] as const;
type Filter = typeof FILTERS[number];

export function ProjectList({ projects }: ProjectListProps) {
  const { t } = useLanguage();
  const [active, setActive] = useState<Filter>('all');

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.categoria === active);

  const filterLabel: Record<Filter, string> = {
    all: t.projectFilters.all,
    website: t.projectFilters.website,
    app: t.projectFilters.apps,
    dashboard: t.projectFilters.dashboards,
    ecommerce: t.projectFilters.ecommerce,
  };

  if (projects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>{t.projects.noProjects}</p>
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
        {t.projects.heading}
      </h2>
      <p className="mb-8 font-body text-sm leading-relaxed sm:mb-10 sm:text-base" style={{ color: 'var(--text-secondary)' }}>
        {t.projects.subtitle}
      </p>

      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2 sm:mb-10 sm:gap-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className="rounded-full px-4 py-1.5 font-sans text-xs font-medium transition-all duration-200 sm:px-5 sm:py-2 sm:text-sm"
            style={
              active === f
                ? { background: 'var(--text-primary)', color: 'var(--bg-primary)' }
                : { border: '1px solid var(--border)', color: 'var(--text-muted)', background: 'transparent' }
            }
          >
            {filterLabel[f]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="py-12 text-center">
          <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>{t.projects.noProjects}</p>
        </div>
      ) : (
        <StaggerReveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerReveal>
      )}
    </section>
  );
}
