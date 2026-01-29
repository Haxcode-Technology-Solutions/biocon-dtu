import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import dtuLogo from "@/assets/dtu-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Conference", href: "#conference" },
    { label: "Themes", href: "#themes" },
    { label: "Speakers", href: "#speakers" },
    { label: "Dates", href: "#dates" },
    { label: "Committee", href: "#committee" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={dtuLogo} 
              alt="DTU Logo" 
              className={`h-10 md:h-12 object-contain transition-all ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
            <div className={`hidden sm:block ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              <p className="text-xs font-medium">National Conference</p>
              <p className="text-xs opacity-70">Biotechnology & Bioinformatics</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" variant={isScrolled ? "default" : "gold"}>
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full mt-4">Register</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
