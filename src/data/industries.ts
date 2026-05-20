import { Banknote, Factory, Landmark, RadioTower, ShieldCheck } from 'lucide-react';
import bankingImage from '../assets/images/bank.png';
import energyImage from '../assets/images/energy.png';
import insuranceImage from '../assets/images/insurance.svg';
import publicServicesImage from '../assets/images/public.png';

export const industries = [
  {
    title: 'Banking & Financial Services',
    description: 'Observability and digital trust for regulated digital channels, core services, and always-on customer experiences.',
    painPoints: [
      'Customer-facing digital services must remain fast and reliable',
      'Complex hybrid environments and transaction chains',
      'Pressure to detect issues before customer impact grows',
      'Certificate governance across regulated digital services',
      'Risk from unmanaged or expiring trust assets',
    ],
    howWeHelp: [
      'Critical digital journey monitoring',
      'End-to-end service observability',
      'Synthetic and real user monitoring',
      'Certificate lifecycle governance',
      'Incident prioritization and executive reporting',
      'Integrations with operational workflows',
    ],
    credibility: 'Experience supporting large Iberian financial organizations with Dynatrace-focused observability initiatives.',
    image: bankingImage,
    icon: Banknote,
  },
  {
    title: 'Energy & Utilities',
    description: 'Visibility and trust control across operational platforms, customer systems, and services that support essential infrastructure.',
    painPoints: [
      'Mission-critical operations and broad service landscapes',
      'Customer portals, operational platforms, and field systems',
      'Need for strong resilience and dependable monitoring signals',
      'Complex dependencies across infrastructure and applications',
      'Trust infrastructure that must remain governed and renewable',
    ],
    howWeHelp: [
      'Critical service maps',
      'Synthetic monitoring for key journeys',
      'Operational health views',
      'Automation and reporting',
      'Certificate lifecycle visibility for critical services',
      'Reliability-focused observability practices',
    ],
    credibility: 'Marketware shapes monitoring practices around reliability, timely detection, and clear operational ownership.',
    image: energyImage,
    icon: Factory,
  },
  {
    title: 'Insurance',
    description: 'Performance intelligence and digital trust for policy, claims, portals, integrations, and customer-facing journeys.',
    painPoints: [
      'Digital interactions tied to customer confidence',
      'Complex policy, claims, and service journeys',
      'Need to understand performance issues across multiple channels',
      'Digital trust across portals and integrations',
      'Lifecycle control for certificates supporting critical services',
      'Importance of reducing investigation effort',
    ],
    howWeHelp: [
      'Customer journey visibility',
      'Experience and application performance monitoring',
      'Synthetic test coverage',
      'Certificate governance for customer-facing services',
      'Root cause support',
      'Decision-ready dashboards',
    ],
    credibility: 'We connect technical performance signals to the journeys that influence customer trust and service quality.',
    image: insuranceImage,
    icon: ShieldCheck,
  },
  {
    title: 'Telecommunications & Large-Scale Digital Infrastructure',
    description:
      'Observability and lifecycle control for distributed digital estates with high availability expectations and complex certificate portfolios.',
    painPoints: [
      'Large distributed digital estates',
      'High availability requirements',
      'Complex certificate portfolios',
      'Need for dependable observability and lifecycle control',
    ],
    howWeHelp: [
      'Service visibility',
      'Experience monitoring',
      'Certificate lifecycle governance',
      'DigiCert Trust Lifecycle Manager adoption',
      'Operational automation',
    ],
    credibility: 'Marketware supports operating models where scale, trust, continuity, and fast investigation matter.',
    image: energyImage,
    icon: RadioTower,
  },
  {
    title: 'Public & Critical Digital Services',
    description: 'Resilience, service assurance, and trust infrastructure for public platforms and high-availability organizations.',
    painPoints: [
      'Availability and trust are essential',
      'Services may support large populations or critical operations',
      'Digital degradation can have wide public impact',
      'Certificate renewal control and accountability are critical',
      'Need for reliable monitoring and clear escalation signals',
    ],
    howWeHelp: [
      'Service-centric observability',
      'Operational dashboards',
      'Synthetic checks',
      'Trust infrastructure and renewal governance',
      'Platform governance',
      'Workflow optimization',
    ],
    credibility: 'Marketware helps teams create practical observability foundations for environments where continuity matters.',
    image: publicServicesImage,
    icon: Landmark,
  },
];
