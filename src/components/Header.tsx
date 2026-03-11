import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/", end: true },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="container-content flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-8 w-8 rounded-none bg-primary flex items-center justify-center">
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
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `rounded-none px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-navy-foreground/70 hover:text-navy-foreground hover:bg-navy-foreground/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+971507002525" className="flex items-center gap-1.5 text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-mono">+971 50 700 2525</span>
          </a>
          <Button asChild size="sm" className="rounded-none font-heading font-semibold">
            <NavLink to="/contact">Request a Quote</NavLink>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-none p-2 text-navy-foreground lg:hidden z-50 relative"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy-foreground/10 bg-navy lg:hidden shadow-2xl"
          >
            <nav className="container-content flex flex-col gap-1 py-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-none px-4 py-4 text-sm font-bold uppercase tracking-wider transition-all border-l-2 ${
                      isActive
                        ? "bg-primary/10 text-primary border-primary pl-6"
                        : "text-navy-foreground/70 hover:text-navy-foreground border-transparent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-navy-foreground/5 flex flex-col gap-3">
                <a 
                  href="tel:+971507002525" 
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-navy-foreground/70 hover:text-primary transition-colors"
                >
                  <div className="h-8 w-8 rounded-none bg-primary/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-mono font-bold">+971 50 700 2525</span>
                </a>
                <Button asChild className="h-14 rounded-none font-heading font-black bg-primary text-primary-foreground hover:bg-white hover:text-navy transition-all uppercase tracking-widest text-[10px]">
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
