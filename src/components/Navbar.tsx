import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Update real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full border border-white/15 bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/80 relative overflow-hidden">
          {/* Logo & Brand */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-black border border-white/30 group-hover:border-white overflow-hidden transition-all shadow-md shadow-white/10 group-hover:scale-105">
              <img src="/favicon.svg" alt="MA Logo" className="w-full h-full object-cover p-0.5" />
              <div className="absolute inset-0 rounded-full bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-wider text-white group-hover:text-gray-200 transition-colors font-display">
                MOHAMMED ASHIQ
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gray-400 uppercase font-mono font-semibold">
                Cloud & DevOps
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 relative px-2 py-1 rounded-full bg-white/[0.04] border border-white/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative z-10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                      isActive ? "text-white font-bold" : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-white/15 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Live Clock Widget */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>{time || "00:00:00"}</span>
            </div>

            <a
              href="https://github.com/mhmdashiqa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/10 active:scale-95 cursor-pointer"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Scroll Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-gray-500 via-white to-gray-500 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              <div className="text-center space-y-1 mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-gray-400">
                  SYSTEM TIME
                </span>
                <div className="text-2xl font-mono font-bold text-white tracking-wider">
                  {time}
                </div>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full py-3 text-lg font-bold uppercase tracking-widest rounded-2xl border transition-all ${
                    activeSection === item.id
                      ? "bg-white/15 border-white/40 text-white shadow-lg"
                      : "bg-white/[0.02] border-white/10 text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/mhmdashiqa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-widest text-black bg-white rounded-xl shadow-lg shadow-white/10 flex items-center justify-center gap-2"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[10px] uppercase tracking-[0.25em] text-gray-500 font-mono">
                © {new Date().getFullYear()} MOHAMMED ASHIQ A
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
