'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

/**
 * EquipoFundadores con fotos reales + bios extendidas trasladadas desde
 * el antiguo bloque ProyectoEquipo. Las 3 fotos están ya subidas a
 * Cloudinary.
 */
type Fundador = {
  nombre: string;
  bio1: string;
  bio2: string;
  imagen: string;
};

const fundadores: Fundador[] = [
  {
    nombre: 'Àlex Frías Díez',
    bio1:
      'Gestor forestal y medio ambiental. Funda EcoReforest con la convicción de que la economía circular es la respuesta práctica al doble desafío de la desertificación y los residuos orgánicos en España. Su mayor pasión es plantar árboles, dar vida y crear bosques en donde antes solo había polvo y arena.',
    bio2:
      'Lidera la estrategia general, la relación con instituciones y la coordinación de los proyectos de financiación europea que articulan el proyecto a largo plazo. Es la mente detrás de todo.',
    imagen:
      'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895087/equipo-alex_kyitiu.png',
  },
  {
    nombre: 'Izan Jiménez Bernardo',
    bio1:
      'Auditor. Responsable de la coordinación operativa del proyecto, la gestión documental de la asociación y el seguimiento riguroso de cada hito.',
    bio2:
      'Su trabajo asegura que cada paso —desde un acuerdo con un ayuntamiento hasta la organización de una plantación— se ejecute con el orden que el proyecto necesita.',
    imagen:
      'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895101/equipo-izan_innsrp.png',
  },
  {
    nombre: 'Santiago Colino',
    bio1:
      'Creative Business. Lidera la innovación y las alianzas estratégicas (LIFE 2026, Next Generation EU) y la transparencia económica de la asociación.',
    bio2:
      'Diseña los modelos económicos que sustentan el plan a cinco años y supervisa cada euro que entra y sale del proyecto.',
    imagen:
      'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895095/equipo-santi_syr0vi.png',
  },
];

export default function EquipoFundadores() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Junta Directiva fundadora</SectionEyebrow>

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
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            Tres fundadores. Tres responsabilidades complementarias. Una visión
            compartida para los próximos años.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {fundadores.map((f, i) => (
            <motion.article
              key={f.nombre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone">
                <Image
                  src={f.imagen}
                  alt={`Retrato de ${f.nombre}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-8">
                <h3
                  className="font-semibold tracking-tight leading-[1] mb-6"
                  style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}
                >
                  {f.nombre}
                  <span className="italic-display font-normal text-forest">.</span>
                </h3>

                <div className="space-y-4 text-base text-smoke leading-relaxed">
                  <p>{f.bio1}</p>
                  <p>{f.bio2}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
