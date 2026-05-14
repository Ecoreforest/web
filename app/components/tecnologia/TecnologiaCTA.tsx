'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TecnologiaCTA() {
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
          ¿Te interesa nuestra{' '}
          <span className="italic-display font-normal text-forest">
            ficha técnica?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg lg:text-xl text-smoke max-w-2xl mx-auto leading-relaxed"
        >
          Compartimos protocolos, especificaciones y resultados con
          universidades, empresas y administraciones que quieran auditar o
          replicar parte del proyecto.
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
            Solicitar documentación
          </Link>
          <Link
            href="/colabora"
            className="px-8 py-4 border border-ink/20 text-ink rounded-full font-medium hover:bg-ink/5 transition-all"
          >
            Colaborar con el proyecto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
