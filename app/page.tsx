"use client";

import Hero from "./helpers/Hero/Hero";
import Projects from "./helpers/Projects/Projects";
import Work from "./helpers/Work/Work";
import Contact from "./helpers/Contact/Contact";
import Footer from "./helpers/Footer/Footer";

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
