'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

const europeo = [
  {
    titulo: 'Pacto Verde Europeo',
    descripcion: 'Marco general que establece la neutralidad climática de la UE para 2050.',
  },
  {
    titulo: 'Estrategia de Biodiversidad 2030',
    descripcion: 'Objetivo de plantar 3.000 millones de árboles adicionales en la UE para 2030.',
  },
  {
    titulo: 'Programa LIFE 2021-2027',
    descripcion: 'Instrumento principal de financiación ambiental europea. Convocatoria LIFE 2026 prevista.',
  },
  {
    titulo: 'Next Generation EU',
    descripcion: '€42.000 M asignados a España para objetivos climáticos. Componente 4: restauración de ecosistemas.',
  },
];

const espanol = [
  {
    titulo: 'Plan Forestal Español 2022-2032',
    descripcion: '€3.000 M para restauración forestal y lucha contra la desertificación.',
  },
  {
    titulo: 'Ley 7/2022 de residuos',
    descripcion: 'Obliga a los municipios a recoger separadamente los biorresiduos. Marco legal para la valorización.',
  },
  {
    titulo: 'Norma UNE 142500',
    descripcion: 'Estándar técnico de calidad del compost. Nuestro fertilizante cumple con todos los parámetros.',
  },
  {
    titulo: 'Ley Orgánica 1/2002',
    descripcion: 'Marco regulatorio bajo el que se constituye la asociación, inscrita en el Registro Nacional.',
  },
];

export default function ProyectoMarco() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone overflow-hidden">
      <div className="container-x max-w-7xl">

        {/* Cabecera con banderas al lado */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <SectionEyebrow>Marco institucional</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-semibold tracking-tight text-balance"
            >
              Alineados con los compromisos{' '}
              <span className="italic-display font-normal">más ambiciosos.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg lg:text-xl text-smoke leading-relaxed mt-8 max-w-xl"
            >
              EcoReforest no opera al margen de los marcos institucionales:
              opera dentro y desde dentro. Cada decisión técnica y económica
              del proyecto se diseña para encajar con las prioridades
              europeas y españolas en materia climática.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778869793/bandera-ue-espana-1_yqaoqp.png"
              alt="Banderas de la Unión Europea y España"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-8 pb-4 border-b border-ash">
              Marco europeo
            </p>
            <div className="space-y-10">
              {europeo.map((m, i) => (
                <motion.article
                  key={m.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mb-3">
                    {m.titulo}
                  </h3>
                  <p className="text-base text-smoke leading-relaxed max-w-md">
                    {m.descripcion}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-8 pb-4 border-b border-ash">
              Marco español
            </p>
            <div className="space-y-10">
              {espanol.map((m, i) => (
                <motion.article
                  key={m.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mb-3">
                    {m.titulo}
                  </h3>
                  <p className="text-base text-smoke leading-relaxed max-w-md">
                    {m.descripcion}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
