'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const inputs = [
  { label: 'Biorresiduos urbanos', valor: '120 kt / año' },
  { label: 'Restos de poda', valor: '40 kt / año' },
  { label: 'Subproductos agrícolas', valor: '60 kt / año' },
];

const outputs = [
  { label: 'Compost certificado UNE 142500', valor: '70 kt / año' },
  { label: 'Hectáreas reforestadas', valor: '270 ha año 1' },
  { label: 'Carbono capturado a 10 años', valor: '≈ 18 kt CO₂' },
];

export default function ProcesoCiclo() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-20 lg:mb-28">
          <SectionEyebrow light>Balance del ciclo</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold text-bone tracking-tight text-balance"
          >
            Lo que entra,{' '}
            <span className="italic-display font-normal">lo que sale.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-bone/65 leading-relaxed max-w-2xl"
          >
            La economía circular no es una metáfora: es una contabilidad.
            Cada tonelada que entra como residuo se transforma en
            algo cuantificable a la salida.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-0">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-8 pb-4 border-b border-bone/15">
              Entradas
            </p>
            <div className="space-y-8">
              {inputs.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline justify-between gap-6 border-b border-bone/10 pb-6"
                >
                  <p className="text-lg lg:text-xl text-bone/90">{item.label}</p>
                  <p className="font-mono text-sm lg:text-base text-bone/60 whitespace-nowrap">
                    {item.valor}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-8 pb-4 border-b border-bone/15">
              Salidas
            </p>
            <div className="space-y-8">
              {outputs.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline justify-between gap-6 border-b border-bone/10 pb-6"
                >
                  <p className="text-lg lg:text-xl text-bone/90">{item.label}</p>
                  <p className="font-mono text-sm lg:text-base text-bone/60 whitespace-nowrap">
                    {item.valor}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 text-center text-xl lg:text-2xl font-light tracking-tight max-w-3xl mx-auto text-bone/80 text-balance"
        >
          Cifras objetivo para el ejercicio{' '}
          <span className="italic-display font-normal text-bone">2026 — 2027.</span>{' '}
          Verificables, auditables y publicadas anualmente.
        </motion.p>
      </div>
    </section>
  );
}
