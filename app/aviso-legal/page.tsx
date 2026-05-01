import PageHero from '../components/PageHero';

export const metadata = { title: 'Aviso legal' };

export default function AvisoLegal() {
  return (
    <PageHero
      eyebrow="Legal"
      title="Aviso legal."
      description="Contenido pendiente de revisión jurídica."
    />
  );
}
