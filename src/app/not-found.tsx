'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  const nf = t.notFound;

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center transition-colors duration-300"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* 404 fantasma */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute select-none font-display font-semibold leading-none"
        style={{
          fontSize: 'clamp(10rem, 28vw, 22rem)',
          color: 'var(--text-primary)',
          opacity: 0.04,
          letterSpacing: '-0.04em',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
        }}
      >
        404
      </span>

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <span
          className="font-sans text-sm font-medium uppercase tracking-widest"
          style={{ color: 'var(--accent)' }}
        >
          {nf.badge}
        </span>

        <h1
          className="font-display text-3xl font-semibold leading-tight md:text-4xl"
          style={{ color: 'var(--text-primary)' }}
        >
          {nf.heading}
        </h1>

        <p
          className="font-body max-w-sm text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {nf.body}
        </p>

        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2.5 rounded-md px-6 py-3 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80"
          style={{ background: 'var(--accent)', color: '#F4F5F6' }}
        >
          <Image
            src="/assets/icons/arrow-left.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
            className="brightness-[10]"
          />
          {nf.btn}
        </Link>
      </div>
    </div>
  );
}
