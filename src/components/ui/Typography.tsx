import React from 'react';
import { cn } from '@/utils/tailwind-merge';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'small' | 'muted';

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-display',
  h2: 'scroll-m-20 text-3xl font-bold tracking-tight',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7',
  lead: 'text-xl text-neutral-600',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-neutral-500',
};

const variantElement: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  lead: 'p',
  small: 'small',
  muted: 'p',
};

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}

export function Typography({
  variant = 'p',
  as,
  className,
  children,
  ...rest
}: TypographyProps) {
  const Tag = as ?? variantElement[variant];
  return (
    <Tag className={cn(variantStyles[variant], className)} {...rest}>
      {children}
    </Tag>
  );
}
