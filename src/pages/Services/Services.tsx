import { CTASection } from '../../components/ui/CTASection/CTASection';
import { Container } from '../../components/ui/Container/Container';
import { FeatureCard } from '../../components/ui/Card/FeatureCard';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { serviceGroups, services } from '../../data/services';
import './Services.css';

export function Services() {
  return (
    <>
      <PageHero
        title="Enterprise services for observability, resilience, and digital trust"
        text="Marketware combines deep specialization in Dynatrace with enterprise digital trust solutions from DigiCert and Sectigo. We help organizations improve operational visibility, modernize monitoring practices, reduce certificate risk, and build more resilient digital services."
      />
      <section className="section">
        <Container>
          <SectionTitle
            title="What Marketware delivers"
            text="Each engagement is shaped around operational outcomes, with enough structure to guide adoption and enough flexibility to fit the realities of enterprise teams."
          />
          <div className="grid grid--3">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>
      {serviceGroups.map((group) => (
        <section className="section section--soft service-group" id={group.id} key={group.id}>
          <Container>
            <SectionTitle eyebrow="Service family" title={group.title} text={group.intro} />
            <div className="service-details">
              {group.services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-detail" key={service.title}>
                    <div className="service-detail__intro">
                      <div className="service-detail__icon">
                        <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
                      </div>
                      <h2>{service.title}</h2>
                      <p>{service.text}</p>
                    </div>
                    <div className="service-detail__lists">
                      <div>
                        <h3>Typical deliverables</h3>
                        <ul>
                          {service.deliverables.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3>Typical outcomes</h3>
                        <ul>
                          {service.outcomes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3>{group.id === 'observability' ? 'Dynatrace coverage' : 'Related solutions'}</h3>
                        <ul>
                          {service.coverage.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      ))}
      <Container className="section">
        <CTASection
          title="Discuss your observability or digital trust roadmap"
          text="Marketware helps teams prioritize practical moves across Dynatrace adoption, operational intelligence, certificate lifecycle management, and digital resilience."
          ctaLabel="Talk to a specialist"
        />
      </Container>
    </>
  );
}
