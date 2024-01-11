"use client";

import React, { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import HeroContent from "./HeroContent";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <SectionReveal
      id="hero"
      refElement={heroRef}
      className="mx-auto container flex max-w-[980px] flex-col items-center justify-center gap-1 min-h-screen"
    >
      <HeroContent />
    </SectionReveal>
  );
};

export default Hero;
