import { Linkedin, Mail, MapPin } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Button } from '../../components/ui/Button/Button';
import { Container } from '../../components/ui/Container/Container';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { submitContactForm } from '../../services/contact';
import './Contact.css';

const topics = [
  'Dynatrace services',
  'Custom apps and integrations',
  'Synthetic monitoring',
  'Observability roadmap',
  'Partnership / other',
];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      country: String(formData.get('country') ?? '').trim(),
      topic: String(formData.get('topic') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      consent: formData.get('consent') === 'on',
    };

    if (!payload.name || !payload.email || !payload.company || !payload.topic || !payload.message || !payload.consent) {
      setStatus('error');
      setError('Please complete the required fields and accept the privacy notice.');
      return;
    }

    try {
      await submitContactForm(payload);
      setStatus('success');
      event.currentTarget.reset();
    } catch (submitError) {
      setStatus('error');
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <PageHero
        title="Start a conversation"
        text="Tell us what you are trying to improve with Dynatrace, observability, digital experience, or automation. We will get back to you with the right next step."
      />
      <section className="section section--soft">
        <Container>
          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Company
                <input name="company" type="text" autoComplete="organization" required />
              </label>
              <label>
                Work email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Country <span>optional</span>
                <input name="country" type="text" autoComplete="country-name" />
              </label>
              <label>
                Topic
                <select name="topic" defaultValue="" required>
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows={6} required />
              </label>
              <label className="contact-form__consent">
                <input name="consent" type="checkbox" required />
                <span>
                  By submitting this form, you agree that Marketware may use your information to respond to your inquiry.
                  Your data will be handled in accordance with our Privacy Policy.
                </span>
              </label>
              {status === 'success' ? <p className="contact-form__success">Thank you. Your message is ready for follow-up.</p> : null}
              {status === 'error' ? <p className="contact-form__error">{error}</p> : null}
              <Button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Book a consultation'}
              </Button>
            </form>
            <aside className="contact-card" aria-label="Contact details">
              <h2>Marketware Lda</h2>
              <p>Dynatrace-focused consultancy for observability, digital resilience, automation, and operational performance.</p>
              <a href="mailto:hello@marketware.eu">
                <Mail aria-hidden="true" size={18} />
                hello@marketware.eu
              </a>
              <span>
                <MapPin aria-hidden="true" size={18} />
                Portugal
              </span>
              <a href="https://www.linkedin.com">
                <Linkedin aria-hidden="true" size={18} />
                LinkedIn
              </a>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
