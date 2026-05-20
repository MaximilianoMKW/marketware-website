import { ArticleCard } from '../../components/ui/ArticleCard/ArticleCard';
import { CTASection } from '../../components/ui/CTASection/CTASection';
import { Container } from '../../components/ui/Container/Container';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { insights } from '../../data/insights';
import './Insights.css';

export function Insights() {
  const featuredArticle = insights.find((article) => article.featured);
  const categories = Array.from(new Set(insights.map((article) => article.category)));

  return (
    <>
      <PageHero
        title="Insights from the field"
        text="Ideas, practices, and lessons from working with Dynatrace, observability, digital performance, operational automation, and enterprise digital trust in complex environments."
      />
      <section className="section">
        <Container>
          {featuredArticle ? (
            <div className="insights-featured">
              <ArticleCard {...featuredArticle} />
            </div>
          ) : null}
          <div className="insights-filter" aria-label="Article categories">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <div className="grid grid--3">
            {insights.filter((article) => !article.featured).map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </Container>
      </section>
      <Container className="section">
        <CTASection
          title="Want to discuss one of these topics in your environment?"
          text="Marketware can help translate observability and certificate lifecycle practices into practical next steps for your enterprise roadmap."
          ctaLabel="Start a conversation"
        />
      </Container>
    </>
  );
}
