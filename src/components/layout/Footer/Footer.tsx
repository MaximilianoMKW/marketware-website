import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import marketwareLogo from '../../../assets/logos/marketware-logo.png';
import { footerColumns } from '../../../data/footerLinks';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <section className="site-footer__cta">
          <div>
            <h2>Ready to expand the value of your Dynatrace investment?</h2>
            <p>Let's discuss your observability roadmap and identify where Marketware can accelerate outcomes.</p>
          </div>
          <Button href="/contact">Book a consultation</Button>
        </section>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="site-footer__logo">
              <img src={marketwareLogo} alt="Marketware" />
            </div>
            <p>
              Marketware is a Dynatrace-focused consultancy helping enterprises improve observability, digital resilience,
              automation, and operational performance.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div className="site-footer__column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <Link to={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="site-footer__column">
            <h3>Contact</h3>
            <a href="mailto:hello@marketware.eu">hello@marketware.eu</a>
            <span>Portugal</span>
            <a className="site-footer__social" href="https://www.linkedin.com" aria-label="Marketware on LinkedIn">
              <Linkedin aria-hidden="true" size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {year} Marketware Lda. All rights reserved.</p>
          <div>
            <Link to="/contact">Privacy inquiries</Link>
            <Link to="/contact">Legal inquiries</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
