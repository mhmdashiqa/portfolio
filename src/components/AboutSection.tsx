import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Terminal, MapPin, Briefcase, GraduationCap, ArrowRight, UserCheck } from "lucide-react";
import ProfileCard from "./ProfileCard";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const navigate = useNavigate();

  const coreSkills = [
    "Linux",
    "Docker",
    "Nginx",
    "Prometheus",
    "Grafana",
    "Python",
    "Bash",
    "Git",
    "GitHub",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen bg-black text-white px-6 sm:px-12 md:px-20 py-24 overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Bio Content (7 cols on large screens) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white">
              <UserCheck className="w-4 h-4 text-white" />
              <span className="uppercase tracking-widest font-semibold">About Me</span>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-white/40 to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Passionate About{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Cloud Infrastructure
            </span>{" "}
            & Linux Systems.
          </motion.h2>

          {/* Bio Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-sans"
          >
            <p>
              Hi! I'm <strong className="text-white font-semibold">Mohammed Ashiq A</strong>, currently working as a{" "}
              <span className="text-white font-semibold underline underline-offset-4 decoration-white/40">Cloud & DevOps Intern at Akumen</span>. I recently graduated with a B.Tech in Computer Science & Engineering from Musaliar College of Engineering.
            </p>
            <p>
              I specialize in managing Linux server environments, orchestrating Docker containers, setting up Nginx virtual hosts, and deploying real-time system monitoring stacks using Prometheus, Grafana, and Netdata.
            </p>
          </motion.div>

          {/* Quick Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
          >
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="p-2.5 rounded-xl bg-white/10 text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-gray-400">Role</div>
                <div className="text-sm font-semibold text-white">Cloud & DevOps Intern</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="p-2.5 rounded-xl bg-white/10 text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-gray-400">Location</div>
                <div className="text-sm font-semibold text-white">Varkala, Kerala, India</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="p-2.5 rounded-xl bg-white/10 text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-gray-400">Education</div>
                <div className="text-sm font-semibold text-white">B.Tech in Computer Science</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="p-2.5 rounded-xl bg-white/10 text-white">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono tracking-wider text-gray-400">Focus</div>
                <div className="text-sm font-semibold text-white">Sysadmin & Automation</div>
              </div>
            </div>
          </motion.div>

          {/* Core Skill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-3 pt-2"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400 font-semibold">
              Primary Technologies:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {coreSkills.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-gray-200 bg-white/[0.04] border border-white/15 hover:border-white hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Detailed About Page CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <button
              onClick={() => navigate("/about")}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase text-black bg-white hover:bg-gray-200 transition-all duration-300 shadow-xl shadow-white/10 active:scale-95 cursor-pointer"
            >
              <span>View Detailed Background & Resume</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Right Interactive Hanging ID Card (5 cols on large screens) */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[480px]">
          <ProfileCard show={isInView} />
        </div>

      </div>
    </section>
  );
}
