'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Cada fundador puede tener `imagen` (URL Cloudinary) o quedarse en undefined
 * y se renderiza el retrato tipográfico con sus iniciales como placeholder.
 * Para activar la foto real, simplemente añade el campo `imagen` con la URL:
 *   imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/vXXXXXXX/equipo-alex_XXXX.jpg'
 */
type Fundador = {
  iniciales: string;
  nombre: string;
  cargo: string;
  bio: string;
  imagen?: string;
};

const fundadores: Fundador[] = [
  {
    iniciales: 'AF',
    nombre: 'Àlex Frías Díez',
    cargo: 'Presidente',
    bio: 'Lidera la visión estratégica del proyecto, las relaciones institucionales y la coordinación general entre las áreas técnica, financiera y de comunicación.',
    // imagen: 'https://res.cloudinary.com/dekgmk73i/...equipo-alex...'
  },
  {
    iniciales: 'IJ',
    nombre: 'Izan Jiménez Bernardo',
    cargo: 'Secretario',
    bio: 'Responsable de la documentación oficial, las actas de la Junta Directiva, el registro de socios y el cumplimiento normativo de la asociación.',
    // imagen: 'https://res.cloudinary.com/dekgmk73i/...equipo-izan...'
  },
  {
    iniciales: 'SC',
    nombre: 'Santiago Colino',
    cargo: 'Tesorero',
    bio: 'Gestiona el presupuesto, la contabilidad, las donaciones y los controles financieros. Supervisa la transparencia económica del proyecto.',
    // imagen: 'https://res.cloudinary.com/dekgmk73i/...equipo-santiago...'
  },
];

function Portrait({ fundador }: { fundador: Fundador }) {
  if (fundador.imagen) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ivory">
        <Image
          src={fundador.imagen}
          alt={`Retrato de ${fundador.nombre}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    );
  }

  // Retrato tipográfico de fallback. Estético, intencional, no parece "imagen rota".
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-forest text-bone flex items-center justify-center grain">
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-forest-deep" />
      <span
        className="italic-display font-normal text-bone/95 relative z-10"
        style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}
      >
        {fundador.iniciales}
      </span>
      <span className="absolute bottom-4 left-4 text-[10px] font-mono uppercase tracking-[0.25em] text-bone/55">
        Retrato pendiente
      </span>
    </div>
  );
}

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
            Tres roles,{' '}
            <span className="italic-display font-normal">una misma misión.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            La asociación se constituyó con una Junta Directiva mínima y
            funcional, pensada para ejecutar la fase preparatoria sin
            burocracia innecesaria.
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
              <Portrait fundador={f} />

              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-3">
                  {f.cargo}
                </p>
                <h3
                  className="font-semibold tracking-tight leading-[1] mb-5"
                  style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}
                >
                  {f.nombre}
                  <span className="italic-display font-normal text-forest">.</span>
                </h3>
                <p className="text-base text-smoke leading-relaxed max-w-md">
                  {f.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
