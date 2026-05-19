import { Route, Routes } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell/PageShell';
import { About } from '../pages/About/About';
import { CaseStudies } from '../pages/CaseStudies/CaseStudies';
import { Contact } from '../pages/Contact/Contact';
import { Home } from '../pages/Home/Home';
import { Industries } from '../pages/Industries/Industries';
import { Insights } from '../pages/Insights/Insights';
import { NotFound } from '../pages/NotFound/NotFound';
import { Services } from '../pages/Services/Services';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="insights" element={<Insights />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
