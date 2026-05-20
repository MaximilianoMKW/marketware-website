import { ArrowRight } from 'lucide-react';
import dynatraceLogo from '../../../assets/logos/dynatrace-white.png';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="hero-section">
      <Container className="hero-section__inner">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">Dynatrace specialist consultancy</p>
          <h1>
            Dynatrace expertise for organizations that cannot afford <span className="hero-section__highlight">blind spots</span>
          </h1>
          <p className="hero-section__lead">
            Marketware helps enterprises turn Dynatrace into measurable operational advantage through observability,
            automation, digital resilience, and performance intelligence.
          </p>
          <div className="hero-section__actions">
            <Button href="/contact">
              Talk to a Dynatrace specialist <ArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
          </div>
          <div className="hero-section__partner" aria-label="Dynatrace certified partner">
            <img src={dynatraceLogo} alt="Dynatrace" />
            <span aria-hidden="true" />
            <strong>We are a Certified Partner</strong>
          </div>
        </div>
      </Container>
    </section>
  );
}
