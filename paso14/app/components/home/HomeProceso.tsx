'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 14:
 * - Consolida el cambio de imagen del paso 01 introducido en el paso 13.2
 *   (vista aérea de terreno degradado).
 * - Cambia el CTA final "Ver el proceso completo" (que apuntaba a /proceso,
 *   ya eliminada) por "Conoce el proyecto" apuntando a /proyecto. Los 4 pasos
 *   operativos viven aquí en la home; el porqué y el balance del ciclo viven
 *   en /proyecto.
 */

const pasos = [
  {
    numero: '01',
    titulo: 'Selección de terreno',
    descripcion: 'Identificamos parcelas con administraciones, propietarios privados y comunidades locales. Estudio edafoclimático y diseño técnico ajustado al bioma. Sin diseño previo no hay plantación que sobreviva.',
    dato: 'Diseño en mosaico · Especies autóctonas',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/v1784171735/paso-01-terreno-aereo.jpg_bidvrr.webp',
  },
  {
    numero: '02',
    titulo: 'Suministro certificado de compost',
    descripcion: 'Compramos compost UNE 142500 a productores españoles certificados. Cada lote entrante pasa análisis fisicoquímico independiente antes de aprobarse. Externalizamos la producción para concentrarnos en lo que solo nosotros hacemos: la reforestación.',
    dato: 'UNE 142500 · Análisis por lote',
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
    <article ref={ref} className="relative py-10 lg:py-14">
      <div className="container-x max-w-7xl">
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>

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
      <div className="container-x pt-24 lg:pt-32 pb-8 max-w-6xl">
        <SectionEyebrow>El proceso</SectionEyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
        >
          Del terreno al bosque,{' '}
          <span className="italic-display font-normal">en cuatro pasos.</span>
        </motion.h2>
      </div>

      {pasos.map((paso, i) => (
        <Paso key={paso.numero} paso={paso} index={i} />
      ))}

      <div className="container-x max-w-6xl pb-24 lg:pb-32 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 pt-12 border-t border-ash"
        >
          <Link
            href="/proyecto"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-ink text-bone rounded-full font-medium hover:bg-forest transition-colors"
          >
            Conoce el proyecto
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
