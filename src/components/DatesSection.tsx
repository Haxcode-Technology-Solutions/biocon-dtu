import { Calendar, FileText, CheckCircle, Clock } from "lucide-react";

const DatesSection = () => {
  const dates = [
    {
      icon: Calendar,
      date: "1st February 2026",
      title: "Registration Opens",
      description: "Begin your registration process",
    },
    {
      icon: FileText,
      date: "1st February 2026",
      title: "Abstract Submission Opens",
      description: "Submit your research abstract",
    },
    {
      icon: Clock,
      date: "15th February 2026",
      title: "Abstract Submission Deadline",
      description: "Last date to submit abstracts",
    },
    {
      icon: CheckCircle,
      date: "20th February 2026",
      title: "Acceptance Notification",
      description: "Receive abstract acceptance status",
    },
    {
      icon: Calendar,
      date: "28th February 2026",
      title: "Registration Deadline",
      description: "Final date for registration",
    },
  ];

  return (
    <section id="dates" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Mark Your Calendar
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Important Dates
          </h2>
          <p className="text-muted-foreground">(Tentative)</p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald to-gold hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-6">
              {dates.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-card shadow-soft flex items-center justify-center shrink-0 group-hover:shadow-elevated transition-shadow">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 shadow-soft group-hover:shadow-elevated transition-all group-hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conference Date Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-primary to-teal-deep shadow-elevated">
            <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mb-2">
              Conference Dates
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              18th – 19th March, 2026
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatesSection;
