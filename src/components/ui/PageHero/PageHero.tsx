import { Container } from '../Container/Container';
import './PageHero.css';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Container>
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
      </Container>
    </section>
  );
}
