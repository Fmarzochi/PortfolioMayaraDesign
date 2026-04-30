import Image from 'next/image';

const leftCards = [
  { id: 'a', title: 'Visão de produto', desc: 'Interfaces alinhadas aos objetivos do negócio.' },
  { id: 'b', title: 'Experiência inteligente', desc: 'Soluções que simplificam sistemas complexos.' },
];

const rightCards = [
  { id: 'c', title: 'Foco em conversão', desc: 'Experiências pensadas para engajar e gerar ação.' },
  { id: 'd', title: 'Sistemas escaláveis', desc: 'Design estruturado para evoluir junto com o produto.' },
];

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
  return (
    <section
      aria-labelledby="value-props-heading"
      className="relative overflow-hidden py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Background bokeh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 dark:opacity-100"
        style={{ backgroundImage: 'url(/assets/images/section2-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div aria-hidden="true" className="h-px w-full" style={{ background: 'var(--border)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8 xl:px-10">

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="mb-8 flex flex-col gap-3">
            <h2 id="value-props-heading" className="fluid-h2 font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
              Clareza, estratégia e performance para crescimento digital
            </h2>
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Cada projeto é pensado para resolver problemas reais e gerar impacto mensurável.
            </p>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3">
            {[...leftCards, ...rightCards].map((c) => <Card key={c.id} title={c.title} desc={c.desc} />)}
          </div>
          <div className="flex justify-center">
            <Image src="/assets/mockups/phone-section2.svg" alt="" width={220} height={330} className="select-none drop-shadow-2xl" aria-hidden="true" />
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
              Clareza, estratégia e performance para crescimento digital
            </h2>
            <div className="flex flex-col gap-4">
              {leftCards.map((c) => <Card key={c.id} title={c.title} desc={c.desc} />)}
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
                Cada projeto é pensado para resolver problemas reais, melhorar a experiência do usuário e gerar impacto mensurável.
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Tenha uma designer ao seu lado para transformar ideias em soluções reais e alcançar resultados com mais clareza e controle.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {rightCards.map((c) => <Card key={c.id} title={c.title} desc={c.desc} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
