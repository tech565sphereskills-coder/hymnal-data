import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const TARGET = new Date("2026-06-21T09:00:00").getTime();

function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(d / 86_400_000),
    hours: Math.floor((d / 3_600_000) % 24),
    minutes: Math.floor((d / 60_000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="sunday" className="relative overflow-hidden bg-aurora py-32 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold"
        >
          The Gathering
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl text-foreground sm:text-6xl"
        >
          Hymnody Sunday <span className="italic text-gradient-gold">begins in</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-4 gap-3 sm:gap-6">
          <Flip value={t.days} label="Days" />
          <Flip value={t.hours} label="Hours" />
          <Flip value={t.minutes} label="Minutes" />
          <Flip value={t.seconds} label="Seconds" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-12 text-sm uppercase tracking-[0.35em] text-muted-foreground"
        >
          RCCG Emmanuel Sanctuary · 9:00 AM
        </motion.p>
      </div>
    </section>
  );
}

function Flip({ value, label }: { value: number; label: string }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="glass relative overflow-hidden rounded-2xl px-3 py-6 sm:py-10">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={padded}
          initial={{ y: -30, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: 30, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-display text-5xl text-gradient-gold sm:text-7xl"
        >
          {padded}
        </motion.div>
      </AnimatePresence>
      <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{label}</div>
      <span className="absolute inset-x-6 top-1/2 h-px bg-border" />
    </div>
  );
}
