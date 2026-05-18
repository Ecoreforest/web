'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

export default function ContactoHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 bg-bone">
      <div className="container-x max-w-5xl">
        <SectionEyebrow>Contacto</SectionEyebrow>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance max-w-4xl"
        >
          Hablemos.
          <span className="italic-display font-normal text-forest"> Lo escuchamos todo.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
        >
          Empresas, voluntariado, mecenazgo, prensa, propietarios de terrenos,
          dudas técnicas. Te respondemos en menos de 48 horas hábiles.
        </motion.p>
      </div>
    </section>
  );
}
