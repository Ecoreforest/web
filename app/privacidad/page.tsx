import Link from 'next/link';
import { LegalLayout, Bloque, Fila, Pendiente } from '../components/LegalLayout';

export const metadata = {
  title: 'Política de privacidad',
  description:
    'Qué datos personales recogemos en ecoreforest.org, para qué, con qué base legal, cuánto los guardamos y cómo ejercer tus derechos.',
};

/**
 * Paso 21: política de privacidad real, en sustitución del stub.
 *
 * Escrita sobre el inventario real de tratamientos del sitio, no sobre una
 * plantilla: formulario de contacto y newsletter (Web3Forms), cuotas de
 * socio (Stripe), alojamiento (Vercel) e imágenes (Cloudinary). El sitio
 * no tiene analítica ni píxeles publicitarios, y las tipografías se sirven
 * desde el propio dominio con next/font, así que no hay peticiones a
 * Google Fonts desde el navegador del visitante.
 */
export default function Privacidad() {
  return (
    <LegalLayout
      title="Política de privacidad."
      italicWord="privacidad"
      description="Qué datos nos das, qué hacemos con ellos y qué puedes exigirnos. Sin jerga innecesaria."
      actualizado={<Pendiente>fecha de publicación</Pendiente>}
    >
      <Bloque n="01" titulo="Quién es el responsable">
        <div className="pt-1">
          <Fila clave="Responsable">
            EcoReforest, asociación sin ánimo de lucro
          </Fila>
          <Fila clave="NIF">
            <Pendiente>NIF</Pendiente>
          </Fila>
          <Fila clave="Domicilio">
            <Pendiente>domicilio social</Pendiente>
          </Fila>
          <Fila clave="Contacto">
            <a
              href="mailto:hola@ecoreforest.com"
              className="underline underline-offset-4 hover:text-forest transition-colors"
            >
              hola@ecoreforest.com
            </a>
          </Fila>
        </div>
        <p className="pt-4">
          La asociación no ha designado delegado de protección de datos por no
          concurrir ninguno de los supuestos del artículo 37 del RGPD. Para
          cualquier cuestión sobre tus datos, escribe a esa dirección.
        </p>
      </Bloque>

      <Bloque n="02" titulo="Qué datos tratamos y por qué">
        <p>
          Solo tratamos los datos que nos das tú. No compramos bases de datos ni
          recogemos información de terceros.
        </p>

        <div className="pt-3">
          <Fila clave="Formulario de contacto">
            Nombre, correo electrónico, teléfono (opcional), tipo de consulta y
            el contenido del mensaje. Los usamos para responderte y para el
            seguimiento de esa conversación.
            <span className="block mt-2 text-sm text-smoke">
              Base legal: tu consentimiento, que prestas al marcar la casilla
              del formulario (art. 6.1.a RGPD).
            </span>
          </Fila>

          <Fila clave="Newsletter">
            Únicamente tu correo electrónico. Lo usamos para enviarte novedades
            del proyecto.
            <span className="block mt-2 text-sm text-smoke">
              Base legal: tu consentimiento (art. 6.1.a RGPD). Puedes retirarlo
              cuando quieras y dejarás de recibirlas.
            </span>
          </Fila>

          <Fila clave="Cuotas y donaciones">
            Nombre, correo electrónico y los datos de pago necesarios para
            domiciliar la cuota. Los usamos para gestionar tu aportación y
            cumplir nuestras obligaciones contables y fiscales.
            <span className="block mt-2 text-sm text-smoke">
              Base legal: la ejecución de la relación que nos vincula (art.
              6.1.b RGPD) y el cumplimiento de obligaciones legales (art.
              6.1.c RGPD).
            </span>
          </Fila>

          <Fila clave="Navegación">
            Nuestro proveedor de alojamiento registra datos técnicos como la
            dirección IP y el tipo de navegador en sus registros de servidor,
            por seguridad y para que el sitio funcione.
            <span className="block mt-2 text-sm text-smoke">
              Base legal: nuestro interés legítimo en mantener el sitio seguro y
              operativo (art. 6.1.f RGPD).
            </span>
          </Fila>
        </div>

        <p className="pt-4">
          No tomamos decisiones automatizadas ni elaboramos perfiles con tus
          datos.
        </p>
      </Bloque>

      <Bloque n="03" titulo="Cuánto tiempo los guardamos">
        <p>
          Los mensajes de contacto, mientras dure la conversación y durante el
          tiempo razonable posterior para poder retomarla. Tu correo del
          newsletter, hasta que te des de baja. Los datos de cuotas y
          donaciones, durante la vigencia de tu aportación y después el tiempo
          que exijan las obligaciones contables y fiscales, que en España es de
          seis años para los libros y la documentación mercantil, y de cuatro
          para las obligaciones tributarias.
        </p>
      </Bloque>

      <Bloque n="04" titulo="Con quién los compartimos">
        <p>
          No vendemos ni cedemos tus datos a nadie. Sí los tratan por nuestra
          cuenta los proveedores que hacen funcionar el sitio, con contratos de
          encargo de tratamiento:
        </p>
        <div className="pt-3">
          <Fila clave="Web3Forms">
            Procesa los envíos del formulario de contacto y del newsletter y nos
            los reenvía por correo.
          </Fila>
          <Fila clave="Stripe">
            Pasarela de pago de las cuotas y donaciones. Los datos de tu tarjeta
            los trata Stripe directamente: la asociación nunca los ve ni los
            almacena.
          </Fila>
          <Fila clave="Vercel">Alojamiento del sitio web.</Fila>
          <Fila clave="Cloudinary">
            Almacenamiento y entrega de las imágenes del sitio.
          </Fila>
        </div>
        <p className="pt-4">
          Algunos de estos proveedores están establecidos fuera del Espacio
          Económico Europeo o pueden tratar datos en terceros países. En esos
          casos la transferencia se ampara en los mecanismos previstos en el
          capítulo V del RGPD, como las cláusulas contractuales tipo de la
          Comisión Europea o una decisión de adecuación.
        </p>
        <p>
          También podremos comunicar datos a la Administración, a los juzgados o
          a las fuerzas de seguridad cuando una norma nos obligue a ello.
        </p>
      </Bloque>

      <Bloque n="05" titulo="Tus derechos">
        <p>
          Puedes pedirnos en cualquier momento acceder a tus datos,
          rectificarlos, suprimirlos, limitar su tratamiento, oponerte a él y
          solicitar su portabilidad. Cuando el tratamiento se base en tu
          consentimiento, puedes retirarlo cuando quieras, sin que ello afecte a
          la licitud del tratamiento anterior.
        </p>
        <p>
          Para ejercerlos basta con escribir a{' '}
          <a
            href="mailto:hola@ecoreforest.com"
            className="underline underline-offset-4 hover:text-forest transition-colors"
          >
            hola@ecoreforest.com
          </a>{' '}
          indicando qué derecho quieres ejercer. Podremos pedirte que acredites
          tu identidad. Responderemos en el plazo de un mes.
        </p>
        <p>
          Si crees que no hemos atendido tu solicitud correctamente, puedes
          reclamar ante la Agencia Española de Protección de Datos
          (www.aepd.es), que es la autoridad de control competente.
        </p>
      </Bloque>

      <Bloque n="06" titulo="Seguridad">
        <p>
          Aplicamos medidas técnicas y organizativas razonables para proteger
          tus datos: el sitio se sirve cifrado mediante HTTPS, el acceso a la
          información está limitado a las personas de la asociación que lo
          necesitan y los pagos se procesan íntegramente en la pasarela de un
          tercero certificado.
        </p>
        <p>
          Ningún sistema es infalible. Si se produjera una brecha de seguridad
          que suponga un riesgo alto para tus derechos, te lo comunicaremos y lo
          notificaremos a la autoridad de control en los plazos que marca el
          RGPD.
        </p>
      </Bloque>

      <Bloque n="07" titulo="Menores de edad">
        <p>
          Este sitio no está dirigido a menores de catorce años y no recogemos
          sus datos conscientemente. Si detectamos que hemos recibido datos de
          un menor sin el consentimiento de quien ejerza su patria potestad o
          tutela, los suprimiremos.
        </p>
      </Bloque>

      <Bloque n="08" titulo="Cambios en esta política">
        <p>
          Si cambiamos la forma en que tratamos tus datos, actualizaremos esta
          página y modificaremos la fecha del pie. Si el cambio es relevante y
          te afecta directamente, te avisaremos por correo.
        </p>
        <p>
          Sobre cookies y almacenamiento en tu dispositivo, consulta la{' '}
          <Link
            href="/cookies"
            className="underline underline-offset-4 hover:text-forest transition-colors"
          >
            política de cookies
          </Link>
          .
        </p>
      </Bloque>
    </LegalLayout>
  );
}
