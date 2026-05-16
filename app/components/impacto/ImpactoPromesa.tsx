'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

export default function ImpactoPromesa() {
  return (
    <section className="relative py-20 lg:py-28 bg-bone">
      <div className="container-x max-w-5xl">
        <SectionEyebrow>La promesa</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance max-w-4xl"
        >
          Cero{' '}
          <span className="italic-display font-normal">greenwashing.</span>{' '}
          Todo dato verificable.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 space-y-6 text-lg lg:text-xl text-smoke leading-relaxed max-w-3xl"
        >
          <p>
            El sector de la reforestación y los créditos de carbono carga con un
            historial de cifras infladas, métodos opacos y promesas que nadie
            comprueba. EcoReforest nace para hacer lo contrario.
          </p>
          <p>
            Cada hectárea, cada árbol y cada tonelada de CO₂ capturada queda
            asociada a un identificador único, una metodología abierta y un
            reporte público anual auditado por un tercero.
          </p>
          <p className="text-ink">
            Si una cifra no se puede demostrar, no se publica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
