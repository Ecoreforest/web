import ShopHero from '../components/shop/ShopHero';
import ShopManifiesto from '../components/shop/ShopManifiesto';
import ShopColecciones from '../components/shop/ShopColecciones';
import ShopCTA from '../components/shop/ShopCTA';

export const metadata = {
  title: 'EcoReforest Wear',
  description:
    'Dos colecciones dentro de EcoReforest Wear: Forest Wear (premium casual) y Sport (rendimiento técnico). Materiales certificados, producción bajo demanda, kilómetro cero textil y un 10% de los ingresos netos a financiar reforestación.',
};

export default function Shop() {
  return (
    <>
      <ShopHero />
      <ShopManifiesto />
      <ShopColecciones />
      <ShopCTA />
    </>
  );
}
