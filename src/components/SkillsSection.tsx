import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Server, Activity, Code, ShieldCheck, Cpu, Sparkles } from "lucide-react";
import {
  SiLinux,
  SiGnubash,
  SiDocker,
  SiNginx,
  SiGit,
  SiGithub,
  SiPrometheus,
  SiGrafana,
  SiNetdata,
  SiPython,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

interface SkillItem {
  name: string;
  category: "os" | "cloud" | "monitoring" | "dev";
  proficiency: number;
  icon: any;
  brandColor: string;
  description: string;
  highlight: string;
}

const skillsData: SkillItem[] = [
  // OS & Shell
  {
    name: "Linux",
    category: "os",
    proficiency: 90,
    icon: SiLinux,
    brandColor: "#FCC624",
    description: "Kernel CLI, User Administration, Permissions, File Systems & Package Management",
    highlight: "Primary OS",
  },
  {
    name: "Bash",
    category: "os",
    proficiency: 85,
    icon: SiGnubash,
    brandColor: "#4EAA25",
    description: "Shell Scripting, Cron Automation, System Diagnostics & Log Processing",
    highlight: "Automation",
  },

  // Cloud & Web & Containers
  {
    name: "Docker",
    category: "cloud",
    proficiency: 80,
    icon: SiDocker,
    brandColor: "#2496ED",
    description: "Containerization, Dockerfiles, Multi-stage Builds, Docker Compose",
    highlight: "Containers",
  },
  {
    name: "Nginx",
    category: "cloud",
    proficiency: 85,
    icon: SiNginx,
    brandColor: "#009639",
    description: "Virtual Hosting, Reverse Proxying, SSL/TLS, Access/Error Logging",
    highlight: "Web Server",
  },
  {
    name: "Git",
    category: "cloud",
    proficiency: 90,
    icon: SiGit,
    brandColor: "#F05032",
    description: "Version Control, Branching Strategies, Merging & Commit Workflow",
    highlight: "VCS",
  },
  {
    name: "GitHub",
    category: "cloud",
    proficiency: 90,
    icon: SiGithub,
    brandColor: "#FFFFFF",
    description: "Repositories, Pull Requests, Code Reviews, Actions CI/CD Basics",
    highlight: "Collaboration",
  },

  // Monitoring & Observability
  {
    name: "Prometheus",
    category: "monitoring",
    proficiency: 80,
    icon: SiPrometheus,
    brandColor: "#E6522C",
    description: "Time-series Metrics Collection, Scrape Targets & Alerting Concepts",
    highlight: "Metrics Engine",
  },
  {
    name: "Grafana",
    category: "monitoring",
    proficiency: 85,
    icon: SiGrafana,
    brandColor: "#F46800",
    description: "Real-time Dashboarding, Data Source Visualization & System Metrics",
    highlight: "Visualization",
  },
  {
    name: "Netdata",
    category: "monitoring",
    proficiency: 85,
    icon: SiNetdata,
    brandColor: "#00AB44",
    description: "Real-time Performance Monitoring, CPU, Memory & Disk I/O Analytics",
    highlight: "Real-time Health",
  },
  {
    name: "Node Exporter",
    category: "monitoring",
    proficiency: 80,
    icon: SiPrometheus,
    brandColor: "#E6522C",
    description: "Exposing Machine Metrics for Prometheus Scrape Configs",
    highlight: "Node Collector",
  },

  // Development & Scripting
  {
    name: "Python",
    category: "dev",
    proficiency: 85,
    icon: SiPython,
    brandColor: "#3776AB",
    description: "Automation Scripts, Computer Vision (OpenCV/MediaPipe), APIs & System Tooling",
    highlight: "Core Language",
  },
  {
    name: "JavaScript",
    category: "dev",
    proficiency: 80,
    icon: SiJavascript,
    brandColor: "#F7DF1E",
    description: "Async Logic, Web APIs, DOM Manipulation & Modern ES6+ Features",
    highlight: "Web Scripting",
  },
  {
    name: "HTML5",
    category: "dev",
    proficiency: 90,
    icon: SiHtml5,
    brandColor: "#E34F26",
    description: "Semantic HTML5, Accessibility (ARIA), Web Architecture",
    highlight: "Structure",
  },
  {
    name: "CSS3",
    category: "dev",
    proficiency: 85,
    icon: FaCss3Alt,
    brandColor: "#1572B6",
    description: "Responsive Layouts, Glassmorphism, Modern CSS, Keyframe Animations",
    highlight: "Styling",
  },
];

// Interactive Skill Card with Mouse Spotlight & Official Tech Logos
function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: SkillItem;
  index: number;
  isInView: boolean;
}) {
  const IconComponent = skill.icon;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92, y: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl p-7 bg-neutral-950/80 border border-white/12 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-xl hover:border-white/40 hover:shadow-[0_0_35px_rgba(255,255,255,0.1)]"
      style={{
        background: isHovered
          ? `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.07), rgba(10, 10, 10, 0.95))`
          : "rgba(10, 10, 10, 0.85)",
      }}
    >
      {/* Animated Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.25), transparent 70%)`,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div>
        {/* Top Row: Official Tech Logo & Highlight Badge */}
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/15 flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/10 shadow-lg"
            style={{
              boxShadow: isHovered ? `0 0 20px ${skill.brandColor}33` : "none",
            }}
          >
            <IconComponent
              className="w-8 h-8 transition-all duration-300 group-hover:scale-105"
              style={{
                color: isHovered ? skill.brandColor : "#FFFFFF",
              }}
            />
          </div>

          <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-gray-200 font-semibold shadow-sm">
            {skill.highlight}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xl font-extrabold text-white group-hover:text-white transition-colors font-display tracking-tight">
            {skill.name}
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed font-sans min-h-[40px]">
            {skill.description}
          </p>
        </div>
      </div>

      {/* Progress Bar & Percentage */}
      <div className="space-y-2 pt-4 border-t border-white/10">
        <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
          <span className="uppercase tracking-wider">Proficiency</span>
          <span className="text-white font-bold">{skill.proficiency}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2 + index * 0.04 }}
            className="h-full bg-gradient-to-r from-gray-400 via-white to-gray-200 rounded-full shadow-sm"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });
  const [activeCategory, setActiveCategory] = useState<"all" | "os" | "cloud" | "monitoring" | "dev">("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: Cpu },
    { id: "os", label: "Linux & Shell", icon: Terminal },
    { id: "cloud", label: "Cloud & DevOps", icon: Server },
    { id: "monitoring", label: "Observability", icon: Activity },
    { id: "dev", label: "Languages & Web", icon: Code },
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 py-28 overflow-hidden select-none"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-white/5 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white shadow-lg"
          >
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="uppercase tracking-widest font-semibold font-mono">Technical Core</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Cloud, DevOps &{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Systems Mastery
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-gray-400 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed"
          >
            Official technologies, tools, and systems administration frameworks engineered for performance, security, and scalability.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-black border border-white shadow-xl shadow-white/10 scale-105"
                    : "bg-white/[0.04] border border-white/12 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, idx) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={idx}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
