'use client';

import { useRef, useState, useCallback } from 'react';

interface MagneticResult {
  ref: React.RefObject<HTMLElement | null>;
  style: React.CSSProperties;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
}

export function useMagnetic(strength: number = 12): MagneticResult {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = Math.max(rect.width, rect.height);
    const factor = Math.min(1, dist / maxDist);

    setOffset({ x: dx * factor * (strength / maxDist), y: dy * factor * (strength / maxDist) });
    setActive(true);
  }, [strength]);

  const onMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
    setActive(false);
  }, []);

  const style: React.CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: active ? 'transform 0.1s ease' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    willChange: 'transform',
  };

  return { ref, style, onMouseMove, onMouseLeave };
}
