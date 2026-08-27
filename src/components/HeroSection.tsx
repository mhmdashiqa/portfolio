import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Terminal, Cloud, ShieldCheck } from "lucide-react";

const marqueeItems = [
  "LINUX",
  "DOCKER",
  "NGINX",
  "PROMETHEUS",
  "GRAFANA",
  "NETDATA",
  "NODE EXPORTER",
  "PYTHON",
  "BASH",
  "AWS",
  "GIT & GITHUB",
];

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-8 px-6 md:px-12 bg-black text-white overflow-hidden select-none"
    >
      {/* Mouse Follow Radial Glow */}
      <div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(200, 200, 200, 0.2) 50%, transparent 70%)",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient background blur blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-white/5 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-white/5 blur-[130px] pointer-events-none animate-pulse-glow" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-center flex-grow py-8">
        
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/20 backdrop-blur-xl mb-8 w-fit shadow-lg shadow-white/5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <span className="text-xs font-mono tracking-widest text-gray-200 uppercase font-semibold">
            Cloud & DevOps Intern @ Akumen
          </span>
        </motion.div>

        {/* Hero Main Heading */}
        <div className="space-y-2 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              MOHAMMED
            </span>{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              ASHIQ A
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-gray-300 font-display"
          >
            Aspiring Cloud & DevOps Engineer
          </motion.h2>
        </div>

        {/* Subtitle & Focus */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-sans mb-10"
        >
          Specializing in <span className="text-white font-semibold">Linux System Administration</span>,{" "}
          <span className="text-white font-semibold">Docker Containerization</span>,{" "}
          <span className="text-white font-semibold">Prometheus & Grafana Monitoring</span>, and{" "}
          <span className="text-white font-semibold">Python Automation</span>. Engineering scalable, high-reliability infrastructure.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase text-black bg-white hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-xl shadow-white/10 active:scale-95 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="https://www.linkedin.com/in/mohammed-ashiq-a-b804562a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase text-white border border-white/20 bg-white/[0.03] hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-xl active:scale-95"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>

          <a
            href="https://github.com/mhmdashiqa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase text-white border border-white/20 bg-white/[0.03] hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-xl active:scale-95"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 pt-8 border-t border-white/10 max-w-3xl"
        >
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-2 rounded-xl bg-white/10 text-white">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase font-mono">Linux Sysadmin</div>
              <div className="text-[11px] text-gray-400">User & Process Mgmt</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-2 rounded-xl bg-white/10 text-white">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase font-mono">Cloud & Docker</div>
              <div className="text-[11px] text-gray-400">Virtual Hosting & Nginx</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="p-2 rounded-xl bg-white/10 text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase font-mono">Observability</div>
              <div className="text-[11px] text-gray-400">Grafana & Prometheus</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Tech Stack Ticker */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/10 py-3 bg-black/60 backdrop-blur-md">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-white text-xs">✦</span>
              <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase font-medium hover:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => scrollToSection("about")}
        className="absolute bottom-16 right-8 hidden md:flex flex-col items-center gap-2 cursor-pointer z-10 group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-gray-400 group-hover:text-white transition-colors">
          SCROLL
        </span>
        <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-white animate-bounce">
          <ChevronDown className="w-4 h-4 text-white" />
        </div>
      </div>
    </section>
  );
}
