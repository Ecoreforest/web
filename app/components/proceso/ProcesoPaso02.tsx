'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const subprocesos = [
  {
    titulo: 'Pretratamiento',
    descripcion: 'Trituración y mezcla de residuos húmedos con materiales secos hasta alcanzar una relación carbono/nitrógeno óptima de 25-30:1.',
  },
  {
    titulo: 'Inoculación microbiana',
    descripcion: 'Consorcios específicos de bacterias termófilas, actinomicetos y hongos aceleran la descomposición y mejoran la calidad final.',
  },
  {
    titulo: 'Control IoT',
    descripcion: 'Sensores monitorizan en continuo temperatura (55-65 °C), humedad (50-60%), pH (6,5-8,0) y oxígeno, ajustando aireación y riego.',
  },
  {
    titulo: 'Cribado y maduración',
    descripcion: 'Cribado por granulometrías y maduración de 2 a 4 semanas para estabilizar nutrientes y eliminar cualquier fitotoxicidad residual.',
  },
];

export default function ProcesoPaso02() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-ivory">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Imagen con parallax (izquierda) */}
          <div className="lg:col-span-7 lg:order-1 order-2">
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-sm bg-bone"
            >
              <motion.div style={{ scale: imageScale }} className="absolute inset-0">
                <Image
                  src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895098/paso-02-compostaje_k6ibj4.png"
                  alt="Proceso de compostaje acelerado"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Texto (derecha) */}
          <div className="lg:col-span-5 lg:order-2 order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-sm tracking-[0.25em] text-forest mb-5"
            >
              PASO 02
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight mb-6 leading-[1]"
            >
              Compostaje acelerado
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base lg:text-lg text-smoke leading-relaxed mb-10 max-w-md"
            >
              Microorganismos específicos, control automatizado y volteo mecánico convierten los residuos en compost de alta calidad en 30 a 45 días. Tres veces más rápido que el método tradicional, y con una concentración nutricional superior.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-ash max-w-md"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-smoke mb-3">
                Estándar de calidad
              </p>
              <p className="text-2xl lg:text-3xl font-medium tracking-tight">
                Norma UNE 142500
              </p>
              <p className="text-sm text-smoke mt-2">
                Materia orgánica &gt;40% · C/N &lt;20 · Apto agricultura ecológica
              </p>
            </motion.div>
          </div>
        </div>

        {/* Subprocesos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 pt-16 border-t border-ash"
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-12">
            Las cuatro etapas del proceso
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {subprocesos.map((sp, i) => (
              <motion.div
                key={sp.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-xs text-smoke mb-4">0{i + 1}</p>
                <h4 className="text-lg lg:text-xl font-semibold tracking-tight mb-3">
                  {sp.titulo}
                </h4>
                <p className="text-base text-smoke leading-relaxed">
                  {sp.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rendimiento destacado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-24 grid lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-4">
              Rendimiento
            </p>
            <h3 className="text-display-sm font-semibold tracking-tight">
              Tres toneladas de compost por cada{' '}
              <span className="italic-display font-normal text-forest">
                tonelada
              </span>{' '}
              de residuo procesado.
            </h3>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base lg:text-lg text-smoke leading-relaxed">
              El compost final contiene microorganismos beneficiosos que forman redes simbióticas con las raíces, nutrientes de liberación lenta (nitrógeno, fósforo, potasio), y mejora simultáneamente la estructura física, química y biológica del suelo donde se aplica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
