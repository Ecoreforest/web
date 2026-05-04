'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

const pasos = [
  {
    numero: '01',
    titulo: 'Recolección',
    descripcion: 'Recogemos residuos orgánicos de mercados, supermercados y centrales hortofrutícolas que de otro modo acabarían en vertederos.',
    dato: '7,7M toneladas/año en España',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895095/paso-01-recolecci%C3%B3n_mottf9.png',
  },
  {
    numero: '02',
    titulo: 'Compostaje acelerado',
    descripcion: 'Mediante microorganismos específicos y control automatizado, transformamos los residuos en compost de alta calidad en 30-45 días.',
    dato: '3× más rápido que el método tradicional',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895098/paso-02-compostaje_k6ibj4.png',
  },
  {
    numero: '03',
    titulo: 'Plantación',
    descripcion: 'Aplicamos el compost en zonas degradadas y plantamos especies autóctonas adaptadas: encina, algarrobo, pino carrasco, acebuche y retama.',
    dato: '85% de supervivencia garantizada',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895093/paso-03-plantacion_v5ylho.png',
  },
  {
    numero: '04',
    titulo: 'Monitoreo',
    descripcion: 'Drones multiespectrales y sensores IoT vigilan cada hectárea en tiempo real: humedad del suelo, salud de la vegetación y captura de carbono.',
    dato: '8-10 t CO₂/ha/año capturado',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895088/paso-04-monitoreo_p5xvfu.png',
  },
];

export default function HomeProceso() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Movimiento horizontal: 4 pantallas (75% en horizontal)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={ref} className="relative bg-bone" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="container-x pt-24 pb-8 lg:pt-28 lg:pb-12 shrink-0">
          <SectionEyebrow>El proceso</SectionEyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-md font-semibold tracking-tight max-w-4xl text-balance"
          >
            Del residuo al bosque,{' '}
            <span className="italic-display font-normal">en cuatro pasos.</span>
          </motion.h2>
        </div>

        <motion.div
          style={{ x }}
          className="flex flex-1 will-change-transform"
        >
          {pasos.map((paso) => (
            <article
              key={paso.numero}
              className="w-screen shrink-0 flex items-center"
            >
              <div className="container-x w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 lg:col-start-1">
                  <p className="font-mono text-sm tracking-[0.25em] text-forest mb-6">
                    PASO {paso.numero}
                  </p>
                  <h3 className="text-display-md font-semibold tracking-tight mb-6">
                    {paso.titulo}
                  </h3>
                  <p className="text-base lg:text-lg text-smoke leading-relaxed mb-8 max-w-md">
                    {paso.descripcion}
                  </p>
                  <div className="pt-6 border-t border-ash">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-smoke mb-2">
                      Dato clave
                    </p>
                    <p className="text-xl lg:text-2xl font-medium tracking-tight">
                      {paso.dato}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:col-start-7 relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-sm">
                  <Image
                    src={paso.imagen}
                    alt={paso.titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        <div className="container-x py-6 shrink-0 flex items-center justify-between border-t border-ash/60">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-smoke">
            Desliza para avanzar
          </p>
          <Link
            href="/proceso"
            className="text-sm font-medium underline underline-offset-4 decoration-ash hover:decoration-ink transition-colors"
          >
            Ver el proceso completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
