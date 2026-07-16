'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 13: Capa física actualizada tras externalización del compost.
 * Los "Biorreactores termófilos" desaparecen (no son nuestros) y se
 * reemplazan por "Red de proveedores certificados de compost".
 */

const capas = [
  {
    capa: 'Capa física',
    items: [
      'Red de proveedores certificados UNE 142500',
      'Estaciones meteorológicas y de suelo',
      'Drones DJI Mavic 3 Multispectral',
      'Torres Warka de captación atmosférica',
    ],
  },
  {
    capa: 'Capa de datos',
    items: [
      'Red LoRaWAN privada en parcelas remotas',
      'Lago de datos centralizado en cloud',
      'Procesado de imágenes Sentinel-2 vía Copernicus',
      'Modelos NDVI y biomasa propios',
    ],
  },
  {
    capa: 'Capa de transparencia',
    items: [
      'API pública para consulta de lotes y parcelas',
      'Reporte anual auditado por tercero',
      'Identificador único por árbol y por aportación',
      'Repositorio abierto de protocolos y especies',
    ],
  },
];

export default function TecnologiaStack() {
  return (
    <section className="relative py-12 lg:py-20 bg-ivory overflow-hidden">
      <div className="container-x max-w-7xl">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[3/4] lg:aspect-auto lg:h-[440px] w-full max-w-sm mx-auto lg:max-w-none order-2 lg:order-1"
          >
            <Image
              src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778888291/compost-stack-tres-capas_x2xz7p.png"
              alt="Compost en tres capas de madurez, símbolo del stack tecnológico"
              fill
              sizes="(max-width: 1024px) 80vw, 55vw"
              className="object-contain"
            />
          </motion.div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <SectionEyebrow>Stack técnico</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-semibold tracking-tight text-balance"
            >
              Tres capas, un mismo{' '}
              <span className="italic-display font-normal">propósito.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-lg"
            >
              Del suministro certificado al dato público. Cada capa de la pila
              técnica cumple una función concreta dentro del ciclo y se conecta
              con la siguiente sin fricción.
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {capas.map((c, i) => (
            <motion.div
              key={c.capa}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-ash pt-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-6">
                {c.capa}
              </p>
              <ul className="space-y-5">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="text-base lg:text-lg text-ink/85 leading-relaxed border-b border-ash/70 pb-5 last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
