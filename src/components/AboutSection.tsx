import dtuCampus from "@/assets/dtu-campus.jpg";
import { Building2, GraduationCap, FlaskConical, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Delhi Technological University
          </h2>
        </div>

        {/* About DTU */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              8+ Decades of Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Delhi Technological University (DTU) has an illustrious history of providing quality education and promoting research and entrepreneurship for over eight decades. Having 84 years of its long-established tradition of excellence in engineering & technology education, research, and innovations, Delhi College of Engineering (DCE) came into existence in the year 1941.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              DCE has been converted into DTU vide Delhi Act 6 of 2009 to cater to the needs of Indian industries for trained technical manpower. The University is proud of its world-class alumni, top placement in reputable companies, growing publications and citations, and serving the nation with research, innovation and extension activities.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Building2, value: "164", label: "Acres Campus" },
                { icon: GraduationCap, value: "84+", label: "Years Legacy" },
                { icon: FlaskConical, value: "20+", label: "Departments" },
                { icon: Users, value: "10K+", label: "Students" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-gradient-card shadow-soft"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={dtuCampus} 
                alt="DTU Campus" 
                className="rounded-2xl shadow-elevated w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>

        {/* About Department */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Department of Biotechnology
            </h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Department of Biotechnology is an excellence hub for cutting-edge biotechnology research and interdisciplinary innovation. Our goal is to train students to develop skilled and qualified personnel who can tackle new global challenges while advancing the boundaries of biotechnological sciences through innovative research.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              "B. Tech in Biotechnology",
              "M.Sc. in Biotechnology", 
              "M.Tech. in Bioinformatics",
              "M.Tech. in Industrial Biotechnology",
              "PhD in Biotechnology",
              "Integrated B.Sc.–M.Sc. (New)",
            ].map((program, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">{program}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Research funded by <span className="text-primary font-medium">DST, CSIR, ICMR, DBT, and UGC</span> addressing critical issues in healthcare, agriculture, and environmental sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
