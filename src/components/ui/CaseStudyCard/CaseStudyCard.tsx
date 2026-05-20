import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudyCard.css';

type CaseStudyCardProps = {
  id?: string;
  sector: string;
  clientLabel?: string;
  title: string;
  summary: string;
  impact?: string[];
  services?: string[];
  featured?: boolean;
};

export function CaseStudyCard({ id, sector, clientLabel, title, summary, impact = [], services = [], featured }: CaseStudyCardProps) {
  return (
    <article className={`case-card ${featured ? 'case-card--featured' : ''}`.trim()}>
      <div className="case-card__meta">
        <span>{sector}</span>
        {clientLabel ? <strong>{clientLabel}</strong> : null}
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      {services.length > 0 ? (
        <div className="case-card__tags" aria-label="Services">
          {services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      ) : null}
      {impact.length > 0 ? (
        <ul className="case-card__impact">
          {impact.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <Link to={id ? `/case-studies#${id}` : '/case-studies'} aria-label={`Read case study about ${title}`}>
        Read case study <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </article>
  );
}
