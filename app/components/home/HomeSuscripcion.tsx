'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Sección de suscripción mensual con 4 tiers.
 *
 * Las cantidades de las tres primeras son orientativas — ajustarlas en cuanto
 * el equipo decida la política de aportaciones definitiva. El 4º tier (Libre)
 * es cantidad personalizada y siempre se mantiene.
 *
 * Los botones llevan a /contacto?tier=XXX. Cuando se integre Stripe o un
 * gateway de donaciones recurrentes, sustituir los hrefs por la URL del
 * checkout correspondiente.
 */

type Tier = {
  id: string;
  nombre: string;
  precio: string;
  periodo: string;
  hook: string;
  beneficios: string[];
  cta: string;
  href: string;
};

const tiers: Tier[] = [
  {
    id: 'semilla',
    nombre: 'Semilla',
    precio: '5',
    periodo: '€/mes',
    hook: 'Financia unos 20 plantones al año',
    beneficios: [
      'Reporte anual de impacto',
      'Newsletter trimestral del proyecto',
      'Tu nombre en el muro de socios',
      'Deducción fiscal · Régimen de Mecenazgo',
    ],
    cta: 'Hacerme socio Semilla',
    href: '/contacto?tier=semilla',
  },
  {
    id: 'planton',
    nombre: 'Plantón',
    precio: '15',
    periodo: '€/mes',
    hook: 'Financia unos 60 plantones al año',
    beneficios: [
      'Todo lo de Semilla',
      'Trazabilidad por parcela asignada',
      'Reporte trimestral por parcela',
      'Invitación a eventos del proyecto',
    ],
    cta: 'Hacerme socio Plantón',
    href: '/contacto?tier=planton',
  },
  {
    id: 'bosque',
    nombre: 'Bosque',
    precio: '50',
    periodo: '€/mes',
    hook: 'Financia unos 200 plantones al año',
    beneficios: [
      'Todo lo de Plantón',
      'Trazabilidad por árbol con ID único',
      'Invitación a una plantación al año',
      'Visita técnica a parcela en curso',
    ],
    cta: 'Hacerme socio Bosque',
    href: '/contacto?tier=bosque',
  },
  {
    id: 'libre',
    nombre: 'Tú eliges',
    precio: 'Libre',
    periodo: 'desde 1 €/mes',
    hook: 'Cualquier cantidad construye bosque',
    beneficios: [
      'Aportación mensual a tu medida',
      'Sin compromiso de permanencia',
      'Beneficios proporcionales al importe',
      'Reporte personalizado anual',
    ],
    cta: 'Aportar lo que pueda',
    href: '/contacto?tier=libre',
  },
];

export default function HomeSuscripcion() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone overflow-hidden">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Hazte socio</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Mil semillas,{' '}
            <span className="italic-display font-normal">un solo bosque.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            Cuatro formas de sumar cada mes. Sin permanencia, con deducción
            fiscal y trazabilidad pública de a dónde va cada euro.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {tiers.map((tier, i) => (
            <motion.article
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col p-8 lg:p-10 rounded-sm border transition-all duration-500 ${
                tier.id === 'libre'
                  ? 'bg-ink text-bone border-ink hover:border-forest'
                  : 'bg-bone border-ash hover:border-forest'
              }`}
            >
              {/* Nombre + hook */}
              <div className="mb-8">
                <p
                  className={`font-mono text-xs uppercase tracking-[0.25em] mb-3 ${
                    tier.id === 'libre' ? 'text-forest' : 'text-forest'
                  }`}
                >
                  Tier 0{i + 1}
                </p>
                <h3
                  className="font-semibold tracking-tight leading-[0.95] mb-3"
                  style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)' }}
                >
                  {tier.nombre}
                  <span className="italic-display font-normal text-forest">.</span>
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    tier.id === 'libre' ? 'text-bone/65' : 'text-smoke'
                  }`}
                >
                  {tier.hook}
                </p>
              </div>

              {/* Precio */}
              <div
                className={`mb-8 pb-8 border-b ${
                  tier.id === 'libre' ? 'border-bone/15' : 'border-ash'
                }`}
              >
                <p
                  className={`font-semibold tracking-tighter leading-none ${
                    tier.id === 'libre' ? 'text-bone' : 'text-ink'
                  }`}
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                >
                  {tier.precio}
                  <span
                    className={`italic-display font-normal text-forest ml-1`}
                    style={{ fontSize: '0.45em' }}
                  >
                    {tier.periodo}
                  </span>
                </p>
              </div>

              {/* Beneficios */}
              <ul className="space-y-3 mb-10 flex-1">
                {tier.beneficios.map((b) => (
                  <li
                    key={b}
                    className={`flex items-start gap-3 text-sm leading-relaxed ${
                      tier.id === 'libre' ? 'text-bone/80' : 'text-ink/85'
                    }`}
                  >
                    <span
                      className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                        tier.id === 'libre' ? 'bg-forest' : 'bg-forest'
                      }`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={tier.href}
                className={`block text-center px-6 py-3.5 rounded-full font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  tier.id === 'libre'
                    ? 'bg-bone text-ink hover:bg-bone/90'
                    : 'bg-ink text-bone hover:bg-ink/90'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 lg:mt-16 text-center text-sm text-smoke max-w-2xl mx-auto"
        >
          Cifras orientativas. Cada euro queda asociado a una parcela y a un
          reporte público. La aportación se desglosa anualmente en la memoria
          de impacto, sin redondeos.
        </motion.p>
      </div>
    </section>
  );
}
