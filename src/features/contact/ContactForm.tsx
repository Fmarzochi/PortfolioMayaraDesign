'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CLIENT_EMAIL = 'talessaamayaraah15@gmail.com';
const DEFAULT_SUBJECT = 'Olá Talessa';
const DEFAULT_MESSAGE = 'Oi Talessa, eu vi seu portfólio e gostaria de entrar em contato';

const baseInputStyle: React.CSSProperties = {
  background: 'var(--card-bg)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  borderRadius: '8px',
  padding: '10px 12px',
  fontSize: '14px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
};

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contato.form;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const body = [
      name ? `Nome: ${name}` : '',
      email ? `E-mail: ${email}` : '',
      '',
      message,
    ]
      .filter((line) => line !== undefined)
      .join('\n');

    const mailto =
      `mailto:${CLIENT_EMAIL}` +
      `?subject=${encodeURIComponent(DEFAULT_SUBJECT)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);

    // reset após 4 s para permitir novo envio
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form
      className="flex w-full max-w-lg flex-col gap-5"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Nome */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-sans text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {f.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder={f.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={baseInputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
      </div>

      {/* E-mail */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-sans text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {f.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={f.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={baseInputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
      </div>

      {/* Mensagem — pré-escrita */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-sans text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {f.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ ...baseInputStyle, resize: 'vertical' }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
        {/* Indicador de destino */}
        <p className="font-sans text-xs" style={{ color: 'var(--text-muted)' }}>
          Será enviado para{' '}
          <span style={{ color: 'var(--accent)' }}>{CLIENT_EMAIL}</span>
        </p>
      </div>

      {/* Botão */}
      <button
        type="submit"
        disabled={sent}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-medium transition-all duration-200 hover:opacity-80 disabled:opacity-60"
        style={{ background: 'var(--accent)', color: '#F4F5F6' }}
      >
        {sent ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Abrindo seu e-mail…
          </>
        ) : (
          f.submit
        )}
      </button>
    </form>
  );
}
