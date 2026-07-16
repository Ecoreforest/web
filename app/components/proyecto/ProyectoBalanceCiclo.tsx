'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 14 (re-subido en paso 15): Balance del ciclo migrado desde /proceso
 * a /proyecto. Cierra la narrativa de "La solución" con la contabilidad
 * concreta antes del marco institucional.
 */

const inputs = [
  { label: 'Compost UNE 142500 adquirido', valor: 'a productores certificados' },
  { label: 'Terrenos apalabrados', valor: '270 ha · Galicia año 1' },
  { label: 'Productores partner', valor: '3 — 5 en Península' },
];

const outputs = [
  { label: 'Hectáreas reforestadas', valor: '270 ha año 1' },
  { label: 'Compost aplicado en parcela', valor: 'según diseño técnico' },
  { label: 'Compost redistribuido al mercado', valor: 'venta directa' },
  { label: 'Carbono capturado a 10 años', valor: '≈ 18 kt CO₂' },
];

export default function ProyectoBalanceCiclo() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-7xl">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7">
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
              className="mt-8 text-lg lg:text-xl text-bone/65 leading-relaxed max-w-xl"
            >
              La economía circular no es una metáfora: es una contabilidad.
              Adquirimos compost certificado, lo aplicamos en parcelas
              regenerativas y publicamos los resultados. Todo trazable.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-square w-full max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778869860/compost-en-manos_dz50df.png"
              alt="Compost terminado sostenido en manos, símbolo del cierre del ciclo"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-contain"
            />
          </motion.div>
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
                  <p className="font-mono text-sm lg:text-base text-bone/60 whitespace-nowrap text-right">
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
                  <p className="font-mono text-sm lg:text-base text-bone/60 whitespace-nowrap text-right">
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
