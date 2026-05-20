import { industries } from '../../../data/industries';
import { Container } from '../../ui/Container/Container';
import { IndustryCard } from '../../ui/IndustryCard/IndustryCard';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';

export function IndustriesSection() {
  return (
    <section className="section section--soft industries-section">
      <Container>
        <SectionTitle eyebrow="Industry experience" title="Industries we understand" />
        <div className="grid grid--4">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} index={index} title={industry.title} image={industry.image} icon={industry.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}
