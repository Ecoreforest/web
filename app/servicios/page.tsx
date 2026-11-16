import ServiciosIndice from '../components/servicios/ServiciosIndice';

/**
 * Paso 32: la página pasa a ser de servidor para poder tener metadatos
 * propios. Hasta ahora heredaba los globales y salía en Google con el
 * título de la portada, compitiendo contra su propia home por la misma
 * búsqueda.
 *
 * La descripción nombra los cinco servicios y a quién van dirigidos,
 * porque es el texto que se lee bajo el enlace en los resultados y es
 * lo que decide si alguien entra.
 */
export const metadata = {
  title: 'Servicios',
  description:
    'Compost certificado UNE 142500, reforestación integral, limpieza y gestión de biomasa forestal, auditorías con certificación FSC y PEFC y créditos de carbono verificables. Para administraciones, empresas y propietarios de terreno.',
};

export default function Servicios() {
  return <ServiciosIndice />;
}
