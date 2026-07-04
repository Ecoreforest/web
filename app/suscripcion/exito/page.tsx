'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ExitoContenido() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <section className="relative min-h-[100svh] flex items-center bg-bone overflow-hidden">
      <div className="container-x max-w-4xl mx-auto py-32 lg:py-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-forest mb-10"
        >
          Suscripción confirmada
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance leading-[1]"
        >
          Bienvenido al{' '}
          <span className="italic-display font-normal text-forest">bosque.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 space-y-5 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            Tu suscripción se ha activado correctamente. En unos minutos te
            llegará un email con la confirmación y los detalles de tu aportación.
          </p>
          <p className="text-ink">
            Cada euro que aportes queda vinculado a una parcela real. Cuando
            plantemos el primer árbol asociado a tu suscripción, te lo diremos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-10 border-t border-ash max-w-lg mx-auto"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-6">
            Siguientes pasos
          </p>
          <ul className="space-y-4 text-left text-base text-ink/85">
            <li className="flex gap-4">
              <span className="font-mono text-sm text-forest shrink-0 mt-0.5">
                01
              </span>
              <span>
                Guarda el email de confirmación. Ahí tienes el enlace al portal
                privado donde puedes gestionar o cancelar la suscripción cuando
                quieras.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-forest shrink-0 mt-0.5">
                02
              </span>
              <span>
                En unos días te añadiremos al muro de socios de la web (si
                configuraste ese beneficio).
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-forest shrink-0 mt-0.5">
                03
              </span>
              <span>
                El primer reporte de impacto llega en enero. Sin ruido, con
                cifras verificables.
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-ink text-bone rounded-full font-medium hover:bg-ink/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Volver al inicio
          </Link>
          <Link
            href="/proyecto"
            className="px-8 py-4 border border-ink/20 text-ink rounded-full font-medium hover:bg-ink/5 transition-all"
          >
            Conocer el proyecto
          </Link>
        </motion.div>

        {sessionId && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 font-mono text-[10px] uppercase tracking-[0.25em] text-smoke/60"
          >
            Ref · {sessionId.slice(0, 20)}…
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default function ExitoPage() {
  return (
    <Suspense fallback={<div className="min-h-[100svh] bg-bone" />}>
      <ExitoContenido />
    </Suspense>
  );
}
