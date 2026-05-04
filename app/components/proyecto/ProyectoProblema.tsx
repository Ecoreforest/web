'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter';
import SectionEyebrow from '../SectionEyebrow';

const datos = [
  {
    valor: 74,
    suffix: '%',
    titulo: 'Territorio en riesgo',
    descripcion: 'De los 504.000 km² de superficie española, 37 millones de hectáreas están en riesgo de desertificación.',
  },
  {
    valor: 2.3,
    decimals: 1,
    suffix: 'M ha',
    titulo: 'Bosque perdido',
    descripcion: 'Hectáreas de cobertura forestal desaparecidas de la Península Ibérica en las últimas tres décadas.',
  },
  {
    valor: 7.7,
    decimals: 1,
    suffix: 'M t',
    titulo: 'Residuos sin valorizar',
    descripcion: 'Toneladas anuales de residuos de frutas y verduras que España genera. Solo el 23% se valoriza.',
  },
  {
    valor: 2.1,
    decimals: 1,
    suffix: 'M t CO₂',
    titulo: 'Emisiones evitables',
    descripcion: 'Equivalente de gases de efecto invernadero generados al año por residuos orgánicos en vertederos.',
  },
];

const regiones = [
  { nombre: 'Murcia', porcentaje: '85%' },
  { nombre: 'Valencia', porcentaje: '78%' },
  { nombre: 'Andalucía', porcentaje: '67%' },
  { nombre: 'Castilla-La Mancha', porcentaje: '64%' },
];

export default function ProyectoProblema() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-7xl py-32 lg:py-48">
        <SectionEyebrow light>El problema</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
        >
          Dos crisis. Una{' '}
          <span className="italic-display font-normal">misma raíz.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg lg:text-xl text-bone/70 max-w-2xl leading-relaxed mt-8"
        >
          España pierde suelo fértil mientras tira millones de toneladas de
          materia orgánica a vertederos. Los dos problemas se hablan: solo había
          que escucharlos.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-20 lg:mt-28 pt-16 border-t border-bone/15">
          {datos.map((dato, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-display-md font-semibold tracking-tight mb-4">
                <AnimatedCounter
                  value={dato.valor}
                  decimals={dato.decimals}
                  suffix={dato.suffix}
                />
              </p>
              <p className="text-base font-medium tracking-tight mb-3">
                {dato.titulo}
              </p>
              <p className="text-sm text-bone/50 leading-relaxed max-w-[28ch]">
                {dato.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 lg:mt-32 grid lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone/40 mb-4">
              Las regiones que peor están
            </p>
            <h3 className="text-display-sm font-semibold tracking-tight">
              El sur peninsular es{' '}
              <span className="italic-display font-normal">la zona cero</span>{' '}
              de la desertificación europea.
            </h3>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {regiones.map((r, i) => (
              <motion.div
                key={r.nombre}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline justify-between border-b border-bone/15 pb-4"
              >
                <span className="text-lg lg:text-xl font-medium">
                  {r.nombre}
                </span>
                <span className="font-mono text-2xl lg:text-3xl font-medium tracking-tight">
                  {r.porcentaje}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
