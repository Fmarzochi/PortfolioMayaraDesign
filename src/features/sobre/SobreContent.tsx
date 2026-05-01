'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function SobreContent() {
  const { t } = useLanguage();
  const s = t.sobre;

  return (
    <main
      className="min-h-screen transition-colors duration-300"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 xl:px-10">

        {/* Cabeçalho */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end lg:mb-16">
          <h1
            className="fluid-h2 font-display font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {s.pageHeading}
          </h1>
          <p
            className="font-body text-sm leading-relaxed sm:text-base md:text-right"
            style={{ color: 'var(--text-muted)' }}
          >
            {s.pageSubtitle}
          </p>
        </div>

        {/* Card principal foto + texto */}
        <div
          className="mb-16 grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2"
          style={{ border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}
        >
          <div className="relative w-full" style={{ minHeight: 'clamp(300px, 50vw, 600px)' }}>
            <Image
              src="/assets/images/talessa-photo.png"
              alt={s.photoAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
              priority
            />
          </div>

          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-12 xl:p-14">
            <h2
              className="font-display text-2xl font-semibold leading-snug sm:text-3xl"
              style={{ color: 'var(--text-primary)' }}
            >
              {s.cardHeading}
            </h2>

            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              {s.body1}
            </p>
            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
              {s.body2}
            </p>
            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
              {s.body3}
            </p>

            <Link
              href="https://wa.me/553598074669"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass mt-2 inline-flex w-fit items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{ background: 'var(--btn-bg)', border: '1px solid var(--border)', color: 'var(--accent)' }}
            >
              {s.ctaBtn}
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'var(--btn-icon-bg)' }}
              >
                <Image src="/assets/icons/arrow-up-right.svg" alt="" width={17} height={17} aria-hidden="true" className="brightness-[10]" />
              </span>
            </Link>
          </div>
        </div>

        {/* Faixa de 4 ícones — pilares */}
        <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: '/assets/icons/experiencias.svg', label: 'Experiências', w: 20, h: 20 },
            { icon: '/assets/icons/icone-processo-completo.svg', label: 'Processo completo', w: 20, h: 20 },
            { icon: '/assets/icons/foco-em-resultado.svg', label: 'Foco em resultado', w: 20, h: 20 },
            { icon: '/assets/icons/ferramentas.svg', label: 'Ferramentas', w: 20, h: 20 },
          ].map(({ icon, label, w, h }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-xl px-4 py-3"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <Image src={icon} alt="" width={w} height={h} aria-hidden="true" className="shrink-0 brightness-0 dark:brightness-100 opacity-70" />
              <span className="font-sans text-xs font-medium sm:text-sm" style={{ color: 'var(--text-secondary)' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Habilidades */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {s.skills.map((skill) => (
            <div
              key={skill.label}
              className="flex flex-col gap-2 rounded-xl p-4 sm:p-5"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <p className="font-display text-sm font-semibold sm:text-base" style={{ color: 'var(--text-primary)' }}>
                {skill.label}
              </p>
              <div className="h-px w-full" style={{ background: 'var(--border)' }} />
              <p className="font-sans text-xs leading-relaxed sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                {skill.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
