'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

const tech = [
  { nombre: 'Compostaje acelerado', dato: '30-45 días' },
  { nombre: 'Drones multiespectrales', dato: 'NDVI en tiempo real' },
  { nombre: 'Sensores IoT', dato: '24/7 en campo' },
  { nombre: 'Análisis satelital', dato: 'Sentinel-2 · Landsat' },
  { nombre: 'Torre Warka', dato: 'Agua atmosférica' },
  { nombre: 'Gestión integrada', dato: 'Plataforma propia' },
];

export default function HomeTecnologia() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative bg-ink text-bone overflow-hidden">
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895092/bosque-mediterraneo_peuyt6.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </motion.div>

      <div className="relative container-x max-w-7xl py-32 lg:py-48">
        <SectionEyebrow light>Tecnología</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
        >
          Ciencia, ingeniería y{' '}
          <span className="italic-display font-normal">rigor</span>{' '}
          en cada hectárea.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg lg:text-xl text-bone/65 max-w-2xl leading-relaxed mt-8"
        >
          Cada paso del proceso se monitoriza con tecnología de última generación. Lo que no se mide, no se mejora.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-14 mt-20 lg:mt-28 pt-16 border-t border-bone/15">
          {tech.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-display-sm font-semibold tracking-tight mb-2">
                {t.nombre}
              </p>
              <p className="font-mono text-sm tracking-wide text-bone/55">
                {t.dato}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <Link
            href="/tecnologia"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-bone/30 text-bone rounded-full font-medium hover:bg-bone hover:text-ink transition-all"
          >
            Conoce nuestra tecnología
            <span className="inline-block">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
