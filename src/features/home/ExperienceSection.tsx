'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';

type ExpItem = { title: string; period: string; desc: readonly string[] };

/* ── Item mobile — reveal de baixo ─────────────────── */
function MobileItem({ exp, index }: { exp: ExpItem; index: number }) {
  const { ref, visible } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`reveal from-bottom flex flex-col gap-3 border-l-2 pl-5 ${visible ? 'visible' : ''}`}
      style={{
        borderColor: 'var(--border)',
        '--reveal-delay': `${index * 0.08}s`,
      } as React.CSSProperties}
    >
      <h3 className="font-display text-lg font-semibold sm:text-xl" style={{ color: 'var(--text-primary)' }}>
        {exp.title}
      </h3>
      <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>{exp.period}</p>
      {exp.desc.map((p, i) => (
        <p key={i} className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
      ))}
    </div>
  );
}

/* ── Item desktop — reveal lateral alternado ─────── */
function DesktopItem({ exp, isLeft, index }: { exp: ExpItem; isLeft: boolean; index: number }) {
  const { ref, visible } = useInView<HTMLDivElement>({ threshold: 0.12 });
  const direction = isLeft ? 'from-left' : 'from-right';

  const content = (
    <div
      className={`reveal ${direction} ${visible ? 'visible' : ''} flex flex-col gap-3`}
      style={{ '--reveal-delay': `${index * 0.08}s` } as React.CSSProperties}
    >
      <h3 className="font-display text-lg font-semibold lg:text-xl xl:text-2xl" style={{ color: 'var(--text-primary)' }}>
        {exp.title}
      </h3>
      <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>{exp.period}</p>
      {exp.desc.map((p, i) => (
        <p key={i} className="font-sans text-sm leading-relaxed lg:text-base" style={{ color: 'var(--text-secondary)' }}>
          {p}
        </p>
      ))}
    </div>
  );

  return (
    <div ref={ref} className="relative grid grid-cols-2 pb-16 lg:pb-20">
      {/* Dot */}
      <div
        className="absolute left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full"
        style={{ background: 'var(--text-muted)', border: '2px solid var(--bg-secondary)', zIndex: 1 }}
        aria-hidden="true"
      />
      {isLeft ? (
        <>
          <div className="pr-10 lg:pr-16">{content}</div>
          <div />
        </>
      ) : (
        <>
          <div />
          <div className="pl-10 lg:pl-16">{content}</div>
        </>
      )}
    </div>
  );
}

/* ── Seção principal ─────────────────────────────── */
export function ExperienceSection() {
  const { t } = useLanguage();
  const items = t.experience.items;
  const { ref: headingRef, visible: headingVisible } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Cabeçalho */}
        <div
          ref={headingRef}
          className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-end lg:mb-16"
        >
          <h2
            id="experience-heading"
            className={`reveal from-bottom fluid-h2 font-display font-semibold ${headingVisible ? 'visible' : ''}`}
            style={{ color: 'var(--text-primary)' }}
          >
            {t.experience.heading}
          </h2>
          <p
            className={`reveal from-bottom font-body text-sm leading-relaxed sm:text-base md:text-right ${headingVisible ? 'visible' : ''}`}
            style={{ color: 'var(--text-muted)', '--reveal-delay': '0.12s' } as React.CSSProperties}
          >
            {t.experience.subtitle}
          </p>
        </div>

        {/* Mobile: linear */}
        <div className="flex flex-col gap-8 md:hidden">
          {items.map((exp, idx) => (
            <MobileItem key={exp.title} exp={exp} index={idx} />
          ))}
        </div>

        {/* Desktop: alternado */}
        <div className="relative hidden md:block">
          <div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
            style={{ background: 'var(--border)' }}
            aria-hidden="true"
          />
          <div className="flex flex-col">
            {items.map((exp, idx) => (
              <DesktopItem
                key={exp.title}
                exp={exp}
                isLeft={idx % 2 !== 0}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
