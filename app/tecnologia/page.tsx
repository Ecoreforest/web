import TecnologiaHero from '../components/tecnologia/TecnologiaHero';
import TecnologiaPilares from '../components/tecnologia/TecnologiaPilares';
import TecnologiaStack from '../components/tecnologia/TecnologiaStack';
import TecnologiaDatos from '../components/tecnologia/TecnologiaDatos';
import TecnologiaCTA from '../components/tecnologia/TecnologiaCTA';

export const metadata = {
  title: 'Tecnología',
  description:
    'Compostaje acelerado, sensores IoT, drones multiespectrales, Torre Warka y análisis satelital. La pila tecnológica completa del proyecto.',
};

export default function Tecnologia() {
  return (
    <>
      <TecnologiaHero />
      <TecnologiaPilares />
      <TecnologiaStack />
      <TecnologiaDatos />
      <TecnologiaCTA />
    </>
  );
}
