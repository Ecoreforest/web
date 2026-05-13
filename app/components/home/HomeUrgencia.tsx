'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter';
import SectionEyebrow from '../SectionEyebrow';

export default function HomeUrgencia() {
  return (
    <section className="relative py-32 lg:py-48 bg-bone">
      <div className="container-x max-w-6xl">
        <SectionEyebrow>La urgencia</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
        >
          España se está{' '}
          <span className="italic-display font-normal">secando.</span>{' '}
          Y nosotros tenemos la respuesta.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg lg:text-xl text-smoke max-w-2xl leading-relaxed mt-8"
        >
          Mientras tres cuartas partes del territorio están en riesgo de desertificación, generamos millones de toneladas de residuos orgánicos que acaban en vertederos. La conexión entre ambos problemas es también su solución.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mt-20 lg:mt-28 pt-16 border-t border-ash">
          {[
            { value: 74, suffix: '%', label: 'Territorio español en riesgo de desertificación' },
            { value: 7.7, decimals: 1, suffix: 'M', label: 'Toneladas de residuos orgánicos al año' },
            { value: 176, suffix: '%', label: 'Aumento de biomasa en estudios con compost' },
            { value: 270, label: 'Hectáreas comprometidas en Galicia' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-display-md font-semibold tracking-tight mb-3">
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-sm text-smoke leading-relaxed max-w-[20ch]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
