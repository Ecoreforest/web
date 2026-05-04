'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

const equipo = [
  {
    nombre: 'Àlex Frías Díez',
    rol: 'Presidente',
    foto: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895087/equipo-alex_kyitiu.png',
    cita:
      'Cada residuo que se entierra es un bosque que no se planta. Esa cuenta no me sale.',
    bio: [
      'Funda EcoReforest con la convicción de que la economía circular es la respuesta práctica al doble desafío de la desertificación y los residuos orgánicos en España.',
      'Lidera la estrategia general, la relación con instituciones y el diseño del modelo dual asociación-empresa que articula el proyecto a largo plazo.',
    ],
  },
  {
    nombre: 'Izan Jiménez Bernardo',
    rol: 'Secretario',
    foto: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895101/equipo-izan_innsrp.png',
    cita:
      'Las buenas intenciones sin ejecución no plantan árboles. La operativa importa tanto como la idea.',
    bio: [
      'Responsable de la coordinación operativa del proyecto, la gestión documental de la asociación y el seguimiento riguroso de cada hito.',
      'Su trabajo asegura que cada paso —desde un acuerdo con un ayuntamiento hasta la organización de una plantación— se ejecute con el orden que el proyecto necesita.',
    ],
  },
  {
    nombre: 'Santiago Colino',
    rol: 'Tesorero',
    foto: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895095/equipo-santi_syr0vi.png',
    cita:
      'La transparencia financiera es la primera prueba de credibilidad ambiental.',
    bio: [
      'Lidera la planificación financiera, la estrategia de captación de fondos europeos (LIFE 2026, Next Generation EU) y la transparencia económica de la asociación.',
      'Diseña los modelos económicos que sustentan el plan a cinco años y supervisa cada euro que entra y sale del proyecto.',
    ],
  },
];

export default function ProyectoEquipo() {
  return (
    <section id="equipo" className="relative py-32 lg:py-48 bg-ivory">
      <div className="container-x max-w-7xl">
        <div className="max-w-4xl mb-20 lg:mb-28">
          <SectionEyebrow>Equipo fundador</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Nombres y caras{' '}
            <span className="italic-display font-normal">detrás del bosque.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-smoke leading-relaxed mt-8 max-w-2xl"
          >
            Tres fundadores. Tres responsabilidades complementarias. Una visión
            compartida para los próximos diez años.
          </motion.p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {equipo.map((p, i) => {
            const isReverse = i % 2 === 1;
            return (
              <motion.article
                key={p.nombre}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-5 ${
                    isReverse ? 'lg:col-start-8' : 'lg:col-start-1'
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone">
                    <Image
                      src={p.foto}
                      alt={p.nombre}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 ${
                    isReverse ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-7'
                  }`}
                >
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-5">
                    {p.rol}
                  </p>

                  <h3 className="text-display-md font-semibold tracking-tight leading-[1.05] mb-8">
                    {p.nombre}
                  </h3>

                  <blockquote className="text-2xl lg:text-3xl font-light italic-display text-balance leading-snug text-ink/85 mb-10 pl-6 border-l border-forest/40">
                    «{p.cita}»
                  </blockquote>

                  {p.bio.map((parrafo, j) => (
                    <p
                      key={j}
                      className="text-base lg:text-lg text-smoke leading-relaxed mb-5 last:mb-0 max-w-xl"
                    >
                      {parrafo}
                    </p>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
