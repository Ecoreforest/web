'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

type Area = {
  numero: string;
  nombre: string;
  funcion: string;
  perfil: string;
  estado: 'cubierta' | 'abierta';
};

const areas: Area[] = [
  {
    numero: '01',
    nombre: 'Presidencia / dirección estratégica',
    funcion: 'Relaciones institucionales, visión y coordinación general.',
    perfil: 'Experiencia en gestión, sostenibilidad o emprendimiento social.',
    estado: 'cubierta',
  },
  {
    numero: '02',
    nombre: 'Secretaría',
    funcion: 'Actas, registro documental, socios y cumplimiento normativo.',
    perfil: 'Perfil administrativo o jurídico.',
    estado: 'cubierta',
  },
  {
    numero: '03',
    nombre: 'Tesorería',
    funcion: 'Presupuesto, contabilidad, donaciones y control financiero.',
    perfil: 'Perfil financiero o contable.',
    estado: 'cubierta',
  },
  {
    numero: '04',
    nombre: 'Técnica forestal',
    funcion: 'Diseño de pilotos, selección de especies, suelos y seguimiento.',
    perfil: 'Ingeniería forestal, ambiental o agronómica.',
    estado: 'abierta',
  },
  {
    numero: '05',
    nombre: 'Compostaje y biocompost',
    funcion: 'Recetas, proveedores, control de calidad y permisos.',
    perfil: 'Perfil ambiental, agronómico o de gestión de residuos.',
    estado: 'abierta',
  },
  {
    numero: '06',
    nombre: 'Comunicación y comunidad',
    funcion: 'Web, socios, campañas y relaciones públicas.',
    perfil: 'Marketing social, diseño o comunicación ambiental.',
    estado: 'abierta',
  },
];

const estiloEstado: Record<Area['estado'], { chip: string; dot: string; label: string }> = {
  cubierta: {
    chip: 'border-forest/30 text-forest',
    dot: 'bg-forest',
    label: 'Cubierta',
  },
  abierta: {
    chip: 'border-smoke/30 text-smoke',
    dot: 'bg-bone border border-smoke',
    label: 'Abierta a colaboración',
  },
};

export default function EquipoEstructura() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Estructura y áreas operativas</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Seis áreas,{' '}
            <span className="italic-display font-normal">tres por cubrir.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            La Junta Directiva cubre las tres áreas legales. Las áreas técnicas
            están abiertas a colaboraciones profesionales, voluntariado experto
            o contrataciones cuando los proyectos las justifiquen.
          </motion.p>
        </div>

        <div className="space-y-4 lg:space-y-5">
          {areas.map((a, i) => {
            const est = estiloEstado[a.estado];
            return (
              <motion.article
                key={a.numero}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-baseline border-b border-ash pb-5 lg:pb-6"
              >
                <div className="lg:col-span-1">
                  <p className="font-mono text-sm tracking-[0.25em] text-forest">
                    {a.numero}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-lg lg:text-xl font-semibold tracking-tight">
                    {a.nombre}
                  </h3>
                </div>

                <div className="lg:col-span-3">
                  <p className="text-sm lg:text-base text-smoke leading-relaxed">
                    {a.funcion}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-sm text-ink/80 leading-relaxed">
                    {a.perfil}
                  </p>
                </div>

                <div className="lg:col-span-2 lg:text-right">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border ${est.chip}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${est.dot}`} />
                    {est.label}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
