import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, BookOpen, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { LightRays, ParticleField, FloatingNotes } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const title = "Trailblazer Youth Choir";

  return (
    <section id="top" ref={ref} className="relative h-[100dvh] min-h-[680px] w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src="https://res.cloudinary.com/datom4le5/image/upload/f_auto,q_auto,w_1920/v1781522374/tech565/WhatsApp_Image_2026-06-15_at_12.19.00_x9bozj.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.03_265)]/40 via-[oklch(0.10_0.03_265)]/55 to-background" />
      </motion.div>

      <LightRays />
      <ParticleField count={50} />
      <FloatingNotes count={6} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-background/30 px-4 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          <span className="text-[10px]  text-gradient-gold uppercase tracking-[0.35em] text-ivory/80">
            RCCG Emmanuel Sanctuary · Hymnody Sunday 2026
          </span>
        </motion.div>

        <h1 className="font-display text-5xl leading-[0.95] text-ivory sm:text-7xl md:text-[6rem]">
          {title.split(" ").map((w, i) => (
            <motion.span
              key={i}
              className="mr-3 inline-block"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.9, ease: "easeOut" }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mx-auto my-6 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-display text-2xl italic text-gradient-gold sm:text-3xl"
        >
          Hymnody Sunday
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="mt-6 max-w-xl text-balance text-base text-ivory/75 sm:text-lg"
        >
          Songs that have carried faith across generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#hymns"
            className="group inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-medium text-[oklch(0.16_0.035_265)] transition-transform hover:-translate-y-0.5 ring-gold"
          >
            <BookOpen className="h-4 w-4" />
            Explore the Hymns
          </a>
          <a
            href="#choir"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/30 bg-ivory/5 px-6 py-3 text-sm text-ivory backdrop-blur transition hover:border-gold hover:text-gold"
          >
            <Users className="h-4 w-4" />
            Meet The Choir
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/60"
      >
        {/* <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div> */}
      </motion.div>
    </section>
  );
}
