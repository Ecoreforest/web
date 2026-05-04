'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const principios = [
  {
    titulo: 'Honestidad',
    italic: 'antes que',
    final: 'humo.',
    texto:
      'Mostramos lo que ya hicimos, lo que estamos haciendo y lo que vamos a hacer. Sin métricas infladas, sin proyectos inventados, sin promesas vacías.',
  },
  {
    titulo: 'Ciencia',
    italic: 'antes que',
    final: 'eslóganes.',
    texto:
      'Nuestro modelo se basa en estudios verificables, normas técnicas (UNE 142500), tecnologías probadas y métricas auditables. La ecología es ingeniería.',
  },
  {
    titulo: 'Lugar',
    italic: 'antes que',
    final: 'escala.',
    texto:
      'Empezamos en España porque es donde está el problema más urgente del Mediterráneo. Nuestro modelo es replicable, pero el primer árbol lo plantamos en casa.',
  },
];

export default function ProyectoManifiesto() {
  return (
    <section className="relative py-32 lg:py-48 bg-bone">
      <div className="container-x max-w-6xl">
        <SectionEyebrow>Manifiesto</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance mb-20 lg:mb-28"
        >
          Tres ideas que{' '}
          <span className="italic-display font-normal">nos sostienen.</span>
        </motion.h2>

        <div className="space-y-20 lg:space-y-28">
          {principios.map((p, i) => (
            <motion.article
              key={p.titulo}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-1 lg:col-start-1">
                <p className="font-mono text-sm tracking-[0.25em] text-forest">
                  0{i + 1}
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-2">
                <h3 className="text-display-md font-semibold tracking-tight leading-[1.05] text-balance">
                  {p.titulo}{' '}
                  <span className="italic-display font-normal text-smoke">
                    {p.italic}
                  </span>{' '}
                  <span>{p.final}</span>
                </h3>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="text-base lg:text-lg text-smoke leading-relaxed mt-2 lg:mt-4">
                  {p.texto}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
