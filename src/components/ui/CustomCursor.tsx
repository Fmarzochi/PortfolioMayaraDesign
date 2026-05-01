'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.documentElement.classList.add('custom-cursor-active');

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const isInteractive = (el: Element): boolean => {
      return (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.classList.contains('cursor-hover') ||
        (el.parentElement !== null && isInteractive(el.parentElement))
      );
    };

    const onMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && isInteractive(e.target)) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && isInteractive(e.target)) {
        setIsHovering(false);
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;

      if (dot) {
        dot.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      }

      if (ring) {
        ringPosRef.current.x = lerp(ringPosRef.current.x, posRef.current.x, 0.12);
        ringPosRef.current.y = lerp(ringPosRef.current.y, posRef.current.y, 0.12);
        const offset = isHovering ? 24 : 16;
        ring.style.transform = `translate(${ringPosRef.current.x - offset}px, ${ringPosRef.current.y - offset}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isHovering, visible]);

  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--text-primary)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'var(--accent)' : 'var(--text-primary)'}`,
          background: isHovering ? 'var(--accent)' : 'transparent',
          mixBlendMode: isHovering ? 'difference' : 'normal',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease, background 0.2s ease, border-color 0.2s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
}
