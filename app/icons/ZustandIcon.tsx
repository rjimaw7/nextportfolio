import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

const ZustandIcon = ({ className }: Props) => {
  return <Image src="zustand.png" className={className} alt="zustand-img" />;
};

export default ZustandIcon;
