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
      className="max-w-screen-2xl container flex flex-col items-center justify-center gap-8 min-h-screen"
      motionClassName="max-w-screen-2xl flex flex-col items-center justify-center gap-8 min-h-screen"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl md:text-2xl font-bold text-center">
          My Projects
        </h2>
        <span className="max-w-[750px] text-center text-md text-muted-foreground">
          Discover more random or unfinished projects on my{" "}
          <Link
            href="https://github.com/rjimaw7"
            target="_blank"
            className="underline"
          >
            Github
          </Link>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-4">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </SectionReveal>
  );
};

export default Projects;
