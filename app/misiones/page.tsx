import Link from 'next/link';
import { MISIONES, type EstadoMision } from '../../lib/misiones';
import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Misiones',
  description:
    'Los proyectos de reforestación de EcoReforest, uno a uno: dónde están, qué se ha plantado y qué ha sobrevivido. Con los datos publicados y verificables.',
};

/**
 * Paso 26: índice de misiones.
 *
 * Una misión es un terreno concreto con nombre propio. Esta sección es
 * la prueba de todo lo que se afirma en el resto de la web, y es también
 * el destino al que apunta el código QR de las etiquetas de la tienda.
 *
 * El orden importa: primero lo que está en curso, luego lo previsto y al
 * final lo completado. Lo que se está haciendo ahora pesa más que lo que
 * ya se hizo, porque el proyecto todavía está demostrando que funciona.
 */

const ORDEN: EstadoMision[] = ['en-curso', 'prevista', 'completada'];

const COPY_ESTADO: Record<EstadoMision, { titulo: string; vacio: string }> = {
  'en-curso': {
    titulo: 'En curso',
    vacio: 'Ninguna plantación en marcha en este momento.',
  },
  prevista: {
    titulo: 'Previstas',
    vacio: 'No hay misiones en preparación ahora mismo.',
  },
  completada: {
    titulo: 'Completadas',
    vacio:
      'Todavía ninguna. No hemos cerrado aún el ciclo de seguimiento de ningún terreno, y hasta que ocurra esta lista seguirá vacía.',
  },
};

function Tarjeta({ slug }: { slug: string }) {
  const m = MISIONES.find((x) => x.slug === slug)!;
  return (
    <Link
      href={`/misiones/${m.slug}`}
      className="group block border-t border-ash py-8 transition-colors hover:border-forest"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-display-sm font-semibold tracking-tight group-hover:text-forest transition-colors">
          {m.nombre}
        </h3>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">
          {m.ubicacion.municipio}, {m.ubicacion.provincia}
        </span>
      </div>
      <p className="mt-3 text-base lg:text-lg text-smoke leading-relaxed max-w-2xl">
        {m.resumen}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-forest transition-colors">
        Ver la misión
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export default function Misiones() {
  return (
    <>
      <PageHero
        eyebrow="Misiones"
        title="Un bosque tiene nombre y coordenadas."
        italicWord="nombre y coordenadas."
        description="Cada misión es un terreno concreto. Aquí publicamos dónde está, qué se plantó y qué ha sobrevivido, incluido lo que no salió bien."
      />

      <section className="bg-bone">
        <div className="container-x max-w-5xl py-20 lg:py-28">
          <p className="text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl mb-20">
            Hablar de hectáreas en abstracto no compromete a nada. Por eso
            cada proyecto tiene su página, con sus datos y su seguimiento. Si
            una plantación fracasa, también lo contaremos aquí: una tasa de
            supervivencia mala publicada vale más que una buena inventada.
          </p>

          {ORDEN.map((estado) => {
            const lista = MISIONES.filter((m) => m.estado === estado);
            return (
              <div key={estado} className="mb-20 last:mb-0">
                <div className="flex items-baseline gap-4 mb-2">
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-forest">
                    {COPY_ESTADO[estado].titulo}
                  </h2>
                  {lista.length > 0 && (
                    <span className="font-mono text-xs text-smoke">
                      {String(lista.length).padStart(2, '0')}
                    </span>
                  )}
                </div>

                {lista.length === 0 ? (
                  <p className="border-t border-ash pt-8 text-base text-smoke leading-relaxed max-w-2xl">
                    {COPY_ESTADO[estado].vacio}
                  </p>
                ) : (
                  lista.map((m) => <Tarjeta key={m.slug} slug={m.slug} />)
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-x max-w-5xl py-20 lg:py-28">
          <h2 className="text-display-sm font-semibold tracking-tight max-w-2xl">
            Cada prenda de Forest Classics{' '}
            <span className="italic-display font-normal">
              financia una de estas misiones.
            </span>
          </h2>
          <p className="mt-6 text-base lg:text-lg text-bone/70 leading-relaxed max-w-xl">
            La etiqueta de cada prenda lleva un código que abre su ficha de
            trazabilidad, y de ahí se llega hasta aquí. De la camiseta al
            terreno, sin intermediarios ni porcentajes en letra pequeña.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <a
              href="https://ecoreforest.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-bone hover:text-bone/70 transition-colors"
            >
              Ver la colección
              <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/colabora"
              className="inline-flex items-center gap-2 text-sm font-medium text-bone hover:text-bone/70 transition-colors"
            >
              Otras formas de colaborar
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
