import HojaRutaHero from '../components/hoja-de-ruta/HojaRutaHero';
import HojaRutaEstado from '../components/hoja-de-ruta/HojaRutaEstado';
import HojaRutaFases from '../components/hoja-de-ruta/HojaRutaFases';
import HojaRutaCronograma from '../components/hoja-de-ruta/HojaRutaCronograma';
import HojaRutaHitos from '../components/hoja-de-ruta/HojaRutaHitos';
import HojaRutaCTA from '../components/hoja-de-ruta/HojaRutaCTA';

export const metadata = {
  title: 'Hoja de ruta',
  description:
    'Tres fases, treinta meses. De la presentación al Registro Nacional de Asociaciones (22 abril 2026) al primer reporte público auditado (enero 2028). Cronograma honesto sobre lo confirmado, lo objetivo y lo condicional.',
};

export default function HojaDeRuta() {
  return (
    <>
      <HojaRutaHero />
      <HojaRutaEstado />
      <HojaRutaFases />
      <HojaRutaCronograma />
      <HojaRutaHitos />
      <HojaRutaCTA />
    </>
  );
}
