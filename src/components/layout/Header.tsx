'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from './Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LocaleDropdown } from '@/components/ui/LocaleDropdown';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.projects, href: '/projetos' },
    { label: t.nav.about, href: '/sobre' },
    { label: t.nav.experience, href: '/#experiencia' },
    { label: t.nav.contact, href: '/contato' },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300"
      style={{ background: 'var(--header-bg)', borderBottom: '1px solid var(--border)' }}
    >
      <Container>

        {/* ── Desktop ── */}
        <div className="relative hidden h-[72px] md:block">

          {/* Logo — ancorado na esquerda */}
          <Link
            href="/"
            className="absolute left-0 top-1/2 -translate-y-1/2 shrink-0 transition-opacity hover:opacity-70"
            aria-label="Talessa — página inicial"
          >
            <Image
              src="/assets/branding/logo.svg"
              alt="Talessa Rodrigues design"
              width={158}
              height={30}
              className="brightness-0 dark:brightness-100"
              priority
            />
          </Link>

          {/* Nav — ancorado no centro exato; troca de idioma não afeta logo nem controles */}
          <nav
            aria-label="Navegação principal"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-6 xl:gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium whitespace-nowrap transition-opacity hover:opacity-60 xl:text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Controles — ancorados na direita; nunca se movem */}
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-3">
            <ThemeToggle />
            <LocaleDropdown variant="pill-dark" direction="down" />
            <Link
              href="https://wa.me/553598074669"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full px-5 font-sans text-sm font-medium whitespace-nowrap transition-all duration-200 hover:opacity-80 active:scale-95"
              style={{ border: '1px solid var(--border)', color: 'var(--accent)', background: 'var(--btn-bg)', minWidth: '195px' }}
            >
              {t.header.cta}
            </Link>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="flex h-[72px] items-center justify-between md:hidden">
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-70" aria-label="Talessa — página inicial">
            <Image src="/assets/branding/logo.svg" alt="Talessa" width={120} height={22} className="brightness-0 dark:brightness-100" priority />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LocaleDropdown variant="border" direction="down" />
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2"
              style={{ color: 'var(--text-secondary)' }}
              aria-label={menuOpen ? t.header.menuClose : t.header.menuOpen}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile aberto */}
        {menuOpen && (
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1 py-4 md:hidden" style={{ borderTop: '1px solid var(--border)' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 font-sans text-sm font-medium"
                style={{ color: 'var(--text-primary)' }}>
                {link.label}
              </Link>
            ))}
            <Link href="https://wa.me/553598074669" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full px-3 py-2.5 text-center font-sans text-sm font-medium"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
              {t.header.cta}
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
