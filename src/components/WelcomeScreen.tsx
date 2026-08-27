import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal } from "lucide-react";

const NAME = "Mohammed Ashiq A";
const TITLE = "Aspiring Cloud & DevOps Engineer";
const DESCRIPTION =
  "Passionate about Linux System Administration, Cloud Infrastructure, Containerization & Automation. Building scalable DevOps practices.";
const SKILLS = ["Linux", "Docker", "Nginx", "Prometheus", "Python", "Bash"];
const LOADING_LABEL = "Initializing DevOps Portfolio…";
const COPYRIGHT = `© ${new Date().getFullYear()} Mohammed Ashiq A`;

const LOADING_DURATION_MS = 2200;
const EXIT_DELAY_MS = 300;

interface WelcomeScreenProps {
  onComplete?: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  const orbX = useTransform(springX, (v) => v * 20);
  const orbY = useTransform(springY, (v) => v * 20);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    pointerX.set((e.clientX / innerWidth - 0.5) * 2);
    pointerY.set((e.clientY / innerHeight - 0.5) * 2);
  };

  useEffect(() => {
    const tick = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const next = Math.min((elapsed / LOADING_DURATION_MS) * 100, 100);
      setProgress(next);

      if (next < 100) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setVisible(false), EXIT_DELAY_MS);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          onPointerMove={handlePointerMove}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black px-6 text-white"
        >
          {/* Glowing Parallax Orbs */}
          <motion.div
            style={{ x: orbX, y: orbY }}
            className="pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-white/10 blur-[120px] top-[15%] left-[20%]"
          />
          <motion.div
            style={{ x: orbX, y: orbY }}
            className="pointer-events-none absolute w-[400px] h-[400px] rounded-full bg-white/10 blur-[120px] bottom-[20%] right-[20%]"
          />

          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
            {/* Terminal Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-mono text-white"
            >
              <Terminal className="w-4 h-4 text-white" />
              <span className="uppercase tracking-widest font-semibold">DevOps Workspace</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-display"
            >
              {NAME}
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-3 text-lg font-semibold text-gray-300 sm:text-xl font-mono"
            >
              {TITLE}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base font-sans"
            >
              {DESCRIPTION}
            </motion.p>

            {/* Tech Badges */}
            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
            >
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-mono font-medium tracking-wide text-gray-200">
                    {skill}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex w-full max-w-xs flex-col items-center"
            >
              <div className="mb-2 flex w-full items-center justify-between text-xs font-mono">
                <span className="uppercase tracking-widest text-gray-400">{LOADING_LABEL}</span>
                <span className="text-white font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gray-400 via-white to-gray-200 shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-[width] duration-150 linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-6 text-xs font-mono tracking-widest text-gray-500"
          >
            {COPYRIGHT}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
