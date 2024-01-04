"use client";

import { useRef } from "react";
import Hero from "./helpers/Hero";
import Projects from "./helpers/Projects";

export default function Home() {
  const projectsRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-black">
    <main className="h-screen">
      <Hero projectsRef={projectsRef} workRef={workRef} />
      <Projects projectsRef={projectsRef} />
    </main>
  );
}
