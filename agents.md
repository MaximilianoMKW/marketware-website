Build Marketware Website in React + Vite

Build a modern, high-quality corporate website for Marketware Lda using React + Vite.
The homepage must closely reproduce the attached visual mockup, while keeping the codebase clean, modular, reusable, and easy to extend later.

The website represents Marketware as a premium Dynatrace specialist consultancy, trusted by large enterprise organizations and positioned for international growth.

1. Technical stack

Use:

React
Vite
TypeScript
React Router
Modern CSS architecture
Prefer CSS Modules or well-organized global + component styles
Do not use inline styles except for very small dynamic cases
Optional:
lucide-react for icons
clsx for conditional classes
framer-motion only for subtle, tasteful animations if needed

The result should feel like a production-ready frontend foundation, not a quick static mockup.

2. Project structure

Use a clean, scalable structure similar to:

src/
  assets/
    images/
    logos/
    icons/

  components/
    layout/
      Header/
      Footer/
      PageShell/
    ui/
      Button/
      SectionTitle/
      Card/
      Container/
      LogoStrip/
    home/
      HeroSection/
      TrustSection/
      WhyMarketwareSection/
      IndustriesSection/
      FeaturedCaseStudySection/

  pages/
    Home/
    Services/
    Industries/
    CaseStudies/
    Insights/
    About/
    Contact/
    NotFound/

  data/
    navigation.ts
    trustLogos.ts
    whyMarketware.ts
    industries.ts
    services.ts
    footerLinks.ts

  routes/
    AppRouter.tsx

  styles/
    globals.css
    variables.css

  App.tsx
  main.tsx

Keep components reusable and data-driven wherever appropriate.
For example, cards and navigation items should come from arrays in /data, not be hardcoded directly in JSX.

3. Design direction
Visual style

Match the attached concept:

Premium B2B / enterprise technology look
Dark navy hero section
White/light body background
Accent colors:
Teal / green CTA tone
Deep navy
Soft grey shadows
Rounded corners
Clean typography
Strong spacing and layout hierarchy
Not overly animated or flashy

Use a professional font pairing. Prefer something like:

Poppins, Inter, or Manrope

The screenshot uses a rounded, modern sans-serif feel. Pick one and apply consistently.

4. Global layout rules
Page width

Use a centered layout container, approximately:

max-width: 1200px;
margin: 0 auto;
padding-inline: 24px;
Responsive behavior

Although desktop is the priority, the website must still adapt well to:

Laptop widths
Tablet
Mobile

Implement responsive breakpoints cleanly.

5. Header / Navbar

Recreate the header from the mockup:

Left
Marketware logo
Center navigation
Home
Services
Industries
Case studies
Insights
About
Contact
Right CTA
Book a consultation
Behavior
Transparent / integrated into the hero background on homepage
On internal pages, it may use a dark navy background
Sticky header is acceptable if implemented elegantly
Mobile menu should collapse into a hamburger menu
6. Homepage

Build the homepage following the attached design.

6.1 Hero section

The hero must occupy the top part of the page with the dark observability-style background.

Left column

Use this copy:

Headline

Dynatrace expertise for organizations that cannot afford blind spots

Description

Marketware helps enterprises turn Dynatrace into measurable operational advantage through observability, automation, digital resilience, and performance intelligence.

CTA buttons
Primary: Talk to a Dynatrace specialist
Secondary: Explore services
Partner badge row

Below the CTA buttons:

Dynatrace logo
Divider
Text: We are a Certified Partner
Right column

Use the visual from the screenshot:

Dark dashboard/topology-style image card
Rounded corners
Looks like a Smartscape / business topology panel

Use the provided asset or create a clear placeholder structure that can be easily swapped.

Hero background

Use the custom dark background from the mockup:

Navy digital / network feel
Should stretch behind both header and hero
Ensure readability of content
6.2 Trust section

Centered title:

Trusted in demanding environments

Logo row using real uploaded logos/assets where available:

EDP
E-REDES
Santander
CGD
Fidelidade
banco ctt
Luz Saúde
ANA Aeroportos de Portugal

Style:

White pill / rectangular logo blocks
Thin border
Soft radius
Consistent height

Make this row wrap cleanly on smaller screens.

6.3 Why organizations choose Marketware

Centered section title:

Why organizations choose Marketware

Create 4 reusable premium cards:

Card 1

Title: Dynatrace specialization
Text: Deep technical expertise and certified consultants focused exclusively on Dynatrace.

Card 2

Title: Enterprise-grade references
Text: Proven results with leading organizations in regulated and mission-critical environments.

Card 3

Title: Observability in action
Text: We translate data into decisions through actionable insights, automations, and AI-powered analytics.

Card 4

Title: Custom solutions and accelerators
Text: Proprietary accelerators and integrations that speed time-to-value and drive continuous improvement.

Use icons inspired by the screenshot:

Award / badge
Institutional building
Crosshair / precision
Rocket

Use lucide-react or clean SVG alternatives.

6.4 Industries section

Centered title:

Industries we understand

Create 4 visual image cards with dark overlays:

Banking & Financial Services
Energy & Utilities
Insurance
Public & Critical Digital Services

Cards should resemble the screenshot:

Landscape image background
Dark blue overlay
White icon
White bold label at bottom-left or vertically centered-left
Rounded corners

Make each card reusable through a single IndustryCard component.

6.5 Featured success story

Create the large dark navy feature block shown near the bottom of the current mockup.

Left content

Title:

Featured success story

Heading:

Leading Iberian Bank modernizes observability and accelerates digital performance

Description:

We partnered with a leading Iberian bank to unify observability across applications, infrastructure, and digital channels, driving better customer experiences and operational efficiency at scale.

CTA:

Read case study
Right side

Use the observability illustration generated earlier:

Laptop with Dynatrace logo
Analysts / dashboards
Clean white panel inside a rounded card
Add one improvement

Increase this section slightly in information density by adding three compact key outcomes below the paragraph or near the CTA:

Unified application and infrastructure visibility
Faster investigation of digital performance issues
Stronger decision support for critical services

Keep these concise, without cluttering the design.

7. Footer expansion

The mockup currently ends soon after the featured story.
Create a richer professional footer to complete the website.

Footer design

Use a dark navy footer that visually matches the hero.

Footer top CTA strip

Before the footer links, add a highlighted conversion block:

Headline

Ready to expand the value of your Dynatrace investment?

Text

Let’s discuss your observability roadmap and identify where Marketware can accelerate outcomes.

CTA

Book a consultation

This block can be inside the footer area or immediately above it, styled as a premium wide CTA card.

Footer columns
Column 1: Brand
Marketware logo
Short text:

Marketware is a Dynatrace-focused consultancy helping enterprises improve observability, digital resilience, automation, and operational performance.

Column 2: Company
About
Contact
Careers
Partners
Column 3: Expertise
Dynatrace Strategy
Digital Experience
Synthetic Monitoring
Custom Apps & Integrations
Managed Optimization
Column 4: Resources
Case Studies
Insights
Accelerators
Privacy Policy
Terms of Use
Column 5: Contact

Use placeholders for now:

hello@marketware.eu
Portugal
LinkedIn icon
Optional contact phone placeholder
Footer bottom
© {currentYear} Marketware Lda. All rights reserved.
Optional right-side links:
Privacy
Terms
Cookies
8. Other pages

Create functional route pages for:

/services
/industries
/case-studies
/insights
/about
/contact

These pages can be simple but polished for now, with reusable structures and placeholder content.

Page shell for internal pages

Each internal page should include:

Shared Header
A page hero/title area
Some initial content blocks
Shared Footer
8.1 Services page

Sections:

Hero with title: Dynatrace services built for enterprise outcomes
Service cards:
Dynatrace Strategy & Adoption
Observability Architecture
Digital Experience Monitoring
Synthetic Monitoring
Custom Dynatrace Apps
Integrations & Automation
Managed Optimization
A simple CTA block at bottom
8.2 Industries page

Sections:

Hero title: Industry-aware observability
Cards for the four industries from homepage
Brief paragraph per industry
CTA block
8.3 Case Studies page

Sections:

Hero title: Selected customer outcomes
Grid of 3 placeholder case study cards
First one can reuse the “Leading Iberian Bank” story
Each card has:
Sector
Short outcome headline
Read more link
8.4 Insights page

Sections:

Hero title: Insights from the field
Grid of article cards with placeholders such as:
How Dynatrace turns observability into operational advantage
Synthetic monitoring as a digital resilience capability
From dashboards to decisions: automation in modern operations
Simple category tag and date UI
8.5 About page

Sections:

Hero title: A specialist consultancy built around Dynatrace
Mission paragraph
Trust/value pillars
Portugal and international ambition copy
Placeholder team/approach section
8.6 Contact page

Sections:

Hero title: Start a conversation
Contact intro
Contact form:
Name
Company
Work email
Message
Sidebar card with:
Email
Location
LinkedIn
Form does not need backend yet, but structure code so it can be integrated later.
9. Components to build

Create reusable components for:

Container
Button
SectionTitle
Header
Footer
LogoStrip
FeatureCard
IndustryCard
CTASection
PageHero
ArticleCard
CaseStudyCard

Avoid duplicated layout code.

10. Styling and implementation quality

The code should prioritize:

Semantic HTML
Good accessibility
Alt text for images
Buttons vs links used correctly
Proper heading hierarchy
Reusable UI primitives
Easy future maintainability
Clean responsive behavior
No unnecessary complexity

Use CSS custom properties for theme values:

:root {
  --color-navy-950: #061426;
  --color-navy-900: #081b32;
  --color-text: #0b1320;
  --color-muted: #667085;
  --color-white: #ffffff;
  --color-teal: #41bbca;
  --color-green: #39c89a;
  --radius-lg: 18px;
  --radius-md: 12px;
  --shadow-soft: 0 12px 30px rgba(15, 23, 42, 0.12);
}
11. Assets

Use the available Marketware and Dynatrace-related imagery from the provided mockups/assets.

Create the asset structure so that image replacement is easy.

Example:

src/assets/images/
  hero-background.png
  hero-topology-panel.png
  featured-story-illustration.png
  banking.jpg
  energy.jpg
  insurance.jpg
  public-services.jpg
12. Expected result

Deliver:

A working Vite + React + TypeScript website
Homepage visually close to the attached mockup
A more complete footer
Internal routes/pages in a polished starter state
Maintainable, reusable component architecture
Responsive behavior across screen sizes
Clean, production-oriented frontend code

Do not over-engineer or introduce heavy dependencies.
Focus on a strong base app that is visually polished and easy to expand.