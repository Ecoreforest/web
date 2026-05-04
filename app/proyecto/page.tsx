import ProyectoHero from '../components/proyecto/ProyectoHero';
import ProyectoManifiesto from '../components/proyecto/ProyectoManifiesto';
import ProyectoProblema from '../components/proyecto/ProyectoProblema';
import ProyectoSolucion from '../components/proyecto/ProyectoSolucion';
import ProyectoEstrategia from '../components/proyecto/ProyectoEstrategia';
import ProyectoEquipo from '../components/proyecto/ProyectoEquipo';
import ProyectoMarco from '../components/proyecto/ProyectoMarco';
import ProyectoOportunidad from '../components/proyecto/ProyectoOportunidad';
import ProyectoCTA from '../components/proyecto/ProyectoCTA';

export const metadata = {
  title: 'El proyecto',
  description:
    'Quiénes somos, por qué empezamos y a dónde vamos. Una asociación nacida para revertir la desertificación con economía circular.',
};

export default function Proyecto() {
  return (
    <>
      <ProyectoHero />
      <ProyectoManifiesto />
      <ProyectoProblema />
      <ProyectoSolucion />
      <ProyectoEstrategia />
      <ProyectoEquipo />
      <ProyectoMarco />
      <ProyectoOportunidad />
      <ProyectoCTA />
    </>
  );
}
