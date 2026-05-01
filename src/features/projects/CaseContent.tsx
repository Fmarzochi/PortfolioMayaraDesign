'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/core/domain/Project';
import { useLanguage } from '@/contexts/LanguageContext';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { TextReveal } from '@/components/ui/TextReveal';
import { TextScramble } from '@/components/ui/TextScramble';

interface CaseContentProps {
  project: Project;
  relatedProjects: Project[];
}

function SectionHeader({ title, index }: { title: string; index: number }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-baseline justify-between">
        <TextScramble
          as="span"
          className="font-display text-xs font-semibold uppercase tracking-[2px] sm:text-sm"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </TextScramble>
        <span
          className="font-sans text-xs sm:text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          ({String(index).padStart(2, '0')})
        </span>
      </div>
      <div className="mt-3 h-px w-full" style={{ background: 'rgba(227,227,227,0.24)' }} />
    </div>
  );
}

function ContentRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-[1fr_1.25fr] sm:gap-8 lg:grid-cols-[1fr_1.5fr]"
      style={{ borderTop: '1px solid rgba(247,247,247,0.08)' }}
    >
      <span
        className="font-display text-xs font-semibold uppercase tracking-[1px] sm:text-sm pt-0.5"
        style={{ color: 'var(--text-primary)' }}
      >
        {label}
      </span>
      <div
        className="font-sans text-sm leading-relaxed sm:text-base"
        style={{ color: 'var(--text-muted)', lineHeight: '1.75' }}
      >
        {children}
      </div>
    </div>
  );
}

export function CaseContent({ project, relatedProjects }: CaseContentProps) {
  const { t, locale } = useLanguage();
  const c = t.case;
  const loc = locale !== 'pt' ? project.locales?.[locale as 'en' | 'es'] : undefined;
  const caseData = (locale !== 'pt' && project.caseLocales?.[locale as 'en' | 'es']) || project.case;
  const meuPapel = loc?.meuPapel ?? project.meuPapel;
  const servicos = loc?.servicos ?? project.servicos;

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8 xl:px-10">
        {/* Back link */}
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest transition-opacity hover:opacity-60 mb-10 sm:mb-14"
          style={{ color: 'var(--text-muted)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {c.backToProjects}
        </Link>

        {/* Badge */}
        <p
          className="mb-4 font-sans text-xs font-semibold uppercase tracking-[2px]"
          style={{ color: 'var(--text-muted)' }}
        >
          {c.badge}
        </p>

        {/* Title */}
        <TextReveal
          as="h1"
          className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl mb-8 sm:mb-10"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.titulo}
        </TextReveal>

        {/* Tags */}
        {project.tecnologias && project.tecnologias.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-10 sm:mb-14" aria-label="Tecnologias">
            {project.tecnologias.map((tag) => (
              <li
                key={tag}
                className="rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-muted)',
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {/* Metadata grid */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
          {project.cliente && (
            <div
              className="py-5 sm:pr-6"
              style={{ borderTop: '1px solid rgba(247,247,247,0.08)' }}
            >
              <p className="font-sans text-xs uppercase tracking-[1px] mb-2" style={{ color: 'var(--text-muted)' }}>
                {c.cliente}
              </p>
              <p className="font-display text-sm font-medium uppercase" style={{ color: 'var(--text-primary)' }}>
                {project.cliente}
              </p>
            </div>
          )}
          {meuPapel && (
            <div
              className="py-5 sm:px-6 sm:border-l sm:border-r"
              style={{
                borderTop: '1px solid rgba(247,247,247,0.08)',
                borderColor: 'rgba(247,247,247,0.08)',
              }}
            >
              <p className="font-sans text-xs uppercase tracking-[1px] mb-2" style={{ color: 'var(--text-muted)' }}>
                {c.meuPapel}
              </p>
              <p className="font-display text-sm font-medium uppercase" style={{ color: 'var(--text-primary)' }}>
                {meuPapel}
              </p>
            </div>
          )}
          {servicos && (
            <div
              className="py-5 sm:pl-6"
              style={{ borderTop: '1px solid rgba(247,247,247,0.08)' }}
            >
              <p className="font-sans text-xs uppercase tracking-[1px] mb-2" style={{ color: 'var(--text-muted)' }}>
                {c.servicos}
              </p>
              <p className="font-display text-sm font-medium uppercase" style={{ color: 'var(--text-primary)' }}>
                {servicos}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Hero image */}
      {project.imagemUrl && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 mb-16 sm:mb-20">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: '16/9', background: 'var(--card-bg)' }}
          >
            <Image
              src={project.imagemUrl}
              alt={project.titulo}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
            />
          </div>
        </div>
      )}

      {caseData && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Section 1 — SOBRE O PROBLEMA */}
          <section className="mb-16 sm:mb-20" aria-labelledby="s1-heading">
            <SectionHeader title={c.s1} index={1} />
            <div id="s1-heading" className="sr-only">{c.s1}</div>
            <ContentRow label={c.s1User}>
              {caseData.problema.usuario.split('\n\n').map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
              ))}
            </ContentRow>
            <ContentRow label={c.s1Business}>
              {caseData.problema.negocio.split('\n\n').map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
              ))}
            </ContentRow>
          </section>

          {/* Section 2 — ENCONTRO DA SOLUÇÃO */}
          <section className="mb-16 sm:mb-20" aria-labelledby="s2-heading">
            <SectionHeader title={c.s2} index={2} />
            <div id="s2-heading" className="sr-only">{c.s2}</div>
            <ContentRow label={c.s2Brand}>
              {caseData.solucao.estrategiaMarca.split('\n\n').map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
              ))}
            </ContentRow>
          </section>

          {/* Section 3 — PROCESSO DE DESIGN */}
          <section className="mb-16 sm:mb-20" aria-labelledby="s3-heading">
            <SectionHeader title={c.s3} index={3} />
            <div id="s3-heading" className="sr-only">{c.s3}</div>
            {caseData.processo.descricao && (
              <p
                className="mb-8 font-sans text-sm leading-relaxed sm:text-base max-w-2xl"
                style={{ color: 'var(--text-muted)', lineHeight: '1.75' }}
              >
                {caseData.processo.descricao}
              </p>
            )}
            <ol className="space-y-0">
              {caseData.processo.etapas.map((etapa, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr] items-start gap-4 py-5"
                  style={{ borderTop: '1px solid rgba(247,247,247,0.08)' }}
                >
                  <span
                    className="font-sans text-xs sm:text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    ({String(i + 1).padStart(2, '0')})
                  </span>
                  <span
                    className="font-display text-sm font-medium sm:text-base"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {etapa}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* Case study screenshots */}
          {caseData.imagens && caseData.imagens.length > 0 && (
            <div className="mb-16 sm:mb-20 flex flex-col gap-4">
              {/* First image (overview) — full width */}
              <div className="w-full overflow-hidden rounded-2xl" style={{ background: 'var(--card-bg)' }}>
                <Image
                  src={caseData.imagens[0]}
                  alt={`${project.titulo} — visão geral`}
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                />
              </div>
              {/* Remaining images — 2-col grid, natural ratio */}
              {caseData.imagens.length > 1 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {caseData.imagens.slice(1).map((src, i) => (
                    <div key={i} className="w-full overflow-hidden rounded-2xl" style={{ background: 'var(--card-bg)' }}>
                      <Image
                        src={src}
                        alt={`${project.titulo} — detalhe ${i + 2}`}
                        width={700}
                        height={500}
                        className="w-full h-auto"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Section 4 — CONCLUSÃO */}
          <section className="mb-16 sm:mb-20" aria-labelledby="s4-heading">
            <SectionHeader title={c.s4} index={4} />
            <div id="s4-heading" className="sr-only">{c.s4}</div>
            <ContentRow label={c.s4Insight}>
              {caseData.conclusao.insight.split('\n\n').map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
              ))}
            </ContentRow>
            {caseData.conclusao.designInterface && (
              <ContentRow label={c.s4Interface}>
                {caseData.conclusao.designInterface.split('\n\n').map((para, i) => (
                  <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
                ))}
              </ContentRow>
            )}
            {caseData.conclusao.learnings && caseData.conclusao.learnings.length > 0 && (
              <div
                className="py-6"
                style={{ borderTop: '1px solid rgba(247,247,247,0.08)' }}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1.25fr] sm:gap-8 lg:grid-cols-[1fr_1.5fr]">
                  <span
                    className="font-display text-xs font-semibold uppercase tracking-[1px] sm:text-sm pt-0.5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {c.s4Ui}
                  </span>
                  <div>
                    <ul className="space-y-3 mb-6">
                      {caseData.conclusao.learnings.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 font-sans text-sm sm:text-base"
                          style={{ color: 'var(--text-muted)', lineHeight: '1.75' }}
                        >
                          <span style={{ color: 'var(--text-primary)' }} aria-hidden="true">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p
                      className="font-sans text-xs sm:text-sm"
                      style={{ color: 'var(--text-muted)', opacity: 0.7 }}
                    >
                      {c.s4UiNote}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* Section 5 — CONFIRA TAMBÉM */}
      {relatedProjects.length > 0 && (
        <section className="mb-16 sm:mb-24" aria-labelledby="s5-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
            <SectionHeader title={c.s5} index={5} />
            <div id="s5-heading" className="sr-only">{c.s5}</div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <FeaturedProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
