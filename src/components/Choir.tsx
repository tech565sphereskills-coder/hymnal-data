import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import choir1 from "@/assets/choir-1.jpg";
import choir2 from "@/assets/choir-2.jpg";
import choir3 from "@/assets/choir-3.jpg";
import hymnal from "@/assets/hymnal.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

export function Choir() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const col1 = [
    { src: "https://res.cloudinary.com/datom4le5/image/upload/f_auto,q_auto,w_600/v1781522626/tech565/instru_dcqb31.jpg", alt: "Choir in worship" },
    { src: "https://res.cloudinary.com/datom4le5/image/upload/f_auto,q_auto,w_600/v1781522658/tech565/WhatsApp_Image_2026-06-15_at_12.21.59fsd_igomth.jpg", alt: "Choir praise" },
    { src: hymnal, alt: "Open hymnal" },
  ];

  const col2 = [
    { src: "https://res.cloudinary.com/datom4le5/image/upload/f_auto,q_auto,w_600/v1781522627/tech565/WhatsApp_Image_2026-06-15_at_12.21.59_blnxut.jpg", alt: "Choir member singing" },
    { src: "https://res.cloudinary.com/datom4le5/image/upload/f_auto,q_auto,w_600/v1781522374/tech565/WhatsApp_Image_2026-06-15_at_12.19.00_x9bozj.jpg", alt: "Choir rehearsal" },
  ];

  const col3 = [
    { src: "https://res.cloudinary.com/datom4le5/image/upload/f_auto,q_auto,w_600/v1781522625/tech565/faf_luvupi.jpg", alt: "Director leading" },
    { src: "https://res.cloudinary.com/datom4le5/image/upload/f_auto,q_auto,w_600/v1781523851/tech565/WhatsApp_Image_2026-06-15_at_12.21.59fsf_biyy0a.jpg", alt: "Choir voices" },
  ];

  return (
    <section id="choir" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">The Ministry</p>
          <h2 className="font-display text-4xl text-foreground sm:text-6xl">
            The voices behind <span className="italic text-gradient-gold">the worship.</span>
          </h2>
          <p className="mt-6 text-balance text-muted-foreground">
           We are the Trailblazer Youth Choir of RCCG Emmanuel Sanctuary—a generation called, chosen, and consecrated to proclaim God's glory through music. More than a choir, we are vessels of worship, carrying the timeless songs of faith into a new era with passion, excellence, and purpose.
           <br /><br />

Our ministry is built on devotion, discipline, and reverence. Through every rehearsal, every harmony, and every song, we seek to create an atmosphere where hearts are transformed, lives are touched, and God alone is exalted. We are not merely singers; we are worshippers, united in one voice to declare His greatness to our generation and beyond.

          </p>
        </motion.div>

        {/* Parallax Grid Scroll */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
          <motion.div style={{ y: isMobile ? 0 : y1 }} className="grid gap-6 md:gap-8">
            {col1.map((item, idx) => (
              <Tile key={idx} src={item.src} alt={item.alt} />
            ))}
          </motion.div>
          <motion.div style={{ y: isMobile ? 0 : y2 }} className="grid gap-6 md:gap-8 md:mt-20">
            {col2.map((item, idx) => (
              <Tile key={idx} src={item.src} alt={item.alt} />
            ))}
          </motion.div>
          <motion.div style={{ y: isMobile ? 0 : y3 }} className="grid gap-6 md:gap-8">
            {col3.map((item, idx) => (
              <Tile key={idx} src={item.src} alt={item.alt} />
            ))}
          </motion.div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-32 max-w-3xl text-center font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl"
        >
          "We do not sing to be heard. We sing because Heaven has already heard, and we are but echoes."
          <footer className="mt-4 text-sm not-italic uppercase tracking-[0.3em] text-gold">— The Choir Director</footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

function Tile({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:border-gold/40 hover:shadow-[0_20px_50px_-20px_oklch(0.82_0.14_85/0.25)]"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full object-cover aspect-[4/5] transition-transform duration-[1500ms] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100 flex items-end p-6">
        <p className="font-display text-lg text-ivory tracking-wide transform translate-y-2 transition duration-500 group-hover:translate-y-0">
          {alt}
        </p>
      </div>
    </motion.figure>
  );
}
