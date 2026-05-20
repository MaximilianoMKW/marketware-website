import { trustLogos } from '../../../data/trustLogos';
import { Container } from '../../ui/Container/Container';
import { LogoStrip } from '../../ui/LogoStrip/LogoStrip';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';

export function TrustSection() {
  return (
    <section className="section section--soft trust-section">
      <Container>
        <SectionTitle eyebrow="Enterprise trust" title="Trusted in demanding environments" />
        <LogoStrip logos={trustLogos} />
      </Container>
    </section>
  );
}
