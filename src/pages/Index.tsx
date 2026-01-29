import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ConferenceSection from "@/components/ConferenceSection";
import ThemesSection from "@/components/ThemesSection";
import SpeakersSection from "@/components/SpeakersSection";
import DatesSection from "@/components/DatesSection";
import CommitteeSection from "@/components/CommitteeSection";
import Footer from "@/components/Footer";
import RegistrationDialog from "@/components/RegistrationDialog";
import { RegistrationProvider, useRegistration } from "@/contexts/RegistrationContext";

const IndexContent = () => {
  const { isOpen, defaultTab, closeRegistration } = useRegistration();

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
      <RegistrationDialog 
        open={isOpen} 
        onOpenChange={closeRegistration} 
        defaultTab={defaultTab}
      />
    </div>
  );
};

const Index = () => {
  return (
    <RegistrationProvider>
      <IndexContent />
    </RegistrationProvider>
  );
};

export default Index;
