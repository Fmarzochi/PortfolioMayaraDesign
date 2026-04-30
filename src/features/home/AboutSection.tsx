'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const icons = [
    <svg key="monitor" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
    <svg key="grid" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
    <svg key="pen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    <svg key="bars" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  ];

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Mini-cards com ícones */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:mb-12 lg:grid-cols-4">
          {t.about.miniCards.map((card, i) => (
            <div key={card.label} className="flex flex-col gap-3 py-4">
              <span style={{ color: 'var(--text-muted)' }}>{icons[i]}</span>
              <div>
                <p className="font-display text-sm font-semibold sm:text-base" style={{ color: 'var(--text-primary)' }}>
                  {card.label}
                </p>
                <p className="mt-1 font-sans text-xs leading-relaxed sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                  {card.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Card principal foto + texto */}
        <div
          className="grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2"
          style={{ border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}
        >
          {/* Foto */}
          <div className="relative w-full" style={{ minHeight: 'clamp(300px, 50vw, 600px)' }}>
            <Image
              src="/assets/images/talessa-photo.png"
              alt={t.about.photoAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-12 xl:p-14">
            <h2
              id="about-heading"
              className="fluid-h2 font-display font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.about.heading}
            </h2>

            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              {t.about.body1}
            </p>
            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
              {t.about.body2}
            </p>
            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
              {t.about.body3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
