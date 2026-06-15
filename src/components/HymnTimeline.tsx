import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { hymns, type Hymn } from "@/data/hymns";
import { Music2 } from "lucide-react";
import { HymnModal } from "./HymnModal";
import { useIsMobile } from "@/hooks/use-mobile";

export function HymnTimeline() {
  const [active, setActive] = useState<Hymn | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const third = Math.ceil(hymns.length / 3);
  const col1 = hymns.slice(0, third);
  const col2 = hymns.slice(third, third * 2);
  const col3 = hymns.slice(third * 2);

  return (
    <section id="hymns" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">The Hymn Timeline</p>
          <h2 className="font-display text-4xl text-foreground sm:text-6xl">
            Five hymns. <span className="text-gradient-gold italic">One eternal song.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
            Each hymn is a doorway into the heart of the believer who wrote it — and the God who carried them through.
          </p>
        </motion.div>

        {/* Parallax Grid Scroll */}
        <div ref={gridRef} className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
          <div className="grid gap-6 md:gap-8">
            {col1.map((h) => (
              <ParallaxCard key={h.id} hymn={h} translate={translateFirst} isMobile={isMobile} onOpen={() => setActive(h)} />
            ))}
          </div>
          <div className="grid gap-6 md:gap-8">
            {col2.map((h) => (
              <ParallaxCard key={h.id} hymn={h} translate={translateSecond} isMobile={isMobile} onOpen={() => setActive(h)} />
            ))}
          </div>
          <div className="grid gap-6 md:gap-8">
            {col3.map((h) => (
              <ParallaxCard key={h.id} hymn={h} translate={translateThird} isMobile={isMobile} onOpen={() => setActive(h)} />
            ))}
          </div>
        </div>
      </div>

      <HymnModal hymn={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ParallaxCard({
  hymn,
  translate,
  isMobile,
  onOpen,
}: {
  hymn: Hymn;
  translate: ReturnType<typeof useTransform<number, number>>;
  isMobile: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div style={{ y: isMobile ? 0 : translate }} className="group relative">
      <div className="glass relative overflow-hidden rounded-3xl border border-border/60 transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-[0_20px_60px_-20px_oklch(0.82_0.14_85/0.35)]">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={hymn.authorImage}
            alt={hymn.author}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-background/70 font-display text-sm text-gold backdrop-blur">
            {hymn.number}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block rounded-full border border-gold/30 bg-background/40 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-gold backdrop-blur">
              {hymn.year} · {hymn.theme}
            </span>
            <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">{hymn.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">by {hymn.author}</p>
          </div>
        </div>

        <div className="p-6">
          <button
            onClick={onOpen}
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold/90 to-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-background transition hover:brightness-110"
          >
            <Music2 className="h-3.5 w-3.5" />
            Story &amp; Hymn
          </button>
        </div>
      </div>
    </motion.div>
  );
}
