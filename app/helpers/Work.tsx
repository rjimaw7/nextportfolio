import React, { MutableRefObject } from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import ReactIcon from "../icons/ReactIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import NextJsIcon from "../icons/NextJsIcon";
import NodeJsIcon from "../icons/NodeJsIcon";
import TailwindIcon from "../icons/TailwindIcon";
import ReduxIcon from "../icons/ReduxIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import PostgreIcon from "../icons/PostgreIcon";

const Work = () => {
  return (
    <section
      id="work"
      className="max-screen-2xl container flex flex-col md:flex-row justify-between mt-24 md:mt-12 min-h-screen"
    >
      <div className="flex-col gap-8 w-full hidden md:flex">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          How I Work
        </h2>
        <div className="flex justify-center items-center">
          <Image
            src="/flowchart.PNG"
            alt="flowchart-image"
            width={700}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Skills</h2>
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 self-center">
          <ReactIcon className="w-full" />
          <TypescriptIcon className="w-full" />
          <NextJsIcon className="w-full dark:bg-white dark:rounded-md" />
          <NodeJsIcon className="w-full" />
          <TailwindIcon className="w-full dark:bg-white dark:rounded-md" />
          <ReduxIcon className="w-full" />
          <JavascriptIcon className="w-full" />
          <PostgreIcon className="w-full dark:bg-white dark:rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Work;
