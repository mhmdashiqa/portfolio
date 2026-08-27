import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/IMAGES/ashiq.png";
import { ShieldCheck, Cpu } from "lucide-react";

interface ProfileCardProps {
  show: boolean;
}

export default function ProfileCard({ show }: ProfileCardProps) {
  const [landed, setLanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!show) setLanded(false);
  }, [show]);

  return (
    <motion.div
      initial={{ y: -400, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: -400, opacity: 0 }}
      onAnimationComplete={() => {
        if (show) setLanded(true);
      }}
      transition={{
        type: "spring",
        stiffness: 85,
        damping: 14,
      }}
      className="relative z-20"
    >
      {/* Hanging lanyard structure */}
      <motion.div
        animate={
          landed
            ? { rotate: [-3, 3, -3] }
            : { rotate: -10 }
        }
        transition={
          landed
            ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.3 }
        }
        style={{ transformOrigin: "top center" }}
        className="flex flex-col items-center"
      >
        {/* Lanyard Ring/Clip */}
        <div className="w-8 h-4 rounded-t-lg bg-white border border-gray-300 shadow-lg shadow-white/10 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-black border border-gray-400" />
        </div>

        {/* Rope */}
        <div className="w-[3px] h-20 bg-gradient-to-b from-white/90 via-gray-400/50 to-white/90 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

        {/* ID Pass Card */}
        <div className="w-[280px] sm:w-[310px] rounded-3xl overflow-hidden bg-black/90 border border-white/20 backdrop-blur-2xl shadow-[0_20px_80px_rgba(255,255,255,0.05)] relative group hover:border-white/50 transition-colors">
          
          {/* Card Top Banner */}
          <div className="bg-white/10 px-5 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="text-[10px] font-mono tracking-widest text-gray-200 uppercase font-semibold">
                AKUMEN · INTERN PASS
              </span>
            </div>
            <Cpu className="w-4 h-4 text-gray-400" />
          </div>

          {/* Photo Container */}
          <div className="relative h-[300px] overflow-hidden bg-black flex items-center justify-center">
            {!imgError ? (
              <img
                src={profile}
                alt="Mohammed Ashiq A"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white text-2xl font-bold font-mono">
                  MA
                </div>
                <span className="text-xs text-gray-400 font-mono">Mohammed Ashiq A</span>
              </div>
            )}
            
            {/* Holographic overlay shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* Info Details */}
          <div className="p-5 text-center space-y-2 bg-black/90">
            <h3 className="text-white text-lg font-bold tracking-wider font-display">
              MOHAMMED ASHIQ A
            </h3>
            <p className="text-gray-300 text-[11px] tracking-[0.2em] uppercase font-mono font-semibold">
              Cloud & DevOps Engineer
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span>ID: DEV-2026-MA</span>
              <span className="text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
