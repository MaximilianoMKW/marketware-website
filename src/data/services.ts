import { Activity, AppWindow, GitBranch, LineChart, Settings2 } from 'lucide-react';

export const services = [
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
];
