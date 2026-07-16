'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  titulo: string;
  italicWord?: string;
  subtitulo: string;
  ctaPrimario?: { label: string; href: string };
  ctaSecundario?: { label: string; href: string };
};

/**
 * Paso 13.1: añadido `mx-auto` al container para que el bloque se centre
 * horizontalmente en pantallas anchas. Sin él, `max-w-5xl` limita el ancho
 * pero deja el bloque anclado a la izquierda dentro del section, haciendo
 * que el texto "centrado" parezca desplazado.
 *
 * Este componente lo usan las 5 páginas de servicios (compost, reforestación,
 * forest-clean, auditorías, créditos de carbono), así que el fix aplica a
 * todas.
 */

export default function ServicioCTA({
  titulo,
  italicWord,
  subtitulo,
  ctaPrimario = { label: 'Solicitar información', href: '/contacto' },
  ctaSecundario = { label: 'Ver todos los servicios', href: '/servicios' },
}: Props) {
  const renderTitle = () => {
    if (!italicWord) return titulo;
    const parts = titulo.split(italicWord);
    return (
      <>
        {parts[0]}
        <span className="italic-display font-normal">{italicWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-5xl mx-auto py-24 lg:py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance leading-[1] max-w-4xl mx-auto"
        >
          {renderTitle()}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg lg:text-xl text-bone/65 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitulo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href={ctaPrimario.href}
            className="px-8 py-4 bg-bone text-ink rounded-full font-medium hover:bg-bone/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {ctaPrimario.label}
          </Link>
          <Link
            href={ctaSecundario.href}
            className="px-8 py-4 border border-bone/30 text-bone rounded-full font-medium hover:bg-bone/10 transition-all"
          >
            {ctaSecundario.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
