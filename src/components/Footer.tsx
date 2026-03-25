import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-content section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src="/footer_icon.png" alt="Chill Master" className="h-12 w-auto mb-4" />
            <p className="text-sm text-navy-foreground/60 leading-relaxed">
              Professional HVAC solutions for residential, commercial, and industrial projects across the UAE.
            </p>
            <p className="mt-3 text-xs text-navy-foreground/40 italic">
              Part of Jowhar A. Group of Companies
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground/50">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground/50">Services</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                "HVAC Installation",
                "Maintenance & AMC",
                "Ventilation & Ducting",
                "Industrial Cooling",
              ].map((s) => (
                <Link key={s} to="/services" className="text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground/50">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+971551029597" className="flex items-start gap-2 text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                +971 55 102 9597
              </a>
              <a href="mailto:info@chillmasteruae.com" className="flex items-start gap-2 text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                info@chillmasteruae.com
              </a>
              <div className="flex items-start gap-2 text-sm text-navy-foreground/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Al Fahad Building -1a, Office# 116<br />
                  Al Qusais Industrial 2, Dubai
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-navy-foreground/40">
            © {new Date().getFullYear()} Chill Master. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-navy-foreground/40">
            <Link to="/privacy" className="hover:text-navy-foreground/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-navy-foreground/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
