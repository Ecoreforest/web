'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const especies = [
  { nombre: 'Encina', latin: 'Quercus ilex', detalle: 'Sobrevive con 300-400 mm anuales' },
  { nombre: 'Algarrobo', latin: 'Ceratonia siliqua', detalle: 'Fijador de nitrógeno, frutos comestibles' },
  { nombre: 'Pino carrasco', latin: 'Pinus halepensis', detalle: 'Crecimiento rápido, estabiliza suelo' },
  { nombre: 'Acebuche', latin: 'Olea europaea sylvestris', detalle: 'Olivo silvestre con gran rebrote' },
  { nombre: 'Retama', latin: 'Retama sphaerocarpa', detalle: 'Pionera, mejora suelo para otras' },
];

const tecnicasAgua = [
  {
    titulo: 'Zanjas de infiltración (swales)',
    descripcion: 'Depresiones lineales en curvas de nivel que aumentan la infiltración del agua hasta un 500%.',
  },
  {
    titulo: 'Pozos de concentración (zai)',
    descripcion: 'Hoyos rellenos de compost que concentran agua y nutrientes alrededor de cada planta.',
  },
  {
    titulo: 'Mulching orgánico',
    descripcion: 'Capa de 5-10 cm de compost que reduce evaporación, mantiene humedad y libera nutrientes.',
  },
  {
    titulo: 'Torre Warka',
    descripcion: 'Estructura pasiva que recoge agua atmosférica (rocío y niebla) sin necesidad de electricidad.',
  },
];

export default function ProcesoPaso03() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Texto (izquierda) */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-sm tracking-[0.25em] text-forest mb-5"
            >
              PASO 03
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight mb-6 leading-[1]"
            >
              Plantación
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base lg:text-lg text-smoke leading-relaxed mb-10 max-w-md"
            >
              Aplicamos el compost en zonas degradadas y plantamos especies autóctonas adaptadas a la sequía. Cada árbol está elegido por su capacidad de prosperar en suelo árido y de aportar valor al ecosistema que reconstruimos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-ash max-w-md"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-smoke mb-3">
                Densidad de plantación
              </p>
              <p className="text-2xl lg:text-3xl font-medium tracking-tight">
                400 — 1.200 plantas / ha
              </p>
              <p className="text-sm text-smoke mt-2">
                Época: otoño-invierno (octubre a febrero)
              </p>
            </motion.div>
          </div>

          {/* Imagen con parallax (derecha) */}
          <div className="lg:col-span-7">
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-sm bg-ivory"
            >
              <motion.div style={{ scale: imageScale }} className="absolute inset-0">
                <Image
                  src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895093/paso-03-plantacion_v5ylho.png"
                  alt="Plantación con especies autóctonas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Especies autóctonas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 pt-16 border-t border-ash"
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-12">
            Especies prioritarias
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
            {especies.map((e, i) => (
              <motion.div
                key={e.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-xs text-smoke mb-3">0{i + 1}</p>
                <h4 className="text-lg lg:text-xl font-semibold tracking-tight mb-1">
                  {e.nombre}
                </h4>
                <p className="italic-display text-smoke text-sm mb-3">
                  {e.latin}
                </p>
                <p className="text-sm text-smoke leading-relaxed">
                  {e.detalle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conservación de agua */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 lg:mt-32"
        >
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-4">
              Conservación del agua
            </p>
            <h3 className="text-display-sm font-semibold tracking-tight text-balance">
              En zonas áridas, el agua es el{' '}
              <span className="italic-display font-normal text-forest">
                factor crítico.
              </span>{' '}
              Por eso no la traemos: la conservamos.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-12 border-t border-ash">
            {tecnicasAgua.map((t, i) => (
              <motion.div
                key={t.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-xs text-smoke mb-3">0{i + 1}</p>
                <h4 className="text-lg lg:text-xl font-semibold tracking-tight mb-3 leading-tight">
                  {t.titulo}
                </h4>
                <p className="text-base text-smoke leading-relaxed">
                  {t.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
