'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const marcos = [
  'Pacto Verde Europeo',
  'Next Generation EU',
  'Plan Forestal Español 2022-2032',
  'Estrategia de Biodiversidad 2030',
  'LIFE 2026',
  'Ley 7/2022 Economía Circular',
];

export default function HomeAliados() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone border-t border-ash/60">
      <div className="container-x max-w-6xl">
        <SectionEyebrow>Marco institucional</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-sm font-semibold tracking-tight max-w-3xl text-balance"
        >
          Alineados con los compromisos europeos y españoles más ambiciosos en materia climática.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 lg:gap-y-10 mt-16 lg:mt-20 pt-12 border-t border-ash">
          {marcos.map((m, i) => (
            <motion.p
              key={m}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              className="text-base lg:text-lg font-medium tracking-tight text-smoke"
            >
              {m}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
