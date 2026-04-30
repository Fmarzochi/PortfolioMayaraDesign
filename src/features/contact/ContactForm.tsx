'use client';

import { Button } from '@/components/ui/Button';

const inputStyle: React.CSSProperties = {
  background: 'var(--card-bg)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  borderRadius: '8px',
  padding: '10px 12px',
  fontSize: '14px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export function ContactForm() {
  return (
    <form
      className="flex w-full max-w-lg flex-col gap-5"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      {[
        { id: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome completo', autoComplete: 'name' },
        { id: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com', autoComplete: 'email' },
      ].map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label
            htmlFor={field.id}
            className="font-sans text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            {field.label}
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            autoComplete={field.autoComplete}
            required
            placeholder={field.placeholder}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-sans text-sm font-medium"
          style={{ color: 'var(--text-secondary)' }}
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Descreva seu projeto ou dúvida..."
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
      </div>

      <Button type="submit" variant="secondary" size="lg">
        Enviar mensagem
      </Button>
    </form>
  );
}
