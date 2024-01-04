import { Github } from "lucide-react";
import Image from "next/image";
import React, { MutableRefObject } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  projectsRef: MutableRefObject<HTMLElement | null>;
}

const Projects = ({ projectsRef }: Props) => {
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="max-w-screen-2xl container flex flex-col gap-8"
    >
      <h2 className="text-3xl font-bold">My Projects</h2>

      <div className="flex justify-between gap-4 items-center">
        <Card>
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
            <h3 className="text-2xl font-bold">Project 1</h3>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-base">
              Automatic Image, Font, and Script Optimizations for improved UX
              and Core Web Vitals.
            </p>
          </CardFooter>
        </Card>
        <Card>
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
            <h3 className="text-2xl font-bold">Project 1</h3>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-base">
              Automatic Image, Font, and Script Optimizations for improved UX
              and Core Web Vitals.
            </p>
          </CardFooter>
        </Card>
        <Card>
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
            <h3 className="text-2xl font-bold">Project 1</h3>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-base">
              Automatic Image, Font, and Script Optimizations for improved UX
              and Core Web Vitals.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
