import React, { MutableRefObject } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto container flex max-w-[980px] flex-col items-center justify-center gap-1 min-h-screen"
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
          Crafting Everyday Progress
        </h1>
        <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Not chasing perfection
        </span>
      </div>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <Button
          className="h-9 md:h-11 px-4 py-2"
          onClick={() => {
            scrollToSection("projects");
          }}
        >
          Projects
        </Button>
        <Button
          className="h-9 md:h-11 px-4 py-2"
          variant="outline"
          onClick={() => {
            scrollToSection("work");
          }}
        >
          How I Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
