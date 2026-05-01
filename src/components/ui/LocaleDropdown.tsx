'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LOCALE_LABELS, Locale } from '@/i18n/translations';

const LOCALES: Locale[] = ['pt', 'en', 'es'];

interface LocaleDropdownProps {
  /** Estilo do trigger: 'pill-dark' para header desktop, 'ghost' para footer */
  variant?: 'pill-dark' | 'ghost' | 'border';
  /** Direção de abertura do dropdown */
  direction?: 'down' | 'up';
}

export function LocaleDropdown({ variant = 'pill-dark', direction = 'down' }: LocaleDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const triggerStyle =
    variant === 'pill-dark'
      ? { border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-muted)' }
      : variant === 'border'
      ? { border: '1px solid var(--border)', color: 'var(--text-muted)' }
      : { color: 'var(--text-muted)' };

  const triggerClass =
    variant === 'pill-dark'
      ? 'inline-flex h-10 items-center gap-1.5 rounded-full px-3.5 font-sans text-xs font-medium transition-all duration-200 hover:opacity-80 active:scale-95'
      : variant === 'border'
      ? 'inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 font-sans text-xs font-medium transition-all duration-200 hover:opacity-80'
      : 'inline-flex items-center gap-1.5 font-sans text-xs font-medium transition-all duration-200 hover:opacity-80 active:scale-95';

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Selecionar idioma"
        aria-expanded={open}
        className={triggerClass}
        style={triggerStyle}
      >
        <Image
          src="/assets/icons/decorative-1.svg"
          alt=""
          width={variant === 'pill-dark' ? 14 : 12}
          height={variant === 'pill-dark' ? 14 : 12}
          aria-hidden="true"
          className="brightness-0 dark:brightness-100 opacity-70"
        />
        {variant !== 'pill-dark' && (
          <span>{LOCALE_LABELS[locale]}</span>
        )}
        <Image
          src="/assets/icons/decorative-2.svg"
          alt=""
          width={10}
          height={10}
          aria-hidden="true"
          className="brightness-0 dark:brightness-100 opacity-70 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div
          className={`absolute right-0 min-w-[80px] overflow-hidden rounded-xl py-1 z-[60] ${
            direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
          style={{
            background: 'var(--bg-primary)',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}
        >
          {LOCALES.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => { setLocale(loc); setOpen(false); }}
              className="flex w-full items-center justify-between gap-2 px-4 py-2 font-sans text-sm font-medium transition-opacity hover:opacity-60"
              style={{ color: locale === loc ? 'var(--text-primary)' : 'var(--text-muted)' }}
            >
              {LOCALE_LABELS[loc]}
              {locale === loc && (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
