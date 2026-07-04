'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Sección de suscripción mensual con 4 tiers, conectada a Stripe Checkout.
 *
 * Paso 11 (Fase 3 Stripe) — cambios:
 * - Los botones ya no navegan a /contacto?tier=X. Ahora llaman al API interno
 *   /api/checkout que crea una sesión de Stripe y redirige al checkout de
 *   Stripe hospedado (dominio de stripe).
 * - El tier `libre` muestra un input inline para elegir cantidad €/mes.
 * - Estados de carga y error por tier.
 *
 * Requiere STRIPE_SECRET_KEY en las env variables de Vercel para funcionar.
 */

type Tier = {
  id: string;
  nombre: string;
  precio: string;
  periodo: string;
  hook: string;
  ritmo: string;
  beneficios: string[];
  cta: string;
  tema: 'ivory' | 'verde-claro' | 'verde-oscuro' | 'oscuro';
};

const tiers: Tier[] = [
  {
    id: 'semilla',
    nombre: 'Semilla',
    precio: '5',
    periodo: '€/mes',
    hook: '12 plantones al año',
    ritmo: '1 plantón cada mes',
    beneficios: [
      'Reporte anual de impacto',
      'Newsletter trimestral del proyecto',
      'Tu nombre en el muro de socios',
      'Deducción fiscal · Régimen de Mecenazgo',
    ],
    cta: 'Hacerme socio Semilla',
    tema: 'ivory',
  },
  {
    id: 'planton',
    nombre: 'Plantón',
    precio: '15',
    periodo: '€/mes',
    hook: '36 plantones al año',
    ritmo: '3 plantones cada mes',
    beneficios: [
      'Todo lo de Semilla',
      'Trazabilidad por parcela asignada',
      'Reporte trimestral por parcela',
      'Invitación a eventos del proyecto',
    ],
    cta: 'Hacerme socio Plantón',
    tema: 'verde-claro',
  },
  {
    id: 'bosque',
    nombre: 'Bosque',
    precio: '50',
    periodo: '€/mes',
    hook: '144 plantones al año',
    ritmo: '12 plantones cada mes',
    beneficios: [
      'Todo lo de Plantón',
      'Trazabilidad por árbol con ID único',
      'Invitación a una plantación al año',
      'Visita técnica a parcela en curso',
    ],
    cta: 'Hacerme socio Bosque',
    tema: 'verde-oscuro',
  },
  {
    id: 'libre',
    nombre: 'Tú eliges',
    precio: 'Libre',
    periodo: 'desde 1 €/mes',
    hook: 'La cantidad que quieras',
    ritmo: 'Sin permanencia · beneficios proporcionales',
    beneficios: [
      'Aportación mensual a tu medida',
      'Cualquier cantidad construye bosque',
      'Beneficios proporcionales al importe',
      'Reporte personalizado anual',
    ],
    cta: 'Aportar',
    tema: 'oscuro',
  },
];

const temas: Record<
  Tier['tema'],
  {
    bg: string;
    tituloColor: string;
    hookColor: string;
    ritmoColor: string;
    dividerColor: string;
    beneficioColor: string;
    dotColor: string;
    botonBg: string;
    botonHover: string;
    precioColor: string;
    acentoColor: string;
    inputBg: string;
    inputBorder: string;
    inputText: string;
    inputPlaceholder: string;
    errorText: string;
  }
> = {
  ivory: {
    bg: 'bg-ivory',
    tituloColor: 'text-ink',
    hookColor: 'text-forest',
    ritmoColor: 'text-smoke',
    dividerColor: 'border-ash',
    beneficioColor: 'text-ink/85',
    dotColor: 'bg-forest',
    botonBg: 'bg-ink text-bone',
    botonHover: 'hover:bg-ink/90',
    precioColor: 'text-ink',
    acentoColor: 'text-forest',
    inputBg: 'bg-transparent',
    inputBorder: 'border-ash focus:border-forest',
    inputText: 'text-ink',
    inputPlaceholder: 'placeholder:text-smoke/60',
    errorText: 'text-forest',
  },
  'verde-claro': {
    bg: 'bg-[#2D6A4F]',
    tituloColor: 'text-bone',
    hookColor: 'text-bone',
    ritmoColor: 'text-bone/75',
    dividerColor: 'border-bone/20',
    beneficioColor: 'text-bone/85',
    dotColor: 'bg-bone',
    botonBg: 'bg-bone text-ink',
    botonHover: 'hover:bg-bone/90',
    precioColor: 'text-bone',
    acentoColor: 'text-bone/85',
    inputBg: 'bg-transparent',
    inputBorder: 'border-bone/20 focus:border-bone/60',
    inputText: 'text-bone',
    inputPlaceholder: 'placeholder:text-bone/40',
    errorText: 'text-bone',
  },
  'verde-oscuro': {
    bg: 'bg-forest',
    tituloColor: 'text-bone',
    hookColor: 'text-bone',
    ritmoColor: 'text-bone/75',
    dividerColor: 'border-bone/20',
    beneficioColor: 'text-bone/85',
    dotColor: 'bg-bone',
    botonBg: 'bg-bone text-ink',
    botonHover: 'hover:bg-bone/90',
    precioColor: 'text-bone',
    acentoColor: 'text-bone/85',
    inputBg: 'bg-transparent',
    inputBorder: 'border-bone/20 focus:border-bone/60',
    inputText: 'text-bone',
    inputPlaceholder: 'placeholder:text-bone/40',
    errorText: 'text-bone',
  },
  oscuro: {
    bg: 'bg-ink',
    tituloColor: 'text-bone',
    hookColor: 'text-bone',
    ritmoColor: 'text-bone/70',
    dividerColor: 'border-bone/15',
    beneficioColor: 'text-bone/80',
    dotColor: 'bg-forest',
    botonBg: 'bg-bone text-ink',
    botonHover: 'hover:bg-bone/90',
    precioColor: 'text-bone',
    acentoColor: 'text-forest',
    inputBg: 'bg-transparent',
    inputBorder: 'border-bone/20 focus:border-bone/60',
    inputText: 'text-bone',
    inputPlaceholder: 'placeholder:text-bone/40',
    errorText: 'text-bone',
  },
};

export default function HomeSuscripcion() {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [errores, setErrores] = useState<Record<string, string>>({});

  const iniciarCheckout = async (tier: string, extra?: { customAmount?: number }) => {
    setLoadingTier(tier);
    setErrores((e) => ({ ...e, [tier]: '' }));
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier, customAmount: extra?.customAmount }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'No pudimos iniciar el pago.');
      }
      window.location.href = data.url;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error inesperado.';
      setErrores((e) => ({ ...e, [tier]: message }));
      setLoadingTier(null);
    }
  };

  const clickTierFijo = (tier: string) => () => iniciarCheckout(tier);

  const clickLibre = () => {
    const amount = parseFloat(customAmount.replace(',', '.'));
    if (!amount || amount < 1) {
      setErrores((e) => ({
        ...e,
        libre: 'Introduce una cantidad de al menos 1 €.',
      }));
      return;
    }
    iniciarCheckout('libre', { customAmount: amount });
  };

  return (
    <section
      id="suscripcion"
      className="relative py-24 lg:py-32 bg-bone overflow-hidden scroll-mt-20"
    >
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
          {tiers.map((tier, i) => {
            const t = temas[tier.tema];
            const isLoading = loadingTier === tier.id;
            const isLibre = tier.id === 'libre';
            const error = errores[tier.id];

            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col p-8 lg:p-10 rounded-sm transition-all duration-500 ${t.bg}`}
              >
                <div className="mb-8">
                  <h3
                    className={`font-semibold tracking-tight leading-[0.95] mb-3 ${t.tituloColor}`}
                    style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)' }}
                  >
                    {tier.nombre}
                    <span className={`italic-display font-normal ${t.acentoColor}`}>.</span>
                  </h3>
                  <p className={`text-base font-medium leading-tight ${t.hookColor}`}>
                    {tier.hook}
                  </p>
                  <p className={`text-sm leading-relaxed mt-2 ${t.ritmoColor}`}>
                    {tier.ritmo}
                  </p>
                </div>

                <div className={`mb-8 pb-8 border-b ${t.dividerColor}`}>
                  {isLibre ? (
                    <div>
                      <label
                        htmlFor="libre-amount"
                        className={`block font-mono text-[10px] uppercase tracking-[0.25em] mb-3 ${t.ritmoColor}`}
                      >
                        Elige tu cantidad
                      </label>
                      <div className="flex items-baseline gap-2">
                        <input
                          id="libre-amount"
                          type="number"
                          min={1}
                          max={5000}
                          step={1}
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="10"
                          disabled={isLoading}
                          className={`w-full font-semibold tracking-tighter leading-none focus:outline-none border-b py-1 disabled:opacity-50 ${t.inputBg} ${t.inputBorder} ${t.inputText} ${t.inputPlaceholder}`}
                          style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                        />
                        <span
                          className={`italic-display font-normal ml-1 ${t.acentoColor}`}
                          style={{ fontSize: '1.4rem' }}
                        >
                          €/mes
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p
                      className={`font-semibold tracking-tighter leading-none ${t.precioColor}`}
                      style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                    >
                      {tier.precio}
                      <span
                        className={`italic-display font-normal ml-1 ${t.acentoColor}`}
                        style={{ fontSize: '0.45em' }}
                      >
                        {tier.periodo}
                      </span>
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {tier.beneficios.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-3 text-sm leading-relaxed ${t.beneficioColor}`}
                    >
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${t.dotColor}`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={isLibre ? clickLibre : clickTierFijo(tier.id)}
                  disabled={isLoading}
                  className={`block w-full text-center px-6 py-3.5 rounded-full font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 ${t.botonBg} ${t.botonHover}`}
                >
                  {isLoading ? 'Preparando pago…' : tier.cta}
                </button>

                {error && (
                  <p
                    className={`mt-4 text-xs leading-relaxed ${t.errorText}`}
                  >
                    {error}
                  </p>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
