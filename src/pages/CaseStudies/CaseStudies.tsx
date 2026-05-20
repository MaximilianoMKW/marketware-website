import { CaseStudyCard } from '../../components/ui/CaseStudyCard/CaseStudyCard';
import { CTASection } from '../../components/ui/CTASection/CTASection';
import { Container } from '../../components/ui/Container/Container';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { caseStudies } from '../../data/caseStudies';
import './CaseStudies.css';

export function CaseStudies() {
  const serviceTags = Array.from(new Set(caseStudies.flatMap((study) => study.services)));

  return (
    <>
      <PageHero
        title="Selected customer outcomes"
        text="Marketware helps organizations strengthen observability, digital experience, automation, and digital trust. Explore examples of how operational intelligence and certificate lifecycle practices can improve reliability, visibility, and decision-making."
      />
      <section className="section section--soft">
        <Container>
          <p className="case-studies-intro">
            These examples are structured to support approved customer names, quantified results, testimonials, and dedicated
            detail pages as they become available.
          </p>
          <div className="case-studies-filter" aria-label="Capabilities represented in case studies">
            {serviceTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="grid grid--3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </Container>
      </section>
      <Container className="section">
        <CTASection
          title="Ready to build your next observability or digital trust success story?"
          text="Let's identify where observability, digital experience, automation, certificate lifecycle management, or platform optimization can create the next practical improvement."
          ctaLabel="Discuss your roadmap"
        />
      </Container>
    </>
  );
}
