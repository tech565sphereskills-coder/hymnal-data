import { useMemo } from "react";
import { motion } from "motion/react";

/** Floating dust particles + light rays — pure SVG, GPU-friendly. */
export function ParticleField({ count = 40, className = "" }: { count?: number; className?: string }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.5 + 0.15,
      })),
    [count]
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function FloatingNotes({ count = 8 }: { count?: number }) {
  const notes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 14 + 18,
        size: Math.random() * 14 + 14,
        rotate: Math.random() * 40 - 20,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {notes.map((n) => (
        <motion.div
          key={n.id}
          className="absolute text-gold/40"
          style={{ left: `${n.x}%`, bottom: -40, fontSize: n.size }}
          initial={{ y: 0, opacity: 0, rotate: n.rotate }}
          animate={{ y: -800, opacity: [0, 0.8, 0], rotate: n.rotate + 30 }}
          transition={{ duration: n.duration, delay: n.delay, repeat: Infinity, ease: "linear" }}
        >
          {Math.random() > 0.5 ? "♪" : "♫"}
        </motion.div>
      ))}
    </div>
  );
}

export function LightRays() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -top-1/3 left-1/2 h-[140%] w-[60%] -translate-x-1/2 opacity-40 animate-drift"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 0%, transparent 0deg, oklch(0.82 0.14 85 / 0.5) 20deg, transparent 60deg, oklch(0.82 0.14 85 / 0.25) 110deg, transparent 180deg)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
