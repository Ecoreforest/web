'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

const lineas = [
  {
    eyebrow: 'Producto',
    titulo: 'Compost certificado',
    descripcion: 'Fertilizante orgánico de alta calidad producido con tecnología de compostaje acelerado. Cumple la norma UNE 142500 y es apto para agricultura ecológica.',
    cta: 'Conoce el producto',
    href: '/tienda/compost',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895082/linea-compost_jepie9.jpg',
  },
  {
    eyebrow: 'Servicio',
    titulo: 'Reforestación integral',
    descripcion: 'Diseño, plantación y mantenimiento de proyectos de restauración ecológica. Especies autóctonas, riego eficiente y monitoreo digital con garantía de supervivencia.',
    cta: 'Servicios para empresas',
    href: '/colabora',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895092/bosque-mediterraneo_peuyt6.jpg',
  },
  {
    eyebrow: 'Mercado',
    titulo: 'Créditos de carbono',
    descripcion: 'Captura verificable de CO₂ certificada bajo estándares Verra y Gold Standard. Una nueva forma de financiar la restauración ecológica.',
    cta: 'Para tu empresa',
    href: '/colabora',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895082/linea-carbono_zmr4n4.jpg',
  },
];

export default function HomeLineas() {
  return (
    <section className="relative py-32 lg:py-48 bg-ivory">
      <div className="container-x max-w-7xl">
        <div className="max-w-4xl mb-20 lg:mb-28">
          <SectionEyebrow>Líneas de actuación</SectionEyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Tres formas de{' '}
            <span className="italic-display font-normal">cerrar el ciclo.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {lineas.map((linea, i) => (
            <motion.article
              key={linea.titulo}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-bone rounded-sm overflow-hidden flex flex-col hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-700"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={linea.imagen}
                  alt={linea.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-4">
                  {linea.eyebrow}
                </p>
                <h3 className="text-display-sm font-semibold tracking-tight mb-4">
                  {linea.titulo}
                </h3>
                <p className="text-base text-smoke leading-relaxed mb-8 flex-1">
                  {linea.descripcion}
                </p>
                <Link
                  href={linea.href}
                  className="inline-flex items-center gap-2 text-sm font-medium group/link"
                >
                  {linea.cta}
                  <span className="inline-block transition-transform duration-500 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
