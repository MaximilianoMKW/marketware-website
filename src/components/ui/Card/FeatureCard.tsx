import type { LucideIcon } from 'lucide-react';
import './FeatureCard.css';

type FeatureCardProps = {
  category?: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

export function FeatureCard({ category, title, text, icon: Icon }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-card__icon">
        <Icon aria-hidden="true" size={26} />
      </div>
      {category ? <span className="feature-card__category">{category}</span> : null}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
