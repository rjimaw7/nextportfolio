import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import React, { MutableRefObject } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-screen-2xl container flex flex-col items-center justify-center gap-8 min-h-screen"
    >
      <h2 className="text-2xl md:text-2xl font-bold text-center">
        My Projects
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 items-center w-full">
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
    </section>
  );
};

export default Projects;
