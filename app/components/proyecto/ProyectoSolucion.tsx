'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

const flujo = [
  {
    palabra: 'Residuo',
    descripcion: 'Una manzana que ya no se vende.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778624307/flujo-residuo_nmxkfa.png',
  },
  {
    palabra: 'Compost',
    descripcion: 'Un fertilizante con más nutrientes que el suelo agotado.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778624315/flujo-compost_ruecbc.png',
  },
  {
    palabra: 'Suelo',
    descripcion: 'Una tierra que recupera la capacidad de sostener vida.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778624325/flujo-suelo_ueq8di.png',
  },
  {
    palabra: 'Árbol',
    descripcion: 'Una raíz que captura agua, carbono y comunidad.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778624337/flujo-arbol_szarwr.png',
  },
  {
    palabra: 'Bosque',
    descripcion: 'Una hectárea menos del desierto que avanza.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778624348/flujo-bosque_ijzkoh.png',
  },
];

export default function ProyectoSolucion() {
  const robleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: robleRef,
    offset: ['start end', 'end start'],
  });
  const robleY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section className="relative py-24 lg:py-32 bg-ivory">
      <div className="container-x max-w-7xl">

        {/* Cabecera con roble al lado */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <SectionEyebrow>La solución</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-semibold tracking-tight text-balance"
            >
              Cerrar el ciclo es{' '}
              <span className="italic-display font-normal">tan simple</span>{' '}
              como entenderlo.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg lg:text-xl text-smoke leading-relaxed mt-8 max-w-xl"
            >
              Tomamos lo que la economía lineal considera basura y lo devolvemos al
              principio del ciclo. Lo que era un problema se convierte en la
              solución del siguiente.
            </motion.p>
          </div>

          <motion.div
            ref={robleRef}
            style={{ y: robleY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-square w-full max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778154883/cerrar-ciclo-roble_fvigbf.png"
              alt="Roble con sus raíces visibles"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Flujo con iconos */}
        <div className="space-y-8 lg:space-y-12">
          {flujo.map((item, i) => (
            <motion.article
              key={item.palabra}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center border-b border-ash pb-8 lg:pb-12"
            >
              <div className="lg:col-span-1">
                <p className="font-mono text-sm tracking-[0.25em] text-forest">
                  0{i + 1}
                </p>
              </div>

              {/* Palabra */}
              <div className="lg:col-span-4">
                <h3
                  className="font-semibold tracking-tight leading-[0.9]"
                  style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
                >
                  {item.palabra}
                  <span className="italic-display font-normal text-forest">
                    .
                  </span>
                </h3>
              </div>

              {/* Icono en medio */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 shrink-0">
                  <Image
                    src={item.icono}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Frase */}
              <div className="lg:col-span-5">
                <p className="text-lg lg:text-xl text-smoke leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-24 text-center text-2xl lg:text-3xl font-light tracking-tight max-w-3xl mx-auto text-balance"
        >
          La{' '}
          <span className="italic-display font-normal text-forest">
            misma manzana
          </span>{' '}
          que iba a un vertedero acaba alimentando un encinar.
        </motion.p>
      </div>
    </section>
  );
}
