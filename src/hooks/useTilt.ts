'use client';

import { useRef, useState, useCallback } from 'react';

interface TiltResult {
  ref: React.RefObject<HTMLElement | null>;
  style: React.CSSProperties;
  glareStyle: React.CSSProperties;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
}

export function useTilt(maxDeg: number = 8): TiltResult {
  const ref = useRef<HTMLElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [active, setActive] = useState(false);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotY = (px - 0.5) * maxDeg * 2;
    const rotX = -(py - 0.5) * maxDeg * 2;

    setTilt({ x: rotX, y: rotY });
    setGlare({ x: px * 100, y: py * 100, opacity: 0.08 });
    setActive(true);
  }, [maxDeg]);

  const onMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setActive(false);
  }, []);

  const style: React.CSSProperties = {
    transform: active
      ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
      : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: active ? 'transform 0.1s ease' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    willChange: 'transform',
  };

  const glareStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
    pointerEvents: 'none',
    zIndex: 1,
    transition: active ? 'opacity 0.1s ease' : 'opacity 0.5s ease',
  };

  return { ref, style, glareStyle, onMouseMove, onMouseLeave };
}
