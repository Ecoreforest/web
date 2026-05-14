'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter';
import SectionEyebrow from '../SectionEyebrow';

const cifras = [
  {
    valor: 21,
    suffix: ' días',
    label: 'Ciclo de compostaje termófilo completo',
  },
  {
    valor: 100,
    suffix: ' L',
    label: 'Agua diaria captada por Torre Warka en condiciones óptimas',
  },
  {
    valor: 15,
    suffix: ' min',
    label: 'Frecuencia de lectura de cada sensor IoT en parcela',
  },
  {
    valor: 10,
    suffix: ' m',
    label: 'Resolución por píxel del análisis satelital Sentinel-2',
  },
];

export default function TecnologiaDatos() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-20 lg:mb-28">
          <SectionEyebrow light>Datos</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold text-bone tracking-tight text-balance"
          >
            Cifras, no{' '}
            <span className="italic-display font-normal">eslóganes.</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {cifras.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-bone/15 pt-8"
            >
              <p
                className="font-semibold tracking-tighter leading-none text-bone"
                style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
              >
                <AnimatedCounter value={c.valor} />
                <span className="italic-display font-normal text-forest">
                  {c.suffix}
                </span>
              </p>
              <p className="mt-6 text-base text-bone/65 leading-relaxed max-w-xs">
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
