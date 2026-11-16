'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 32: el índice de servicios, separado de su página.
 *
 * Antes todo esto vivía en app/servicios/page.tsx con 'use client' en la
 * primera línea, y un componente de cliente no puede exportar metadatos.
 * Por eso esa página salía en Google con el título de la portada. Ahora
 * la página es de servidor, pone sus metadatos y renderiza esto.
 *
 * De paso desaparecen los 01 a 05 de las tarjetas, y el <main> que
 * envolvía todo pasa a <div>: el layout ya pone un <main> alrededor de
 * cada página, y dos anidados no son HTML válido.
 */
const servicios = [
  {
    titulo: 'Compost',
    descripcion: 'Fertilizante orgánico certificado UNE 142500. Lo que era residuo, ahora es suelo fértil.',
    href: '/servicios/compost',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895082/linea-compost_jepie9.jpg',
  },
  {
    titulo: 'Reforestación',
    descripcion: 'Proyectos integrales de restauración ecológica con especies autóctonas y monitoreo digital.',
    href: '/servicios/reforestacion',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895092/bosque-mediterraneo_peuyt6.jpg',
  },
  {
    titulo: 'Forest Clean',
    descripcion: 'Limpieza y gestión de biomasa forestal. Prevención de incendios y valorización circular.',
    href: '/servicios/forest-clean',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895088/paso-04-monitoreo_p5xvfu.png',
  },
  {
    titulo: 'Auditorías',
    descripcion: 'Diagnóstico técnico forestal con certificaciones FSC/PEFC. Datos para decidir bien.',
    href: '/servicios/auditorias',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895093/paso-03-plantacion_v5ylho.png',
  },
  {
    titulo: 'Créditos de carbono',
    descripcion: 'Captura de CO₂ certificada bajo Verra y Gold Standard. Compensación verificable.',
    href: '/servicios/creditos-carbono',
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895082/linea-carbono_zmr4n4.jpg',
  },
];

export default function ServiciosIndice() {
  return (
    <div className="bg-bone">
      <section className="container-x max-w-7xl pt-32 lg:pt-40 pb-12 lg:pb-16">
        <SectionEyebrow>Servicios</SectionEyebrow>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-xl font-semibold tracking-tight max-w-5xl text-balance leading-[0.95]"
        >
          Cinco maneras de{' '}
          <span className="italic-display font-normal">cerrar el ciclo.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg lg:text-xl text-smoke leading-relaxed mt-10 max-w-2xl"
        >
          Cada servicio es una pieza del mismo modelo de economía circular: nada
          se desperdicia, todo se valoriza. Diseñados para administraciones,
          empresas y propietarios privados.
        </motion.p>
      </section>

      <section className="container-x max-w-7xl pb-24 lg:pb-32">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {servicios.map((s, i) => (
            <motion.article
              key={s.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={i === 4 ? 'md:col-span-2' : ''}
            >
              <Link href={s.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-ivory mb-6">
                  <Image
                    src={s.imagen}
                    alt={s.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <h2 className="text-display-sm font-semibold tracking-tight mb-3 group-hover:text-forest transition-colors duration-500">
                  {s.titulo}
                </h2>
                <p className="text-base text-smoke leading-relaxed max-w-lg mb-4">
                  {s.descripcion}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Conocer servicio
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
