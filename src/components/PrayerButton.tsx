import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, X } from "lucide-react";
import { toast } from "sonner";

export function PrayerButton() {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!request.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      setRequest("");
      toast.success("Your prayer is answered! 🙏", {
        description: "Your request was submitted successfully. The choir will lift your name in intercession.",
        duration: 5000,
        className: "border border-gold/40 bg-[oklch(0.10_0.03_265)] text-ivory rounded-2xl shadow-xl",
      });
    }, 1200);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        onClick={() => setOpen(true)}
        aria-label="Prayer request"
        className="fixed bottom-6 right-6 z-30 grid h-14 w-14 place-items-center rounded-full gradient-gold text-[oklch(0.16_0.035_265)] shadow-lg shadow-gold/30 transition hover:scale-105 animate-pulse-glow"
      >
        <Heart className="h-5 w-5" strokeWidth={2.5} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!submitting) setOpen(false);
            }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-gold/30 bg-card p-8 ring-gold"
            >
              <button
                onClick={() => setOpen(false)}
                disabled={submitting}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:border-gold hover:text-gold disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">A Prayer for You</p>
              <h3 className="mt-3 font-display text-2xl text-foreground">Send us your request</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                The Trailblazer Youth Choir will lift your name before the Lord during our Hymnody Sunday intercession.
              </p>
              <textarea
                placeholder="Type your prayer request…"
                rows={4}
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                disabled={submitting}
                className="mt-5 w-full rounded-xl border border-border bg-background/50 p-3 text-sm focus:border-gold focus:outline-none disabled:opacity-50"
              />
              <button
                onClick={handleSubmit}
                disabled={submitting || !request.trim()}
                className="mt-4 w-full rounded-full gradient-gold py-3 text-sm font-medium text-[oklch(0.16_0.035_265)] transition hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                {submitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[oklch(0.16_0.035_265)] border-t-transparent" />
                    Submitting in Faith...
                  </>
                ) : (
                  "Submit with Faith"
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
