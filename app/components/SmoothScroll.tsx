'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

/**
 * Paso 17: fix del bug de scroll al cambiar de página.
 *
 * Problema: Lenis se inicializa una vez y mantiene su posición de scroll
 * cuando cambia la ruta. Al hacer clic en "Ver todos los servicios" desde
 * el final de /servicios/compost, la nueva página se abre con el scroll
 * ya bajado (heredado de la anterior) en vez de en el top.
 *
 * Fix: escuchar cambios de pathname y forzar scroll a top con
 * lenis.scrollTo(0, { immediate: true }) cada vez que cambia la ruta.
 */
export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Resetea el scroll al top cada vez que cambia la ruta.
  // `immediate: true` evita la animación (queremos que la nueva página
  // empiece directamente arriba, no que la usuaria vea el scroll bajando).
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      // Fallback por si Lenis aún no está listo (primera carga)
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
