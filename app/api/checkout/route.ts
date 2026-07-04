import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

/**
 * API route que crea una sesión de Stripe Checkout para suscribirse a un
 * tier concreto (Semilla, Plantón, Bosque o Libre).
 *
 * - Tres tiers fijos (semilla/plantón/bosque) usan sus `price_XXX` de Stripe
 * - El tier `libre` usa `price_data` dinámico con la cantidad que el usuario
 *   introduzca en el input del frontend
 *
 * Requiere la env variable STRIPE_SECRET_KEY configurada en Vercel.
 */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2025-02-24.acacia',
});

// IDs de precios recurrentes creados en el dashboard de Stripe (test mode).
// En producción (live mode) tendremos otros IDs distintos.
const TIER_PRICE_IDS = {
  semilla: 'price_1TpGni2Q6SRMcja3ptFpEkzO',
  planton: 'price_1TpGof2Q6SRMcja3pjwEpmEw',
  bosque: 'price_1TpGpK2Q6SRMcja3ewSEnuSg',
} as const;

type TierFijo = keyof typeof TIER_PRICE_IDS;

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'STRIPE_SECRET_KEY no configurada en el entorno.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { tier, customAmount } = body as {
      tier: string;
      customAmount?: number;
    };

    const origin = req.nextUrl.origin;
    const success_url = `${origin}/suscripcion/exito?session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url = `${origin}/suscripcion/cancelada`;

    let sessionParams: Stripe.Checkout.SessionCreateParams;

    if (tier === 'libre') {
      const amount = Number(customAmount);
      if (!amount || amount < 1) {
        return NextResponse.json(
          { error: 'La cantidad mínima es 1 €/mes.' },
          { status: 400 }
        );
      }
      if (amount > 5000) {
        return NextResponse.json(
          {
            error:
              'Para aportaciones superiores a 5.000 €/mes, contáctanos directamente en hola@ecoreforest.com.',
          },
          { status: 400 }
        );
      }

      const unit_amount = Math.round(amount * 100);

      sessionParams = {
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: 'Aportación libre EcoReforest',
                description: `Suscripción mensual con cantidad libre elegida por el suscriptor (${amount.toFixed(
                  2
                )} €/mes).`,
              },
              unit_amount,
              recurring: { interval: 'month' },
            },
            quantity: 1,
          },
        ],
        success_url,
        cancel_url,
        allow_promotion_codes: true,
        billing_address_collection: 'auto',
        metadata: { tier: 'libre', custom_amount_eur: amount.toString() },
      };
    } else if (tier in TIER_PRICE_IDS) {
      sessionParams = {
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price: TIER_PRICE_IDS[tier as TierFijo],
            quantity: 1,
          },
        ],
        success_url,
        cancel_url,
        allow_promotion_codes: true,
        billing_address_collection: 'auto',
        metadata: { tier },
      };
    } else {
      return NextResponse.json(
        {
          error: `Tier "${tier}" no válido. Esperado: semilla, planton, bosque o libre.`,
        },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    if (!session.url) {
      return NextResponse.json(
        { error: 'Stripe no devolvió URL de checkout.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Error desconocido creando checkout.';
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
