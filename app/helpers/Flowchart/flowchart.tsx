"use client";

import SectionReveal from "@/components/SectionReveal";
import React, { useRef } from "react";
import Chart from "@/app/shared/assets/flowchart.jpg";
import Image from "next/image";

const Flowchart = () => {
  const flowchartRef = useRef(null);

  return (
    <SectionReveal
      id="work"
      className="w-full md:max-w-screen-lg container flex flex-col md:flex-row justify-between h-full md:h-screen"
      refElement={flowchartRef}
      motionClassName="md:container flex flex-col gap-4 md:gap-8 mt-24 h-[700px] md:h-screen"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-center text-3xl md:text-4xl font-semibold">
          How I Tackle <span className="text-primaryBlue">Challenges</span>
        </p>
        <p className="text-white text-lg">
          Solving <span className="text-primaryBlue">real problems</span>, one{" "}
          <span className="text-primaryBlue">solution</span> at a time.
        </p>
      </div>
      <div className="relative h-full">
        <Image
          src={Chart}
          alt="flowchart-image"
          fill
          placeholder="blur"
          quality={100}
          className="object-cover md:object-fill"
        />
      </div>
    </SectionReveal>
  );
};

export default Flowchart;
