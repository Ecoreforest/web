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
    descripcion: 'Recogemos residuos orgánicos de mercados, supermercados y centrales hortofrutícolas que de otro modo acabarían en vertederos. Cada tonelada que recuperamos es una tonelada que no genera metano en un vertedero.',
    dato: '7,7M toneladas/año en España',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895095/paso-01-recolecci%C3%B3n_mottf9.png',
  },
  {
    numero: '02',
    titulo: 'Compostaje acelerado',
    descripcion: 'Mediante microorganismos específicos y control automatizado por sensores IoT, transformamos los residuos en compost de alta calidad en 30-45 días. Tres veces más rápido que el método tradicional, y con mayor concentración nutricional.',
    dato: '3× más rápido que el método tradicional',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895098/paso-02-compostaje_k6ibj4.png',
  },
  {
    numero: '03',
    titulo: 'Plantación',
    descripcion: 'Aplicamos el compost en zonas degradadas y plantamos especies autóctonas adaptadas: encina, algarrobo, pino carrasco, acebuche y retama. Cada árbol elegido por su capacidad de prosperar en suelo árido.',
    dato: '85% de supervivencia garantizada',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895093/paso-03-plantacion_v5ylho.png',
  },
  {
    numero: '04',
    titulo: 'Monitoreo',
    descripcion: 'Drones multiespectrales, sensores IoT en campo y análisis satelital vigilan cada hectárea en tiempo real: humedad del suelo, salud de la vegetación y captura de carbono certificada.',
    dato: '8-10 t CO₂/ha/año capturado',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895088/paso-04-monitoreo_p5xvfu.png',
  },
];

function Paso({ paso, index }: { paso: typeof pasos[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  const isReverse = index % 2 === 1;

  return (
    <article ref={ref} className="relative py-20 lg:py-32">
      <div className="container-x max-w-7xl">
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>

          {/* Texto */}
          <div className={`lg:col-span-5 ${isReverse ? 'lg:col-start-8' : 'lg:col-start-1'}`}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-sm tracking-[0.25em] text-forest mb-5"
            >
              PASO {paso.numero}
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight mb-6 leading-[1]"
            >
              {paso.titulo}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base lg:text-lg text-smoke leading-relaxed mb-10 max-w-md"
            >
              {paso.descripcion}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-ash max-w-md"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-smoke mb-2">
                Dato clave
              </p>
              <p className="text-xl lg:text-2xl font-medium tracking-tight">
                {paso.dato}
              </p>
            </motion.div>
          </div>

          {/* Imagen con parallax */}
          <div className={`lg:col-span-7 ${isReverse ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-6'}`}>
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-sm bg-ivory"
            >
              <motion.div
                style={{ scale: imageScale }}
                className="absolute inset-0"
              >
                <Image
                  src={paso.imagen}
                  alt={paso.titulo}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </article>
  );
}

export default function HomeProceso() {
  return (
    <section className="relative bg-bone">
      {/* Cabecera */}
      <div className="container-x pt-32 lg:pt-48 pb-8 max-w-6xl">
        <SectionEyebrow>El proceso</SectionEyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
        >
          Del residuo al bosque,{' '}
          <span className="italic-display font-normal">en cuatro pasos.</span>
        </motion.h2>
      </div>

      {/* Los 4 pasos */}
      {pasos.map((paso, i) => (
        <Paso key={paso.numero} paso={paso} index={i} />
      ))}

      {/* CTA */}
      <div className="container-x max-w-6xl pb-32 lg:pb-48 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 pt-12 border-t border-ash"
        >
          <Link
            href="/proceso"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-ink text-bone rounded-full font-medium hover:bg-forest transition-colors"
          >
            Ver el proceso completo
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
