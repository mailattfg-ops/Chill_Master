import { useState, useEffect, useCallback, memo, useLayoutEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { m, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/", end: true },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Robust close function
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  // Sync state with location change (useLayoutEffect runs earlier than useEffect)
  // This is the most reliable reactive way to catch ANY navigation
  useLayoutEffect(() => {
    setIsOpen(false);
  }, [location.key, location.pathname]);

  // Handle navigation in mobile menu explicitly to avoid event race conditions
  const handleNav = useCallback((path: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    
    // Tiny delay to allow state to settle before navigation starts
    // This often fixes production hydration/timing issues
    setTimeout(() => {
      navigate(path);
    }, 10);
  }, [navigate]);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeMenu]);

  return (
    <header className="fixed top-4 left-0 right-0 z-[500] flex justify-center w-full px-4">
      {/* Main Navbar Pill */}
      <nav className="mx-auto max-w-[1200px] w-full bg-white/90 backdrop-blur-md transition-all duration-300 rounded-full border border-slate-200/80 shadow-lg py-2 px-4 lg:px-8 flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-[600] shrink-0 outline-none"
          onClick={closeMenu}
        >
          <img 
            src="/navbar_icon.png" 
            alt="Chill Master" 
            className="w-auto h-9 lg:h-11"
            width="144"
            height="36"
            loading="eager"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `px-5 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative group flex items-center justify-center ${
                  isActive ? "text-primary" : "text-navy/60 hover:text-navy"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <m.span 
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full" 
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button asChild className="rounded-full bg-navy text-white hover:bg-primary transition-all duration-500 px-6 h-9 font-black tracking-widest uppercase text-[9px] hidden sm:flex">
            <Link to="/contact">Get a quote</Link>
          </Button>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            className={`p-2.5 -mr-1 transition-all duration-300 lg:hidden relative z-[600] rounded-full ${
              isOpen ? "bg-slate-100 text-navy" : "text-navy hover:bg-slate-50"
            }`}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <m.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </m.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[450] lg:hidden">
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            {/* Menu Content */}
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-20 left-4 right-4 bg-white rounded-[32px] border border-slate-200 shadow-2xl p-6 max-h-[calc(100vh-120px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
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
                      onClick={(e) => handleNav(item.path, e)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-6 py-4 text-[12px] font-black tracking-widest uppercase rounded-2xl transition-all ${
                          isActive 
                            ? "bg-primary/10 text-primary pointer-events-none" 
                            : "text-navy hover:bg-slate-50 active:bg-slate-100"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="relative z-10">{item.label}</span>
                          <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? "translate-x-1" : "opacity-30"}`} />
                        </>
                      )}
                    </NavLink>
                  </m.div>
                ))}
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <Button 
                    asChild 
                    className="w-full h-14 rounded-2xl bg-navy text-white hover:bg-primary active:scale-[0.98] transition-all font-black uppercase tracking-widest text-[11px] shadow-lg shadow-navy/10"
                    onClick={(e) => handleNav("/contact", e)}
                  >
                    <Link to="/contact">Get a quote</Link>
                  </Button>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Header);
