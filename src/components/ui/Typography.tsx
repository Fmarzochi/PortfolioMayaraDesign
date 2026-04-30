import React from 'react';
import { cn } from '@/utils/tailwind-merge';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'small' | 'muted';

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl',
  h2: 'font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl',
  h3: 'font-display text-2xl font-semibold tracking-tight',
  h4: 'font-display text-xl font-semibold tracking-tight',
  p: 'font-sans leading-7',
  lead: 'font-body text-lg leading-relaxed md:text-xl',
  small: 'font-sans text-sm font-medium leading-none',
  muted: 'font-sans text-sm',
};

const variantElement: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4',
  p: 'p', lead: 'p', small: 'small', muted: 'p',
};

const variantColorVar: Record<TypographyVariant, string> = {
  h1: 'var(--text-primary)',
  h2: 'var(--text-primary)',
  h3: 'var(--text-primary)',
  h4: 'var(--text-primary)',
  p: 'var(--text-primary)',
  lead: 'var(--text-secondary)',
  small: 'var(--text-muted)',
  muted: 'var(--text-muted)',
};

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}

export function Typography({
  variant = 'p',
  as,
  className,
  style,
  children,
  ...rest
}: TypographyProps) {
  const Tag = as ?? variantElement[variant];
  return (
    <Tag
      className={cn(variantStyles[variant], className)}
      style={{ color: variantColorVar[variant], ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
