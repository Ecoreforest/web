'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

type Estado = 'pasado' | 'actual' | 'objetivo' | 'condicional';

type Punto = {
  fecha: string;
  titulo: string;
  detalle: string;
  estado: Estado;
};

const cronograma: { bloque: string; puntos: Punto[] }[] = [
  {
    bloque: 'Fase I — preparación',
    puntos: [
      {
        fecha: '22 abr 2026',
        titulo: 'Constitución y presentación al Registro Nacional de Asociaciones',
        detalle:
          'Documentación constitutiva entregada. Inicio del expediente de inscripción.',
        estado: 'pasado',
      },
      {
        fecha: 'May 2026',
        titulo: 'Inscripción confirmada · inicio de fase preparatoria',
        detalle:
          'EcoReforest Asociación queda inscrita en el RNA. Personalidad jurídica plena. Comienza la fase de alianzas, dossier técnico y diseño de pilotos.',
        estado: 'actual',
      },
      {
        fecha: 'Jun 2026',
        titulo: 'Preparación administrativa y técnica',
        detalle:
          'Borradores de convenios, memoria de proyecto, dossier para aliados, mapa de convocatorias.',
        estado: 'objetivo',
      },
      {
        fecha: 'Jul 2026',
        titulo: 'Alianzas territoriales',
        detalle:
          'Contactos con ayuntamientos, propietarios, universidades, cooperativas y gestores de residuos.',
        estado: 'objetivo',
      },
      {
        fecha: 'Ago 2026',
        titulo: 'Diseño de pilotos',
        detalle:
          'Selección preliminar de zonas, especies, metodologías y presupuesto piloto.',
        estado: 'objetivo',
      },
      {
        fecha: 'Sep 2026',
        titulo: 'Lanzamiento institucional',
        detalle:
          'Presentación pública del proyecto, campaña de socios fundadores y primeras solicitudes a convocatorias compatibles.',
        estado: 'objetivo',
      },
    ],
  },
  {
    bloque: 'Fase II — validación',
    puntos: [
      {
        fecha: 'Oct — dic 2026',
        titulo: 'Primer piloto técnico en Galicia',
        detalle:
          'Primer terreno apalabrado: 270 ha. Acuerdos de suministro de biomasa y primera campaña de plantación en la ventana otoño-invierno.',
        estado: 'objetivo',
      },
      {
        fecha: 'Ene — mar 2027',
        titulo: 'Primera campaña completa de restauración',
        detalle:
          'Datos iniciales de supervivencia, mejora del suelo, costes y participación social.',
        estado: 'objetivo',
      },
      {
        fecha: 'Abr — jun 2027',
        titulo: 'Propuestas para convocatorias nacionales y europeas',
        detalle:
          'Memoria técnica, presupuesto, socios y evidencias del piloto. Preparación de candidatura LIFE 2027.',
        estado: 'objetivo',
      },
      {
        fecha: 'Jul — sep 2027',
        titulo: 'Presentación a convocatorias prioritarias',
        detalle:
          'Solicitudes presentadas con trazabilidad documental. LIFE 2027 como objetivo europeo principal.',
        estado: 'condicional',
      },
      {
        fecha: 'Oct — dic 2027',
        titulo: 'Evaluación, ajuste y plan de escalamiento',
        detalle:
          'Informe de resultados, cartera para 2028 y decisión sobre estructura comercial.',
        estado: 'objetivo',
      },
    ],
  },
  {
    bloque: 'Fase III — escalamiento condicionado',
    puntos: [
      {
        fecha: 'Ene 2028',
        titulo: 'Primer reporte anual de impacto auditado',
        detalle:
          'Memoria pública con todas las cifras del primer ejercicio piloto. Auditoría externa antes de publicación.',
        estado: 'objetivo',
      },
      {
        fecha: '2028',
        titulo: 'Escalamiento operativo y profesionalización',
        detalle:
          'Contratación parcial vinculada a proyectos financiados, ampliación de acuerdos, Forest Clean en marcha.',
        estado: 'objetivo',
      },
      {
        fecha: '2028 — 2029',
        titulo: 'Lanzamiento gradual de EcoReforest Wear',
        detalle:
          'Preventa y prototipado durante 2026-2027, lanzamiento comercial estructurado cuando la base operativa esté consolidada.',
        estado: 'objetivo',
      },
      {
        fecha: '2028 en adelante',
        titulo: 'Posible constitución de EcoReforest SL',
        detalle:
          'Solo si existen contratos privados, ingresos comerciales recurrentes y necesidad real de separar actividades mercantiles. Decisión sujeta a criterios objetivos.',
        estado: 'condicional',
      },
    ],
  },
];

const estiloEstado: Record<Estado, { dot: string; chip: string; label: string }> = {
  pasado: {
    dot: 'bg-forest',
    chip: 'border-forest/30 text-forest',
    label: 'Confirmado',
  },
  actual: {
    dot: 'bg-ink',
    chip: 'border-ink/30 text-ink',
    label: 'En curso',
  },
  objetivo: {
    dot: 'bg-bone border border-smoke',
    chip: 'border-smoke/30 text-smoke',
    label: 'Objetivo',
  },
  condicional: {
    dot: 'bg-bone border border-dashed border-smoke',
    chip: 'border-smoke/30 text-smoke',
    label: 'Condicional',
  },
};

export default function HojaRutaCronograma() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Cronograma maestro</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Quince hitos,{' '}
            <span className="italic-display font-normal">treinta meses.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {Object.entries(estiloEstado).map(([key, val]) => (
              <span
                key={key}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border ${val.chip}`}
              >
                <span className={`w-2 h-2 rounded-full ${val.dot}`} />
                {val.label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {cronograma.map((bloque, bi) => (
            <div key={bloque.bloque}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-8 pb-4 border-b border-ash"
              >
                {bloque.bloque}
              </motion.p>

              <ol className="relative space-y-8 lg:space-y-10">
                {/* Línea vertical de fondo */}
                <div
                  aria-hidden
                  className="absolute left-[5px] top-3 bottom-3 w-px bg-ash hidden md:block"
                />

                {bloque.puntos.map((p, i) => {
                  const est = estiloEstado[p.estado];
                  return (
                    <motion.li
                      key={p.titulo}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.7, delay: i * 0.05 + bi * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="relative grid md:grid-cols-12 gap-4 md:gap-8 items-baseline pl-0 md:pl-8"
                    >
                      {/* Dot del estado */}
                      <span
                        aria-hidden
                        className={`absolute left-0 top-2 w-[11px] h-[11px] rounded-full hidden md:block ${est.dot}`}
                      />

                      <div className="md:col-span-2">
                        <p className="font-mono text-xs lg:text-sm tracking-[0.2em] text-ink/80">
                          {p.fecha}
                        </p>
                      </div>

                      <div className="md:col-span-7">
                        <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-balance">
                          {p.titulo}
                        </h3>
                        <p className="mt-2 text-base text-smoke leading-relaxed max-w-2xl">
                          {p.detalle}
                        </p>
                      </div>

                      <div className="md:col-span-3 md:text-right">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border ${est.chip}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${est.dot}`} />
                          {est.label}
                        </span>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
