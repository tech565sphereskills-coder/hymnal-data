import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Hymn } from "@/data/hymns";
import { X, Heart, Share2, Clock } from "lucide-react";

type Tab = "story" | "hymn";

export function HymnModal({ hymn, onClose }: { hymn: Hymn | null; onClose: () => void }) {
  const [tab, setTab] = useState<Tab>("story");
  const [fav, setFav] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  useEffect(() => {
    if (hymn) {
      setTab("story");
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [hymn, onClose]);

  if (!hymn) return null;

  const tabs: { id: Tab; label: string; show?: boolean }[] = [
    { id: "story", label: "Story" },
    { id: "hymn", label: "Hymn" },
  ];

  const share = async () => {
    const url = window.location.href + "#" + hymn.id;
    try {
      if (navigator.share) await navigator.share({ title: hymn.title, text: `${hymn.title} — ${hymn.author}`, url });
      else await navigator.clipboard.writeText(url);
    } catch {}
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Reading progress */}
          <motion.div
            className="absolute left-0 right-0 top-0 z-10 h-0.5 origin-left bg-gold"
            style={{ scaleX: scrollYProgress }}
          />

          {/* Left: portrait + meta */}
          <div className="hidden w-2/5 flex-col bg-aurora p-8 md:flex">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <img src={hymn.authorImage} alt={hymn.author} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{hymn.year}</p>
                <p className="font-display text-xl text-ivory">{hymn.author}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <Row label="Theme" value={hymn.theme} />
              {hymn.tune && <Row label="Tune" value={hymn.tune} />}
              <Row label="Read time" value="≈ 3 min" icon={<Clock className="h-3 w-3" />} />
            </div>
          </div>

          {/* Right: content */}
          <div ref={scrollRef} className="relative flex-1 overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/90 px-6 py-4 backdrop-blur">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Hymn {hymn.number}</p>
                <h2 className="truncate font-display text-2xl text-foreground">{hymn.title}</h2>
              </div>
              <div className="flex items-center gap-1">
                <IconButton onClick={() => setFav((f) => !f)} active={fav} label="Favorite">
                  <Heart className={`h-4 w-4 ${fav ? "fill-gold text-gold" : ""}`} />
                </IconButton>
                <IconButton onClick={share} label="Share">
                  <Share2 className="h-4 w-4" />
                </IconButton>
                <IconButton onClick={onClose} label="Close">
                  <X className="h-4 w-4" />
                </IconButton>
              </div>
            </div>

            <div className="flex gap-1 border-b border-border px-6">
              {tabs.filter((t) => t.show !== false).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative px-4 py-3 text-sm transition ${
                    tab === t.id ? "text-gold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                  {tab === t.id && (
                    <motion.span layoutId="tab-underline" className="absolute inset-x-2 bottom-0 h-px bg-gold" />
                  )}
                </button>
              ))}
            </div>

            <div className="px-6 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tab === "story" && (
                    <div className="space-y-6">
                      <p className="font-display text-xl italic text-gradient-gold">"{hymn.message}"</p>
                      <p className="leading-relaxed text-foreground/85 whitespace-pre-line">{hymn.history}</p>
                      <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Historical Marker</p>
                        <p className="mt-2 text-sm text-foreground/85">
                          Composed in <strong className="text-gold">{hymn.year}</strong> by{" "}
                          <strong className="text-gold">{hymn.author}</strong>.
                          {hymn.tune && <> Music set by <strong className="text-gold">{hymn.tune}</strong>.</>}
                        </p>
                      </div>
                    </div>
                  )}
                  {tab === "hymn" && (
                    <div className="space-y-6">
                      {hymn.lyrics ? (
                        <div className="rounded-xl border border-gold/15 bg-gold/5 p-6">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Lyrics</p>
                          <div className="font-display text-xl leading-relaxed text-foreground whitespace-pre-line">
                            {hymn.lyrics}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Hymn Preview</p>
                          <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                            "{hymn.incipit}"
                          </p>
                        </div>
                      )}
                      {hymn.yorubaLyrics && (
                        <div className="rounded-xl border border-gold/15 bg-gold/5 p-6">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Yorùbá Translation</p>
                          <div className="font-display text-lg italic leading-relaxed text-foreground/90 whitespace-pre-line">
                            {hymn.yorubaLyrics}
                          </div>
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground">
                        The full hymn will be sung in worship by the Trailblazer Youth Choir on Hymnody Sunday.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Row({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-2">
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <span className="inline-flex items-center gap-1.5 text-foreground/90">
        {icon}
        {value}
      </span>
    </div>
  );
}

function IconButton({ children, onClick, label, active }: { children: React.ReactNode; onClick: () => void; label: string; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`grid h-9 w-9 place-items-center rounded-full border transition ${
        active ? "border-gold text-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"
      }`}
    >
      {children}
    </button>
  );
}
