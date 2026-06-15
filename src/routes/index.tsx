import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StoryIntro } from "@/components/StoryIntro";
import { HymnTimeline } from "@/components/HymnTimeline";
import { Authors } from "@/components/Authors";
import { Choir } from "@/components/Choir";
import { Countdown } from "@/components/Countdown";
import { Quotes } from "@/components/Quotes";
import { Footer } from "@/components/Footer";
import { PrayerButton } from "@/components/PrayerButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trailblazer Youth Choir — Hymnody Sunday 2026" },
      {
        name: "description",
        content:
          "RCCG Emmanuel Sanctuary Trailblazer Youth Choir presents Hymnody Sunday 2026 — a cinematic worship experience celebrating the songs that have carried faith across generations.",
      },
      { property: "og:title", content: "Trailblazer Youth Choir — Hymnody Sunday 2026" },
      {
        property: "og:description",
        content: "Every hymn has a story. Step into a digital worship museum.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  return (
    <main className="relative overflow-x-hidden">
      <AnimatePresence>{!loaded && <Loader onDone={() => setLoaded(true)} />}</AnimatePresence>
      <Nav />
      <Hero />
      <StoryIntro />
      <HymnTimeline />
      <Authors />
      <Choir />
      <Quotes />
      <Countdown />
      <Footer />
      <PrayerButton />
    </main>
  );
}
