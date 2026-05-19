export type ContactFormPayload = {
  name: string;
  email: string;
  company: string;
  country?: string;
  topic: string;
  message: string;
  consent: boolean;
};

export async function submitContactForm(payload: ContactFormPayload) {
  await new Promise((resolve) => window.setTimeout(resolve, 600));

  if (!payload.consent) {
    throw new Error('Consent is required before submitting the form.');
  }

  return { ok: true };
}
