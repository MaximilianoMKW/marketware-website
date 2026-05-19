import { whyMarketware } from '../../../data/whyMarketware';
import { FeatureCard } from '../../ui/Card/FeatureCard';
import { Container } from '../../ui/Container/Container';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';

export function WhyMarketwareSection() {
  return (
    <section className="section why-section">
      <Container>
        <SectionTitle title="Why organizations choose Marketware" />
        <div className="grid grid--4">
          {whyMarketware.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
