'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative flex flex-col transition-colors duration-300 md:flex-row md:items-center"
      /*
        Mobile: ocupa a tela inteira menos o header (72px).
        Centraliza o conteúdo verticalmente no espaço visível.
        Desktop: min-h-screen porque o celular e texto precisam de espaço.
      */
      style={{
        background: 'var(--bg-hero)',
        minHeight: 'calc(100svh - 72px)',
      }}
    >
      {/* Background texture — dark mode only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 dark:opacity-100"
        style={{
          backgroundImage: 'url(/assets/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* Glow — overflow isolado para não vazar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute -left-1/4 top-1/3 h-[40vw] w-[40vw] max-h-[600px] max-w-[600px] rounded-full blur-[130px]"
          style={{ background: 'var(--glow)' }}
        />
        <div
          className="absolute right-0 top-1/2 h-[30vw] w-[30vw] max-h-[500px] max-w-[500px] rounded-full blur-[100px]"
          style={{ background: 'var(--glow)', opacity: 0.5 }}
        />
      </div>

      {/* Conteúdo */}
      <div
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-0 lg:px-8 xl:px-10"
        style={{ zIndex: 2 }}
      >
        {/* Texto */}
        <div className="flex w-full flex-col gap-5 md:max-w-[56%] lg:max-w-[54%]">
          <h1
            className="fluid-hero font-display font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.hero.title1}
            <span style={{ color: 'var(--accent)' }}>{t.hero.titleAccent}</span>
            {t.hero.title2}
          </h1>

          <p
            className="font-body text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--text-secondary)', maxWidth: '42ch' }}
          >
            {t.hero.subtitle}
          </p>

          <div>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-3 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80 sm:px-6"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              {t.hero.cta}
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'var(--accent)' }}
              >
                <Image
                  src="/assets/icons/arrow-up-right.svg"
                  alt=""
                  width={13}
                  height={13}
                  aria-hidden="true"
                  className="brightness-[10]"
                />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/clock.svg"
              alt=""
              width={14}
              height={14}
              aria-hidden="true"
              className="opacity-50 shrink-0"
            />
            <span className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>
              {t.hero.timeLabel}
            </span>
          </div>
        </div>

        {/* Mockup 3D — oculto em mobile, visível md+ */}
        <div
          aria-hidden="true"
          className="relative hidden shrink-0 items-end justify-center md:flex md:w-[36%] lg:w-[38%]"
          style={{ paddingBottom: '48px' }}
        >
          {/* Sombra elíptica que reforça profundidade */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70%',
              height: '28px',
              background: 'rgba(0,0,0,0.28)',
              borderRadius: '50%',
              filter: 'blur(16px)',
            }}
          />

          {/* Celular 3D — perspectiva limpa sem rotateZ */}
          <div className="hero-phone-3d">
            <Image
              src="/assets/mockups/phone-hero.svg"
              alt=""
              width={380}
              height={560}
              priority
              className="select-none"
              style={{
                width: 'clamp(130px, 15vw, 195px)',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          {/* Badge circular giratório */}
          <div
            className="absolute animate-spin-slow"
            style={{ bottom: '0px', right: '-4px' }}
          >
            <Image
              src="/assets/icons/badge-conheca-trabalho.svg"
              alt={t.hero.badgeAlt}
              width={90}
              height={90}
              className="dark:brightness-100 brightness-0 opacity-70"
              style={{ width: 'clamp(68px, 6.5vw, 90px)', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator — círculo com seta proporcional (38% do diâmetro) */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:flex animate-bounce-down"
        style={{ zIndex: 3 }}
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: '44px',
            height: '44px',
            border: '1px solid var(--border)',
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--text-muted)' }}
          >
            <line x1="12" y1="4" x2="12" y2="20" />
            <polyline points="6 14 12 20 18 14" />
          </svg>
        </div>
      </div>
    </section>
  );
}
