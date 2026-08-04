import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Easing,
} from "framer-motion";

const NAME = "Mohammed Ashiq A";
const TITLE = "Aspiring Cloud & DevOps Engineer";
const DESCRIPTION =
  "Passionate about Linux, Cloud Computing, DevOps and Automation. Continuously building practical skills through real-world projects and hands-on learning.";
const SKILLS = ["Linux", "Cloud", "DevOps", "Python", "GitHub"];
const LOADING_LABEL = "Loading Portfolio…";
const COPYRIGHT = `© ${new Date().getFullYear()} Mohammed Ashiq A`;

const LOADING_DURATION_MS = 2600;
const EXIT_DELAY_MS = 400;
const EASE_OUT: Easing = [0.16, 1, 0.3, 1];

interface WelcomeScreenProps {
  onComplete?: () => void;
}

interface GlowOrbConfig {
  size: number;
  top: string;
  left: string;
  depth: number;
  duration: number;
}

const GLOW_ORBS: GlowOrbConfig[] = [
  { size: 420, top: "8%", left: "12%", depth: 18, duration: 14 },
  { size: 360, top: "58%", left: "72%", depth: 24, duration: 18 },
  { size: 280, top: "78%", left: "18%", depth: 14, duration: 16 },
];

function useParallax() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    pointerX.set((event.clientX / innerWidth - 0.5) * 2);
    pointerY.set((event.clientY / innerHeight - 0.5) * 2);
  };

  return { springX, springY, handlePointerMove };
}

function GlowOrb({
  config,
  springX,
  springY,
}: {
  config: GlowOrbConfig;
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
}) {
  const x = useTransform(springX, (value) => value * config.depth);
  const y = useTransform(springY, (value) => value * config.depth);

  return (
    <motion.div
      className="absolute rounded-full bg-white/10 blur-[110px]"
      style={{
        width: config.size,
        height: config.size,
        top: config.top,
        left: config.left,
        x,
        y,
      }}
      animate={{
        opacity: [0.15, 0.3, 0.15],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function SkillBadge({ label }: { label: string }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 14, scale: 0.94 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]"
    >
      <motion.span
        className="h-1.5 w-1.5 rounded-full bg-white/70"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-sm font-medium tracking-wide text-white/90">
        {label}
      </span>
    </motion.li>
  );
}

function LoadingBar({ progress }: { progress: number }) {
  return (
    <div className="w-full max-w-xs">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
          {LOADING_LABEL}
        </span>
        <span className="font-mono text-xs text-white/50">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-white/60 via-white to-white/60 shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>();

  const { springX, springY, handlePointerMove } = useParallax();

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

  const badgeListVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.9 },
    },
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          onPointerMove={handlePointerMove}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.02 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black px-6"
        >
          <div className="pointer-events-none absolute inset-0">
            {GLOW_ORBS.map((orb, index) => (
              <GlowOrb key={index} config={orb} springX={springX} springY={springY} />
            ))}
          </div>

          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE_OUT }}
              className="mt-4 text-lg font-medium text-white/70 sm:text-xl"
            >
              {TITLE}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE_OUT }}
              className="mt-5 max-w-md text-sm leading-relaxed text-white/50 sm:text-base"
            >
              {DESCRIPTION}
            </motion.p>

            <motion.ul
              variants={badgeListVariants}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              {SKILLS.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: EASE_OUT }}
              className="mt-12 flex w-full flex-col items-center"
            >
              <LoadingBar progress={progress} />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: EASE_OUT }}
            className="absolute bottom-6 text-xs tracking-wide text-white/35"
          >
            {COPYRIGHT}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
