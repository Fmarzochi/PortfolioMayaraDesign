'use client';

import { useEffect, useRef } from 'react';

export function ScrollBackground() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = divRef.current;
    if (!bg) return;

    const isDark = () => document.documentElement.classList.contains('dark');

    const sections = Array.from(
      document.querySelectorAll('[data-bg-light]')
    ) as HTMLElement[];

    if (!sections.length) return;

    function colorFor(el: HTMLElement) {
      return isDark()
        ? (el.dataset.bgDark ?? el.dataset.bgLight ?? '')
        : (el.dataset.bgLight ?? '');
    }

    // Initial color from first section
    bg.style.backgroundColor = colorFor(sections[0]);

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) {
          bg.style.backgroundColor = colorFor(best.target as HTMLElement);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1],
        rootMargin: '-25% 0px -25% 0px',
      }
    );

    sections.forEach(s => observer.observe(s));

    // Re-apply color on theme toggle
    const themeObserver = new MutationObserver(() => {
      const midY = window.innerHeight / 2;
      const visible = sections.find(s => {
        const r = s.getBoundingClientRect();
        return r.top < midY && r.bottom > midY;
      }) ?? sections.find(s => {
        const r = s.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      });
      if (visible) bg.style.backgroundColor = colorFor(visible);
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={divRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        transition: 'background-color 0.7s ease',
        pointerEvents: 'none',
      }}
    />
  );
}
