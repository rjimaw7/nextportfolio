"use client";

import React, { useRef } from "react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import projects from "@/app/shared/constants/PROJECTS";
import Project from "./Project";

const Projects = () => {
  const projectsRef = useRef(null);

  return (
    <SectionReveal
      refElement={projectsRef}
      id="projects"
      className="max-w-screen-2xl container flex flex-col items-center justify-center gap-8 min-h-screen mt-24"
      motionClassName="max-w-screen-2xl w-full flex flex-col items-center justify-center gap-8 min-h-screen md:mt-24"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-center text-3xl md:text-4xl font-semibold">
          <span className="text-primaryBlue">Showcase</span> of My Work
        </h2>
        <span className="max-w-[750px] text-center text-md text-white">
          Discover more random or unfinished projects on my{" "}
          <Link
            href="https://github.com/rjimaw7"
            target="_blank"
            className="underline text-primaryBlue"
          >
            Github
          </Link>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 w-full">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </SectionReveal>
  );
};

export default Projects;
