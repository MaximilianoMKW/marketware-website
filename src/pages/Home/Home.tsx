import { CapabilitiesSection } from '../../components/home/CapabilitiesSection/CapabilitiesSection';
import { FeaturedCaseStudySection } from '../../components/home/FeaturedCaseStudySection/FeaturedCaseStudySection';
import { HeroSection } from '../../components/home/HeroSection/HeroSection';
import { IndustriesSection } from '../../components/home/IndustriesSection/IndustriesSection';
import { TrustSection } from '../../components/home/TrustSection/TrustSection';
import { WhyMarketwareSection } from '../../components/home/WhyMarketwareSection/WhyMarketwareSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WhyMarketwareSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <FeaturedCaseStudySection />
    </>
  );
}
