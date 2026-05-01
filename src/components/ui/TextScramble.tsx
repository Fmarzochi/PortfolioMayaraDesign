'use client';

import { useRef, useCallback, ElementType } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

type ValidTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div' | 'label' | 'li';

interface TextScrambleProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  trigger?: 'hover' | 'mount';
  as?: ValidTag;
}

export function TextScramble({
  children,
  className,
  style,
  trigger = 'hover',
  as: Tag = 'span',
}: TextScrambleProps) {
  const elRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const frameRef = useRef(0);

  const scramble = useCallback(() => {
    const el = elRef.current;
    if (!el) return;

    const original = children;
    const totalFrames = original.length * 3;
    frameRef.current = 0;

    const step = () => {
      const progress = frameRef.current / totalFrames;
      let output = '';

      for (let i = 0; i < original.length; i++) {
        if (original[i] === ' ') {
          output += ' ';
        } else if (i < Math.floor(progress * original.length)) {
          output += original[i];
        } else {
          output += randomChar();
        }
      }

      el.textContent = output;
      frameRef.current += 1;

      if (frameRef.current <= totalFrames) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        el.textContent = original;
      }
    };

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
  }, [children]);

  const handleMouseEnter = useCallback(() => {
    if (trigger === 'hover') scramble();
  }, [trigger, scramble]);

  const Comp = Tag as ElementType;

  return (
    <Comp
      ref={(el: HTMLElement | null) => { elRef.current = el; }}
      className={className}
      style={style}
      onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
    >
      {children}
    </Comp>
  );
}
