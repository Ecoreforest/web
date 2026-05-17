'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const principios = [
  {
    titulo: 'Trazabilidad por QR',
    descripcion:
      'Cada prenda lleva un código QR que abre la ficha del producto: origen de los materiales, taller de confección, certificaciones, lote y proyecto de reforestación al que contribuye su compra. Sin blockchain ni humo, solo un enlace público y verificable.',
  },
  {
    titulo: 'Kilómetro cero textil',
    descripcion:
      'Materias primas de origen europeo preferente, transformación en talleres certificados SA8000 y OEKO-TEX en España y Portugal, y distribución principalmente en mercado español y europeo. Cadena corta, huella mínima.',
  },
  {
    titulo: 'Producción bajo demanda',
    descripcion:
      'En sus primeras fases producimos solo lo que se pide. Cero inventario, cero stock excedente, cero desperdicio textil. Tu prenda se confecciona cuando tú la encargas.',
  },
  {
    titulo: '10% a reforestación',
    descripcion:
      'El 10% de los ingresos netos de cada venta se destina directamente a financiar proyectos de reforestación de EcoReforest. Un flujo recurrente que conecta cada prenda con una hectárea concreta.',
  },
];

export default function ShopManifiesto() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Filosofía</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Moda que no se{' '}
            <span className="italic-display font-normal">inventa nada.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            La industria de la moda es la segunda más contaminante del mundo.
            EcoReforest Wear nace para demostrar que otra forma es posible.
            Sin marketing verde, con datos verificables.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-16 pt-12 border-t border-ash">
          {principios.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-xs tracking-[0.25em] text-forest mb-4">
                0{i + 1}
              </p>
              <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mb-4">
                {p.titulo}
              </h3>
              <p className="text-base text-smoke leading-relaxed max-w-md">
                {p.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
