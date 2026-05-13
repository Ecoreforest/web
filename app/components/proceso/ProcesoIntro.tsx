'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter';
import SectionEyebrow from '../SectionEyebrow';

export default function ProcesoIntro() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-6xl">
        <SectionEyebrow>La cadena</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
        >
          Cuatro fases con un solo{' '}
          <span className="italic-display font-normal">objetivo:</span>{' '}
          convertir la basura en bosque.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg lg:text-xl text-smoke max-w-2xl leading-relaxed mt-8"
        >
          Cada fase está pensada para que la siguiente sea posible. No hay atajos: hay ingeniería, ciencia y trabajo de campo. Aquí están los números que sostienen la cadena.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-20 lg:mt-28 pt-16 border-t border-ash">
          {[
            {
              value: 7.7,
              decimals: 1,
              suffix: 'M t',
              label: 'Residuos orgánicos generados al año en España',
            },
            {
              value: 45,
              suffix: ' días',
              label: 'Tiempo máximo de compostaje, frente a 120 del método tradicional',
            },
            {
              value: 85,
              suffix: '%',
              label: 'Supervivencia garantizada de las plantaciones',
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-display-md font-semibold tracking-tight mb-4">
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-sm text-smoke leading-relaxed max-w-[24ch]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
