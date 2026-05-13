import PageHero from '../components/PageHero';

export const metadata = { title: 'Política de privacidad' };

export default function Privacidad() {
  return (
    <PageHero
      eyebrow="Legal"
      title="Política de privacidad."
      description="Conforme al Reglamento General de Protección de Datos (RGPD)."
    />
  );
}
