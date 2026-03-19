import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
  { label: "Home", path: "/", end: true },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full">
      {/* Main Navbar - Ultra Slim Fixed Floating Pill */}
      <nav className="mx-auto max-w-[95%] lg:max-w-[1200px] w-full bg-white transition-all duration-300 rounded-full border border-slate-200 shadow-xl py-2 px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="relative z-50 shrink-0">
            <img 
              src="/navbar_icon.png" 
              alt="Chill Master" 
              className="w-auto h-10 lg:h-12" 
            />
          </Link>

          {/* Desktop Links - Minimalist */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                    isActive ? "text-primary" : "text-navy/60 hover:text-navy"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex flex-col items-center">
                    {item.label}
                    {isActive && (
                      <m.span 
                        layoutId="navIndicator"
                        className="absolute bottom-0 h-[2px] w-4 bg-primary rounded-full mt-1" 
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 relative z-50">
            <Button asChild className="rounded-full bg-navy text-white hover:bg-primary transition-all duration-500 px-5 h-8 font-black tracking-widest uppercase text-[8px] hidden sm:flex">
              <Link to="/contact">Quote</Link>
            </Button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors lg:hidden ${mobileOpen ? "text-navy" : "text-navy hover:text-primary"}`}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                <m.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </m.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl rounded-[32px] border border-white/20 shadow-2xl p-6 lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <m.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.end}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-6 py-4 text-[12px] font-black tracking-widest uppercase rounded-full transition-all ${
                          isActive ? "bg-primary/10 text-primary" : "text-navy hover:bg-slate-50"
                        }`
                      }
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </NavLink>
                  </m.div>
                ))}
                <m.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.3 }}
                  className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4"
                >
                  <Button asChild className="h-12 rounded-full bg-navy text-white hover:bg-primary transition-all font-black uppercase tracking-widest text-[10px]">
                    <Link to="/contact" onClick={() => setMobileOpen(false)}>Free Quote</Link>
                  </Button>
                </m.div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
