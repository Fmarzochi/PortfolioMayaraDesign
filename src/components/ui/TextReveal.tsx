'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ValidTag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface TextRevealProps {
  children: string;
  as?: ValidTag;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export function TextReveal({ children, as: Tag = 'span', className, style, id }: TextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const words = children.split(' ');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const inners = container.querySelectorAll<HTMLElement>('[data-word-inner]');

    gsap.fromTo(
      inners,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 88%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <Tag
      ref={(el) => { containerRef.current = el; }}
      className={className}
      style={style}
      id={id}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <span
            data-word-inner
            style={{ display: 'inline-block' }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
