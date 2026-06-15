import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 10;
      });
    }, 40);
    const done = setTimeout(() => onDone(), 500);
    return () => {
      clearInterval(interval);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[oklch(0.06_0.02_265)] text-ivory"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 -m-6 rounded-full bg-gold/20 blur-3xl animate-pulse" />
        <img
          src="https://res.cloudinary.com/datom4le5/image/upload/v1781520042/tech565/208-2089543_logo-rccg-yaya-logo_xxlccg.jpg"
          alt="RCCG YAYA"
          className="relative h-32 w-32 rounded-full object-cover ring-2 ring-gold/40 sm:h-40 sm:w-40"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 font-display text-xl tracking-wide text-ivory sm:text-2xl"
      >
        Trailblazer Youth Choir
      </motion.p>

      <div className="mt-8 h-px w-56 overflow-hidden bg-ivory/10 sm:w-72">
        <motion.div
          className="h-full bg-gradient-to-r from-gold/60 via-gold to-gold/60"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-ivory/50">Hymnody Sunday · {progress}%</div>
    </motion.div>
  );
}
