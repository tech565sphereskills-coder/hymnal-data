import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const line1 = "Before every hymn became a song,".split(" ");
const line2 = "it was a story.".split(" ");

export function StoryIntro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [12, 0, 0, 12]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  return (
    <section id="story" ref={ref} className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-aurora px-6 py-32">
      <motion.div
        style={{
          opacity,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="font-display text-3xl leading-tight text-foreground sm:text-5xl md:text-6xl">
          <p className="mb-6">
            {line1.map((w, i) => (
              <motion.span
                key={i}
                className="mr-2 inline-block"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
              >
                {w}
              </motion.span>
            ))}
          </p>
          <p>
            {line2.map((w, i) => (
              <motion.span
                key={i}
                className="mr-2 inline-block text-gradient-gold italic"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.9 }}
              >
                {w}
              </motion.span>
            ))}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.2 }}
          className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="mt-8 text-sm uppercase tracking-[0.4em] text-muted-foreground"
        >
          Five hymns · five centuries of faith
        </motion.p>
      </motion.div>
    </section>
  );
}
