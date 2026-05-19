import type { LucideIcon } from 'lucide-react';
import './IndustryCard.css';

type IndustryCardProps = {
  title: string;
  description?: string;
  image: string;
  icon: LucideIcon;
};

export function IndustryCard({ title, description, image, icon: Icon }: IndustryCardProps) {
  return (
    <article className="industry-card">
      <img src={image} alt="" aria-hidden="true" />
      <div className="industry-card__overlay" />
      <div className="industry-card__content">
        <Icon aria-hidden="true" size={30} />
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
    </article>
  );
}
