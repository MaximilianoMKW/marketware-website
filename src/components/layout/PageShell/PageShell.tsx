import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export function PageShell() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [hash, pathname]);

  return (
    <>
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
