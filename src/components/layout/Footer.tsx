'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { LOCALE_LABELS } from '@/i18n/translations';

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 26 16" fill="currentColor" aria-hidden="true">
      <path d="M16.5 1.5h6.5v1.6h-6.5zM19.7 5.3c-3.5 0-5.4 2.4-5.4 5.5 0 3.2 2 5.2 5.4 5.2 2.7 0 4.4-1.2 5.2-3.7h-2.7c-.3.8-1.1 1.3-2.3 1.3-1.5 0-2.5-.9-2.6-2.6h7.8c0-.2.1-.5.1-.8-.1-2.9-1.7-4.9-5.5-4.9zm-2.4 4.2c.2-1.3 1-2 2.3-2 1.3 0 2.1.8 2.2 2h-4.5zM8.9 7.8c1.5-.4 2.4-1.4 2.4-3C11.3 2.1 9.4 1 6.7 1H0v14h7c2.9 0 5-.9 5-3.8-.1-1.7-.9-3-3.1-3.4zm-5.7-4.5h3c1 0 2 .3 2 1.6s-.9 1.7-2 1.7H3.2V3.3zm3.3 9.3H3.2V9.1h3.3c1.3 0 2.2.5 2.2 1.9 0 1.3-1.1 1.6-2.2 1.6z" />
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
    { label: 'Instagram', href: 'https://www.instagram.com/talessarodrigues/', Icon: InstagramIcon },
    { label: 'YouTube', href: '#', Icon: YouTubeIcon },
    { label: 'Behance', href: 'https://www.behance.net/talessamayara', Icon: BehanceIcon },
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
              src="/assets/branding/logo-footer.svg"
              alt="Talessa Rodrigues design"
              width={1174}
              height={421}
              className="dark:brightness-100 brightness-0 w-full max-w-[520px] sm:max-w-[640px] lg:max-w-[780px]"
            />
          </div>
        </div>

        <p className="py-4 text-center font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Talessa Rodrigues. {t.footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
