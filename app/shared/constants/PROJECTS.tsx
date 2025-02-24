import { Github, ExternalLink } from "lucide-react";
import { ReactNode } from "react";

export interface Link {
  url: string;
  label: string;
  icon: ReactNode;
  variant?: "default" | "outline";
}

export interface ProjectType {
  title: string;
  imageSrc: string;
  alt: string;
  links: Link[];
  technologies: { name: string; variant: "default" | "outline" }[];
}

const projects: ProjectType[] = [
  {
    title: "NewsMate",
    imageSrc: "/newsmatess.png",
    alt: "newsmate",
    links: [
      {
        url: "https://github.com/rjimaw7/newsmate",
        label: "Github",
        icon: <Github size={16} />,
      },
      {
        url: "https://newsmate.vercel.app",
        label: "Preview",
        icon: <ExternalLink size={16} />,
        variant: "outline",
      },
    ],
    technologies: [
      { name: "Next JS", variant: "default" },
      { name: "Python", variant: "outline" },
      { name: "AWS", variant: "default" },
      { name: "Supabase", variant: "outline" },
    ],
  },
  {
    title: "JavCodes",
    imageSrc: "/javcodes.png",
    alt: "javcodes",
    links: [
      {
        url: "https://github.com/rjimaw7/nextjavcodes",
        label: "Github",
        icon: <Github size={16} />,
      },
      {
        url: "https://nextjavcodes.vercel.app/",
        label: "Preview",
        icon: <ExternalLink size={16} />,
        variant: "outline",
      },
    ],
    technologies: [
      { name: "Next JS", variant: "default" },
      { name: "PostgreSQL", variant: "outline" },
    ],
  },
  {
    title: "Advent of Dreams",
    imageSrc: "/merndream.png",
    alt: "merndream2024",
    links: [
      {
        url: "https://github.com/rjimaw7/merndream2024",
        label: "Github",
        icon: <Github size={16} />,
      },
      {
        url: "https://merndream2024.vercel.app/",
        label: "Preview",
        icon: <ExternalLink size={16} />,
        variant: "outline",
      },
    ],
    technologies: [{ name: "MERN STACK", variant: "default" }],
  },
  {
    title: "carsPH",
    imageSrc: "/carsPH.png",
    alt: "random-image",
    links: [
      {
        url: "https://github.com/rjimaw7/carsPH",
        label: "Github",
        icon: <Github size={16} />,
      },
      {
        url: "https://cars-ph.vercel.app/",
        label: "Preview",
        icon: <ExternalLink size={16} />,
        variant: "outline",
      },
    ],
    technologies: [
      { name: "React", variant: "default" },
      { name: "Firebase", variant: "outline" },
    ],
  },
];

export default projects;
