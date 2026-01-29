import { ExternalLink } from "lucide-react";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Prof. Sunit Singh",
      institution: "ACBR, University of Delhi",
      expertise: "Molecular Immunology & Virology",
    },
    {
      name: "Dr. S. Ramachandran",
      institution: "CSIR-IGIB, New Delhi",
      expertise: "Computational Biology, Genomics",
    },
    {
      name: "Dr. Taruna Madan Gupta",
      institution: "ICMR, New Delhi",
      expertise: "Innate Immunity, Clinical Trials",
    },
    {
      name: "Dr. Anuj Parkash",
      institution: "Medanta – The Medicity",
      expertise: "Clinical Oncology",
    },
    {
      name: "Dr. Neel Sarovar Bhavesh",
      institution: "ICGEB, New Delhi",
      expertise: "Structural Biology",
    },
    {
      name: "Dr. Anil Kumar",
      institution: "NII, New Delhi",
      expertise: "Cancer Biology, Microbiome",
    },
    {
      name: "Prof. Kashyap Dubey",
      institution: "JNU, New Delhi",
      expertise: "Bioprocess Engineering",
    },
    {
      name: "Dr. Vineet Sharma",
      institution: "IISER Bhopal",
      expertise: "Genomics, Metagenomics, Bioinformatics",
    },
    {
      name: "Prof. Tavpritesh Sethi",
      institution: "IIIT-Delhi",
      expertise: "Big Data, Machine Learning",
    },
    {
      name: "Dr. Dinesh Gupta",
      institution: "ICGEB, Delhi",
      expertise: "Bioinformatics, Systems Biology",
    },
  ];

  return (
    <section id="speakers" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Distinguished Faculty
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Confirmed Speakers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from leading experts and pioneers in biotechnology and bioinformatics
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-5 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-emerald flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-primary-foreground">
                  {speaker.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>
              
              <div className="text-center">
                <h3 className="font-display text-base font-semibold text-foreground mb-1 leading-tight">
                  {speaker.name}
                </h3>
                <p className="text-xs text-primary font-medium mb-2">
                  {speaker.institution}
                </p>
                <p className="text-xs text-muted-foreground leading-snug">
                  {speaker.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More Speakers Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            More speakers to be announced soon
          </p>
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
            <span>View Speaker Details</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
