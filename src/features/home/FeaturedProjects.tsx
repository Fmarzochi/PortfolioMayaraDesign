'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useCallback, useEffect } from 'react';

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <path d="M15.5 18.1421L9.5 12.1421L15.5 6.14209" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <path d="M9.5 18.1421L15.5 12.1421L9.5 6.14209" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}
import { Project } from '@/core/domain/Project';
import { FeaturedProjectCard } from '@/features/projects/FeaturedProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { TextReveal } from '@/components/ui/TextReveal';
import { useMagnetic } from '@/hooks/useMagnetic';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const { t } = useLanguage();
  const prevMagnetic = useMagnetic(12);
  const nextMagnetic = useMagnetic(12);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = projects.length;

  const goTo = useCallback((idx: number) => {
    const next = Math.max(0, Math.min(idx, total - 1));
    setCurrent(next);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[next] as HTMLElement;
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  }, [total]);

  // Sync indicator on manual scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - track.scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setCurrent(closest);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  const canPrev = current > 0;
  const canNext = current < total - 1;

  return (
    <section
      aria-labelledby="featured-heading"
      className="py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:mb-12 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-2">
            <span
              className="font-sans text-xs font-semibold uppercase tracking-widest sm:text-sm"
              style={{ color: 'var(--accent)' }}
            >
              {t.featured.badge}
            </span>
            <TextReveal
              as="h2"
              id="featured-heading"
              className="fluid-h2 font-display font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.featured.heading}
            </TextReveal>
          </div>
          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <p
              className="font-body text-sm leading-relaxed md:max-w-[28ch]"
              style={{ color: 'var(--text-muted)' }}
            >
              {t.featured.desc}
            </p>
            <Link
              href="/projetos"
              className="btn-glass inline-flex w-fit items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{ background: 'var(--btn-bg)', border: '1px solid var(--border)', color: 'var(--accent)' }}
            >
              {t.featured.ctaBtn}
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'var(--btn-icon-bg)' }}
              >
                <Image
                  src="/assets/icons/arrow-up-right.svg"
                  alt=""
                  width={17}
                  height={17}
                  aria-hidden="true"
                  className="brightness-[10]"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Carousel row: track + vertical indicator */}
        <div className="flex items-stretch gap-4">

          {/* Track */}
          <div
            ref={trackRef}
            className="hide-scrollbar featured-track flex flex-1 gap-4 overflow-x-scroll"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="featured-card flex-none"
                style={{ scrollSnapAlign: 'start' }}
              >
                <FeaturedProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Vertical page indicator */}
          <div
            className="hidden flex-col items-center justify-center gap-2 sm:flex"
            style={{ minWidth: '12px' }}
            aria-hidden="true"
          >
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: '3px',
                  height: current === i ? '28px' : '6px',
                  background: current === i ? 'var(--text-primary)' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between sm:mt-8">

          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              ref={prevMagnetic.ref as React.RefObject<HTMLButtonElement>}
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={!canPrev}
              aria-label={t.featured.prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 sm:h-11 sm:w-11"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                opacity: canPrev ? 1 : 0.3,
                ...prevMagnetic.style,
              }}
              onMouseMove={prevMagnetic.onMouseMove as React.MouseEventHandler<HTMLButtonElement>}
              onMouseLeave={prevMagnetic.onMouseLeave}
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextMagnetic.ref as React.RefObject<HTMLButtonElement>}
              type="button"
              onClick={() => goTo(current + 1)}
              disabled={!canNext}
              aria-label={t.featured.next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 sm:h-11 sm:w-11"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                opacity: canNext ? 1 : 0.3,
                ...nextMagnetic.style,
              }}
              onMouseMove={nextMagnetic.onMouseMove as React.MouseEventHandler<HTMLButtonElement>}
              onMouseLeave={nextMagnetic.onMouseLeave}
            >
              <ChevronRight />
            </button>
          </div>

          {/* Mobile dots */}
          <div className="flex items-center gap-2 sm:hidden" aria-hidden="true">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  height: '3px',
                  width: current === i ? '20px' : '6px',
                  background: current === i ? 'var(--text-primary)' : 'var(--border)',
                }}
              />
            ))}
          </div>

          {/* Counter desktop */}
          <span
            className="hidden font-sans text-xs sm:block"
            style={{ color: 'var(--text-muted)' }}
          >
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

      </div>

      {/* Responsive card widths */}
      <style>{`
        .featured-card { width: calc(85vw - 2rem); }
        @media (min-width: 768px)  { .featured-card { width: calc(50% - 8px); } }
        @media (min-width: 1024px) { .featured-card { width: calc(33.333% - 10.667px); } }
      `}</style>
    </section>
  );
}
