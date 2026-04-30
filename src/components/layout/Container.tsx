import React from 'react';
import { cn } from '@/utils/tailwind-merge';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Container({ className, children, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
