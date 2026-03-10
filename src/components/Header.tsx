import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-navy">
      <div className="container-content flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground font-heading">CM</span>
            </div>
            <span className="text-lg font-bold text-navy-foreground font-heading tracking-tight">
              Chill Master
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-navy-foreground/70 hover:text-navy-foreground hover:bg-navy-foreground/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+971000000000" className="flex items-center gap-1.5 text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-mono">+971 XX XXX XXXX</span>
          </a>
          <Button asChild size="sm" className="rounded-lg font-heading font-semibold">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-navy-foreground lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-foreground/10 bg-navy lg:hidden"
          >
            <nav className="container-content flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-navy-foreground/70 hover:text-navy-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <a href="tel:+971000000000" className="flex items-center gap-2 px-4 py-2 text-sm text-navy-foreground/70">
                  <Phone className="h-4 w-4" /> +971 XX XXX XXXX
                </a>
                <Button asChild className="rounded-lg font-heading font-semibold">
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>Request a Quote</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
