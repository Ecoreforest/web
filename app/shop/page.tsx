import ShopHero from '../components/shop/ShopHero';
import ShopManifiesto from '../components/shop/ShopManifiesto';
import ShopColecciones from '../components/shop/ShopColecciones';
import ShopCTA from '../components/shop/ShopCTA';

export const metadata = {
  title: 'EcoReforest Wear',
  description: 'Moda 100% ecológica con trazabilidad blockchain. Algodón orgánico GOTS, lino europeo y fibras recicladas. Cada compra planta un árbol.',
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
