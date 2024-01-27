import Image from "next/image";
import TechStack from "./TechStack";

const WorkContent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-0 md:gap-12 lg:gap-0">
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
      <TechStack />
    </div>
  );
};

export default WorkContent;
