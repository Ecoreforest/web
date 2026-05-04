'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type Props = {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const startVal = 0;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (value - startVal) * eased;
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toLocaleString('es-ES');

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
