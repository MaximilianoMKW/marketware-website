import { CTASection } from '../../components/ui/CTASection/CTASection';
import { Container } from '../../components/ui/Container/Container';
import { IndustryCard } from '../../components/ui/IndustryCard/IndustryCard';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { industries } from '../../data/industries';
import './Industries.css';

export function Industries() {
  return (
    <>
      <PageHero
        title="Enterprise support for industries where reliability and trust matter"
        text="Marketware supports organizations operating in demanding, high-impact environments where digital performance, service continuity, certificate governance, and trusted operations are essential."
      />
      <section className="section">
        <Container>
          <SectionTitle title="Focused on complex operating environments" />
          <div className="grid grid--2">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </Container>
      </section>
      <section className="section section--soft">
        <Container>
          <div className="industry-details">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article className="industry-detail" key={industry.title}>
                  <div className="industry-detail__media">
                    <img src={industry.image} alt="" />
                    <div className="industry-detail__badge">
                      <Icon aria-hidden="true" size={34} />
                      <span>{industry.title}</span>
                    </div>
                  </div>
                  <div className="industry-detail__content">
                    <div>
                      <h2>{industry.title}</h2>
                      <p>{industry.description}</p>
                    </div>
                    <div className="industry-detail__columns">
                      <div>
                        <h3>Pain points</h3>
                        <ul>
                          {industry.painPoints.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3>How Marketware helps</h3>
                        <ul>
                          {industry.howWeHelp.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="industry-detail__proof">{industry.credibility}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <Container className="section">
        <CTASection
          title="Bring observability and digital trust closer to your industry priorities"
          text="From digital banking to critical services, we shape Dynatrace and certificate lifecycle practices around the realities of your operating model."
        />
      </Container>
    </>
  );
}
