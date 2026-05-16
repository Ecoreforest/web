'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter';
import SectionEyebrow from '../SectionEyebrow';

const metricas = [
  {
    valor: 270,
    suffix: ' ha',
    label: 'Reforestadas en Galicia',
    contexto: 'Primer terreno apalabrado · plantación inicial octubre 2026',
  },
  {
    valor: 70,
    suffix: ' kt',
    label: 'Compost certificado / año',
    contexto: 'Producido desde biorresiduos urbanos · norma UNE 142500',
  },
  {
    valor: 18,
    suffix: ' kt',
    label: 'CO₂ capturado a 10 años',
    contexto: 'Estimación conservadora · auditoría externa anual',
  },
  {
    valor: 85,
    suffix: '%',
    label: 'Supervivencia garantizada',
    contexto: 'Reposición sin coste durante el periodo de garantía',
  },
  {
    valor: 220,
    suffix: ' kt',
    label: 'Biorresiduos valorizados / año',
    contexto: 'Urbanos, agrícolas y de poda · trazabilidad por lote',
  },
  {
    valor: 4,
    suffix: '',
    label: 'Niveles de trazabilidad pública',
    contexto: 'Por lote · por parcela · por árbol · por colaborador',
  },
];

export default function ImpactoMetricas() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow light>Cifras objetivo 2026 — 2027</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold text-bone tracking-tight text-balance"
          >
            El{' '}
            <span className="italic-display font-normal">año uno,</span>{' '}
            en seis cifras.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-bone/65 leading-relaxed max-w-2xl"
          >
            Objetivos del primer ejercicio completo. Cifras conservadoras,
            ancladas a contratos firmados y proyecciones técnicas verificables.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
          {metricas.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-bone/15 pt-8"
            >
              <p
                className="font-semibold tracking-tighter leading-none text-bone"
                style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
              >
                <AnimatedCounter value={m.valor} />
                <span className="italic-display font-normal text-forest">
                  {m.suffix}
                </span>
              </p>
              <p className="mt-6 text-base lg:text-lg text-bone font-medium max-w-[24ch]">
                {m.label}
              </p>
              <p className="mt-3 text-sm text-bone/55 leading-relaxed max-w-[28ch]">
                {m.contexto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
