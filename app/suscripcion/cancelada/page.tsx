'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CanceladaPage() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-bone overflow-hidden">
      <div className="container-x max-w-4xl mx-auto py-32 lg:py-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-smoke mb-10"
        >
          Suscripción cancelada
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance leading-[1]"
        >
          El bosque{' '}
          <span className="italic-display font-normal text-forest">
            sigue esperando.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 space-y-5 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            No has completado la suscripción. No pasa nada — no se ha cobrado
            nada y puedes intentarlo de nuevo cuando quieras.
          </p>
          <p className="text-ink">
            Si algo del proceso no te encajó, escríbenos y lo miramos juntos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/#suscripcion"
            className="px-8 py-4 bg-ink text-bone rounded-full font-medium hover:bg-ink/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Volver a los tiers
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 border border-ink/20 text-ink rounded-full font-medium hover:bg-ink/5 transition-all"
          >
            Contactar directamente
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
