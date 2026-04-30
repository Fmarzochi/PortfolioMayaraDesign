import React from 'react';
import { cn } from '@/utils/tailwind-merge';

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Card({ className, style, children }: CardProps) {
  return (
    <div
      className={cn('rounded-xl transition-colors duration-200', className)}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: CardProps) {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children }: CardProps) {
  return (
    <div
      className={cn('flex items-center p-6 pt-0', className)}
      style={{ borderTop: '1px solid var(--card-border)' }}
    >
      {children}
    </div>
  );
}
