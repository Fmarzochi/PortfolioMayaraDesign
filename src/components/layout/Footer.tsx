'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { LocaleDropdown } from '@/components/ui/LocaleDropdown';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.projects, href: '/projetos' },
    { label: t.nav.about, href: '/sobre' },
    { label: t.nav.experience, href: '/#experiencia' },
    { label: t.nav.contact, href: '/contato' },
  ];

  const socialLinks = [
    { label: 'Behance',  href: 'https://www.behance.net/talessamayara',     icon: '/assets/icons/behance.svg',  w: 22, h: 14 },
    { label: 'WhatsApp', href: 'https://wa.me/553598074669',                 icon: '/assets/icons/whatsapp.svg', w: 22, h: 22 },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/talessamayara/', icon: '/assets/icons/linkedin.svg', w: 22, h: 22 },
  ];

  const ctaLink = (className: string) => (
    <Link
      href="https://wa.me/553598074669"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ background: 'var(--btn-bg)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
    >
      {t.footer.cta}
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--btn-icon-bg)' }}>
        <Image src="/assets/icons/arrow-up-right.svg" alt="" width={18} height={18} aria-hidden="true" className="brightness-0 dark:brightness-[10]" />
      </span>
    </Link>
  );

  const socialIcons = (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ label, href, icon, w, h }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-opacity hover:opacity-60"
          style={{ border: '1px solid var(--border)' }}
        >
          <Image src={icon} alt="" width={w} height={h} aria-hidden="true" className="brightness-0 dark:brightness-100" />
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="transition-colors duration-300" style={{ background: 'var(--bg-primary)' }}>
      <Container>
        <div
          className="rounded-2xl px-5 py-6 sm:px-8 sm:py-8"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
        >

          {/* ── MOBILE layout (< lg) ── */}
          <div className="flex flex-col items-center gap-6 lg:hidden">
            <LocaleDropdown variant="ghost" direction="down" />
            {ctaLink('inline-flex w-fit items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80')}
            <nav aria-label="Links do rodapé" className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-sans text-lg transition-opacity hover:opacity-60" style={{ color: 'var(--text-secondary)' }}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center gap-2">
              {socialLinks.map(({ label, href, icon, w, h }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-opacity hover:opacity-60"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <Image src={icon} alt="" width={w} height={h} aria-hidden="true" className="brightness-0 dark:brightness-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── DESKTOP layout (lg+) ── */}
          <div className="hidden lg:flex lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3">
              <LocaleDropdown variant="ghost" direction="up" />
              {ctaLink('inline-flex w-fit items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80')}
            </div>
            <nav aria-label="Links do rodapé" className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-sans text-sm transition-opacity hover:opacity-60" style={{ color: 'var(--text-secondary)' }}>
                  {link.label}
                </Link>
              ))}
            </nav>
            {socialIcons}
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full sm:my-8" style={{ background: 'var(--border)' }} aria-hidden="true" />

          {/* Logo grande */}
          <div className="flex flex-col items-center">
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
