'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from './Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { LOCALE_LABELS } from '@/i18n/translations';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, t, cycleLocale } = useLanguage();

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
      style={{
        background: 'var(--header-bg)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Container>
        {/* Desktop: logo esquerda | nav absoluta centrada | controles direita */}
        <div className="relative hidden h-[72px] items-center md:flex">
          {/* Logo */}
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-70" aria-label="Talessa — página inicial">
            <Image
              src="/assets/branding/logo.svg"
              alt="Talessa"
              width={140}
              height={26}
              className="dark:brightness-100 brightness-0"
              priority
            />
          </Link>

          {/* Nav — absolutamente centrada na largura total do header */}
          <nav
            aria-label="Navegação principal"
            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-7"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium whitespace-nowrap transition-opacity hover:opacity-60"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Direita — tema + idioma + CTA */}
          <div className="ml-auto flex items-center gap-3">
            <ThemeToggle />

            {/* Seletor de idioma */}
            <button
              type="button"
              onClick={cycleLocale}
              aria-label={`Idioma atual: ${LOCALE_LABELS[locale]}. Clique para alternar.`}
              className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-sans text-xs font-medium transition-all duration-200 hover:opacity-80 active:scale-95"
              style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            >
              <Image
                src="/assets/icons/decorative-1.svg"
                alt=""
                width={12}
                height={12}
                aria-hidden="true"
                className="brightness-0 dark:brightness-100 opacity-70"
              />
              {LOCALE_LABELS[locale]}
              <Image
                src="/assets/icons/decorative-2.svg"
                alt=""
                width={10}
                height={10}
                aria-hidden="true"
                className="brightness-0 dark:brightness-100 opacity-70"
              />
            </button>

            <Link
              href="https://wa.me/553598074669"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-all duration-200 whitespace-nowrap hover:opacity-80"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              {t.header.cta}
            </Link>
          </div>

        </div>

        {/* Mobile: flex simples logo | controles */}
        <div className="flex h-[72px] items-center justify-between md:hidden">
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-70" aria-label="Talessa — página inicial">
            <Image src="/assets/branding/logo.svg" alt="Talessa" width={120} height={22} className="dark:brightness-100 brightness-0" priority />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={cycleLocale}
              aria-label={`Idioma: ${LOCALE_LABELS[locale]}`}
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-sans text-xs font-medium"
              style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            >
              {LOCALE_LABELS[locale]}
            </button>
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

        {/* Menu mobile */}
        {menuOpen && (
          <nav
            aria-label="Navegação mobile"
            className="flex flex-col gap-1 py-4 md:hidden"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 font-sans text-sm font-medium"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/553598074669"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full px-3 py-2.5 text-center font-sans text-sm font-medium"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              {t.header.cta}
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
