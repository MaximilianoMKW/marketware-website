import type { LucideIcon } from 'lucide-react';
import './IndustryCard.css';

type IndustryCardProps = {
  index?: number;
  title: string;
  description?: string;
  image: string;
  icon: LucideIcon;
};

export function IndustryCard({ index, title, description, image, icon: Icon }: IndustryCardProps) {
  return (
    <article className="industry-card">
      <img src={image} alt="" aria-hidden="true" />
      <div className="industry-card__overlay" />
      <div className="industry-card__content">
        {typeof index === 'number' ? <span className="industry-card__index">{String(index + 1).padStart(2, '0')}</span> : null}
        <Icon aria-hidden="true" size={30} />
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
    </article>
  );
}
