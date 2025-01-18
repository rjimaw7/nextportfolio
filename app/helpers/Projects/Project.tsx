import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ProjectType } from "@/app/shared/constants/PROJECTS";
import { cn } from "@/lib/utils";

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => {
  return (
    <Card className="w-full border-2 border-white hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <CardHeader>
        <CardTitle className="relative aspect-video">
          <Image src={project.imageSrc} alt={project.alt} fill />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <div className="flex items-center gap-3">
            {project.links.map((link, linkIndex) => (
              <Badge
                key={linkIndex}
                variant={link.variant}
                className={cn("", link.label === "Preview" && "bg-primaryBlue")}
              >
                <Link
                  className="flex gap-1 items-center py-1"
                  href={link.url}
                  target="_blank"
                >
                  <span className="text-xs hidden md:inline-block">
                    {link.label}
                  </span>
                  {link.icon}
                </Link>
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 items-center justify-start">
        {project.technologies.map((tech, techIndex) => (
          <Badge
            variant={tech.variant}
            key={techIndex}
            className={cn(
              "py-1 cursor-pointer",
              techIndex % 2 === 0 && "bg-primaryBlue text-white"
            )}
          >
            {tech.name}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default Project;
