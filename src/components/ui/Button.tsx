import React from 'react';
import { cn } from '@/utils/tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 gap-1.5 px-3 text-sm',
  md: 'h-10 gap-2 px-4 text-sm',
  lg: 'h-12 gap-2.5 px-6 text-base',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function getVariantStyle(variant: ButtonVariant): React.CSSProperties {
  switch (variant) {
    case 'primary':
      return {
        border: '1px solid var(--border)',
        background: 'transparent',
        color: 'var(--text-secondary)',
      };
    case 'secondary':
      return {
        background: 'var(--accent)',
        color: '#F4F5F6',
        border: 'none',
      };
    case 'ghost':
      return {
        background: 'transparent',
        border: 'none',
        color: 'var(--text-muted)',
      };
  }
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  as,
  children,
  style,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, sizeStyles[size], className);
  const variantStyle = getVariantStyle(variant);

  if (as === 'a') {
    return (
      <a
        className={classes}
        style={{ ...variantStyle, ...style }}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      style={{ ...variantStyle, ...style }}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
