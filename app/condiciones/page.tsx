import Link from 'next/link';
import { LegalLayout, Bloque, Fila, Pendiente } from '../components/LegalLayout';

export const metadata = {
  title: 'Condiciones de contratación',
  description:
    'Condiciones aplicables a las cuotas de socio y donaciones a EcoReforest y a la contratación de sus servicios.',
};

/**
 * Paso 21: condiciones reales, en sustitución del stub.
 *
 * El stub se titulaba "Condiciones de venta", pero la asociación no vende
 * nada por esta web: recibe cuotas y donaciones por Stripe, y sus servicios
 * a empresas se contratan por presupuesto. La ropa se vende en
 * ecoreforest.com y tiene sus propias condiciones. De ahí el cambio de
 * título — conviene cambiar también la etiqueta del enlace en el footer.
 */
export default function Condiciones() {
  return (
    <LegalLayout
      title="Condiciones de contratación."
      italicWord="contratación"
      description="Qué ocurre cuando te haces socio, cuando donas y cuando contratas uno de nuestros servicios."
      actualizado={<Pendiente>fecha de publicación</Pendiente>}
    >
      <Bloque n="01" titulo="A qué se aplican">
        <p>
          Estas condiciones regulan las aportaciones económicas que se realizan
          a través de ecoreforest.org —cuotas de socio y donaciones puntuales— y
          la contratación de los servicios que presta la asociación.
        </p>
        <p>
          La venta de ropa de la marca Forest Classics se realiza en un sitio
          distinto, ecoreforest.com, y se rige por las condiciones de venta
          publicadas allí.
        </p>
      </Bloque>

      <Bloque n="02" titulo="Quién recibe la aportación">
        <div className="pt-1">
          <Fila clave="Entidad">
            EcoReforest, asociación sin ánimo de lucro inscrita en el Registro
            Nacional de Asociaciones
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
      </Bloque>

      <Bloque n="03" titulo="Cuotas de socio">
        <p>
          Las cuotas son aportaciones periódicas que sostienen el trabajo de la
          asociación. Al darte de alta eliges el importe entre las modalidades
          publicadas en la página de colaboración y el cargo se repite
          automáticamente con la periodicidad que hayas escogido, hasta que tú
          lo canceles.
        </p>
        <p>
          El importe se muestra siempre antes de confirmar. Si en el futuro
          modificáramos las modalidades, tu cuota en vigor se respeta: ningún
          cambio se aplica a una aportación ya activa sin avisarte antes por
          correo y darte la opción de cancelar.
        </p>
      </Bloque>

      <Bloque n="04" titulo="Cómo darse de baja">
        <p>
          Puedes cancelar tu cuota cuando quieras, sin dar explicaciones y sin
          penalización, escribiendo a{' '}
          <a
            href="mailto:hola@ecoreforest.com"
            className="underline underline-offset-4 hover:text-forest transition-colors"
          >
            hola@ecoreforest.com
          </a>
          . La cancelación surte efecto sobre el siguiente cobro; los cargos ya
          realizados corresponden a periodos ya transcurridos y no se
          reembolsan.
        </p>
        <p>
          Si se produce un cobro por error —un duplicado, un cargo después de
          haber cancelado o un importe distinto al acordado— escríbenos y lo
          devolvemos íntegro. Esto no es una concesión: es un error nuestro.
        </p>
      </Bloque>

      <Bloque n="05" titulo="Donaciones puntuales">
        <p>
          Una donación puntual es una aportación voluntaria y a título gratuito.
          Por su naturaleza no lleva contraprestación y, una vez realizada, no
          es reembolsable, salvo en los supuestos de error del párrafo anterior.
        </p>
        <p>
          Si necesitas un certificado de tu aportación para tu declaración,
          pídenoslo por correo.{' '}
          <Pendiente>
            confirmar si la asociación está acogida a la Ley 49/2002; si no lo
            está, las aportaciones no dan derecho a deducción y hay que decirlo
            aquí
          </Pendiente>
        </p>
      </Bloque>

      <Bloque n="06" titulo="Pagos">
        <p>
          Los pagos se procesan a través de Stripe. La asociación no ve ni
          almacena en ningún momento los datos de tu tarjeta. Los importes se
          expresan en euros.
        </p>
        <p>
          Si un cobro es rechazado por tu entidad, Stripe puede reintentarlo. Si
          tras los reintentos sigue sin poder cobrarse, la cuota se cancela y te
          lo comunicamos.
        </p>
      </Bloque>

      <Bloque n="07" titulo="Servicios a empresas y entidades">
        <p>
          Los servicios que presta la asociación —suministro y validación de
          compost certificado, proyectos de reforestación, Forest Clean,
          auditorías y acompañamiento en créditos de carbono— no se contratan
          por esta web. Se estudian caso por caso y se formalizan mediante
          propuesta escrita y contrato entre las partes.
        </p>
        <p>
          El alcance, el precio, los plazos y las obligaciones de cada encargo
          son los que recoja ese contrato, que prevalece sobre lo que puedas
          leer en las páginas divulgativas de este sitio.
        </p>
      </Bloque>

      <Bloque n="08" titulo="Qué hacemos con el dinero">
        <p>
          EcoReforest es una asociación sin ánimo de lucro: no reparte
          beneficios entre sus miembros. Los ingresos por cuotas, donaciones y
          servicios se destinan íntegramente a los fines de la asociación y a
          los gastos necesarios para sostenerla.
        </p>
        <p>
          La asociación publica sus datos de actividad de forma abierta. Si
          quieres saber en qué se ha empleado tu aportación, pregunta: es
          información que tienes derecho a conocer.
        </p>
      </Bloque>

      <Bloque n="09" titulo="Datos personales">
        <p>
          El tratamiento de los datos que facilitas al hacerte socio o donar
          está explicado en la{' '}
          <Link
            href="/privacidad"
            className="underline underline-offset-4 hover:text-forest transition-colors"
          >
            política de privacidad
          </Link>
          .
        </p>
      </Bloque>

      <Bloque n="10" titulo="Legislación aplicable">
        <p>
          Estas condiciones se rigen por la legislación española. Si tienes la
          condición de consumidor, conservas en todo caso los derechos que te
          reconoce la normativa de consumo, incluido el de acudir a los
          tribunales de tu domicilio.
        </p>
      </Bloque>
    </LegalLayout>
  );
}
