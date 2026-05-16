'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

export default function HojaRutaEstado() {
  return (
    <section className="relative py-20 lg:py-28 bg-bone">
      <div className="container-x max-w-5xl">
        <SectionEyebrow>Estado actual · mayo 2026</SectionEyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance max-w-4xl"
        >
          Dónde estamos{' '}
          <span className="italic-display font-normal">hoy.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 space-y-6 text-lg lg:text-xl text-smoke leading-relaxed max-w-3xl"
        >
          <p>
            EcoReforest Asociación está{' '}
            <strong className="text-ink font-semibold">inscrita en el
            Registro Nacional de Asociaciones</strong>, tras la presentación
            del expediente el 22 de abril de 2026. La asociación opera con
            personalidad jurídica plena.
          </p>
          <p>
            Con esa base resuelta, el foco actual es la fase preparatoria:
            ordenar la red de aliados territoriales, identificar terrenos
            piloto, cerrar acuerdos con propietarios, ayuntamientos,
            universidades y gestores de residuos, y dejar lista la estructura
            técnica para arrancar la primera plantación.
          </p>
          <p className="text-ink">
            Cada compromiso público que asumimos puede demostrarse con un
            documento, un convenio o un dato. Si todavía no podemos demostrar
            algo, no lo prometemos.
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 pt-12 border-t border-ash"
        >
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-3">
              Forma jurídica
            </dt>
            <dd className="text-base lg:text-lg text-ink leading-relaxed">
              Asociación sin ánimo de lucro de ámbito nacional, inscrita en el RNA.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-3">
              Fase activa
            </dt>
            <dd className="text-base lg:text-lg text-ink leading-relaxed">
              Fase I · preparatoria. Alianzas territoriales, dossier técnico y
              diseño de pilotos.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-3">
              Próximo hito
            </dt>
            <dd className="text-base lg:text-lg text-ink leading-relaxed">
              Lanzamiento institucional en septiembre 2026 y primera plantación
              en Galicia en octubre 2026.
            </dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
