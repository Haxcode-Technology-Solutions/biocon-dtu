import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ConferenceSection from "@/components/ConferenceSection";
import ThemesSection from "@/components/ThemesSection";
import SpeakersSection from "@/components/SpeakersSection";
import DatesSection from "@/components/DatesSection";
import CommitteeSection from "@/components/CommitteeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ConferenceSection />
      <ThemesSection />
      <SpeakersSection />
      <DatesSection />
      <CommitteeSection />
      <Footer />
    </div>
  );
};

export default Index;
