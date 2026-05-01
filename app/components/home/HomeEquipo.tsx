'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const equipo = [
  {
    nombre: 'Àlex Frías Díez',
    rol: 'Presidente',
    iniciales: 'AF',
    bio: 'Funda EcoReforest con la convicción de que la economía circular es la respuesta práctica al doble desafío de la desertificación y los residuos orgánicos en España.',
  },
  {
    nombre: 'Izan Jiménez Bernardo',
    rol: 'Secretario',
    iniciales: 'IJ',
    bio: 'Responsable de la coordinación operativa del proyecto, la gestión de alianzas institucionales y el seguimiento riguroso de cada hito.',
  },
  {
    nombre: 'Santiago Colino',
    rol: 'Tesorero',
    iniciales: 'SC',
    bio: 'Lidera la planificación financiera, la estrategia de captación de fondos europeos y la transparencia económica de la asociación.',
  },
];

export default function HomeEquipo() {
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
            Tres personas. Una{' '}
            <span className="italic-display font-normal">misma idea.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-smoke leading-relaxed mt-8 max-w-2xl"
          >
            Un equipo pequeño, con visión clara y compromiso a largo plazo. Detrás de EcoReforest hay nombres y caras. No empresas opacas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {equipo.map((persona, i) => (
            <motion.article
              key={persona.nombre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone mb-6">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bone via-ivory to-ash/50">
                  <span className="text-display-xl font-display italic font-normal text-forest/30 select-none">
                    {persona.iniciales}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ash to-transparent" />
              </div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-3">
                {persona.rol}
              </p>
              <h3 className="text-display-sm font-semibold tracking-tight mb-4">
                {persona.nombre}
              </h3>
              <p className="text-base text-smoke leading-relaxed">
                {persona.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
