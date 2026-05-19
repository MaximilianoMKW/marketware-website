import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
};

export function Button({ children, href, variant = 'primary', type = 'button', className = '', disabled }: ButtonProps) {
  const classNames = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <Link className={classNames} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
