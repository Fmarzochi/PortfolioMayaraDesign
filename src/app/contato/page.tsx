import type { Metadata } from 'next';
import { ContactForm } from '@/features/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contato — Talessa Rodrigues',
  description: 'Entre em contato para novos projetos e colaborações.',
};

export default function ContatoPage() {
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
              Vamos trabalhar juntos
            </h1>
            <p
              className="font-body text-sm leading-relaxed sm:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              Tem um projeto em mente? Me conta mais sobre o que você precisa e como posso ajudar.
            </p>
            <p
              className="font-body text-sm leading-relaxed sm:text-base"
              style={{ color: 'var(--text-muted)' }}
            >
              Trabalho com times e projetos individuais — do discovery até a entrega de interfaces prontas para desenvolvimento.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {[
                { label: 'E-mail', value: 'talessa@email.com' },
                { label: 'WhatsApp', value: '+55 (00) 00000-0000' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                    {item.label}
                  </span>
                  <span className="font-sans text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
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
