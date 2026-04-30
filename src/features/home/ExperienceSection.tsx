const experiences = [
  {
    id: '1',
    titulo: 'Projetos Acadêmicos',
    periodo: '2022 — Atual',
    descricao: [
      'Desenvolvo projetos próprios com foco em aplicar UX/UI na prática, explorando desde a concepção até a implementação de soluções digitais.',
      'Recentemente, projetei um cardápio digital para um delivery próprio, estruturando toda a jornada do usuário — navegação, escolha de produtos, checkout e entrega.',
      'A solução foi pensada para ser simples, intuitiva e eficiente, reduzindo fricções na experiência e otimizando o tempo tanto do usuário quanto da operação.',
      'O projeto evoluiu para o desenvolvimento de um sistema administrativo, com foco em gestão de estoque, controle de vendas e análise de custos, ampliando o impacto do design para além da interface.',
    ],
    lado: 'direita' as const,
  },
  {
    id: '2',
    titulo: 'UX/UI Designer — CatchUp Tech',
    periodo: '03/2026 — Atual',
    descricao: [
      'Atuação na fase de discovery, com pesquisa, mapeamento de jornadas e identificação de oportunidades.',
      'Criação de identidade visual e landing pages alinhadas ao usuário e aos objetivos do produto.',
      'Aplicação de princípios de acessibilidade (WCAG), garantindo experiências mais inclusivas.',
    ],
    lado: 'esquerda' as const,
  },
  {
    id: '3',
    titulo: 'UX/UI Designer — Front End Fusion',
    periodo: '2025 — Atual',
    descricao: [
      'Atuo como voluntária em projetos digitais, contribuindo com iniciativas como Kalita Fotografia e o desenvolvimento do site da Front End Fusion.',
      'Participei das etapas de discovery e benchmark, evoluindo para a construção do design system (tipografia, cores, ícones e identidade visual) e definição de fluxos.',
      'O projeto iniciou como uma landing page e está evoluindo para uma plataforma com área administrativa, voltada à gestão da comunidade, voluntários e ONGs.',
    ],
    lado: 'direita' as const,
  },
  {
    id: '4',
    titulo: 'UX/UI Designer — Crimson Mind Tech',
    periodo: '08/2023 — 11/2025',
    descricao: [
      'Atuei no desenvolvimento de um sistema de gestão de estoque e vendas para uma loja de perfumes e salão de beleza, com foco em simplicidade e eficiência operacional.',
      'O projeto foi pensado para ser intuitivo e fácil de usar no dia a dia, priorizando apenas as funcionalidades essenciais. Estruturei as áreas de controle de estoque, registro de vendas e cadastro de clientes e fornecedores, facilitando a organização das informações e reduzindo processos manuais.',
      'A solução permitiu que a gestão do negócio se tornasse mais ágil, possibilitando a geração de relatórios diários e eliminando a necessidade de controles feitos manualmente, otimizando o tempo e a tomada de decisão.',
    ],
    lado: 'esquerda' as const,
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Cabeçalho */}
        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-end lg:mb-16">
          <h2
            id="experience-heading"
            className="fluid-h2 font-display font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Minha experiência em produtos digitais
          </h2>
          <p className="font-body text-sm leading-relaxed sm:text-base md:text-right" style={{ color: 'var(--text-muted)' }}>
            Atuação prática em projetos reais, do discovery à entrega de interfaces escaláveis.
          </p>
        </div>

        {/* Mobile: linear */}
        <div className="flex flex-col gap-8 md:hidden">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex flex-col gap-3 border-l-2 pl-5" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-display text-lg font-semibold sm:text-xl" style={{ color: 'var(--text-primary)' }}>{exp.titulo}</h3>
              <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>{exp.periodo}</p>
              {exp.descricao.map((p, i) => (
                <p key={i} className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop: alternado */}
        <div className="relative hidden md:block">
          <div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
            style={{ background: 'var(--border)' }}
            aria-hidden="true"
          />
          <div className="flex flex-col">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative grid grid-cols-2 pb-16 lg:pb-20">
                {/* Dot */}
                <div
                  className="absolute left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full"
                  style={{ background: 'var(--text-muted)', border: '2px solid var(--bg-secondary)', zIndex: 1 }}
                  aria-hidden="true"
                />

                {exp.lado === 'esquerda' ? (
                  <>
                    <div className="flex flex-col gap-3 pr-10 lg:pr-16">
                      <h3 className="font-display text-lg font-semibold lg:text-xl xl:text-2xl" style={{ color: 'var(--text-primary)' }}>{exp.titulo}</h3>
                      <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>{exp.periodo}</p>
                      {exp.descricao.map((p, i) => (
                        <p key={i} className="font-sans text-sm leading-relaxed lg:text-base" style={{ color: 'var(--text-secondary)' }}>{p}</p>
                      ))}
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="flex flex-col gap-3 pl-10 lg:pl-16">
                      <h3 className="font-display text-lg font-semibold lg:text-xl xl:text-2xl" style={{ color: 'var(--text-primary)' }}>{exp.titulo}</h3>
                      <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>{exp.periodo}</p>
                      {exp.descricao.map((p, i) => (
                        <p key={i} className="font-sans text-sm leading-relaxed lg:text-base" style={{ color: 'var(--text-secondary)' }}>{p}</p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
