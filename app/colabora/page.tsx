import ColaboraHero from '../components/colabora/ColaboraHero';
import ColaboraFormas from '../components/colabora/ColaboraFormas';
import ColaboraEmpresas from '../components/colabora/ColaboraEmpresas';
import ColaboraVoluntariado from '../components/colabora/ColaboraVoluntariado';
import ColaboraCTA from '../components/colabora/ColaboraCTA';

export const metadata = {
  title: 'Colabora',
  description:
    'Empresas, voluntariado, mecenazgo e inversores. Cuatro formas de formar parte de EcoReforest, todas auditables, todas con compromiso real.',
};

export default function Colabora() {
  return (
    <>
      <ColaboraHero />
      <ColaboraFormas />
      <ColaboraEmpresas />
      <ColaboraVoluntariado />
      <ColaboraCTA />
    </>
  );
}
