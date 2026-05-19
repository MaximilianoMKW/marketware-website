import './SectionTitle.css';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, text, align = 'center' }: SectionTitleProps) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
