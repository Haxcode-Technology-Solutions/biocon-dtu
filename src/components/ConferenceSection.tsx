import { Target, Users, Lightbulb, Globe } from "lucide-react";

const ConferenceSection = () => {
  const participants = [
    "Faculty members",
    "Scientists & Researchers",
    "Clinicians",
    "PhD Scholars",
    "Postgraduate & Undergraduate students",
    "Industry professionals in biotechnology and bioinformatics",
  ];

  const highlights = [
    {
      icon: Target,
      title: "Cutting-edge Research",
      description: "Share and discuss the latest advancements in biotechnology and bioinformatics",
    },
    {
      icon: Users,
      title: "Expert Networking",
      description: "Connect with scientists, researchers, academicians, and industry experts",
    },
    {
      icon: Lightbulb,
      title: "Innovative Ideas",
      description: "Exchange knowledge across genomics, molecular biology, and biomedical engineering",
    },
    {
      icon: Globe,
      title: "Global Challenges",
      description: "Address worldwide challenges through state-of-the-art technological advances",
    },
  ];

  return (
    <section id="conference" className="section-padding bg-teal-dark">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-3">
            About The Event
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            About the Conference
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            The National Conference on Biotechnology and Bioinformatics aims to bring together scientists, researchers, academicians, and industry experts to share and discuss cutting-edge advancements. The conference will provide a platform for the exchange of knowledge and innovative ideas across disciplines such as biotechnology, genomics, molecular biology, bioinformatics, and biomedical engineering.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Expected Participants */}
        <div className="bg-primary-foreground/5 rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground text-center mb-8">
            Expected Participants
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {participants.map((participant, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/5"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-semibold">{index + 1}</span>
                </div>
                <span className="text-primary-foreground/90">{participant}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
