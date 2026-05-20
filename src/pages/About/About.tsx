import { BadgeCheck, Building2, CalendarCheck, GaugeCircle, Globe2, Rocket, ShieldCheck } from 'lucide-react';
import { Container } from '../../components/ui/Container/Container';
import { FeatureCard } from '../../components/ui/Card/FeatureCard';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import './About.css';

const pillars = [
  {
    title: 'Specialization over generalism',
    text: 'We focus deeply on Dynatrace and the operational capabilities around it.',
    icon: ShieldCheck,
  },
  {
    title: 'Enterprise context',
    text: 'We understand the demands of regulated and critical environments.',
    icon: Building2,
  },
  {
    title: 'From visibility to action',
    text: 'We prioritize practical outcomes, not dashboards for their own sake.',
    icon: GaugeCircle,
  },
  {
    title: 'Innovation with purpose',
    text: 'We build accelerators, apps, integrations, and automation where they create clear value.',
    icon: Rocket,
  },
];

export function About() {
  return (
    <>
      <PageHero
        title="A specialist consultancy for observability and digital trust"
        text="Marketware is a specialist technology consultancy helping enterprises strengthen observability, operational resilience, and digital trust. Since 2001, we have supported organizations operating in complex, high-impact digital environments."
      />
      <section className="section">
        <Container>
          <div className="about-intro">
            <SectionTitle
              align="left"
              title="Who we are"
              text="Marketware combines deep expertise in Dynatrace with enterprise certificate solutions from DigiCert and Sectigo, helping teams improve visibility, resilience, governance, and trusted digital operations."
            />
            <p>
              We work with enterprise teams that need more than platform deployment. Our experience across long-running
              technology programs connects observability data, certificate lifecycle risk, automation, customer experience,
              and executive decision support.
            </p>
          </div>
          <div className="grid grid--4">
            {pillars.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} />
            ))}
          </div>
          <div className="about-panels">
            <article className="about-panel">
              <GaugeCircle aria-hidden="true" size={30} />
              <div>
                <h2>Observability</h2>
                <p>Helping organizations use Dynatrace to understand, improve, and automate critical operations.</p>
              </div>
            </article>
            <article className="about-panel">
              <BadgeCheck aria-hidden="true" size={30} />
              <div>
                <h2>Digital Trust</h2>
                <p>
                  Helping enterprises manage certificates, lifecycle risk, and trust infrastructure with DigiCert, Sectigo,
                  and DigiCert Trust Lifecycle Manager.
                </p>
              </div>
            </article>
            <article className="about-panel">
              <Building2 aria-hidden="true" size={30} />
              <div>
                <h2>Enterprise Delivery</h2>
                <p>Supporting organizations where scale, accountability, continuity, and trusted execution matter.</p>
              </div>
            </article>
            <article className="about-panel">
              <ShieldCheck aria-hidden="true" size={30} />
              <div>
                <h2>Dynatrace partner focus</h2>
                <p>
                  Marketware is a Dynatrace Partner, helping customers adopt and expand Dynatrace in ways that improve
                  decision-making, resilience, and operational execution.
                </p>
              </div>
            </article>
            <article className="about-panel">
              <CalendarCheck aria-hidden="true" size={30} />
              <div>
                <h2>Experience since 2001</h2>
                <p>
                  More than two decades of technology delivery shape how we advise, implement, and support observability
                  capabilities for demanding organizations.
                </p>
              </div>
            </article>
            <article className="about-panel">
              <Globe2 aria-hidden="true" size={30} />
              <div>
                <h2>Portugal, Iberia, and international growth</h2>
                <p>
                  Trusted in Portugal and Iberia, Marketware is building for a broader international presence, supporting
                  organizations that require specialist observability expertise and a pragmatic delivery partner.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
