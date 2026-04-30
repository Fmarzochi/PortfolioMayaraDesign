import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre — Talessa Rodrigues',
  description: 'UX/UI Designer focada em transformar ideias em produtos digitais eficientes.',
};

export default function SobrePage() {
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
            Sobre mim
          </h1>
          <p
            className="font-body text-sm leading-relaxed sm:text-base md:text-right"
            style={{ color: 'var(--text-muted)' }}
          >
            Designer com foco em produtos digitais que convertem.
          </p>
        </div>

        {/* Card principal foto + texto */}
        <div
          className="mb-16 grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2"
          style={{ border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}
        >
          <div className="relative min-h-[300px] w-full sm:min-h-[380px] md:min-h-[480px] lg:min-h-[540px]">
            <Image
              src="/assets/images/talessa-photo.png"
              alt="Talessa Rodrigues — UX/UI Designer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-12 xl:p-14">
            <h2
              className="font-display text-2xl font-semibold leading-snug sm:text-3xl"
              style={{ color: 'var(--text-primary)' }}
            >
              UX/UI Designer focada em transformar ideias em produtos eficientes
            </h2>

            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              Sou uma UX/UI Designer com foco em criação de produtos digitais que equilibram experiência do usuário, objetivos de negócio e viabilidade técnica.
            </p>
            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
              Atuo desde a fase de discovery até a entrega final, estruturando fluxos, interfaces e soluções que não só funcionam bem — mas geram resultado.
            </p>
            <p className="font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-muted)' }}>
              Tenho experiência com projetos de fintech, sistemas e plataformas digitais, sempre buscando clareza, usabilidade e impacto real.
            </p>

            <Link
              href="/contato"
              className="mt-2 inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-3 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Vamos conversar
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'var(--accent)' }}
              >
                <Image src="/assets/icons/arrow-up-right.svg" alt="" width={12} height={12} aria-hidden="true" className="brightness-[10]" />
              </span>
            </Link>
          </div>
        </div>

        {/* Habilidades */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Figma', sub: 'Prototipação e handoff' },
            { label: 'Design System', sub: 'Componentização escalável' },
            { label: 'UX Research', sub: 'Discovery e jornadas' },
            { label: 'Acessibilidade', sub: 'WCAG e interfaces inclusivas' },
          ].map((skill) => (
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
