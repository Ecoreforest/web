'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  initial?: number;
  aspect?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  initial = 50,
  aspect = 'aspect-[4/5]',
}: Props) {
  const [position, setPosition] = useState(initial);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateFromClientX(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updateFromClientX(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !e.touches[0]) return;
      updateFromClientX(e.touches[0].clientX);
    };
    const stop = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', stop);
    window.addEventListener('touchcancel', stop);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stop);
      window.removeEventListener('touchcancel', stop);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className={`relative overflow-hidden rounded-sm select-none touch-pan-y cursor-ew-resize ${aspect}`}
    >
      {/* Imagen "antes" — capa base completa */}
      <div className="absolute inset-0">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover pointer-events-none"
          draggable={false}
          priority={false}
        />
      </div>

      {/* Imagen "después" — recortada según posición del slider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover pointer-events-none"
          draggable={false}
          priority={false}
        />
      </div>

      {/* Etiquetas */}
      <span className="absolute top-4 left-4 text-xs font-mono uppercase tracking-[0.25em] text-bone bg-ink/55 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 text-xs font-mono uppercase tracking-[0.25em] text-bone bg-ink/55 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none">
        {afterLabel}
      </span>

      {/* Línea + handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-bone shadow-[0_0_20px_rgba(0,0,0,0.35)] pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-bone shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ink"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(0)" />
          </svg>
        </div>
      </div>

      {/* Hint inicial — desaparece al interactuar */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.25em] text-bone/85 bg-ink/45 backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none transition-opacity duration-500 ${
          position === initial ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Arrastra
      </div>
    </div>
  );
}
