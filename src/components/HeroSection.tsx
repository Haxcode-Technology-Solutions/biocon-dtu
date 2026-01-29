import heroBg from "@/assets/hero-bg.jpg";
import dtuLogo from "@/assets/dtu-logo.png";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/contexts/RegistrationContext";

const HeroSection = () => {
  const { openRegistration } = useRegistration();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-teal-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center px-4 py-20">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <img 
            src={dtuLogo} 
            alt="Delhi Technological University Logo" 
            className="h-24 md:h-32 object-contain"
          />
        </div>

        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-sm font-medium">1947 to 2047 • Viksit Bharat</span>
        </div>

        {/* Title */}
        <h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          1<sup className="text-2xl md:text-4xl">st</sup> National Conference
        </h1>
        
        <h2 
          className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-gold mb-8 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          on Biotechnology & Bioinformatics
        </h2>

        {/* Date and Location */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-primary-foreground/90 mb-10 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gold" />
            <span className="text-lg font-medium">18th – 19th March, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-lg">Dr. B.R. Ambedkar Auditorium, DTU</span>
          </div>
        </div>

        {/* Organizer */}
        <p 
          className="text-primary-foreground/70 mb-8 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Organised by <span className="text-primary-foreground font-medium">Department of Biotechnology</span>
          <br />
          Delhi Technological University, Delhi
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <Button 
            size="lg" 
            variant="gold" 
            className="min-w-[180px]"
            onClick={() => openRegistration("register")}
          >
            Register Now
          </Button>
          <Button 
            size="lg" 
            variant="outline-hero" 
            className="min-w-[180px]"
            onClick={() => openRegistration("abstract")}
          >
            Submit Abstract
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
