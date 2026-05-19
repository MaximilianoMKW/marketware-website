import featuredImage from '../../../assets/images/featured-success-story.png';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import './FeaturedCaseStudySection.css';

export function FeaturedCaseStudySection() {
  return (
    <section className="section featured-section">
      <Container>
        <article className="featured-story">
          <div className="featured-story__content">
            <p className="featured-story__eyebrow">Featured success story</p>
            <h2>Leading Iberian Bank modernizes observability and accelerates digital performance</h2>
            <p>
              We partnered with a leading Iberian bank to unify observability across applications, infrastructure, and
              digital channels, driving better customer experiences and operational efficiency at scale.
            </p>
            <Button href="/case-studies">Read case study</Button>
          </div>
          <div className="featured-story__image">
            <img src={featuredImage} alt="Dynatrace observability illustration with analysts and dashboards" />
          </div>
        </article>
      </Container>
    </section>
  );
}
