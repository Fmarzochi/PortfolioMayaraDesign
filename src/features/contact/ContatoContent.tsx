'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ContactForm } from './ContactForm';

export function ContatoContent() {
  const { t } = useLanguage();
  const c = t.contato;

  return (
    <main
      className="min-h-screen transition-colors duration-300"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 xl:px-10">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">

          {/* Esquerda — texto */}
          <div className="flex flex-col gap-6">
            <h1
              className="fluid-h2 font-display font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {c.heading}
            </h1>
            <p
              className="font-body text-sm leading-relaxed sm:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {c.body1}
            </p>
            <p
              className="font-body text-sm leading-relaxed sm:text-base"
              style={{ color: 'var(--text-muted)' }}
            >
              {c.body2}
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  {c.emailLabel}
                </span>
                <span className="font-sans text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                  talessaamayaraah15@gmail.com
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  {c.whatsappLabel}
                </span>
                <a
                  href="https://wa.me/553598074669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm transition-opacity hover:opacity-70 sm:text-base"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  +55 35 9807-4669
                </a>
              </div>
            </div>
          </div>

          {/* Direita — formulário */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
