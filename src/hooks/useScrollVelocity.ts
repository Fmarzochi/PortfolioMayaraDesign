'use client';

import { useEffect, useState } from 'react';

interface ScrollVelocityResult {
  skewY: number;
}

export function useScrollVelocity(maxSkew: number = 4): ScrollVelocityResult {
  const [skewY, setSkewY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let rafId: number;
    let currentSkew = 0;

    const update = () => {
      const now = performance.now();
      const dt = now - lastTime;
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (dt > 0) {
        const velocity = delta / dt;
        const targetSkew = Math.max(-maxSkew, Math.min(maxSkew, velocity * 20));
        currentSkew += (targetSkew - currentSkew) * 0.1;

        if (Math.abs(currentSkew) < 0.01) currentSkew = 0;
        setSkewY(currentSkew);
      }

      lastScrollY = currentScrollY;
      lastTime = now;
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [maxSkew]);

  return { skewY };
}
