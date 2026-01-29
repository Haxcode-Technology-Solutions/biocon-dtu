import { Dna, Database, Brain, Microscope, Atom, Network, Cpu } from "lucide-react";

const ThemesSection = () => {
  const themes = [
    {
      icon: Dna,
      title: "Biotechnology & Molecular Biology",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Database,
      title: "Genomics & Functional Genomics",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Brain,
      title: "Bioinformatics & Computational Biology",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Microscope,
      title: "Cancer Biology & Translational Research",
      color: "from-rose-500 to-red-600",
    },
    {
      icon: Atom,
      title: "Structural Biology & Protein Biophysics",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Network,
      title: "Systems Biology & Machine Learning",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Cpu,
      title: "Biomedical Engineering & Interdisciplinary Research",
      color: "from-teal-500 to-green-600",
    },
  ];

  return (
    <section id="themes" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Research Areas
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Key Themes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore diverse research areas spanning biotechnology, bioinformatics, and beyond
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${theme.color}`} />
              
              <div className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${theme.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <theme.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                  {theme.title}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Plenary Lectures Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/10 border border-gold/30">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Plenary lectures will be delivered by eminent experts from across the country
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
