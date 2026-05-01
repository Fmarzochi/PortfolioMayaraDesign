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
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-6 lg:gap-10 xl:gap-14">

          {/* Esquerda */}
          <div className="flex h-full flex-col justify-between gap-10 pt-2">
            <h2
              id="value-props-heading"
              className="font-display font-semibold"
              style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.4rem, 2vw, 2rem)', lineHeight: 1.2 }}
            >
              {t.valueProps.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {/* Primeiro card — alinhado à esquerda */}
              <div style={{ maxWidth: '220px' }}>
                <Card title={leftCards[0].title} desc={leftCards[0].desc} />
              </div>
              {/* Segundo card — deslocado para direita */}
              <div style={{ maxWidth: '220px', marginLeft: '56px' }}>
                <Card title={leftCards[1].title} desc={leftCards[1].desc} />
              </div>
            </div>
          </div>

          {/* Centro — phone (proporção correta 751×917) */}
          <div className="flex items-center justify-center px-2 lg:px-4">
            <Image
              src="/assets/mockups/phone-section2.svg"
              alt=""
              width={751}
              height={917}
              className="w-[220px] select-none drop-shadow-2xl lg:w-[260px] xl:w-[300px]"
              aria-hidden="true"
            />
          </div>

          {/* Direita */}
          <div className="flex h-full flex-col justify-between gap-10 pt-2">
            <div className="flex flex-col gap-3">
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t.valueProps.descMain}
              </p>
              <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {t.valueProps.descSub}
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
              {/* Primeiro card — alinhado à direita */}
              <div style={{ maxWidth: '220px', width: '100%' }}>
                <Card title={rightCards[0].title} desc={rightCards[0].desc} />
              </div>
              {/* Segundo card — mais à direita (alinhado ao fim) */}
              <div style={{ maxWidth: '220px', width: '100%' }}>
                <Card title={rightCards[1].title} desc={rightCards[1].desc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
