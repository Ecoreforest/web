import Link from 'next/link';
import { LegalLayout, Bloque, Fila, Pendiente } from '../components/LegalLayout';

export const metadata = {
  title: 'Aviso legal',
  description:
    'Datos identificativos de EcoReforest, condiciones de uso del sitio web y régimen de propiedad intelectual.',
};

/**
 * Paso 21: aviso legal real, en sustitución del stub.
 *
 * Contenido mínimo exigido por el artículo 10 de la Ley 34/2002 (LSSI-CE):
 * denominación, NIF, domicilio, datos de contacto y datos de inscripción
 * en el registro correspondiente. Los datos registrales están marcados
 * como pendientes porque no me constan y un dato registral inventado es
 * peor que un hueco visible.
 */
export default function AvisoLegal() {
  return (
    <LegalLayout
      title="Aviso legal."
      italicWord="legal"
      description="Quiénes somos, qué puedes hacer en este sitio y a quién pertenece lo que hay en él."
      actualizado={<Pendiente>fecha de publicación</Pendiente>}
    >
      <Bloque n="01" titulo="Datos identificativos">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la
          sociedad de la información y de comercio electrónico, se hacen
          constar los siguientes datos:
        </p>
        <div className="pt-2">
          <Fila clave="Denominación">EcoReforest</Fila>
          <Fila clave="Naturaleza">
            Asociación sin ánimo de lucro inscrita en el Registro Nacional de
            Asociaciones del Ministerio del Interior
          </Fila>
          <Fila clave="Nº de inscripción">
            <Pendiente>número de inscripción</Pendiente>
          </Fila>
          <Fila clave="NIF">
            <Pendiente>NIF</Pendiente>
          </Fila>
          <Fila clave="Domicilio">
            <Pendiente>domicilio social</Pendiente>
          </Fila>
          <Fila clave="Correo">
            <a
              href="mailto:hola@ecoreforest.com"
              className="underline underline-offset-4 hover:text-forest transition-colors"
            >
              hola@ecoreforest.com
            </a>
          </Fila>
          <Fila clave="Sitio web">ecoreforest.org</Fila>
        </div>
      </Bloque>

      <Bloque n="02" titulo="Objeto del sitio">
        <p>
          EcoReforest es una asociación sin ánimo de lucro que combate la
          desertificación en España mediante la restauración de suelos
          degradados. Este sitio web existe para divulgar ese trabajo, publicar
          los datos del proyecto, permitir el contacto con la asociación y
          canalizar las cuotas de las personas y entidades que lo sostienen.
        </p>
        <p>
          El acceso al sitio es gratuito y no requiere registro, salvo en los
          apartados donde se indique expresamente lo contrario.
        </p>
      </Bloque>

      <Bloque n="03" titulo="Condiciones de uso">
        <p>
          Al navegar por este sitio aceptas estas condiciones. Te comprometes a
          hacer un uso lícito del sitio y a no emplearlo para actividades
          contrarias a la ley, al orden público o a los derechos de terceros,
          ni a intentar dañar, sobrecargar o acceder sin autorización a sus
          sistemas.
        </p>
        <p>
          Nos reservamos el derecho a modificar en cualquier momento la
          presentación, la configuración y los contenidos del sitio, así como a
          suspender temporalmente el acceso por motivos técnicos.
        </p>
      </Bloque>

      <Bloque n="04" titulo="Propiedad intelectual e industrial">
        <p>
          La denominación EcoReforest, su logotipo, los textos, fotografías,
          ilustraciones, vídeos, el diseño del sitio y el código que lo sostiene
          son titularidad de la asociación o se usan con licencia de sus
          titulares. Su reproducción, distribución o transformación sin
          autorización expresa no está permitida.
        </p>
        <p>
          Sí puedes citar y enlazar libremente los contenidos divulgativos y
          los datos publicados del proyecto, indicando la fuente. La asociación
          publica sus datos precisamente para que se usen.
        </p>
      </Bloque>

      <Bloque n="05" titulo="Responsabilidad">
        <p>
          Ponemos un cuidado razonable en que la información publicada sea
          exacta y esté actualizada, pero los contenidos divulgativos y las
          cifras del proyecto pueden variar a medida que avanza el trabajo de
          campo. No respondemos de las decisiones que se tomen basándose
          únicamente en la información de este sitio.
        </p>
        <p>
          El sitio puede contener enlaces a páginas de terceros. No controlamos
          sus contenidos ni respondemos de ellos: incluir un enlace no implica
          que compartamos lo que hay al otro lado.
        </p>
      </Bloque>

      <Bloque n="06" titulo="Protección de datos y cookies">
        <p>
          El tratamiento de los datos personales que nos facilitas está
          detallado en la{' '}
          <Link
            href="/privacidad"
            className="underline underline-offset-4 hover:text-forest transition-colors"
          >
            política de privacidad
          </Link>
          , y el uso de cookies y almacenamiento local, en la{' '}
          <Link
            href="/cookies"
            className="underline underline-offset-4 hover:text-forest transition-colors"
          >
            política de cookies
          </Link>
          .
        </p>
      </Bloque>

      <Bloque n="07" titulo="Legislación aplicable">
        <p>
          Este aviso legal se rige por la legislación española. Para cualquier
          controversia serán competentes los juzgados y tribunales que
          correspondan conforme a derecho, sin que ello afecte a los derechos
          que la normativa de consumo reconozca a quienes tengan la condición
          de consumidores.
        </p>
      </Bloque>
    </LegalLayout>
  );
}
