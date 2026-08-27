import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Github, Linkedin, ShieldCheck, Terminal, MapPin, Briefcase, GraduationCap } from "lucide-react";
import profileImage from "../assets/IMAGES/ashiq.png";

const PROFILE = {
  name: "Mohammed Ashiq A",
  title: "Aspiring Cloud & DevOps Engineer",
  internship: "Cloud & DevOps Intern @ Akumen",
  location: "Varkala, Thiruvananthapuram, Kerala, India",
  email: "mohammedashiqansar@gmail.com",
  github: "https://github.com/mhmdashiqa",
  githubHandle: "mhmdashiqa",
  linkedin: "https://www.linkedin.com/in/mohammed-ashiq-a-b804562a3/",
};

const SKILLS_CORE = [
  "Linux",
  "Git",
  "GitHub",
  "Nginx",
  "Docker",
  "Prometheus",
  "Grafana",
  "Netdata",
  "Node Exporter",
  "Python",
  "Bash",
  "HTML",
  "CSS",
  "JavaScript",
];

const EXPERIENCE_POINTS = [
  "Assisting with the deployment, configuration, and monitoring of cloud and Linux environments.",
  "Applying DevOps fundamentals including containerization with Docker, virtual hosting with Nginx, and version control workflows.",
  "Configuring real-time system monitoring stacks using Prometheus, Node Exporter, Netdata, and Grafana.",
  "Automating routine Linux administration and maintenance tasks using Python and Bash scripts.",
];

interface Project {
  title: string;
  points: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Video Call Sign Language Translator",
    points: [
      "Built an AI-powered real-time sign language gesture recognition pipeline during live video calls",
      "Integrated computer vision and machine learning (OpenCV, MediaPipe, TensorFlow) to convert gestures to readable text",
      "Engineered an accessibility-focused WebRTC interface for seamless deaf-to-hearing communication",
    ],
  },
  {
    title: "Linux System Administration",
    points: [
      "Configured user accounts, groups, file permissions, SUDO policies, and systemd service daemons",
      "Executed shell diagnostics, process management, and automated maintenance via custom Bash scripts",
      "Hardened Linux network interfaces and system firewall parameters",
    ],
  },
  {
    title: "Nginx Virtual Hosting",
    points: [
      "Configured virtual hosts for multiple custom domain websites on Ubuntu server environments",
      "Setup reverse proxy configurations to backend application servers with custom access and error logging",
      "Optimized static asset caching, Gzip compression, and HTTP-to-HTTPS SSL redirect strategies",
    ],
  },
  {
    title: "Server Monitoring Stack",
    points: [
      "Deployed a full observability solution using Netdata, Prometheus, Node Exporter, and Grafana",
      "Monitored real-time CPU, RAM, Disk I/O, network bandwidth, and container performance",
      "Created custom Grafana dashboards and alert rules for pro-active infrastructure health tracking",
    ],
  },
];

const EDUCATION = {
  degree: "B.Tech in Computer Science & Engineering",
  college: "Musaliar College of Engineering, Chirayinkeezh",
  university: "APJ Abdul Kalam Technological University (KTU)",
  years: "2022 – 2026",
};

const STRENGTHS = [
  "Linux-First Problem Solving",
  "Cloud & Container Orchestration",
  "Infrastructure Monitoring & Metrics",
  "Automation & Scripting",
  "Continuous Learning & Adaptability",
  "Collaborative Team Mindset",
];

const OBJECTIVE =
  "To build a high-impact career in Cloud & DevOps engineering by automating infrastructure, maintaining zero-downtime Linux systems, and engineering reliable cloud solutions.";

const SUMMARY =
  "Aspiring Cloud & DevOps Engineer with hands-on expertise in Linux administration, Docker containerization, Nginx virtual hosting, Prometheus/Grafana monitoring, Python automation, and version control. Currently gaining real-world industry experience as a Cloud & DevOps Intern at Akumen while continuously engineering personal infrastructure projects.";

export default function About() {
  const navigate = useNavigate();
  const headingText = "About Mohammed Ashiq A";

  const [displayedText, setDisplayedText] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    let index = 0;
    let typeInterval: ReturnType<typeof setInterval>;
    let pauseTimeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      setDisplayedText("");
      index = 0;
      typeInterval = setInterval(() => {
        index++;
        setDisplayedText(headingText.slice(0, index));

        if (index === headingText.length) {
          clearInterval(typeInterval);
          pauseTimeout = setTimeout(startTyping, 5000);
        }
      }, 100);
    };

    startTyping();
    return () => {
      clearInterval(typeInterval);
      clearTimeout(pauseTimeout);
    };
  }, []);

  const buildResumeHTML = () => {
    const skillTags = SKILLS_CORE.map(
      (skill) => `<span class="skill-tag">${skill}</span>`
    ).join("\n");

    const projectBlocks = PROJECTS.map(
      (project) => `
        <div class="project">
          <h3>${project.title}</h3>
          ${project.points.map((point) => `<p>• ${point}</p>`).join("\n")}
        </div>`
    ).join("\n");

    const experienceBlocks = EXPERIENCE_POINTS.map(
      (point) => `<p>• ${point}</p>`
    ).join("\n");

    const strengthBlocks = STRENGTHS.map(
      (strength) => `
        <div class="strength-item">
          <span class="strength-icon">✔</span>
          <p>${strength}</p>
        </div>`
    ).join("\n");

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${PROFILE.name} — Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: #000000;
            color: #f3f4f6;
            padding: 24px;
            line-height: 1.6;
        }
        .container { max-width: 900px; margin: 0 auto; }
        .resume-wrapper {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        }
        .header {
            background: #000000;
            border-bottom: 2px solid #ffffff;
            padding: 40px;
        }
        .header h1 {
            font-size: 36px;
            color: #ffffff;
            margin-bottom: 4px;
        }
        .header .title {
            font-size: 16px;
            color: #d1d5db;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 12px;
            font-size: 13px;
        }
        .contact-item {
            background: #1f1f1f;
            padding: 8px 14px;
            border-radius: 6px;
            border: 1px solid #333333;
            color: #e5e7eb;
        }
        .contact-item a { color: #ffffff; text-decoration: underline; }
        .content { padding: 40px; }
        .section { margin-bottom: 32px; }
        .section-title {
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 1px solid #333333;
        }
        .summary-text, .objective-box {
            background: #18181b;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #ffffff;
            font-size: 14px;
            color: #d4d4d8;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag {
            background: #18181b;
            color: #ffffff;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid #3f3f46;
        }
        .project, .education-item {
            background: #18181b;
            padding: 16px 20px;
            border-radius: 8px;
            border: 1px solid #27272a;
            margin-bottom: 12px;
        }
        .project h3, .education-item h3 { color: #ffffff; font-size: 15px; margin-bottom: 8px; }
        .project p, .education-item p { color: #a1a1aa; font-size: 13px; margin-bottom: 4px; }
        .strengths-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .strength-item {
            display: flex;
            align-items: center;
            gap: 10px;
            background: #18181b;
            padding: 10px 16px;
            border-radius: 6px;
            font-size: 13px;
            color: #e4e4e7;
        }
        .strength-icon { color: #ffffff; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="resume-wrapper">
            <div class="header">
                <h1>${PROFILE.name}</h1>
                <p class="title">${PROFILE.title} | ${PROFILE.internship}</p>
                <div class="contact-info">
                    <div class="contact-item">📍 ${PROFILE.location}</div>
                    <div class="contact-item">✉ <a href="mailto:${PROFILE.email}">${PROFILE.email}</a></div>
                    <div class="contact-item">💻 <a href="${PROFILE.github}" target="_blank">GitHub: ${PROFILE.githubHandle}</a></div>
                    <div class="contact-item">🔗 <a href="${PROFILE.linkedin}" target="_blank">LinkedIn Profile</a></div>
                </div>
            </div>
            <div class="content">
                <section class="section">
                    <h2 class="section-title">Professional Summary</h2>
                    <div class="summary-text">${SUMMARY}</div>
                </section>
                <section class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skill-tags">${skillTags}</div>
                </section>
                <section class="section">
                    <h2 class="section-title">Experience</h2>
                    <div class="project">
                        <h3>Cloud &amp; DevOps Intern — Akumen</h3>
                        ${experienceBlocks}
                    </div>
                </section>
                <section class="section">
                    <h2 class="section-title">Key Projects</h2>
                    ${projectBlocks}
                </section>
                <section class="section">
                    <h2 class="section-title">Education</h2>
                    <div class="education-item">
                        <h3>${EDUCATION.degree}</h3>
                        <p>${EDUCATION.college}</p>
                        <p>${EDUCATION.university} (${EDUCATION.years})</p>
                    </div>
                </section>
                <section class="section">
                    <h2 class="section-title">Key Strengths</h2>
                    <div class="strengths-list">${strengthBlocks}</div>
                </section>
                <section class="section">
                    <h2 class="section-title">Career Objective</h2>
                    <div class="objective-box">${OBJECTIVE}</div>
                </section>
            </div>
        </div>
    </div>
</body>
</html>`;
  };

  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);
    let time = 3;
    setCountdown(time);

    const timer = setInterval(() => {
      time--;
      setCountdown(time);

      if (time <= 0) {
        clearInterval(timer);
        const resumeHTML = buildResumeHTML();
        const blob = new Blob([resumeHTML], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "Mohammed_Ashiq_A_Resume.html";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.open(url, "_blank");
        setTimeout(() => URL.revokeObjectURL(url), 10000);

        setDownloading(false);
        setCountdown(null);
      }
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden px-4 sm:px-8 py-12 select-none">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-[140px]" />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl text-gray-300 hover:text-white hover:border-white transition-all cursor-pointer shadow-xl"
      >
        <ArrowLeft size={18} />
        <span className="text-xs font-mono uppercase tracking-wider font-semibold">Back to Portfolio</span>
      </motion.button>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto pt-16 space-y-12">
        
        {/* Top Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 sm:p-12 bg-black/80 border border-white/20 backdrop-blur-2xl shadow-2xl space-y-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-white/40 p-1 overflow-hidden shrink-0 shadow-xl shadow-white/10">
              {!imgFailed ? (
                <img
                  src={profileImage}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-white text-2xl font-bold font-mono">
                  MA
                </div>
              )}
            </div>

            <div className="space-y-3 text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/30 text-xs font-mono text-white font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-white" />
                Verified Candidate Profile
              </span>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
                {displayedText}
                <span className="animate-pulse text-white">|</span>
              </h1>

              <p className="text-lg font-semibold text-gray-300 font-mono">
                {PROFILE.title} · {PROFILE.internship}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-gray-400 pt-1">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-white" /> {PROFILE.location}</span>
                <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-white" /> Akumen</span>
                <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-white" /> B.Tech CSE (2022-2026)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl p-8 bg-black/60 border border-white/15 backdrop-blur-xl space-y-4"
        >
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <Terminal className="w-5 h-5 text-white" />
            Professional Overview
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
            {SUMMARY}
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-3xl p-8 bg-black/60 border border-white/15 backdrop-blur-xl space-y-4"
        >
          <h2 className="text-xl font-bold text-white font-display">
            Cloud & DevOps Skill Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS_CORE.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-xs font-mono text-white bg-white/10 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-3xl p-8 bg-black/60 border border-white/15 backdrop-blur-xl space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white font-display">
              Work Experience
            </h2>
            <span className="text-xs font-mono text-white font-semibold">PRESENT</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-white">Cloud & DevOps Intern</h3>
              <span className="text-xs font-mono text-gray-400">Akumen</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 list-disc list-inside font-sans">
              {EXPERIENCE_POINTS.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-3xl p-8 bg-black/60 border border-white/15 backdrop-blur-xl space-y-3"
        >
          <h2 className="text-xl font-bold text-white font-display">
            Education
          </h2>
          <div>
            <h3 className="text-base font-semibold text-white">{EDUCATION.degree}</h3>
            <p className="text-xs font-mono text-gray-300 mt-1">{EDUCATION.college}</p>
            <p className="text-xs text-gray-400 mt-0.5">{EDUCATION.university} ({EDUCATION.years})</p>
          </div>
        </motion.div>

        {/* Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-black bg-white hover:bg-gray-200 transition-all shadow-xl shadow-white/10 active:scale-95 cursor-pointer disabled:opacity-50"
          >
            <Download size={18} />
            <span>
              {downloading ? `Generating Resume (${countdown}s)` : "Download Complete Resume"}
            </span>
          </button>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-white border border-white/20 bg-black hover:border-white transition-all"
          >
            <Github size={18} />
            <span>GitHub Profile</span>
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-white border border-white/20 bg-black hover:border-white transition-all"
          >
            <Linkedin size={18} />
            <span>LinkedIn Profile</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
