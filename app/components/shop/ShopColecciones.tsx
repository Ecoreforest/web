'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

const colecciones = [
  {
    nombre: 'Forest Wear',
    posicionamiento: 'Premium casual',
    tagline: 'Elegancia atemporal con conciencia ambiental.',
    descripcion:
      'Polos, camisas Oxford, jerséis de punto fino, chaquetas tipo Barbour y pantalones chinos. Diseño clásico pensado para durar décadas, no temporadas.',
    materiales: [
      'Algodón orgánico certificado GOTS',
      'Lino europeo de cultivo sin irrigación',
      'Lana merino de ganadería regenerativa',
    ],
    innovacion:
      'Fibras vegetales de esparto y retama mediterránea obtenidas en los trabajos de Forest Clean.',
    items: ['Polos', 'Camisas Oxford', 'Jerséis', 'Chaquetas', 'Pantalones chinos'],
    imagen:
      'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895101/camiseta-1_u1asrg.png',
  },
  {
    nombre: 'Sport',
    posicionamiento: 'Rendimiento técnico',
    tagline: 'Naturaleza en movimiento.',
    descripcion:
      'Ropa técnica para running, gimnasio y outdoor. Paleta inspirada en los ecosistemas forestales que ayudamos a restaurar: verdes musgo, marrones tierra, ocres y azules río.',
    materiales: [
      'Fibras técnicas recicladas de PET post-consumo',
      'ECONYL® a partir de redes de pesca recuperadas',
      'TENCEL™ Lyocell de madera de bosques sostenibles',
    ],
    innovacion:
      'Tratamientos anti-olor naturales de pino y eucalipto que reducen los lavados, ahorrando agua y energía durante toda la vida útil.',
    items: ['Mallas', 'Pantalones cortos', 'Camisetas técnicas', 'Tops', 'Cortavientos'],
    imagen:
      'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895103/camiseta-03_obbqrw.png',
  },
];

export default function ShopColecciones() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Las dos colecciones</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Misma misión,{' '}
            <span className="italic-display font-normal">dos lenguajes.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            Forest Wear se dirige al consumidor urbano que busca calidad y
            estatus ético. Sport, al creciente mercado del fitness y el
            deporte al aire libre. Dos segmentos, una sola cadena de valor
            circular.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {colecciones.map((c, i) => (
            <motion.article
              key={c.nombre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-bone rounded-sm overflow-hidden flex flex-col hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-700"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                <Image
                  src={c.imagen}
                  alt={c.nombre}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>

              <div className="p-8 lg:p-12 flex-1 flex flex-col">
                <p className="font-mono text-xs tracking-[0.25em] text-forest mb-4">
                  0{i + 1} · {c.posicionamiento}
                </p>

                <h3
                  className="font-semibold tracking-tighter leading-[0.95] mb-4"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                >
                  {c.nombre}
                  <span className="italic-display font-normal text-forest">.</span>
                </h3>

                <p className="italic-display text-xl lg:text-2xl text-forest mb-8">
                  {c.tagline}
                </p>

                <p className="text-base lg:text-lg text-smoke leading-relaxed mb-8">
                  {c.descripcion}
                </p>

                <ul className="flex flex-wrap gap-2 mb-10">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-mono uppercase tracking-[0.15em] text-smoke px-3 py-1.5 border border-ash rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-ash">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-4">
                    Materiales principales
                  </p>
                  <ul className="space-y-2 mb-8">
                    {c.materiales.map((mat) => (
                      <li
                        key={mat}
                        className="text-sm lg:text-base text-ink/85 leading-relaxed"
                      >
                        {mat}
                      </li>
                    ))}
                  </ul>

                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-3">
                    Innovación
                  </p>
                  <p className="text-sm lg:text-base text-ink/85 leading-relaxed">
                    {c.innovacion}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
