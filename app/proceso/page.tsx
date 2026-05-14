import ProcesoHero from '../components/proceso/ProcesoHero';
import ProcesoEtapas from '../components/proceso/ProcesoEtapas';
import ProcesoCiclo from '../components/proceso/ProcesoCiclo';
import ProcesoTrazabilidad from '../components/proceso/ProcesoTrazabilidad';
import ProcesoCTA from '../components/proceso/ProcesoCTA';

export const metadata = {
  title: 'Proceso',
  description:
    'Los cuatro pasos del ciclo: recolección, compostaje acelerado, plantación y monitoreo. Trazabilidad pública y datos verificables.',
};

export default function Proceso() {
  return (
    <>
      <ProcesoHero />
      <ProcesoEtapas />
      <ProcesoCiclo />
      <ProcesoTrazabilidad />
      <ProcesoCTA />
    </>
  );
}
