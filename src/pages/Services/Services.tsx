import { CTASection } from '../../components/ui/CTASection/CTASection';
import { Container } from '../../components/ui/Container/Container';
import { FeatureCard } from '../../components/ui/Card/FeatureCard';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { services } from '../../data/services';
import './Services.css';

export function Services() {
  return (
    <>
      <PageHero
        title="Dynatrace services built for enterprise outcomes"
        text="Marketware helps organizations design, expand, and operationalize Dynatrace across observability, digital experience, automation, and platform optimization. Our services combine technical depth with practical enterprise delivery."
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
      <section className="section section--soft">
        <Container>
          <div className="service-details">
            {services.map((service) => {
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
                      <h3>Dynatrace coverage</h3>
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
      <Container className="section">
        <CTASection
          title="Need help turning Dynatrace into a stronger operational capability?"
          text="Marketware helps teams prioritize the next practical moves across adoption, architecture, experience, automation, and optimization."
          ctaLabel="Talk to a Dynatrace specialist"
        />
      </Container>
    </>
  );
}
