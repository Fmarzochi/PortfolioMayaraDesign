import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 transition-colors duration-300 sm:justify-center sm:pb-0 md:flex-row md:items-center"
      style={{ background: 'var(--bg-hero)' }}
    >
      {/* Background texture — dark mode only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 dark:opacity-100"
        style={{
          backgroundImage: 'url(/assets/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-1/4 top-1/3 h-[40vw] w-[40vw] max-h-[600px] max-w-[600px] rounded-full blur-[130px]"
          style={{ background: 'var(--glow)' }}
        />
        <div
          className="absolute right-0 top-1/2 h-[30vw] w-[30vw] max-h-[500px] max-w-[500px] rounded-full blur-[100px]"
          style={{ background: 'var(--glow)', opacity: 0.5 }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pt-24 sm:px-6 sm:pt-0 md:flex-row md:items-center md:justify-between lg:px-8 xl:px-10">
        {/* Texto */}
        <div className="flex w-full flex-col gap-5 md:max-w-[52%] lg:max-w-[48%]">
          <h1
            className="fluid-hero font-display font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Design de produtos que{' '}
            <span style={{ color: 'var(--accent)' }}>convertem, engajam</span>{' '}
            e escalam negócios
          </h1>

          <p
            className="font-body text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--text-secondary)', maxWidth: '42ch' }}
          >
            Transformo problemas complexos em soluções digitais intuitivas, unindo estratégia, dados e experiência do usuário para gerar impacto real.
          </p>

          <div>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-3 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80 sm:px-6"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Veja agora todos os projetos
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'var(--accent)' }}
              >
                <Image src="/assets/icons/arrow-up-right.svg" alt="" width={13} height={13} aria-hidden="true" className="brightness-[10]" />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/assets/icons/clock.svg" alt="" width={14} height={14} aria-hidden="true" className="opacity-50 shrink-0" />
            <span className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>
              Leva menos de 5 minutos.
            </span>
          </div>
        </div>

        {/* Mockup + badge — oculto em mobile pequeno, visível md+ */}
        <div
          aria-hidden="true"
          className="relative hidden shrink-0 items-center justify-center md:flex md:w-[44%] lg:w-[46%]"
        >
          <Image
            src="/assets/mockups/phone-hero.svg"
            alt=""
            width={380}
            height={560}
            className="w-full max-w-[320px] select-none lg:max-w-[400px] xl:max-w-[460px]"
            priority
          />
          {/* Badge circular — canto inferior direito */}
          <div className="absolute -bottom-4 -right-4 animate-spin-slow xl:-bottom-6 xl:-right-6">
            <Image
              src="/assets/icons/badge-conheca-trabalho.svg"
              alt="Conheça meu trabalho"
              width={100}
              height={100}
              className="dark:brightness-100 brightness-0 opacity-70 xl:w-[120px] xl:h-[120px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
