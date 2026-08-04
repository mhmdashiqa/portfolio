
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import profileImage from "../assets/images/prof.jpeg";

// ---------------------------------------------------------------------------
// Content — edit here, not in the JSX/logic below
// ---------------------------------------------------------------------------

const PROFILE = {
  name: "Mohammed Ashiq A",
  title: "Aspiring Cloud & DevOps Engineer",
  internship: "Cloud & DevOps Intern @ Akumen",
  location: "Varkala, Thiruvananthapuram, Kerala",
  email: "mohammedashiqansar@gmail.com",
  github: "https://github.com/mhmdashiqa",
  githubHandle: "mhmdashiqa",
  linkedin: "https://www.linkedin.com/in/mohammed-ashiq-a-b804562a3/",
};

// Replace with a real image path, e.g. "/assets/ashiq.png"
const PROFILE_IMAGE = profileImage;

const SKILLS_KNOWN = ["Linux", "Python", "HTML", "CSS", "GitHub"];
const SKILLS_LEARNING = [
  "AWS",
  "Docker",
  "Jenkins",
  "Bash",
  "Git",
  "Nginx",
  "Networking",
];

const EXPERIENCE_POINTS = [
  "Assisting with the setup and monitoring of cloud-based environments as part of ongoing infrastructure tasks.",
  "Learning and applying DevOps fundamentals under guidance, including version control workflows and basic automation.",
  "Supporting the team with day-to-day Linux system tasks and documentation.",
  "Building a working understanding of how cloud and DevOps practices function in a real production setting.",
];

interface Project {
  title: string;
  points: string[];
}

const PROJECTS: Project[] = [
  {
    title: "AI Video Call Sign Language Translator",
    points: [
      "Built a real-time hand-gesture recognition pipeline for use during video calls",
      "Used computer vision to translate sign language into readable text",
      "Focused on improving accessibility in everyday video communication",
    ],
  },
  {
    title: "Portfolio Website",
    points: [
      "Designed and built a responsive personal portfolio from scratch",
      "Implemented smooth motion design without compromising performance",
      "Structured the codebase to be clean, modular, and easy to extend",
    ],
  },
  {
    title: "Linux Administration",
    points: [
      "Practiced setting up and managing users, groups, and permissions",
      "Configured Nginx as a web server in a hands-on lab environment",
      "Built foundational sysadmin skills relevant to real infrastructure work",
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
  "Fast Learner",
  "Linux-First Problem Solving",
  "Strong Interest in Automation",
  "Consistent Self-Learning",
  "Team Collaboration",
  "Goal-Oriented Approach",
];

const OBJECTIVE =
  "Build a successful career in Cloud & DevOps by continuously learning, solving real-world problems, and contributing to innovative technology solutions.";

const SUMMARY =
  "Aspiring Cloud & DevOps Engineer with a working foundation in Linux, Python, and version control, currently deepening my skills in AWS, Docker, Jenkins, Bash, Git, Nginx, and networking. Passionate about automating infrastructure, managing cloud environments, and building reliable systems through modern DevOps practices. Currently gaining hands-on experience as a Cloud & DevOps Intern at Akumen, while continuing to learn through personal projects.";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function About() {
  const navigate = useNavigate();
  const headingText = "About Me";

  const [displayedText, setDisplayedText] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  const showInitials = !PROFILE_IMAGE || imgFailed;
  const initials = PROFILE.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // TYPING EFFECT — types the heading, pauses, then loops
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
      }, 120);
    };

    startTyping();
    return () => {
      clearInterval(typeInterval);
      clearTimeout(pauseTimeout);
    };
  }, []);

  // Builds a self-contained HTML resume from the real content above
  const buildResumeHTML = () => {
    const skillTags = (skills: string[], learning = false) =>
      skills
        .map(
          (skill) =>
            `<span class="skill-tag${learning ? " learning" : ""}">${skill}</span>`
        )
        .join("\n");

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

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${PROFILE.name} Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; }
        body {
            font-family: 'Segoe UI', 'Helvetica Neue', Tahoma, Geneva, Verdana, sans-serif;
            background: #000000;
            padding: 20px;
            min-height: 100vh;
        }
        .container { max-width: 900px; margin: 0 auto; }
        .resume-wrapper {
            background: #0d0d0d;
            border: 1px solid #222222;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
        }
        .header {
            background: #000000;
            border-bottom: 2px solid #333333;
            padding: 45px 40px;
            display: flex;
            gap: 40px;
            align-items: flex-start;
        }
        .header-content h1 {
            font-size: 42px;
            margin-bottom: 8px;
            font-weight: 700;
            letter-spacing: -0.5px;
            color: #ffffff;
        }
        .header-content .title {
            font-size: 16px;
            color: #b0b0b0;
            margin-bottom: 18px;
        }
        .contact-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            font-size: 13px;
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            background: #1a1a1a;
            border-radius: 6px;
            border: 1px solid #333333;
        }
        .contact-item a { color: #ffffff; text-decoration: none; word-break: break-all; }
        .contact-item a:hover { color: #a1a1a1; }
        .content { padding: 40px; background: #0d0d0d; }
        .section { margin-bottom: 35px; }
        .section:last-child { margin-bottom: 0; }
        .section-title {
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid #333333;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        .section-content { display: flex; flex-direction: column; gap: 15px; }
        .summary-text, .objective-box {
            color: #d0d0d0;
            line-height: 1.8;
            font-size: 14px;
            background: #1a1a1a;
            padding: 20px;
            border-left: 3px solid #555555;
            border-radius: 6px;
            border: 1px solid #2a2a2a;
        }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .skill-category {
            background: #1a1a1a;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #2a2a2a;
        }
        .skill-category h3 { color: #ffffff; font-size: 14px; margin-bottom: 15px; font-weight: 600; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-tag {
            background: #2a2a2a;
            color: #e0e0e0;
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            border: 1px solid #3a3a3a;
        }
        .skill-tag.learning { border-color: #6b5a3a; color: #e8c98f; }
        .project, .education-item {
            background: #1a1a1a;
            padding: 18px;
            border-radius: 6px;
            border: 1px solid #2a2a2a;
            border-left: 3px solid #444444;
        }
        .project h3, .education-item h3 { color: #ffffff; font-size: 15px; margin-bottom: 10px; font-weight: 600; }
        .project p, .education-item p { color: #b0b0b0; font-size: 13px; line-height: 1.6; }
        .project p + p { margin-top: 8px; }
        .strengths-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .strength-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px;
            background: #1a1a1a;
            border-radius: 6px;
            border: 1px solid #2a2a2a;
        }
        .strength-icon { color: #808080; font-weight: bold; margin-top: 2px; }
        .strength-item p { color: #d0d0d0; font-size: 13px; font-weight: 500; }
        @media (max-width: 768px) {
            .header { flex-direction: column; align-items: center; text-align: center; padding: 30px 20px; }
            .header-content h1 { font-size: 32px; }
            .contact-info, .skills-grid, .strengths-list { grid-template-columns: 1fr; }
            .content { padding: 25px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="resume-wrapper">
            <div class="header">
                <div class="header-content">
                    <h1>${PROFILE.name}</h1>
                    <p class="title">${PROFILE.title}</p>
                    <div class="contact-info">
                        <div class="contact-item"><span>📍</span><span>${PROFILE.location}</span></div>
                        <div class="contact-item"><span>✉</span><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></div>
                        <div class="contact-item"><span>⛆</span><a href="${PROFILE.github}" target="_blank">${PROFILE.githubHandle}</a></div>
                        <div class="contact-item"><span>🔗</span><a href="${PROFILE.linkedin}" target="_blank">LinkedIn</a></div>
                    </div>
                </div>
            </div>
            <div class="content">
                <section class="section">
                    <h2 class="section-title">Professional Summary</h2>
                    <div class="summary-text">${SUMMARY}</div>
                </section>

                <section class="section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-grid">
                        <div class="skill-category">
                            <h3>Currently Using</h3>
                            <div class="skill-tags">${skillTags(SKILLS_KNOWN)}</div>
                        </div>
                        <div class="skill-category">
                            <h3>Currently Learning</h3>
                            <div class="skill-tags">${skillTags(SKILLS_LEARNING, true)}</div>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">Experience</h2>
                    <div class="project">
                        <h3>Cloud &amp; DevOps Intern — Akumen</h3>
                        ${experienceBlocks}
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">Projects</h2>
                    <div class="section-content">${projectBlocks}</div>
                </section>

                <section class="section">
                    <h2 class="section-title">Education</h2>
                    <div class="education-item">
                        <h3>${EDUCATION.degree}</h3>
                        <p>${EDUCATION.college}</p>
                        <p>${EDUCATION.university}</p>
                        <p>${EDUCATION.years}</p>
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

  // DOWNLOAD FUNCTION — short countdown, then builds and downloads the resume
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
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10">
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        aria-label="Go back"
        className="
          fixed top-5 left-5 z-50
          flex items-center gap-2
          px-4 py-2 rounded-full
          border border-white/15 bg-white/8
          backdrop-blur-xl
          hover:bg-white/15 hover:border-white/30
          transition-all duration-300
          shadow-lg
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div
            className="
              w-[200px] sm:w-[280px] md:w-[320px] aspect-square
              rounded-2xl border border-white/15
              overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              hover:border-white/25
              transition-all duration-300
            "
          >
            {showInitials ? (
              <div className="flex h-full w-full items-center justify-center bg-white/5">
                <span className="text-5xl font-bold tracking-tight text-white/70">
                  {initials}
                </span>
              </div>
            ) : (
              <img
                src={PROFILE_IMAGE ?? ""}
                alt={PROFILE.name}
                className="h-full w-full object-contain bg-black"
                onError={() => setImgFailed(true)}
              />
            )}
          </div>

          {/* DIVIDER LINE */}
          <div
            className="
              mt-6 h-[1px]
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              w-[90vw] sm:w-[400px] md:w-[500px]
            "
          />
        </motion.div>

        {/* GLASS BOX CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative w-full max-w-4xl
            h-[500px] sm:h-[550px] md:h-[600px]
            rounded-3xl border border-white/10 bg-white/5
            backdrop-blur-3xl overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
          "
        >
          {/* GLASS LIGHT EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* HEADER SECTION */}
          <div
            className="
              relative z-20 flex items-center justify-center
              px-6 py-6 sm:py-8
              border-b border-white/10 bg-black/30 backdrop-blur-2xl
            "
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </h1>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div
            className="
              relative z-10 h-[calc(100%-80px)]
              overflow-y-auto px-6 sm:px-10 md:px-12 py-8
              scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >
            <div className="text-white/70 text-sm sm:text-base leading-8 tracking-wide space-y-6">
              <p>
                Hi, I'm <strong>{PROFILE.name}</strong>, an{" "}
                {PROFILE.title.toLowerCase()} based in {PROFILE.location}. I
                recently completed my B.Tech in Computer Science and am
                currently working as a {PROFILE.internship.split(" @ ")[0]}{" "}
                at <strong>Akumen</strong>.
              </p>

              <p>
                I'm comfortable in the Linux terminal, write Python
                regularly, and manage my code through GitHub. Right now I'm
                deepening my DevOps skill set — working through{" "}
                <strong>
                  {SKILLS_LEARNING.slice(0, -1).join(", ")}, and{" "}
                  {SKILLS_LEARNING[SKILLS_LEARNING.length - 1]}
                </strong>{" "}
                — by pairing hands-on practice with continuous learning.
              </p>

              <p>
                I enjoy automating tasks, solving infrastructure problems,
                and understanding how modern cloud platforms and DevOps
                tools work together to build reliable, scalable systems.
              </p>

              <p>
                My goal is to grow into a dependable Cloud &amp; DevOps
                Engineer, contribute to real infrastructure projects, and
                keep learning through practical, hands-on experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* DOWNLOAD RESUME */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="
              group relative overflow-hidden
              flex items-center justify-center gap-3
              px-8 sm:px-10 py-3 sm:py-4 rounded-2xl
              border border-white/15 bg-white/8
              backdrop-blur-xl
              hover:bg-white/15 hover:border-white/30
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300
              shadow-[0_10px_40px_rgba(0,0,0,0.4)]
              hover:shadow-[0_15px_50px_rgba(255,255,255,0.08)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative z-10 flex items-center gap-3">
              <Download
                size={20}
                className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300"
              />
              <span className="font-semibold tracking-wide">
                {downloading ? `Downloading in ${countdown}s` : "Download Resume"}
              </span>
            </div>
          </button>

          {/* GITHUB */}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              px-6 py-3 rounded-2xl
              border border-white/15 bg-white/8
              backdrop-blur-xl
              hover:bg-white/15 hover:border-white/30
              transition-all duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
            "
          >
            <Github size={18} />
            <span className="font-medium">GitHub</span>
          </a>

          {/* LINKEDIN */}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              px-6 py-3 rounded-2xl
              border border-white/15 bg-white/8
              backdrop-blur-xl
              hover:bg-white/15 hover:border-white/30
              transition-all duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
            "
          >
            <Linkedin size={18} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
