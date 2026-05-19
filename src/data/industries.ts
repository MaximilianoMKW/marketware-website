import { Banknote, Factory, Landmark, ShieldCheck } from 'lucide-react';
import bankingImage from '../assets/images/bank.png';
import energyImage from '../assets/images/energy.png';
import insuranceImage from '../assets/images/insurance.svg';
import publicServicesImage from '../assets/images/public.png';

export const industries = [
  {
    title: 'Banking & Financial Services',
    description: 'Observability for digital channels, core services, regulatory pressure, and always-on customer experiences.',
    painPoints: [
      'Customer-facing digital services must remain fast and reliable',
      'Complex hybrid environments and transaction chains',
      'Pressure to detect issues before customer impact grows',
      'High importance of incident traceability and operational accountability',
    ],
    howWeHelp: [
      'Critical digital journey monitoring',
      'End-to-end service observability',
      'Synthetic and real user monitoring',
      'Incident prioritization and executive reporting',
      'Integrations with operational workflows',
    ],
    credibility: 'Experience supporting large Iberian financial organizations with Dynatrace-focused observability initiatives.',
    image: bankingImage,
    icon: Banknote,
  },
  {
    title: 'Energy & Utilities',
    description: 'Visibility across operational platforms, customer systems, and digital services that support essential infrastructure.',
    painPoints: [
      'Mission-critical operations and broad service landscapes',
      'Customer portals, operational platforms, and field systems',
      'Need for strong resilience and dependable monitoring signals',
      'Complex dependencies across infrastructure and applications',
    ],
    howWeHelp: [
      'Critical service maps',
      'Synthetic monitoring for key journeys',
      'Operational health views',
      'Automation and reporting',
      'Reliability-focused observability practices',
    ],
    credibility: 'Marketware shapes monitoring practices around reliability, timely detection, and clear operational ownership.',
    image: energyImage,
    icon: Factory,
  },
  {
    title: 'Insurance',
    description: 'Performance intelligence for policy, claims, portals, integrations, and customer-facing digital journeys.',
    painPoints: [
      'Digital interactions tied to customer confidence',
      'Complex policy, claims, and service journeys',
      'Need to understand performance issues across multiple channels',
      'Importance of reducing investigation effort',
    ],
    howWeHelp: [
      'Customer journey visibility',
      'Experience and application performance monitoring',
      'Synthetic test coverage',
      'Root cause support',
      'Decision-ready dashboards',
    ],
    credibility: 'We connect technical performance signals to the journeys that influence customer trust and service quality.',
    image: insuranceImage,
    icon: ShieldCheck,
  },
  {
    title: 'Public & Critical Digital Services',
    description: 'Resilience and service assurance for public platforms and organizations with high availability expectations.',
    painPoints: [
      'Availability and trust are essential',
      'Services may support large populations or critical operations',
      'Digital degradation can have wide public impact',
      'Need for reliable monitoring and clear escalation signals',
    ],
    howWeHelp: [
      'Service-centric observability',
      'Operational dashboards',
      'Synthetic checks',
      'Platform governance',
      'Workflow optimization',
    ],
    credibility: 'Marketware helps teams create practical observability foundations for environments where continuity matters.',
    image: publicServicesImage,
    icon: Landmark,
  },
];
