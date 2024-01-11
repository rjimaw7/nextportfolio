import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  refElement: React.RefObject<HTMLElement>;
  children: React.ReactNode;
  id: string;
  className: string;
  motionClassName?: string;
}

const SectionReveal = ({
  refElement,
  children,
  id,
  className,
  motionClassName,
}: Props) => {
  const isInView = useInView(refElement, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <section ref={refElement} id={id} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={motionClassName}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionReveal;
