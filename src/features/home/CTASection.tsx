'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden min-h-screen"
      aria-labelledby="cta-heading"
    >
      {/* Foto de fundo — ocupa toda a seção */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/cta-photo.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'center 42%' }}
          aria-hidden="true"
          sizes="100vw"
          priority
        />
        {/* Overlay base */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.25)' }}
          aria-hidden="true"
        />
        {/* Vinheta radial nas bordas */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at center, transparent 20%, rgba(0,0,0,0.75) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Fumaça 1 — base larga, inferior */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] cta-smoke-1"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 110%, rgba(30,30,40,0.85) 0%, transparent 70%)',
            filter: 'blur(32px)',
          }}
          aria-hidden="true"
        />
        {/* Fumaça 2 — deriva lenta para esquerda */}
        <div
          className="absolute inset-x-0 bottom-0 h-[40%] cta-smoke-2"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 35% 100%, rgba(20,20,35,0.70) 0%, transparent 65%)',
            filter: 'blur(48px)',
          }}
          aria-hidden="true"
        />
        {/* Fumaça 3 — deriva para direita */}
        <div
          className="absolute inset-x-0 bottom-0 h-[45%] cta-smoke-3"
          style={{
            background: 'radial-gradient(ellipse 55% 75% at 70% 100%, rgba(15,15,30,0.65) 0%, transparent 60%)',
            filter: 'blur(56px)',
          }}
          aria-hidden="true"
        />
        {/* Fumaça superior — envolve o rosto */}
        <div
          className="absolute inset-x-0 top-0 h-[35%]"
          style={{
            background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(0,0,0,0.60) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo — centralizado */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
        <div className="flex flex-col items-center gap-5 max-w-xs sm:max-w-sm">
          <h2
            id="cta-heading"
            className="fluid-h2 font-display font-semibold leading-tight text-white"
          >
            {t.cta.heading}
          </h2>

          <p className="font-body text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            {t.cta.subtitle}
          </p>

          <Link
            href="https://wa.me/553598074669"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 font-sans text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff',
              backdropFilter: 'blur(12px)',
            }}
          >
            {t.cta.btn}
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full"
              style={{ background: 'rgba(255,255,255,0.20)' }}
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
    </section>
  );
}
