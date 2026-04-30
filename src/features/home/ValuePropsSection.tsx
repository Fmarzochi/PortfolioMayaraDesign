'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="flex flex-col gap-2 rounded-xl p-4 sm:p-5"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
    >
      <h3 className="font-display text-sm font-semibold sm:text-base" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <div className="h-px w-full" style={{ background: 'var(--border)' }} aria-hidden="true" />
      <p className="font-sans text-xs leading-relaxed sm:text-sm" style={{ color: 'var(--text-muted)' }}>
        {desc}
      </p>
    </div>
  );
}

export function ValuePropsSection() {
  const { t } = useLanguage();
  const cards = t.valueProps.cards;
  const leftCards = cards.slice(0, 2);
  const rightCards = cards.slice(2, 4);

  return (
    <section
      aria-labelledby="value-props-heading"
      className="relative overflow-hidden py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Background bokeh — dark mode only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 dark:opacity-100"
        style={{
          backgroundImage: 'url(/assets/images/section2-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div aria-hidden="true" className="h-px w-full" style={{ background: 'var(--border)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8 xl:px-10">

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="mb-8 flex flex-col gap-3">
            <h2 id="value-props-heading" className="fluid-h2 font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
              {t.valueProps.heading}
            </h2>
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {t.valueProps.descMobile}
            </p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3">
            {cards.map((c) => <Card key={c.title} title={c.title} desc={c.desc} />)}
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/mockups/phone-section2.svg"
              alt=""
              width={220}
              height={330}
              className="select-none drop-shadow-2xl"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Desktop layout — 3 colunas */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-6 lg:gap-10 xl:gap-14">

          {/* Esquerda */}
          <div className="flex flex-col gap-6 pt-2">
            <h2
              id="value-props-heading"
              className="fluid-h2 font-display font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.valueProps.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {leftCards.map((c) => <Card key={c.title} title={c.title} desc={c.desc} />)}
            </div>
          </div>

          {/* Centro — phone */}
          <div className="flex justify-center px-2 lg:px-4">
            <Image
              src="/assets/mockups/phone-section2.svg"
              alt=""
              width={280}
              height={420}
              className="w-[240px] select-none drop-shadow-2xl lg:w-[290px] xl:w-[320px]"
              aria-hidden="true"
            />
          </div>

          {/* Direita */}
          <div className="flex flex-col gap-6 pt-2">
            <div className="flex flex-col gap-3">
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t.valueProps.descMain}
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {t.valueProps.descSub}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {rightCards.map((c) => <Card key={c.title} title={c.title} desc={c.desc} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
