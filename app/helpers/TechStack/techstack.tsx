"use client";

import SectionReveal from "@/components/SectionReveal";
import React, { useRef } from "react";
import ReactIcon from "@/app/icons/ReactIcon";
import TypescriptIcon from "@/app/icons/TypescriptIcon";
import JavascriptIcon from "@/app/icons/JavascriptIcon";
import NextJsIcon from "@/app/icons/NextJsIcon";
import ReduxIcon from "@/app/icons/ReduxIcon";
import TailwindIcon from "@/app/icons/TailwindIcon";
import ZustandIcon from "@/app/icons/ZustandIcon";
import AntDesignIcon from "@/app/icons/AntDesignIcon";
import NodeJsIcon from "@/app/icons/NodeJsIcon";
import ExpressIcon from "@/app/icons/ExpressIcon";
import MongoDBIcon from "@/app/icons/MongoDBIcon";
import PostgreIcon from "@/app/icons/PostgreIcon";
import GitIcon from "@/app/icons/GitIcon";
import FigmaIcon from "@/app/icons/FigmaIcon";
import BitbucketIcon from "@/app/icons/BitbucketIcon";
import JestIcon from "@/app/icons/JestIcon";
import DockerIcon from "@/app/icons/DockerIcon";
import ChatGPTIcon from "@/app/icons/ChatGPTIcon";
import PostmanIcon from "@/app/icons/PostmanIcon";
import AxiosIcon from "@/app/icons/AxiosIcon";
import Image from "next/image";

const icons = [
  { component: <ReactIcon className="w-full" />, key: "react" },
  { component: <TypescriptIcon className="w-full" />, key: "typescript" },
  { component: <JavascriptIcon className="w-full" />, key: "javascript" },
  {
    component: <NextJsIcon className="w-full dark:bg-white dark:rounded-md" />,
    key: "nextjs",
  },
  { component: <ReduxIcon className="w-full" />, key: "redux" },
  {
    component: (
      <TailwindIcon className="w-full dark:bg-white dark:rounded-md" />
    ),
    key: "tailwind",
  },
  { component: <ZustandIcon className="w-full" />, key: "zustand" },
  {
    component: <AntDesignIcon className="text-blue-600 w-full" />,
    key: "antdesign",
  },
  { component: <NodeJsIcon className="w-full" />, key: "nodejs" },
  {
    component: <ExpressIcon className="w-full dark:bg-white dark:rounded-md" />,
    key: "express",
  },
  { component: <MongoDBIcon className="w-full" />, key: "mongodb" },
  { component: <PostgreIcon className="w-full" />, key: "postgre" },
  {
    component: (
      <Image
        alt="supabase-icon"
        src="/supabase.png"
        width={100}
        height={100}
        className="w-full"
      />
    ),
    key: "supabase",
  },
  { component: <GitIcon className="w-full" />, key: "git" },
  { component: <FigmaIcon className="w-full" />, key: "figma" },
  { component: <BitbucketIcon className="w-full" />, key: "bitbucket" },
  { component: <JestIcon className="w-full" />, key: "jest" },
  { component: <DockerIcon className="w-full" />, key: "docker" },
  { component: <ChatGPTIcon className="w-full" />, key: "chatgpt" },
  { component: <PostmanIcon className="w-full" />, key: "postman" },
  { component: <AxiosIcon className="w-full" />, key: "axios" },
  {
    component: (
      <Image
        alt="python-icon"
        src="/python.png"
        width={75}
        height={75}
        className="w-full md:w-3/4 mx-auto"
      />
    ),
    key: "python",
  },
  {
    component: (
      <Image
        alt="aws-icon"
        src="/aws.png"
        width={75}
        height={75}
        className="w-full md:w-3/4 mx-auto"
      />
    ),
    key: "aws",
  },
];

const TechStack = () => {
  const stackRef = useRef(null);

  return (
    <SectionReveal
      refElement={stackRef}
      id="techstack"
      className="max-w-screen-2xl container flex flex-col items-center justify-center gap-8 h-full mt-24"
      motionClassName="container mx-auto w-full flex flex-col gap-12 md:gap-24 h-full md:mt-24"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold w-full text-center">
          <span className="text-primaryBlue">Technologies</span> I Use
        </h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 items-center justify-center">
        {icons.map(({ component, key }) => (
          <div key={key}>{component}</div>
        ))}
      </div>
    </SectionReveal>
  );
};

export default TechStack;
