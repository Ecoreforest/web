import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MISIONES,
  getMision,
  esPendiente,
  mapaUrl,
  mapaEnlace,
  ETIQUETA_ESTADO,
  type Mision,
} from '../../../lib/misiones';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return MISIONES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const m = getMision(params.slug);
  if (!m) return { title: 'Misión no encontrada' };
  return { title: m.nombre, description: m.resumen };
}

/**
 * Paso 26: la página de una misión.
 *
 * Es el documento al que se llega escaneando la etiqueta de una prenda,
 * así que tiene que aguantar la lectura de alguien que viene a
 * comprobar, no a que le convenzan. De ahí que todo vaya en tablas de
 * dato y no en párrafos de folleto, y que los huecos se vean.
 */

function Dato({ clave, valor }: { clave: string; valor: string }) {
  const pendiente = esPendiente(valor);
  return (
    <div className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-8 py-5 border-b border-ash">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-smoke">
        {clave}
      </p>
      {pendiente ? (
        <p className="text-base text-smoke italic">Por determinar</p>
      ) : (
        <p className="text-base text-ink leading-relaxed">{valor}</p>
      )}
    </div>
  );
}

function Bloque({
  titulo,
  intro,
  children,
}: {
  titulo: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div className="mb-4">
        <h2 className="text-xl lg:text-2xl font-semibold tracking-tight">
          {titulo}
        </h2>
      </div>
      {intro && (
        <p className="text-base text-smoke leading-relaxed mb-6 max-w-2xl">
          {intro}
        </p>
      )}
      <div className="border-t border-ash">{children}</div>
    </section>
  );
}

function Mapa({ ubicacion, nombre }: { ubicacion: Mision['ubicacion']; nombre: string }) {
  if (!ubicacion.coordenadas) {
    return (
      <div className="aspect-[4/3] sm:aspect-[16/9] bg-ivory border border-ash flex items-center justify-center px-8">
        <p className="text-base text-smoke text-center max-w-md leading-relaxed">
          Todavía no hay parcela cerrada. Cuando la haya, aquí aparecerá el
          mapa con su ubicación.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="aspect-[4/3] sm:aspect-[16/9] border border-ash overflow-hidden bg-ivory">
        <iframe
          src={mapaUrl(ubicacion.coordenadas)}
          title={`Mapa de ${nombre}`}
          loading="lazy"
          className="w-full h-full border-0"
        />
      </div>
      <div className="flex justify-end mt-2">
        <a
          href={mapaEnlace(ubicacion.coordenadas)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-[0.2em] text-smoke hover:text-forest transition-colors"
        >
          Abrir el mapa completo
        </a>
      </div>
    </>
  );
}

export default function MisionPage({ params }: Props) {
  const m = getMision(params.slug);
  if (!m) notFound();

  return (
    <>
      {/* Cabecera */}
      <section className="pt-32 lg:pt-40 pb-12 bg-ivory border-b border-ash">
        <div className="container-x max-w-5xl">
          <div className="flex flex-wrap items-center gap-4 mb-7">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-forest">
              Misión
            </span>
            <span className="inline-block border border-ash bg-bone px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-ink">
              {ETIQUETA_ESTADO[m.estado]}
            </span>
          </div>

          <h1 className="text-display-md font-semibold tracking-tight text-balance">
            {m.nombre}
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl">
            {m.resumen}
          </p>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-smoke">
            {m.ubicacion.municipio} · {m.ubicacion.provincia} ·{' '}
            {m.ubicacion.zona}
          </p>
        </div>
      </section>

      <div className="container-x max-w-5xl py-20 lg:py-24">
        {/* Mapa primero: lo que la gente viene a ver */}
        <section className="mb-16">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight mb-6">
            Dónde
          </h2>
          <Mapa ubicacion={m.ubicacion} nombre={m.nombre} />
        </section>

        {/* Contexto */}
        <section className="mb-16 max-w-2xl">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-tight mb-6">
            Por qué aquí
          </h2>
          <div className="space-y-5 text-base lg:text-lg text-smoke leading-relaxed">
            {m.contexto.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <Bloque
          titulo="El terreno"
          intro="Qué superficie es, en qué estado estaba antes de tocar nada y de quién es."
        >
          <Dato clave="Superficie" valor={m.terreno.superficie} />
          <Dato clave="Estado previo" valor={m.terreno.estadoPrevio} />
          <Dato clave="Titularidad" valor={m.terreno.titularidad} />
        </Bloque>

        <Bloque
          titulo="La plantación"
          intro="Qué se planta, cuánto y cuándo."
        >
          <Dato clave="Especies" valor={m.plantacion.especies} />
          <Dato clave="Árboles" valor={m.plantacion.arboles} />
          <Dato clave="Densidad" valor={m.plantacion.densidad} />
          <Dato clave="Fecha" valor={m.plantacion.fecha} />
        </Bloque>

        <Bloque
          titulo="El seguimiento"
          intro="Plantar es la parte fácil. Lo que decide si un bosque existe dentro de diez años es lo que se hace después, y quién lo comprueba."
        >
          <Dato clave="Supervivencia" valor={m.seguimiento.supervivencia} />
          <Dato clave="Mediciones" valor={m.seguimiento.mediciones} />
          <Dato clave="Verificación" valor={m.seguimiento.verificacion} />
        </Bloque>

        <Bloque
          titulo="Quién lo hace posible"
          intro="Una plantación no la levanta una asociación sola."
        >
          <Dato clave="Propietario" valor={m.apoyos.propietario} />
          <Dato clave="Administraciones" valor={m.apoyos.administraciones} />
          <Dato clave="Empresas" valor={m.apoyos.empresas} />
          <Dato clave="Financiación" valor={m.apoyos.financiacion} />
        </Bloque>

        {/* Vínculo con la tienda */}
        {m.lotes.length > 0 && (
          <Bloque
            titulo="Prendas que la financian"
            intro="Estas tiradas de Forest Classics destinan sus ingresos a esta misión. Si tienes una en casa, su etiqueta trae este terreno."
          >
            {m.lotes.map((codigo) => (
              <div key={codigo} className="py-5 border-b border-ash">
                <a
                  href={`https://ecoreforest.com/lote/${codigo}`}
                  className="font-mono text-sm tracking-[0.1em] text-ink hover:text-forest transition-colors"
                >
                  {codigo} →
                </a>
              </div>
            ))}
          </Bloque>
        )}

        {/* Cierre */}
        <section className="border-t border-ash pt-12">
          <p className="text-base text-smoke leading-relaxed max-w-2xl mb-10">
            Los huecos marcados como «por determinar» se van rellenando según
            avanza el proyecto. Si algo de esta página no te cuadra o quieres
            el detalle técnico, escríbenos a{' '}
            <a
              href="mailto:hola@ecoreforest.com"
              className="underline underline-offset-4 hover:text-forest transition-colors"
            >
              hola@ecoreforest.com
            </a>
            . Publicamos estos datos precisamente para que alguien los
            compruebe.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/misiones"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-forest transition-colors"
            >
              <span aria-hidden="true">←</span>
              Todas las misiones
            </Link>
            <Link
              href="/colabora"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-forest transition-colors"
            >
              Apoyar esta misión
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
