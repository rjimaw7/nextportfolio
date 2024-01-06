import React, { MutableRefObject } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  projectsRef: MutableRefObject<HTMLElement | null>;
  workRef: MutableRefObject<HTMLElement | null>;
}

const Hero = ({ projectsRef, workRef }: Props) => {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-[980px] flex-col items-center justify-center gap-1 min-h-screen"
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
          className="h-11 px-4 py-2"
          onClick={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </Button>
        <Button
          className="h-11 px-4 py-2"
          variant="outline"
          onClick={() =>
            workRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          How I Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
