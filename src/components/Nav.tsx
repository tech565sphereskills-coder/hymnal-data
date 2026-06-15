import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#hymns", label: "Hymns" },
  { href: "#authors", label: "Authors" },
  { href: "#choir", label: "Choir" },
  { href: "#sunday", label: "Sunday" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
        style={{ scaleX }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all ${
            scrolled ? "rounded-full glass mx-4 sm:mx-auto" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 py-2">
            <img 
              src="https://res.cloudinary.com/datom4le5/image/upload/f_auto,q_auto,w_100/v1781520042/tech565/208-2089543_logo-rccg-yaya-logo_xxlccg.jpg" 
              alt="RCCG YAYA Logo" 
              className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/40"
            />
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-base text-foreground">Trailblazer</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold">Youth Choir</span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/70 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition hover:border-gold hover:text-gold"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition hover:border-gold hover:text-gold md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-20 z-30 mx-4 rounded-2xl border border-border/80 bg-background/95 p-6 shadow-2xl backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-gold py-1"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
