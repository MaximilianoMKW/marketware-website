import { BadgeCheck, LineChart } from 'lucide-react';

export const capabilities = [
  {
    title: 'Observability & Operational Intelligence',
    text: 'We help organizations make Dynatrace a practical operational advantage, improving visibility across services, user journeys, automation, and business-critical systems.',
    ctaLabel: 'Explore observability services',
    ctaHref: '/services',
    icon: LineChart,
    items: [
      'Dynatrace Strategy & Adoption',
      'Critical Service Observability',
      'Digital Experience & Synthetic Monitoring',
      'Custom Dynatrace Apps & Integrations',
      'Managed Optimization',
    ],
  },
  {
    title: 'Digital Trust & Certificate Lifecycle Management',
    text: 'We help enterprises manage certificates, trust infrastructure, and lifecycle risk through leading solutions from DigiCert and Sectigo, including DigiCert Trust Lifecycle Manager.',
    ctaLabel: 'Explore digital trust services',
    ctaHref: '/services',
    icon: BadgeCheck,
    items: [
      'DigiCert Certificates',
      'Sectigo Certificates',
      'DigiCert Trust Lifecycle Manager, TLM',
      'Certificate lifecycle visibility',
      'Renewal risk reduction',
      'Certificate governance and automation',
    ],
  },
];
