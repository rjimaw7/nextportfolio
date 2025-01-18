"use client";

import Hero from "./helpers/Hero/Hero";
import Projects from "./helpers/Projects/Projects";
import Contact from "./helpers/Contact/Contact";
import Footer from "./helpers/Footer/Footer";
import Why from "./helpers/Why/why";
import Flowchart from "./helpers/Flowchart/flowchart";
import TechStack from "./helpers/TechStack/techstack";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Flowchart />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
