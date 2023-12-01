import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#">
            Derniers travaux
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-400 drop-shadow-lg">Développeur Front-End</span>
          </>
        }
        description="Votre spécialiste en développement Front-End"
        button={
          <Link href="https://jibeo.fr">
            <Button xl>En savoir plus</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
