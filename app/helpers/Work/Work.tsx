import SectionReveal from "@/components/SectionReveal";
import { useRef } from "react";
import WorkContent from "./WorkContent";

const Work = () => {
  const workRef = useRef(null);

  return (
    <SectionReveal
      id="work"
      className="max-screen-2xl container flex flex-col md:flex-row justify-between mt-24 md:mt-12 min-h-screen"
      refElement={workRef}
      motionClassName="max-screen-2xl container flex flex-col md:flex-row justify-between mt-24 md:mt-12 min-h-screen"
    >
      <WorkContent />
    </SectionReveal>
  );
};

export default Work;
