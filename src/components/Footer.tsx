import { motion } from "motion/react";
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-[oklch(0.10_0.03_265)] py-20 px-6 text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full">
            <img 
              src="https://res.cloudinary.com/datom4le5/image/upload/v1781520042/tech565/208-2089543_logo-rccg-yaya-logo_xxlccg.jpg" 
              alt="RCCG YAYA Logo" 
              className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/40"
            />
          </div>
          <p className="mt-6 font-display text-3xl text-ivory sm:text-4xl">Trailblazer Youth Choir</p>
          <p className="mt-3 font-display text-base italic text-gradient-gold">
            Songs that have carried faith across generations.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <Badge label="RCCG" />
            <Badge label="Youth" />
            <Badge label="Emmanuel Sanctuary" />
          </div>
          <div className="flex items-center gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 text-ivory/70 transition hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 h-px w-full max-w-md bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <p className="mt-8 text-center text-xs text-ivory/40">
          © {new Date().getFullYear()} RCCG Emmanuel Sanctuary Trailblazer Youth Choir. Hymnody Sunday 2026.
        </p>
      </div>
    </footer>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-ivory/70">
      <span className="h-1 w-1 rounded-full bg-gold" />
      {label}
    </span>
  );
}
