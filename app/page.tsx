"use client";

import { useRef } from "react";
import Hero from "./helpers/Hero";
import Projects from "./helpers/Projects";
import Work from "./helpers/Work";
import Contact from "./helpers/Contact";
import Footer from "./helpers/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
