'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 13: el flujo Residuo→Compost→Suelo→Árbol→Bosque sigue siendo válido
 * como narrativa del ciclo circular EN GENERAL. Añadimos un pequeño
 * subtítulo aclaratorio al final: EcoReforest interviene en las tres
 * últimas etapas (Suelo, Árbol, Bosque). El Compost lo aporta la red
 * de partners certificados.
 */

const flujo = [
  {
    palabra: 'Residuo',
    descripcion: 'Una manzana que ya no se vende.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/e_trim/c_pad,w_400,h_400,b_transparent/q_auto/f_auto/v1778624307/flujo-residuo_nmxkfa.png',
  },
  {
    palabra: 'Compost',
    descripcion: 'Un fertilizante certificado UNE 142500 con más nutrientes que el suelo agotado.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/e_trim/c_pad,w_400,h_400,b_transparent/q_auto/f_auto/v1778624315/flujo-compost_ruecbc.png',
  },
  {
    palabra: 'Suelo',
    descripcion: 'Una tierra que recupera la capacidad de sostener vida.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/e_trim/c_pad,w_400,h_400,b_transparent/q_auto/f_auto/v1778624325/flujo-suelo_ueq8di.png',
  },
  {
    palabra: 'Árbol',
    descripcion: 'Una raíz que captura agua, carbono y comunidad.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/e_trim/c_pad,w_400,h_400,b_transparent/q_auto/f_auto/v1778624337/flujo-arbol_szarwr.png',
  },
  {
    palabra: 'Bosque',
    descripcion: 'Una hectárea menos del desierto que avanza.',
    icono: 'https://res.cloudinary.com/dekgmk73i/image/upload/e_trim/c_pad,w_400,h_400,b_transparent/q_auto/f_auto/v1778624348/flujo-bosque_ijzkoh.png',
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
              Tomamos compost UNE 142500 producido por partners certificados y
              lo aplicamos donde tiene sentido: en suelos degradados que
              vuelven a sostener bosque. La economía circular no es lineal,
              y nosotros no la tenemos que hacer entera solos.
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

              <div className="lg:col-span-2 flex justify-center">
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 shrink-0">
                  <Image
                    src={item.icono}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              </div>

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

        {/* Paso 13: aclaración honesta sobre dónde intervenimos exactamente */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-center text-sm text-smoke max-w-2xl mx-auto leading-relaxed"
        >
          EcoReforest interviene desde el compost hasta el bosque. La producción
          del compost la realizan nuestros partners certificados UNE 142500.
          Nosotros seleccionamos, validamos por lote y aplicamos.
        </motion.p>
      </div>
    </section>
  );
}
