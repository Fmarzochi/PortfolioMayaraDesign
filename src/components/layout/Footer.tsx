'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { LOCALE_LABELS } from '@/i18n/translations';

function BehanceIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 26 16" fill="currentColor" aria-hidden="true">
      <path d="M16.5 1.5h6.5v1.6h-6.5zM19.7 5.3c-3.5 0-5.4 2.4-5.4 5.5 0 3.2 2 5.2 5.4 5.2 2.7 0 4.4-1.2 5.2-3.7h-2.7c-.3.8-1.1 1.3-2.3 1.3-1.5 0-2.5-.9-2.6-2.6h7.8c0-.2.1-.5.1-.8-.1-2.9-1.7-4.9-5.5-4.9zm-2.4 4.2c.2-1.3 1-2 2.3-2 1.3 0 2.1.8 2.2 2h-4.5zM8.9 7.8c1.5-.4 2.4-1.4 2.4-3C11.3 2.1 9.4 1 6.7 1H0v14h7c2.9 0 5-.9 5-3.8-.1-1.7-.9-3-3.1-3.4zm-5.7-4.5h3c1 0 2 .3 2 1.6s-.9 1.7-2 1.7H3.2V3.3zm3.3 9.3H3.2V9.1h3.3c1.3 0 2.2.5 2.2 1.9 0 1.3-1.1 1.6-2.2 1.6z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.337-1.508A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-5.001-1.372l-.359-.214-3.72.886.898-3.618-.234-.371A9.773 9.773 0 0 1 2.182 12c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  const { locale, t, cycleLocale } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.projects, href: '/projetos' },
    { label: t.nav.about, href: '/sobre' },
    { label: t.nav.experience, href: '/#experiencia' },
    { label: t.nav.contact, href: '/contato' },
  ];

  const socialLinks = [
    { label: 'Behance', href: 'https://behance.net/talessarodrigues', Icon: BehanceIcon },
    { label: 'WhatsApp', href: 'https://wa.me/553598074669', Icon: WhatsAppIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/talessamayara/', Icon: LinkedInIcon },
  ];

  return (
    <footer className="transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
      <Container>
        <div
          className="rounded-2xl px-5 py-6 sm:px-8 sm:py-8"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
        >
          {/* Linha superior */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Esquerda: idioma + CTA */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={cycleLocale}
                aria-label={`Idioma atual: ${LOCALE_LABELS[locale]}. Clique para alternar.`}
                className="inline-flex w-fit items-center gap-1.5 font-sans text-xs font-medium transition-all duration-200 hover:opacity-80 active:scale-95"
                style={{ color: 'var(--text-muted)' }}
              >
                <Image
                  src="/assets/icons/decorative-1.svg"
                  alt=""
                  width={12}
                  height={12}
                  aria-hidden="true"
                  className="brightness-0 dark:brightness-100 opacity-60"
                />
                {LOCALE_LABELS[locale]}
                <Image
                  src="/assets/icons/decorative-2.svg"
                  alt=""
                  width={10}
                  height={10}
                  aria-hidden="true"
                  className="brightness-0 dark:brightness-100 opacity-60"
                />
              </button>

              <Link
                href="/contato"
                className="inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80"
                style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                {t.footer.cta}
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ background: 'var(--accent)' }}
                >
                  <Image
                    src="/assets/icons/arrow-up-right.svg"
                    alt=""
                    width={12}
                    height={12}
                    aria-hidden="true"
                    className="brightness-[10]"
                  />
                </span>
              </Link>
            </div>

            {/* Centro: nav links */}
            <nav aria-label="Links do rodapé" className="flex flex-wrap gap-4 sm:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm transition-opacity hover:opacity-60"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Direita: ícones sociais */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-60"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full sm:my-8" style={{ background: 'var(--border)' }} aria-hidden="true" />

          {/* Logo grande centralizado */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <Image
              src="/assets/branding/logo.svg"
              alt="Talessa Rodrigues"
              width={56}
              height={56}
              className="dark:brightness-100 brightness-0 opacity-90 sm:h-[72px] sm:w-[72px]"
            />
            <div className="flex flex-col items-center gap-1">
              <span
                className="font-display font-bold tracking-tight"
                style={{
                  fontSize: 'clamp(1.75rem, 6vw, 5rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                }}
              >
                Talessa Rodrigues
              </span>
              <span
                className="font-body text-base italic sm:text-lg"
                style={{ color: 'var(--text-muted)' }}
              >
                design
              </span>
            </div>
          </div>
        </div>

        <p className="py-4 text-center font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Talessa Rodrigues. {t.footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
