'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-16 transition-colors duration-300 md:py-24 lg:py-28"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-12 md:items-start lg:gap-20">

          {/* Esquerda */}
          <div className="flex flex-col gap-6">
            <h2 id="faq-heading" className="fluid-h2 font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
              {t.faq.heading}
            </h2>
            <Link
              href="/contato"
              className="inline-flex w-fit items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{ background: 'var(--btn-bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              {t.faq.ctaBtn}
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--btn-icon-bg)' }}>
                <Image src="/assets/icons/arrow-up-right.svg" alt="" width={17} height={17} aria-hidden="true" className="brightness-0 dark:brightness-[10]" />
              </span>
            </Link>
          </div>

          {/* Direita */}
          <div className="flex flex-col gap-2.5">
            {t.faq.items.map((faq, idx) => {
              const isMuted = idx >= 4;
              const isOpen = open === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl transition-opacity duration-200"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--card-bg)',
                    opacity: isMuted ? 0.45 : 1,
                    marginLeft: `${idx * 10}px`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => !isMuted && setOpen(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    disabled={isMuted}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:py-5"
                  >
                    <span className="font-sans text-sm font-medium sm:text-base" style={{ color: 'var(--text-primary)' }}>
                      {faq.q}
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
                      {faq.a}
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
