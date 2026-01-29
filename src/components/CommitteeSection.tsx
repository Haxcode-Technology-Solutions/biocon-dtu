import { Crown, Award, Users } from "lucide-react";

const CommitteeSection = () => {
  const leadership = [
    {
      role: "Patron",
      name: "Prof. Prateek Sharma",
      title: "Hon'ble Vice Chancellor, DTU",
      icon: Crown,
    },
    {
      role: "Chairperson",
      name: "Prof. Yasha Hasija",
      title: "Head, Department of Biotechnology, DTU",
      icon: Award,
    },
  ];

  const conveners = [
    { name: "Dr. Praveen Kumar", title: "Dept. of Biotechnology, DTU" },
    { name: "Dr. Ankita", title: "Dept. of Biotechnology, DTU" },
  ];

  const organizingCommittee = [
    "Prof. Jai Gopal Sharma",
    "Prof. Pravir Kumar",
    "Dr. Raman Kumar",
    "Dr. Mamta Rani",
    "Dr. Prem Raj Meena",
    "Dr. Shivani Khatri",
    "Dr. Smita Rastogi Verma",
    "Dr. Kriti Bhandari",
    "Dr. Prakash Chandra",
  ];

  return (
    <section id="committee" className="section-padding bg-teal-dark">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-3">
            Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Organizing Committee
          </h2>
        </div>

        {/* Patron & Chairperson */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {leadership.map((person, index) => (
            <div
              key={index}
              className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-3xl p-8 text-center"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <person.icon className="w-5 h-5 text-teal-dark" />
                </div>
              </div>
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4 mt-2">
                {person.role}
              </span>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                {person.name}
              </h3>
              <p className="text-primary-foreground/70">
                {person.title}
              </p>
            </div>
          ))}
        </div>

        {/* Faculty Conveners */}
        <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-3xl p-8 mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="w-6 h-6 text-gold" />
            <h3 className="font-display text-xl font-semibold text-primary-foreground">
              Faculty Conveners
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {conveners.map((convener, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-display font-bold text-primary-foreground">
                    {convener.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <h4 className="font-display text-lg font-semibold text-primary-foreground mb-1">
                  {convener.name}
                </h4>
                <p className="text-sm text-primary-foreground/70">
                  {convener.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div>
          <h3 className="font-display text-xl font-semibold text-primary-foreground text-center mb-8">
            Committee Members
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {organizingCommittee.map((member, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/90 hover:bg-primary-foreground/10 transition-colors"
              >
                {member}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
