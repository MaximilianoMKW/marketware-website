import { industries } from '../../../data/industries';
import { Container } from '../../ui/Container/Container';
import { IndustryCard } from '../../ui/IndustryCard/IndustryCard';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';

export function IndustriesSection() {
  return (
    <section className="section section--soft industries-section">
      <Container>
        <SectionTitle title="Industries we understand" />
        <div className="grid grid--4">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} title={industry.title} image={industry.image} icon={industry.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}
