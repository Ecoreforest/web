import ProcesoHero from '../components/proceso/ProcesoHero';
import ProcesoIntro from '../components/proceso/ProcesoIntro';
import ProcesoPaso01 from '../components/proceso/ProcesoPaso01';
import ProcesoPaso02 from '../components/proceso/ProcesoPaso02';
import ProcesoPaso03 from '../components/proceso/ProcesoPaso03';
import ProcesoPaso04 from '../components/proceso/ProcesoPaso04';
import ServicioCTA from '../components/servicios/ServicioCTA';

export const metadata = {
  title: 'Proceso',
  description:
    'Del residuo al bosque, paso a paso. Recolección, compostaje acelerado, plantación y monitoreo. La ingeniería detrás de cada hectárea restaurada.',
};

export default function Proceso() {
  return (
    <>
      <ProcesoHero />
      <ProcesoIntro />
      <ProcesoPaso01 />
      <ProcesoPaso02 />
      <ProcesoPaso03 />
      <ProcesoPaso04 />
      <ServicioCTA
        titulo="Así es como cerramos el ciclo."
        italicWord="cerramos el ciclo."
        subtitulo="Si quieres ver la tecnología detrás de cada fase, o sumar a tu empresa a un proyecto en marcha, este es el siguiente paso."
        ctaPrimario={{ label: 'Conoce nuestra tecnología', href: '/tecnologia' }}
        ctaSecundario={{ label: 'Únete al proyecto', href: '/colabora' }}
      />
    </>
  );
}
