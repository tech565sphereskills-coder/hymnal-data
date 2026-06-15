import { motion } from "motion/react";
import { Quote } from "lucide-react";

const quotes = [
  { q: "He who sings prays twice.", a: "St. Augustine" },
  { q: "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.", a: "Kahlil Gibran" },
  { q: "A hymn is the praise of God with song; a song is the exultation of the mind dwelling on eternal things.", a: "Thomas Aquinas" },
  { q: "Worship is the submission of all our nature to God.", a: "William Temple" },
  { q: "Where words fail, music speaks.", a: "Hans Christian Andersen" },
  { q: "Let the word of Christ dwell in you richly… singing with grace in your hearts to the Lord.", a: "Colossians 3:16" },
];

export function Quotes() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">Reflections on Worship</p>
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">
            A <span className="italic text-gradient-gold">cloud of witnesses.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((qu, i) => (
            <motion.figure
              key={qu.q}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 transition hover:border-gold/40 hover:-translate-y-1"
            >
              <Quote className="mb-4 h-5 w-5 text-gold" />
              <blockquote className="font-display text-lg leading-snug text-foreground sm:text-xl">
                "{qu.q}"
              </blockquote>
              <figcaption className="mt-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                — {qu.a}
              </figcaption>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gold/5 blur-3xl transition group-hover:bg-gold/15" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
