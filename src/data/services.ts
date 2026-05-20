import {
  Activity,
  AppWindow,
  BadgeCheck,
  GitBranch,
  LineChart,
  RefreshCcw,
  Settings2,
  ShieldCheck,
} from 'lucide-react';

export const serviceGroups = [
  {
    id: 'observability',
    title: 'Observability & Dynatrace Services',
    intro:
      'Marketware helps enterprise teams turn Dynatrace into a practical operating capability across service visibility, user experience, automation, and continuous optimization.',
    services: [
      {
        title: 'Dynatrace Strategy & Adoption',
        text: 'We help organizations define how Dynatrace should support their observability goals, operating model, and business priorities, from first adoption to maturity expansion.',
        deliverables: [
          'Current-state assessment',
          'Monitoring roadmap',
          'Scope and prioritization model',
          'Governance recommendations',
          'Platform adoption plan',
        ],
        outcomes: [
          'Clear observability direction',
          'Better alignment between platform investment and business needs',
          'Reduced fragmentation in monitoring practices',
        ],
        coverage: ['Platform architecture', 'Environment strategy', 'Entity model', 'Dashboards', 'Alerting foundations'],
        icon: LineChart,
      },
      {
        title: 'Critical Service Observability',
        text: 'We design observability around what matters most: critical services, business journeys, dependencies, and operational risk.',
        deliverables: [
          'Critical service inventory',
          'Service flow and dependency mapping',
          'KPI and SLO-oriented views',
          'Executive and operational dashboards',
          'Problem triage model',
        ],
        outcomes: ['Faster understanding of service health', 'Better prioritization of incidents', 'Clearer operational ownership'],
        coverage: ['Smartscape', 'Services', 'Davis problems', 'DQL', 'Dashboards and Notebooks'],
        icon: GitBranch,
      },
      {
        title: 'Digital Experience & Synthetic Monitoring',
        text: 'We help teams understand and protect the user experience through real user monitoring, synthetic testing, and performance visibility.',
        deliverables: [
          'Synthetic monitoring strategy',
          'Browser clickpath creation and optimization',
          'Digital journey coverage',
          'Frontend performance review',
          'Executive reporting',
        ],
        outcomes: [
          'Earlier detection of digital degradation',
          'Better customer journey reliability',
          'Stronger visibility into regional and endpoint-specific issues',
        ],
        coverage: ['Synthetic Monitoring', 'Real User Monitoring', 'Session Replay where applicable', 'Web Vitals and frontend KPIs'],
        icon: Activity,
      },
      {
        title: 'Custom Dynatrace Apps & Integrations',
        text: 'We create custom experiences, automations, and integrations that extend Dynatrace into the way your organization operates.',
        deliverables: [
          'Dynatrace Apps',
          'App Functions',
          'Workflow automations',
          'ServiceNow integrations',
          'External system enrichment',
          'Custom operational views',
        ],
        outcomes: ['Reduced manual effort', 'Better workflow fit', 'Greater business-specific value from Dynatrace'],
        coverage: ['Dynatrace App Toolkit', 'AppEngine', 'Workflows', 'APIs', 'Grail and DQL', 'Integrations'],
        icon: AppWindow,
      },
      {
        title: 'Managed Optimization',
        text: 'We help organizations continuously improve their Dynatrace estate, keeping monitoring meaningful, performant, and aligned with evolving priorities.',
        deliverables: [
          'Monitoring quality reviews',
          'Dashboard and alert optimization',
          'Usage improvement backlog',
          'Platform hygiene recommendations',
          'Quarterly observability maturity reviews',
        ],
        outcomes: ['More sustainable monitoring practices', 'Less noise', 'Better use of the existing Dynatrace investment'],
        coverage: ['Dashboards', 'Alerting', 'Platform hygiene', 'DQL', 'Operational reporting'],
        icon: Settings2,
      },
    ],
  },
  {
    id: 'digital-trust',
    title: 'Digital Trust & Certificate Services',
    intro:
      'Marketware helps organizations strengthen certificate lifecycle management, trust infrastructure, and governance using enterprise solutions from DigiCert and Sectigo.',
    services: [
      {
        title: 'DigiCert & Sectigo Certificate Solutions',
        text: 'Marketware supports organizations with enterprise certificate solutions from DigiCert and Sectigo, helping them secure digital services, simplify procurement, and maintain trusted infrastructure across complex environments.',
        deliverables: [
          'Certificate solution advisory',
          'Selection of appropriate certificate types',
          'Support for public certificate needs',
          'Enterprise certificate portfolio guidance',
          'Renewal and lifecycle process support',
        ],
        outcomes: [
          'Stronger trust posture',
          'Reduced administrative friction',
          'Better alignment between certificate needs and enterprise environments',
          'More confidence in critical digital service protection',
        ],
        coverage: ['DigiCert', 'Sectigo', 'Public certificates', 'Enterprise portfolio guidance', 'Renewal support'],
        icon: BadgeCheck,
      },
      {
        title: 'DigiCert Trust Lifecycle Manager',
        text: 'We help enterprises adopt DigiCert Trust Lifecycle Manager to centralize certificate visibility, reduce expiry-related risk, improve governance, and move toward certificate lifecycle automation.',
        deliverables: [
          'TLM introduction and fit assessment',
          'Certificate lifecycle visibility review',
          'Implementation support',
          'Governance model guidance',
          'Renewal and expiry risk reduction strategy',
          'Automation opportunity identification',
        ],
        outcomes: [
          'Reduced risk of certificate-related service disruption',
          'Improved visibility into certificate estates',
          'Stronger lifecycle governance',
          'Better readiness for automation and operational scale',
        ],
        coverage: ['DigiCert TLM', 'Certificate discovery', 'Lifecycle visibility', 'Renewal risk', 'Automation readiness'],
        icon: RefreshCcw,
      },
      {
        title: 'Certificate Lifecycle Governance & Risk Reduction',
        text: 'Beyond certificate issuance, Marketware helps organizations build a more reliable operating model for managing digital trust assets across departments, systems, and critical services.',
        deliverables: [
          'Certificate inventory and lifecycle review',
          'Renewal ownership model',
          'Expiry monitoring approach',
          'Process improvement recommendations',
          'Governance and operational control design',
        ],
        outcomes: [
          'Fewer unmanaged certificate risks',
          'Clearer ownership and accountability',
          'Reduced likelihood of avoidable outages caused by expired certificates',
          'Better resilience for public and internal digital services',
        ],
        coverage: ['Certificate inventory', 'Ownership model', 'Expiry monitoring', 'Governance controls', 'Risk reduction'],
        icon: ShieldCheck,
      },
    ],
  },
];

export const services = serviceGroups.flatMap((group) => group.services);
