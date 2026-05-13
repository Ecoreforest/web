'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const subprocesos = [
  {
    titulo: 'Fuentes de origen',
    descripcion: 'Mercados mayoristas, industria agroalimentaria y centrales hortofrutícolas. Recogemos lo que ya está clasificado en origen, sin contaminación cruzada.',
  },
  {
    titulo: 'Logística optimizada',
    descripcion: 'Rutas planificadas para minimizar la huella de transporte. Vehículos especializados que mantienen la cadena de frío cuando es necesaria.',
  },
  {
    titulo: 'Control de calidad',
    descripcion: 'Cada lote se inspecciona antes de entrar a la planta. La calidad del compost final empieza en la calidad de lo que recogemos.',
  },
];

export default function ProcesoPaso01() {
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
              PASO 01
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight mb-6 leading-[1]"
            >
              Recolección
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base lg:text-lg text-smoke leading-relaxed mb-10 max-w-md"
            >
              El ciclo empieza donde otros lo terminan. Recogemos los residuos orgánicos de frutas y verduras que mercados, supermercados y centrales hortofrutícolas iban a enviar al vertedero. Cada tonelada que recuperamos es una tonelada de metano que no se emite.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-ash max-w-md"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-smoke mb-3">
                Volumen objetivo planta inicial
              </p>
              <p className="text-2xl lg:text-3xl font-medium tracking-tight">
                2.000 — 7.200 t / año
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
                  src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895095/paso-01-recolecci%C3%B3n_mottf9.png"
                  alt="Recolección de residuos orgánicos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </motion.div>
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
            Cómo lo hacemos
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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

        {/* Por qué importa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-24 grid lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-4">
              Por qué importa
            </p>
            <h3 className="text-display-sm font-semibold tracking-tight">
              Solo el{' '}
              <span className="italic-display font-normal text-forest">
                23%
              </span>{' '}
              de los residuos orgánicos en España se valoriza.
            </h3>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base lg:text-lg text-smoke leading-relaxed">
              El 77% restante —5,9 millones de toneladas— acaba en vertederos donde, al descomponerse sin oxígeno, genera 2,1 millones de toneladas de CO₂ equivalente al año. Recuperar ese flujo no es solo recogerlo: es darle un destino productivo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
