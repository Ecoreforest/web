import ProyectoHero from '../components/proyecto/ProyectoHero';
import ProyectoManifiesto from '../components/proyecto/ProyectoManifiesto';
import ProyectoProblema from '../components/proyecto/ProyectoProblema';
import ProyectoSolucion from '../components/proyecto/ProyectoSolucion';
import ProyectoBalanceCiclo from '../components/proyecto/ProyectoBalanceCiclo';
import ProyectoMarco from '../components/proyecto/ProyectoMarco';
import ProyectoOportunidad from '../components/proyecto/ProyectoOportunidad';
import ProyectoCTA from '../components/proyecto/ProyectoCTA';

export const metadata = {
  title: 'El proyecto',
  description:
    'Quiénes somos, por qué empezamos y a dónde vamos. Una asociación nacida para revertir la desertificación con economía circular.',
};

/**
 * Paso 14: se inserta ProyectoBalanceCiclo entre Solucion y Marco.
 * Cierra la narrativa "así funciona el ciclo" (Solucion) con "esto es lo
 * que entra y sale del sistema" (BalanceCiclo) antes de escalar al marco
 * institucional europeo/español.
 */
export default function Proyecto() {
  return (
    <>
      <ProyectoHero />
      <ProyectoManifiesto />
      <ProyectoProblema />
      <ProyectoSolucion />
      <ProyectoBalanceCiclo />
      <ProyectoMarco />
      <ProyectoOportunidad />
      <ProyectoCTA />
    </>
  );
}
