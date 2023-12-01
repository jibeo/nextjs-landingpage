import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Lorem ipsum dolor sit amet ."
      button={
        <Link href="https://jibeo.fr">
          <Button>En savoir plus</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
