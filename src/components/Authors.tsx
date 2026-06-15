import { motion } from "motion/react";
import { hymns } from "@/data/hymns";

export function Authors() {
  return (
    <section id="authors" className="relative overflow-hidden bg-aurora py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">The Hymn Writers</p>
          <h2 className="font-display text-4xl text-foreground sm:text-6xl">
            Voices of <span className="italic text-gradient-gold">faith past.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {hymns.map((h, i) => (
            <motion.figure
              key={h.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={h.authorImage}
                  alt={h.author}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute inset-0 bg-gold/0 mix-blend-overlay transition group-hover:bg-gold/15" />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{h.year}</p>
                <p className="mt-1 font-display text-lg leading-tight text-ivory">{h.author}</p>
                <p className="mt-1 line-clamp-1 text-xs text-ivory/60">{h.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
