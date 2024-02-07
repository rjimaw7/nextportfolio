import React from "react";
import ReactIcon from "../../icons/ReactIcon";
import TypescriptIcon from "../../icons/TypescriptIcon";
import NextJsIcon from "../../icons/NextJsIcon";
import NodeJsIcon from "../../icons/NodeJsIcon";
import TailwindIcon from "../../icons/TailwindIcon";
import ReduxIcon from "../../icons/ReduxIcon";
import JavascriptIcon from "../../icons/JavascriptIcon";
import PostgreIcon from "../../icons/PostgreIcon";
import ZustandIcon from "@/app/icons/ZustandIcon";
import AntDesignIcon from "@/app/icons/AntDesignIcon";
import ExpressIcon from "@/app/icons/ExpressIcon";
import MongoDBIcon from "@/app/icons/MongoDBIcon";
import GitIcon from "@/app/icons/GitIcon";
import FigmaIcon from "@/app/icons/FigmaIcon";
import BitbucketIcon from "@/app/icons/BitbucketIcon";
import JestIcon from "@/app/icons/JestIcon";
import DockerIcon from "@/app/icons/DockerIcon";
import ChatGPTIcon from "@/app/icons/ChatGPTIcon";
import PostmanIcon from "@/app/icons/PostmanIcon";
import AxiosIcon from "@/app/icons/AxiosIcon";

const TechStack = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        My Tech Stack
      </h2>
      <div className="flex flex-col gap-8">
        {/* FRONT END */}
        <div className="flex gap-4 flex-col">
          <p className="text-center font-bold text-2xl flex justify-center items-center">
            Front-End
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:mx-12">
            <div className="flex flex-col items-center justify-center gap-1">
              <ReactIcon className="w-full" />
              <p className="text-xs">React</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <TypescriptIcon className="w-full" />
              <p className="text-xs">Typescript</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <JavascriptIcon className="w-full" />
              <p className="text-xs">Javascript</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <NextJsIcon className="w-full dark:bg-white dark:rounded-md" />
              <p className="text-xs">Next JS</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <ReduxIcon className="w-full" />
              <p className="text-xs">Redux</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <TailwindIcon className="w-full dark:bg-white dark:rounded-md" />
              <p className="text-xs">Tailwind</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <ZustandIcon className="w-full" />
              <p className="text-xs">Zustand</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <AntDesignIcon className="text-blue-600" />
              <p className="text-xs">Ant Design</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 md:gap-0 flex-col md:flex-row items-center md:mx-12 justify-center">
          <div className="flex gap-4 flex-col">
            <p className="text-center font-bold text-2xl flex justify-center items-center">
              Back-End
            </p>
            <div className="flex md:mx-12 justify-center gap-8">
              <div className="flex flex-col items-center justify-center gap-1">
                <NodeJsIcon className="w-full" />
                <p className="text-xs">Node JS</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <ExpressIcon className="w-full" />
                <p className="text-xs">Express JS</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <p className="text-center font-bold text-2xl flex justify-center items-center">
              Database
            </p>
            <div className="flex md:mx-12 justify-center gap-8">
              <div className="flex flex-col items-center justify-center gap-1">
                <MongoDBIcon className="w-full" />
                <p className="text-xs">Mongo DB</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <PostgreIcon className="w-full" />
                <p className="text-xs">PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col">
          <p className="text-center font-bold text-2xl flex justify-center items-center">
            Tools
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:mx-12">
            <div className="flex flex-col items-center justify-center gap-1">
              <GitIcon className="w-full" />
              <p className="text-xs">Git</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <FigmaIcon className="w-full" />
              <p className="text-xs">Figma</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <BitbucketIcon className="w-full" />
              <p className="text-xs">Bitbucket</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <JestIcon className="w-full" />
              <p className="text-xs">Jest</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <DockerIcon className="w-full" />
              <p className="text-xs">Docker</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <ChatGPTIcon className="w-full" />
              <p className="text-xs">ChatGPT</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <PostmanIcon className="w-full" />
              <p className="text-xs">Postman</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <AxiosIcon className="w-full" />
              <p className="text-xs">Axios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
