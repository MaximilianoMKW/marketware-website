import { Button } from '../../components/ui/Button/Button';
import { Container } from '../../components/ui/Container/Container';
import { PageHero } from '../../components/ui/PageHero/PageHero';

export function NotFound() {
  return (
    <>
      <PageHero title="Page not found" text="The page you are looking for is not available." />
      <section className="section">
        <Container>
          <Button href="/">Return home</Button>
        </Container>
      </section>
    </>
  );
}
