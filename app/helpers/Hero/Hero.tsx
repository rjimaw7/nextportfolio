"use client";

import React, { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
// import HeroContent from "./HeroContent";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <SectionReveal
      id="hero"
      refElement={heroRef}
      className=""
      motionClassName="grid grid-cols-10 container mx-auto gap-12 md:gap-0 h-screen items-start justify-center"
    >
      <div className="h-full col-span-10 md:col-span-5 flex flex-col justify-center items-center md:items-start gap-6 mt-14 md:-mt-0 3xl:pb-48">
        <h1 className="text-center md:text-left text-5xl font-bold leading-tight tracking-tighter md:text-7xl lg:text-8xl w-full">
          Crafting Everyday <span className="text-primaryBlue">Progress</span>
        </h1>
        <span className="hidden md:block text-center md:text-left">
          Focused on meaningful steps that make a difference.
        </span>
        <div className="hidden w-full md:flex items-center gap-4">
          <Button
            className="h-9 md:h-11 px-4 py-2 border bg-primaryBlue text-white hover:bg-white hover:text-black hover:border-black"
            onClick={() => {
              scrollToSection("projects");
            }}
          >
            See My Work
          </Button>
          <Button
            className="h-9 md:h-11 px-4 py-2 border border-primaryBlue hover:bg-primaryBlue hover:text-white"
            variant="outline"
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            Connect
          </Button>
        </div>
      </div>
      <div className="col-span-10 md:col-span-5 h-[300px] p-6 md:h-full w-full">
        <div className="relative h-full md:h-3/4 -mt-20 md:mt-28">
          <Image
            src="/hero-logo1.svg"
            alt="hero-logo"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col md:hidden mt-4 gap-4">
          <span className="text-center md:text-left">
            Focused on meaningful steps that make a difference.
          </span>
          <div className="w-full flex items-center gap-4 px-4">
            <Button
              className="w-full h-9 md:h-11 px-4 py-2 border bg-[#2596be] hover:bg-white hover:text-[#2596be] hover:border-[#2596be]"
              onClick={() => {
                scrollToSection("projects");
              }}
            >
              See My Work
            </Button>
            <Button
              className="w-full h-9 md:h-11 px-4 py-2 border hover:bg-white hover:text-[#2596be] hover:border-[#2596be]"
              variant="outline"
              onClick={() => {
                scrollToSection("work");
              }}
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Hero;
