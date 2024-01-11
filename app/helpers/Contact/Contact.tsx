"use client";

import SectionReveal from "@/components/SectionReveal";
import { useRef } from "react";
import ContactContent from "./ContactContent";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <SectionReveal
      id="contact"
      className="max-w-screen-2xl container min-h-screen md:mt-24 flex items-center justify-center flex-col gap-8"
      refElement={contactRef}
      motionClassName="max-w-screen-2xl container min-h-screen md:mt-24 flex items-center justify-center flex-col gap-8"
    >
      <ContactContent />
    </SectionReveal>
  );
};

export default Contact;
