import React, { MutableRefObject } from "react";
import Image from "next/image";

interface Props {
  workRef: MutableRefObject<HTMLElement | null>;
}

const Work = ({ workRef }: Props) => {
  return (
    <section
      id="work"
      ref={workRef}
      className="max-w-screen-2xl container flex flex-col gap-8 mt-12 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center">How I Work</h2>
      <div className="flex justify-center items-center">
        <Image
          src="/flowchart.PNG"
          alt="flowchart-image"
          width={800}
          height={300}
        />
      </div>
    </section>
  );
};

export default Work;
