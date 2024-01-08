"use client";

import { useRef } from "react";
import Hero from "./helpers/Hero";
import Projects from "./helpers/Projects";
import Work from "./helpers/Work";
import Contact from "./helpers/Contact";
import Footer from "./helpers/Footer";

export default function Home() {
  const projectsRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Hero projectsRef={projectsRef} workRef={workRef} />
      <Projects projectsRef={projectsRef} />
      <Work workRef={workRef} />
      <Contact />
      <Footer />
    </>
  );
}
