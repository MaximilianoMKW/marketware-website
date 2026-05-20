import { trustLogos } from '../../../data/trustLogos';
import { Container } from '../../ui/Container/Container';
import { LogoStrip } from '../../ui/LogoStrip/LogoStrip';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';

export function TrustSection() {
  return (
    <section className="section section--soft trust-section">
      <Container>
        <SectionTitle
          eyebrow="Enterprise trust"
          title="Trusted by leading organizations in demanding environments"
          text="Marketware works with large enterprises and critical digital organizations across Portugal and beyond."
        />
        <LogoStrip logos={trustLogos} />
      </Container>
    </section>
  );
}
