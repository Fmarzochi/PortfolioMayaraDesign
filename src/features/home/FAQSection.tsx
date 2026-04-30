'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
  { id: '1', pergunta: 'Como funciona seu processo de trabalho?', resposta: 'Começo com imersão no problema — pesquisa de usuário, análise de concorrentes e alinhamento de objetivos. Depois sigo um ciclo de ideação, prototipação e validação até chegar ao design final pronto para handoff.', muted: false },
  { id: '2', pergunta: 'Você trabalha com times ou projetos individuais?', resposta: 'Trabalho nos dois formatos. Tenho experiência colaborando com times de produto, engenharia e negócio, mas também conduzo projetos de forma autônoma do início ao fim.', muted: false },
  { id: '3', pergunta: 'Quais entregáveis você oferece?', resposta: 'Pesquisa UX, fluxos de usuário, wireframes, protótipos interativos, design system, especificações para desenvolvimento e handoff no Figma.', muted: false },
  { id: '4', pergunta: 'Você trabalha com prazos e metas?', resposta: 'Sim. Defino prazos claros na proposta e acompanho o progresso com rituais de alinhamento. Metas de resultado — conversão, retenção, usabilidade — fazem parte do processo desde o início.', muted: false },
  { id: '5', pergunta: 'Você também trabalha com redesign de produtos?', resposta: 'Sim. Redesigns envolvem diagnóstico profundo, pesquisa com usuários reais e estratégia focada em melhorar métricas específicas do produto.', muted: true },
  { id: '6', pergunta: 'Você desenvolve o código também?', resposta: 'Tenho conhecimento básico de HTML, CSS e JavaScript, o que me ajuda a entregar handoffs mais precisos e colaborar melhor com times de desenvolvimento.', muted: true },
];

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-20 md:items-start">

          {/* Esquerda */}
          <div className="flex flex-col gap-6">
            <h2 id="faq-heading" className="fluid-h2 font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
              Perguntas comuns sobre meu trabalho
            </h2>
            <Link
              href="/contato"
              className="inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-3 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Me mande aqui sua dúvida
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--accent)' }}>
                <Image src="/assets/icons/arrow-up-right.svg" alt="" width={12} height={12} aria-hidden="true" className="brightness-[10]" />
              </span>
            </Link>
          </div>

          {/* Direita */}
          <div className="flex flex-col gap-2.5">
            {faqs.map((faq) => {
              const isOpen = open === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-xl transition-opacity duration-200"
                  style={{ border: '1px solid var(--border)', background: 'var(--card-bg)', opacity: faq.muted ? 0.45 : 1 }}
                >
                  <button
                    type="button"
                    onClick={() => !faq.muted && setOpen(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    disabled={faq.muted}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:py-5"
                  >
                    <span className="font-sans text-sm font-medium sm:text-base" style={{ color: 'var(--text-primary)' }}>
                      {faq.pergunta}
                    </span>
                    <span
                      className="shrink-0 text-xl font-light transition-transform duration-300"
                      style={{ color: 'var(--text-muted)', transform: isOpen ? 'rotate(45deg)' : 'none', display: 'inline-block' }}
                    >
                      +
                    </span>
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? '400px' : '0px' }}>
                    <p className="px-5 pb-5 font-body text-sm leading-relaxed sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
