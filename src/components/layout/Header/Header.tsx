import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import marketwareLogo from '../../../assets/logos/marketware-logo.png';
import { useTheme } from '../../../context/theme';
import { navigationItems } from '../../../data/navigation';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import './Header.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isHome = pathname === '/';

  useEffect(() => {
    const updateHeaderState = () => {
      setHasScrolled(window.scrollY > 12);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const headerClassName = [
    'site-header',
    isHome ? 'site-header--home' : 'site-header--solid',
    hasScrolled || isOpen ? 'site-header--scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClassName}>
      <Container className="site-header__inner">
        <NavLink className="site-header__brand" to="/" onClick={() => setIsOpen(false)}>
          <img src={marketwareLogo} alt="Marketware" />
        </NavLink>
        <nav className={`site-header__nav ${isOpen ? 'site-header__nav--open' : ''}`} aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <Button href="/contact" className="site-header__mobile-cta">
            Book a consultation
          </Button>
        </nav>
        <div className="site-header__actions">
          <button className="site-header__theme" type="button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} onClick={toggleTheme}>
            {theme === 'light' ? <Moon aria-hidden="true" size={18} /> : <Sun aria-hidden="true" size={18} />}
          </button>
          <Button href="/contact">Book a consultation</Button>
          <button className="site-header__menu" type="button" aria-label="Toggle navigation" onClick={() => setIsOpen((value) => !value)}>
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </Container>
    </header>
  );
}
