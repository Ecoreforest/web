'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const tecnologias = [
  {
    titulo: 'Drones multiespectrales',
    descripcion: 'Vuelos periódicos con cámaras NDVI para medir el vigor de la vegetación, detectar estrés hídrico y anticipar plagas antes de que sean visibles.',
  },
  {
    titulo: 'Sensores IoT en campo',
    descripcion: 'Red inalámbrica 24/7 que mide humedad del suelo, temperatura y precipitación. Datos enviados en tiempo real a la plataforma central.',
  },
  {
    titulo: 'Análisis satelital',
    descripcion: 'Imágenes de alta resolución de Sentinel-2 y Landsat para seguir cambios en cobertura vegetal a escala de hectárea y de paisaje.',
  },
  {
    titulo: 'Plataforma integrada',
    descripcion: 'Software propio que cruza datos de drones, sensores, satélites y mediciones de campo. Una sola fuente de verdad para cada proyecto.',
  },
];

export default function ProcesoPaso04() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Imagen con parallax (izquierda) */}
          <div className="lg:col-span-7 lg:order-1 order-2">
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-sm bg-graphite"
            >
              <motion.div style={{ scale: imageScale }} className="absolute inset-0">
                <Image
                  src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895088/paso-04-monitoreo_p5xvfu.png"
                  alt="Monitoreo con drones, sensores IoT y análisis satelital"
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
              PASO 04
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight mb-6 leading-[1]"
            >
              Monitoreo
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base lg:text-lg text-bone/70 leading-relaxed mb-10 max-w-md"
            >
              Una vez plantado el bosque, empieza el trabajo invisible: medir, verificar, ajustar. Cada hectárea está vigilada desde el aire, el suelo y el espacio. Lo que no se mide, no existe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-bone/15 max-w-md"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-bone/50 mb-3">
                Captura de carbono verificada
              </p>
              <p className="text-2xl lg:text-3xl font-medium tracking-tight">
                8 — 10 t CO₂ / ha / año
              </p>
              <p className="text-sm text-bone/55 mt-2">
                Biomasa aérea, subterránea y carbono del suelo
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 pt-16 border-t border-bone/15"
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-12">
            Cuatro capas de información
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {tecnologias.map((t, i) => (
              <motion.div
                key={t.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-xs text-bone/50 mb-4">0{i + 1}</p>
                <h4 className="text-lg lg:text-xl font-semibold tracking-tight mb-3">
                  {t.titulo}
                </h4>
                <p className="text-base text-bone/65 leading-relaxed">
                  {t.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 lg:mt-32 grid lg:grid-cols-12 gap-10 items-start pt-16 border-t border-bone/15"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone/50 mb-4">
              Verificación independiente
            </p>
            <h3 className="text-display-sm font-semibold tracking-tight">
              Cada tonelada capturada se{' '}
              <span className="italic-display font-normal">audita.</span>
            </h3>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base lg:text-lg text-bone/70 leading-relaxed">
              Usamos metodologías aprobadas por Verra (VCS) y Gold Standard, los dos estándares más exigentes del mercado voluntario de carbono. Mediciones de campo, análisis de laboratorio y auditorías de terceros certificados convierten cada hectárea en un activo trazable y vendible como crédito de carbono.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
