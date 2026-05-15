'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

const pasos = [
  {
    numero: '01',
    titulo: 'Inscripción',
    descripcion:
      'Formulario corto con disponibilidad, experiencia previa y zona preferida. Sin requisitos técnicos previos.',
  },
  {
    numero: '02',
    titulo: 'Formación',
    descripcion:
      'Sesión online o presencial de 90 minutos: seguridad, manejo de planta y registro de actividad en parcela.',
  },
  {
    numero: '03',
    titulo: 'Jornada en campo',
    descripcion:
      'Jornadas de 4 — 6 horas en parcelas activas. Material y comida incluidos. Acompañamiento técnico durante todo el día.',
  },
  {
    numero: '04',
    titulo: 'Seguimiento',
    descripcion:
      'Cada voluntario recibe certificado de horas y, opcionalmente, sigue las parcelas en las que ha trabajado en años posteriores.',
  },
];

export default function ColaboraVoluntariado() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="container-x max-w-7xl">

        {/* Cabecera con plantón al lado */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <SectionEyebrow>Voluntariado</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-semibold tracking-tight text-balance"
            >
              Plantar es{' '}
              <span className="italic-display font-normal">solo el principio.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-xl"
            >
              El voluntariado no es marketing experiencial: es parte real del
              proceso. Los datos que se recogen sobre el terreno alimentan
              decisiones técnicas posteriores.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none"
          >
            <Image
              src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778869811/voluntariado-planton_cgm37j.png"
              alt="Plantón de árbol recién brotado, símbolo del voluntariado"
              fill
              sizes="(max-width: 1024px) 70vw, 35vw"
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-4 gap-px bg-ash">
          {pasos.map((p, i) => (
            <motion.div
              key={p.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory p-8 lg:p-10"
            >
              <p
                className="font-semibold tracking-tighter leading-none text-forest mb-6"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
              >
                {p.numero}
              </p>
              <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mb-4">
                {p.titulo}
              </h3>
              <p className="text-sm lg:text-base text-smoke leading-relaxed">
                {p.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
