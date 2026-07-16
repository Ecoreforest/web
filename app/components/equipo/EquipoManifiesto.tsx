'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 15: "cada tonelada de compost producida" → "cada tonelada de compost
 * aplicada". Ya no producimos compost, lo compramos a partners certificados.
 */
export default function EquipoManifiesto() {
  return (
    <section className="relative py-20 lg:py-28 bg-bone">
      <div className="container-x max-w-5xl">
        <SectionEyebrow>Por qué seguimos</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance max-w-4xl"
        >
          Tres personas, una{' '}
          <span className="italic-display font-normal">decisión clara.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 space-y-6 text-lg lg:text-xl text-smoke leading-relaxed max-w-3xl"
        >
          <p>
            EcoReforest no nació en una pizarra. Nació de la frustración de ver
            cómo la desertificación avanzaba más rápido que las políticas
            públicas, mientras millones de toneladas de residuos orgánicos
            acababan en vertederos. Dos problemas que, vistos juntos, eran su
            propia solución.
          </p>
          <p>
            Decidimos parar de hablarlo y empezar a hacerlo, con la forma
            jurídica más coherente para una misión ambiental: una asociación
            sin ánimo de lucro, transparente, auditable, abierta.
          </p>
          <p className="text-ink">
            Cada hectárea plantada, cada tonelada de compost aplicada y cada
            cifra publicada pasa por nosotros antes de que nadie más la vea.
            Esa es la única promesa que sabemos cumplir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
