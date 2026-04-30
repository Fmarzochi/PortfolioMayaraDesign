import Image from 'next/image';

const miniCards = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
    label: 'Experiências',
    sub: 'Fintech, sistemas e plataformas digitais',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
    label: 'Processo completo',
    sub: 'Do discovery à prototipação e validação',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    label: 'Foco em resultado',
    sub: 'Usabilidade, conversão e experiência do usuário',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    label: 'Ferramentas',
    sub: 'Figma, prototipação, design systems e handoff para desenvolvimento',
  },
];

export function AboutSection() {
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
          {miniCards.map((card) => (
            <div key={card.label} className="flex flex-col gap-3 py-4">
              <span style={{ color: 'var(--text-muted)' }}>{card.icon}</span>
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
          <div className="relative min-h-[300px] w-full sm:min-h-[380px] md:min-h-[480px] lg:min-h-[520px]">
            <Image
              src="/assets/images/talessa-photo.png"
              alt="Talessa Rodrigues — UX/UI Designer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-12 xl:p-14">
            <h2
              id="about-heading"
              className="fluid-h2 font-display font-semibold"
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
          </div>
        </div>
      </div>
    </section>
  );
}
