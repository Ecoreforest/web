'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

export default function ContactoHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 bg-bone overflow-hidden">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Texto a la izquierda */}
          <div className="lg:col-span-7">
            <SectionEyebrow>Contacto</SectionEyebrow>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-semibold tracking-tight text-balance"
            >
              Hablemos.
              <span className="italic-display font-normal text-forest"> Lo escuchamos todo.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-xl"
            >
              Empresas, voluntariado, mecenazgo, prensa, propietarios de terrenos,
              dudas técnicas. Te respondemos en menos de 48 horas hábiles.
            </motion.p>
          </div>

          {/* Hojita verde a la derecha — escalada para igualar la
              presencia visual del bloque de texto adyacente. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-square w-full max-w-xs mx-auto lg:max-w-none lg:scale-[1.05] origin-center"
          >
            <Image
              src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1780502849/logo-hojita-verde_tum1zm.png"
              alt="EcoReforest"
              fill
              sizes="(max-width: 1024px) 60vw, 35vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
