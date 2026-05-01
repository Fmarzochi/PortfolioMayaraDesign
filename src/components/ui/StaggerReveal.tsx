'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  duration = 0.7,
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger,
        duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, [stagger, duration]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
