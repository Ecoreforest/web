import TecnologiaHero from '../components/tecnologia/TecnologiaHero';
import TecnologiaPilares from '../components/tecnologia/TecnologiaPilares';
import TecnologiaStack from '../components/tecnologia/TecnologiaStack';
import TecnologiaDatos from '../components/tecnologia/TecnologiaDatos';
import TecnologiaTrazabilidad from '../components/tecnologia/TecnologiaTrazabilidad';
import TecnologiaCTA from '../components/tecnologia/TecnologiaCTA';

export const metadata = {
  title: 'Tecnología',
  description:
    'Sensores IoT, drones multiespectrales, Torre Warka, análisis satelital y trazabilidad pública en cuatro niveles. La pila tecnológica completa del proyecto.',
};

/**
 * Paso 14:
 * - Se inserta TecnologiaTrazabilidad entre Datos y CTA. Los 4 niveles de
 *   trazabilidad son una capa técnica del stack.
 * - Se actualiza la metadata description (antes decía "compostaje acelerado",
 *   obsoleto tras el paso 13 de externalización).
 */
export default function Tecnologia() {
  return (
    <>
      <TecnologiaHero />
      <TecnologiaPilares />
      <TecnologiaStack />
      <TecnologiaDatos />
      <TecnologiaTrazabilidad />
      <TecnologiaCTA />
    </>
  );
}
