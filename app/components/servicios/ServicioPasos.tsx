'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

type Paso = {
  numero: string;
  titulo: string;
  descripcion: string;
};

type Props = {
  eyebrow: string;
  titulo: string;
  italicWord?: string;
  pasos: Paso[];
};

export default function ServicioPasos({ eyebrow, titulo, italicWord, pasos }: Props) {
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
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-6xl">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-4xl text-balance mb-20 lg:mb-24"
        >
          {renderTitle()}
        </motion.h2>

        <div className="space-y-12 lg:space-y-16">
          {pasos.map((paso, i) => (
            <motion.article
              key={paso.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-baseline border-b border-ash pb-10 lg:pb-14"
            >
              <div className="lg:col-span-2">
                <p
                  className="font-semibold tracking-tighter leading-none text-forest"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  {paso.numero}
                </p>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-display-sm font-semibold tracking-tight">
                  {paso.titulo}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base lg:text-lg text-smoke leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
