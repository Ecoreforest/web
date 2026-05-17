import EquipoHero from '../components/equipo/EquipoHero';
import EquipoManifiesto from '../components/equipo/EquipoManifiesto';
import EquipoFundadores from '../components/equipo/EquipoFundadores';
import EquipoEstructura from '../components/equipo/EquipoEstructura';
import EquipoCTA from '../components/equipo/EquipoCTA';

export const metadata = {
  title: 'Equipo',
  description:
    'Las personas detrás de EcoReforest. Junta Directiva fundadora, áreas operativas y red abierta de colaboradores. Tres fundadores, una decisión clara: revertir la desertificación con transparencia y rigor.',
};

export default function Equipo() {
  return (
    <>
      <EquipoHero />
      <EquipoManifiesto />
      <EquipoFundadores />
      <EquipoEstructura />
      <EquipoCTA />
    </>
  );
}
