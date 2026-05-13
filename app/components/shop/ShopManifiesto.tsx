'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const valores = [
  {
    titulo: 'Trazabilidad blockchain',
    descripcion:
      'Cada prenda lleva un código QR que permite rastrear el origen de los materiales, el taller de confección y el proyecto de reforestación al que contribuye tu compra.',
  },
  {
    titulo: 'Kilómetro cero textil',
    descripcion:
      'Materias primas de origen europeo, confección en talleres de la Península Ibérica y distribución principalmente en mercado español y europeo. Cadena corta, huella mínima.',
  },
  {
    titulo: 'Fabricación bajo demanda',
    descripcion:
      'En sus primeras fases producimos solo lo que se pide. Cero inventario, cero desperdicio textil. Tu prenda se fabrica cuando tú la encargas.',
  },
  {
    titulo: 'Un árbol por compra',
    descripcion:
      'El 10% de los ingresos netos se destina directamente a financiar nuevos proyectos de reforestación. Cada prenda planta un árbol verificable.',
  },
];

export default function ShopManifiesto() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-4xl mb-20 lg:mb-24">
          <SectionEyebrow>Filosofía</SectionEyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Moda que no{' '}
            <span className="italic-display font-normal">se inventa nada.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-smoke leading-relaxed mt-8 max-w-2xl"
          >
            La industria de la moda es la segunda más contaminante del mundo. EcoReforest
            Wear nace para demostrar que otra forma es posible. Sin marketing verde, con
            datos verificables.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14 pt-12 border-t border-ash">
          {valores.map((v, i) => (
            <motion.article
              key={v.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-xs tracking-[0.25em] text-forest mb-4">
                0{i + 1}
              </p>
              <h3 className="text-display-sm font-semibold tracking-tight mb-4">
                {v.titulo}
              </h3>
              <p className="text-base text-smoke leading-relaxed max-w-md">
                {v.descripcion}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
