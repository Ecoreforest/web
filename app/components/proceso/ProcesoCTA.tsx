'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProcesoCTA() {
  return (
    <section className="relative bg-bone overflow-hidden">
      <div className="container-x max-w-5xl py-24 lg:py-36 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance leading-[1]"
        >
          ¿Quieres ver el proceso{' '}
          <span className="italic-display font-normal text-forest">
            por dentro?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg lg:text-xl text-smoke max-w-2xl mx-auto leading-relaxed"
        >
          Cada hectárea, cada tonelada de compost y cada árbol plantado
          quedan documentados. Si quieres asistir a una visita técnica
          o auditar el proyecto, escríbenos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/contacto"
            className="px-8 py-4 bg-ink text-bone rounded-full font-medium hover:bg-ink/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Solicitar visita técnica
          </Link>
          <Link
            href="/tecnologia"
            className="px-8 py-4 border border-ink/20 text-ink rounded-full font-medium hover:bg-ink/5 transition-all"
          >
            Ver la tecnología
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
