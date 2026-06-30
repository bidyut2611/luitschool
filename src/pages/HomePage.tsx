import HeroSection from '../components/HeroSection';
import MarqueeStrip from '../components/MarqueeStrip';
import CinematicBanner from '../components/CinematicBanner';
import StatsSection from '../components/StatsSection';
import ApproachSection from '../components/ApproachSection';
import WorkSection from '../components/WorkSection';
import TimelineSection from '../components/TimelineSection';
import LifetimeSupportSection from '../components/LifetimeSupportSection';
import OriginSection from '../components/OriginSection';
import TeamSection from '../components/TeamSection';
import ExtrasSection from '../components/ExtrasSection';
import ImageGallery from '../components/ImageGallery';
import ProgramSection from '../components/ProgramSection';
import PricingSection from '../components/PricingSection';
import QuoteSection from '../components/QuoteSection';
import BeyondSection from '../components/BeyondSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <main id="main" className="relative z-10">
        <HeroSection />
        <div className="relative">
          <MarqueeStrip />
          <CinematicBanner />
          <StatsSection />
          <ApproachSection />
          <WorkSection />
          <TimelineSection />
          <LifetimeSupportSection />
          <OriginSection />
          <TeamSection />
          <ExtrasSection />
          <ImageGallery />
          <ProgramSection />
          <PricingSection />
          <QuoteSection />
          <BeyondSection />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
