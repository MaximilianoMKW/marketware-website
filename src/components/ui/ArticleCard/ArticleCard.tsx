import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

type ArticleCardProps = {
  id?: string;
  category: string;
  date: string;
  author?: string;
  title: string;
  text: string;
  featured?: boolean;
};

export function ArticleCard({ id, category, date, author, title, text, featured }: ArticleCardProps) {
  return (
    <article className={`article-card ${featured ? 'article-card--featured' : ''}`.trim()}>
      <div className="article-card__meta">
        <span>{category}</span>
        <span>{date}</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      {author ? <span className="article-card__author">{author}</span> : null}
      <Link to={id ? `/insights#${id}` : '/insights'} aria-label={`Read ${title}`}>
        Read article <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </article>
  );
}
