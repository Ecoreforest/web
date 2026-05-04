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

  // 4 pasos: cada paso ocupa una sección del 25% del scroll.
  // Movimiento total: -75% (3 desplazamientos de 25% para 4 pantallas).
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  // Indicador de paso activo (0, 1, 2, 3)
  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  return (
    <section ref={ref} className="relative bg-bone" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Header sticky con eyebrow + título */}
        <div className="container-x pt-24 pb-4 lg:pt-28 lg:pb-6 shrink-0">
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

        {/* Pasos en desplazamiento horizontal */}
        <motion.div
          style={{ x }}
          className="flex flex-1 will-change-transform"
        >
          {pasos.map((paso) => (
            <article
              key={paso.numero}
              className="w-screen shrink-0 flex items-center px-6 md:px-10 lg:px-16 py-6"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

                {/* Columna texto */}
                <div className="order-2 lg:order-1">
                  <p className="font-mono text-sm tracking-[0.25em] text-forest mb-5">
                    PASO {paso.numero}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 leading-[1.05]">
                    {paso.titulo}
                  </h3>
                  <p className="text-base lg:text-lg text-smoke leading-relaxed mb-7 max-w-md">
                    {paso.descripcion}
                  </p>
                  <div className="pt-5 border-t border-ash max-w-md">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-smoke mb-2">
                      Dato clave
                    </p>
                    <p className="text-lg lg:text-xl font-medium tracking-tight">
                      {paso.dato}
                    </p>
                  </div>
                </div>

                {/* Columna imagen */}
                <div className="order-1 lg:order-2 relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm bg-ivory">
                  <Image
                    src={paso.imagen}
                    alt={paso.titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={paso.numero === '01'}
                  />
                </div>

              </div>
            </article>
          ))}
        </motion.div>

        {/* Footer sticky con indicador de progreso */}
        <div className="container-x py-5 shrink-0 flex items-center justify-between border-t border-ash/60 bg-bone">
          <div className="flex items-center gap-2">
            {pasos.map((p, i) => (
              <ProgresoBullet key={p.numero} index={i} activeIndex={activeIndex} />
            ))}
          </div>
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

function ProgresoBullet({ index, activeIndex }: { index: number; activeIndex: any }) {
  const opacity = useTransform(activeIndex, (v: number) => {
    return Math.abs(v - index) < 0.5 ? 1 : 0.25;
  });
  const width = useTransform(activeIndex, (v: number) => {
    return Math.abs(v - index) < 0.5 ? '32px' : '8px';
  });

  return (
    <motion.div
      style={{ opacity, width }}
      className="h-[2px] bg-forest rounded-full transition-all"
    />
  );
}
