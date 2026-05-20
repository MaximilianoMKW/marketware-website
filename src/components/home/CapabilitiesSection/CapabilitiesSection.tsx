import { ArrowRight } from 'lucide-react';
import { capabilities } from '../../../data/capabilities';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './CapabilitiesSection.css';

export function CapabilitiesSection() {
  return (
    <section className="section capabilities-section">
      <Container>
        <SectionTitle
          eyebrow="What we do"
          title="Specialist capabilities for critical digital environments"
          text="Marketware supports enterprise organizations across two tightly connected domains: operational visibility and digital trust. From Dynatrace adoption to certificate lifecycle governance, we help teams reduce risk, improve resilience, and operate with greater confidence."
        />
        <div className="capabilities-section__grid">
          {capabilities.map(({ icon: Icon, title, text, items, ctaHref, ctaLabel }) => (
            <article className="capability-card" key={title}>
              <div className="capability-card__icon">
                <Icon aria-hidden="true" size={28} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Button href={ctaHref} variant="ghost">
                {ctaLabel} <ArrowRight aria-hidden="true" size={17} />
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
