'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

type Feature = {
  titulo: string;
  descripcion: string;
};

type Props = {
  eyebrow: string;
  titulo: string;
  italicWord?: string;
  features: Feature[];
  fondo?: 'bone' | 'ivory' | 'ink';
};

export default function ServicioFeatures({
  eyebrow,
  titulo,
  italicWord,
  features,
  fondo = 'ivory',
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

  const isDark = fondo === 'ink';
  const bgClass = {
    bone: 'bg-bone',
    ivory: 'bg-ivory',
    ink: 'bg-ink text-bone grain',
  }[fondo];
  const textColor = isDark ? 'text-bone' : 'text-ink';
  const subTextColor = isDark ? 'text-bone/65' : 'text-smoke';
  const borderColor = isDark ? 'border-bone/15' : 'border-ash';

  return (
    <section className={`relative py-24 lg:py-32 ${bgClass} overflow-hidden`}>
      <div className="container-x max-w-7xl">
        <SectionEyebrow light={isDark}>{eyebrow}</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-display-lg font-semibold tracking-tight max-w-4xl text-balance mb-16 lg:mb-24 ${textColor}`}
        >
          {renderTitle()}
        </motion.h2>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16 pt-12 border-t ${borderColor}`}>
          {features.map((f, i) => (
            <motion.div
              key={f.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={`font-mono text-xs tracking-[0.25em] mb-4 ${isDark ? 'text-forest' : 'text-forest'}`}>
                0{i + 1}
              </p>
              <h3 className={`text-xl lg:text-2xl font-semibold tracking-tight mb-4 ${textColor}`}>
                {f.titulo}
              </h3>
              <p className={`text-base leading-relaxed ${subTextColor}`}>
                {f.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
