import ContactoHero from '../components/contacto/ContactoHero';
import ContactoFormulario from '../components/contacto/ContactoFormulario';

export const metadata = {
  title: 'Contacto',
  description:
    'Escríbenos. Empresas, voluntariado, mecenazgo, prensa, propietarios de terrenos o consultas técnicas. Respondemos en menos de 48 horas hábiles.',
};

export default function Contacto() {
  return (
    <>
      <ContactoHero />
      <ContactoFormulario />
    </>
  );
}
