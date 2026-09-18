import Link from 'next/link';
import { LegalLayout, Bloque, Fila, Pendiente } from '../components/LegalLayout';

export const metadata = {
  title: 'Política de cookies',
  description:
    'Este sitio no usa cookies de analítica ni de publicidad. Solo lo estrictamente necesario para que funcione.',
};

/**
 * Paso 21: política de cookies real, en sustitución del stub.
 *
 * El sitio no carga analítica, ni píxeles publicitarios, ni widgets de
 * redes sociales, y las tipografías se sirven desde el propio dominio con
 * next/font. Eso significa que no hay cookies sujetas al artículo 22.2 de
 * la LSSI y, por tanto, no procede un banner de consentimiento: poner uno
 * sería pedir permiso para algo que no hacemos.
 *
 * Si algún día se añade analítica, un píxel de Meta o un vídeo incrustado
 * de YouTube, esta página deja de ser cierta y el banner pasa a ser
 * obligatorio.
 */
export default function Cookies() {
  return (
    <LegalLayout
      title="Política de cookies."
      italicWord="cookies"
      description="La versión corta: no te rastreamos. No hay analítica, ni publicidad, ni píxeles de redes sociales."
      actualizado={<Pendiente>fecha de publicación</Pendiente>}
    >
      <Bloque n="01" titulo="Qué es una cookie">
        <p>
          Una cookie es un pequeño archivo que un sitio web guarda en tu
          dispositivo cuando lo visitas. Sirve para cosas tan corrientes como
          recordar que has iniciado sesión, y también para cosas bastante menos
          corrientes, como seguirte de página en página construyendo un perfil
          de tus intereses.
        </p>
        <p>
          La ley trata ambos casos de forma distinta: las primeras son técnicas
          y no necesitan tu permiso; las segundas sí.
        </p>
      </Bloque>

      <Bloque n="02" titulo="Qué usamos en este sitio">
        <p>
          Nada que requiera tu consentimiento. Este sitio{' '}
          <span className="text-ink">no instala cookies de analítica</span>, ni
          de publicidad, ni de redes sociales, ni comparte tu navegación con
          terceros con fines de perfilado.
        </p>
        <div className="pt-3">
          <Fila clave="Analítica">
            No usamos Google Analytics ni ninguna herramienta equivalente.
          </Fila>
          <Fila clave="Publicidad">
            No hay píxeles de Meta, TikTok, LinkedIn ni ninguna red publicitaria.
          </Fila>
          <Fila clave="Tipografías">
            Se sirven desde nuestro propio dominio. Tu navegador no hace ninguna
            petición a servidores de Google al cargar la web.
          </Fila>
          <Fila clave="Técnicas">
            Nuestro proveedor de alojamiento puede usar identificadores
            estrictamente necesarios para servir el sitio, repartir la carga y
            protegerlo frente a ataques.
          </Fila>
        </div>
      </Bloque>

      <Bloque n="03" titulo="Por qué no ves un banner">
        <p>
          El artículo 22.2 de la Ley 34/2002 exige pedir consentimiento antes de
          almacenar información en tu dispositivo, salvo cuando ese
          almacenamiento sea imprescindible para prestar el servicio que has
          pedido. Como aquí solo hay de lo segundo, no tenemos nada que
          preguntarte.
        </p>
        <p>
          Preferimos explicarlo en una página como esta a colocarte una ventana
          que te obligue a aceptar algo que no ocurre. Si algún día añadimos
          analítica o cualquier herramienta que sí requiera permiso, verás el
          banner correspondiente antes de que se active nada, y esta página lo
          reflejará.
        </p>
      </Bloque>

      <Bloque n="04" titulo="Servicios de terceros">
        <p>
          Hay dos momentos en los que sales de nuestro terreno y entras en el de
          un tercero, que aplica sus propias políticas:
        </p>
        <div className="pt-3">
          <Fila clave="Pasarela de pago">
            Al hacerte socio o donar, el pago lo procesa Stripe, que sí utiliza
            cookies propias, entre otras cosas para prevenir el fraude. Es un
            tratamiento necesario para que el pago funcione.
          </Fila>
          <Fila clave="Enlaces externos">
            Si sigues un enlace a Instagram, LinkedIn o TikTok, a partir de ese
            clic manda la política de esa plataforma, no la nuestra. Los enlaces
            son enlaces normales: no incrustamos sus widgets en nuestras
            páginas.
          </Fila>
        </div>
      </Bloque>

      <Bloque n="05" titulo="Cómo controlarlas tú">
        <p>
          Aunque aquí no haya nada que bloquear, todos los navegadores permiten
          ver, borrar y bloquear las cookies de cualquier sitio desde sus
          ajustes de privacidad. Ten en cuenta que bloquear las técnicas puede
          impedir que algunas webs funcionen correctamente.
        </p>
      </Bloque>

      <Bloque n="06" titulo="Datos personales">
        <p>
          Lo que sí hacemos con los datos que nos facilitas voluntariamente —al
          escribirnos, suscribirte o hacerte socio— está explicado en la{' '}
          <Link
            href="/privacidad"
            className="underline underline-offset-4 hover:text-forest transition-colors"
          >
            política de privacidad
          </Link>
          .
        </p>
      </Bloque>
    </LegalLayout>
  );
}
