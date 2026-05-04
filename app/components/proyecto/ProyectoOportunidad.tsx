'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

export default function ProyectoOportunidad() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-6xl py-32 lg:py-48">
        <SectionEyebrow light>Por qué España, por qué ahora</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance leading-[1]"
        >
          Hay momentos en los que un país puede{' '}
          <span className="italic-display font-normal">elegir su futuro.</span>{' '}
          Este es uno.
        </motion.h2>

        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-lg lg:text-xl text-bone/75 leading-relaxed"
          >
            <p>
              España afronta la mayor crisis ambiental de su historia reciente. La desertificación avanza más rápido que las políticas públicas. Cuatro de cada diez hectáreas que se pierden en Europa, se pierden aquí.
            </p>
            <p>
              Y al mismo tiempo, España recibe la mayor inyección de fondos verdes jamás vista. €42.000 millones de Next Generation EU. €3.000 millones del Plan Forestal. Convocatorias LIFE anuales hasta 2027.
            </p>
            <p className="text-bone">
              Es la primera vez en décadas que el problema y los recursos para resolverlo coinciden en el tiempo. Esa ventana se cierra en 2027.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-2"
          >
            <div className="border-l border-bone/20 pl-8 lg:pl-10">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-bone/40 mb-6">
                Lo que está en juego
              </p>
              <ul className="space-y-6">
                {[
                  'Un país más verde, más fresco y con menos riesgo de incendios',
                  'Un sector forestal con empleo cualificado en zonas rurales',
                  'Un modelo replicable en todo el Mediterráneo europeo',
                  'Un primer gran hito de economía circular hecho en España',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-4 text-base lg:text-lg text-bone/85 leading-relaxed"
                  >
                    <span className="font-mono text-xs text-bone/40 shrink-0">
                      0{i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
