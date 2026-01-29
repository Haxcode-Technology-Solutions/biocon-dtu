import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import dtuLogo from "@/assets/dtu-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <img 
                src={dtuLogo} 
                alt="DTU Logo" 
                className="h-16 mb-4 brightness-0 invert opacity-90"
              />
              <h3 className="font-display text-xl font-semibold mb-3">
                1st National Conference
              </h3>
              <p className="text-sm text-background/70 leading-relaxed">
                on Biotechnology and Bioinformatics
                <br />
                Organised by Department of Biotechnology, DTU
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Conference", href: "#conference" },
                  { label: "Key Themes", href: "#themes" },
                  { label: "Speakers", href: "#speakers" },
                  { label: "Important Dates", href: "#dates" },
                  { label: "Committee", href: "#committee" },
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-background/70 hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-background/70">
                    Delhi Technological University<br />
                    Bawana Road, Shahbad Daulatpur<br />
                    New Delhi - 110042
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <a 
                    href="mailto:biotech@dtu.ac.in"
                    className="text-sm text-background/70 hover:text-gold transition-colors"
                  >
                    biotech@dtu.ac.in
                  </a>
                </div>
              </div>

              {/* DTU Website */}
              <a 
                href="https://dtu.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-gold hover:underline underline-offset-4"
              >
                <span>Visit DTU Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © 2026 Delhi Technological University. All rights reserved.
            </p>
            <p className="text-sm text-background/50">
              Department of Biotechnology, DTU
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
