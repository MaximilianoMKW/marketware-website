import { Button } from '../Button/Button';
import './CTASection.css';

type CTASectionProps = {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({ title, text, ctaLabel = 'Book a consultation', ctaHref = '/contact' }: CTASectionProps) {
  return (
    <section className="cta-section">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Button href={ctaHref}>{ctaLabel}</Button>
    </section>
  );
}
