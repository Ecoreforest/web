'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const flujo = [
  {
    palabra: 'Residuo',
    descripcion: 'Una manzana que ya no se vende.',
  },
  {
    palabra: 'Compost',
    descripcion: 'Un fertilizante con más nutrientes que el suelo agotado.',
  },
  {
    palabra: 'Suelo',
    descripcion: 'Una tierra que recupera la capacidad de sostener vida.',
  },
  {
    palabra: 'Árbol',
    descripcion: 'Una raíz que captura agua, carbono y comunidad.',
  },
  {
    palabra: 'Bosque',
    descripcion: 'Una hectárea menos del desierto que avanza.',
  },
];

export default function ProyectoSolucion() {
  return (
    <section className="relative py-32 lg:py-48 bg-ivory">
      <div className="container-x max-w-7xl">
        <div className="max-w-4xl mb-20 lg:mb-28">
          <SectionEyebrow>La solución</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Cerrar el ciclo es{' '}
            <span className="italic-display font-normal">tan simple</span>{' '}
            como entenderlo.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-smoke leading-relaxed mt-8 max-w-2xl"
          >
            Tomamos lo que la economía lineal considera basura y lo devolvemos al
            principio del ciclo. Lo que era un problema se convierte en la
            solución del siguiente.
          </motion.p>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {flujo.map((item, i) => (
            <motion.article
              key={item.palabra}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-baseline border-b border-ash pb-10 lg:pb-14"
            >
              <div className="lg:col-span-1">
                <p className="font-mono text-sm tracking-[0.25em] text-forest">
                  0{i + 1}
                </p>
              </div>
              <div className="lg:col-span-6">
                <h3
                  className="font-semibold tracking-tight leading-[0.9]"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
                >
                  {item.palabra}
                  <span className="italic-display font-normal text-forest">
                    .
                  </span>
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-lg lg:text-xl text-smoke leading-relaxed lg:mt-4">
                  {item.descripcion}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 text-center text-2xl lg:text-3xl font-light tracking-tight max-w-3xl mx-auto text-balance"
        >
          La{' '}
          <span className="italic-display font-normal text-forest">
            misma manzana
          </span>{' '}
          que iba a un vertedero acaba alimentando un encinar.
        </motion.p>
      </div>
    </section>
  );
}
