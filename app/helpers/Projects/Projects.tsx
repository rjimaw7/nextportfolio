"use client";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import React, { MutableRefObject, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const Projects = () => {
  const projectsRef = useRef(null);

  return (
    <SectionReveal
      refElement={projectsRef}
      id="projects"
      className="max-w-screen-2xl container flex flex-col items-center justify-center gap-8 min-h-screen"
      motionClassName="max-w-screen-2xl container flex flex-col items-center justify-center gap-8 min-h-screen"
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

      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-4 items-center w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="relative aspect-video">
              <Image
                src="https://picsum.photos/400/300"
                alt="random-image"
                fill
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Project 1</h3>

              <div className="flex items-center gap-3">
                <Badge className="py-1 cursor-pointer flex gap-1 items-center">
                  <span className="text-xs hidden md:inline-block">Github</span>
                  <Github size={16} />
                </Badge>
                <Badge
                  className="py-1 cursor-pointer flex gap-1 items-center"
                  variant="outline"
                >
                  <span className="text-xs hidden md:inline-block">
                    Preview
                  </span>
                  <ExternalLink size={16} />
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Badge className="py-1 cursor-pointer">React</Badge>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="relative aspect-video">
              <Image src="/merndream.png" alt="merndream2024" fill />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Advent of Dreams</h3>

              <div className="flex items-center gap-3">
                <Badge>
                  <Link
                    className=" flex gap-1 items-center py-1"
                    href="https://github.com/rjimaw7/merndream2024"
                    target="_blank"
                  >
                    <span className="text-xs hidden md:inline-block">
                      Github
                    </span>
                    <Github size={16} />
                  </Link>
                </Badge>
                <Badge variant="outline">
                  <Link
                    className=" flex gap-1 items-center py-1"
                    href="https://merndream2024.vercel.app/"
                    target="_blank"
                  >
                    <span className="text-xs hidden md:inline-block">
                      Preview
                    </span>
                    <ExternalLink size={16} />
                  </Link>
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Badge className="py-1 cursor-pointer">MERN</Badge>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="relative aspect-video">
              <Image src="/carsPH.png" alt="random-image" fill />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">carsPH</h3>

              <div className="flex items-center gap-3">
                <Badge>
                  <Link
                    className=" flex gap-1 items-center py-1"
                    href="https://github.com/rjimaw7/carsPH"
                    target="_blank"
                  >
                    <span className="text-xs hidden md:inline-block">
                      Github
                    </span>
                    <Github size={16} />
                  </Link>
                </Badge>
                <Badge variant="outline">
                  <Link
                    className=" flex gap-1 items-center py-1"
                    href="https://cars-ph.vercel.app/"
                    target="_blank"
                  >
                    <span className="text-xs hidden md:inline-block">
                      Preview
                    </span>
                    <ExternalLink size={16} />
                  </Link>
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 items-center justify-start">
            <Badge className="py-1 cursor-pointer">React</Badge>
            <Badge variant="outline" className="py-1 cursor-pointer">
              Firebase
            </Badge>
          </CardFooter>
        </Card>
      </div>
    </SectionReveal>
  );
};

export default Projects;
