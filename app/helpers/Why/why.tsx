import React, { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";

import FirstPic from "@/app/shared/assets/first-pic.jpg";
import SecondPic from "@/app/shared/assets/second-pic.jpg";
import ThirdPic from "@/app/shared/assets/third-pic.jpg";

// similar_colors = [
//     "#3AA1D8",  # Slightly lighter and brighter
//     "#1D81A5",  # Slightly darker and muted
//     "#2BA8C6",  # More cyan-like
//     "#207FA0",  # Deeper and richer tone
//     "#4DB4E2",  # Vibrant and light
//     "#15678B",  # Darker and more grounded
// ]

const cardData = [
  {
    image: FirstPic,
    alt: "first-pic",
    title: (
      <>
        Creating smooth{" "}
        <span className="text-primaryBlue">user experiences</span> with Next.js
      </>
    ),
    description: "Building fast, reliable websites that users love.",
  },
  {
    image: SecondPic,
    alt: "second-pic",
    title: (
      <>
        Designing <span className="text-primaryBlue">interfaces</span> that feel
        intuitive
      </>
    ),
    description: "Focusing on user needs to make every interaction seamless.",
  },
  {
    image: ThirdPic,
    alt: "third-pic",
    title: (
      <>
        Turning ideas into{" "}
        <span className="text-primaryBlue">practical solutions</span>
      </>
    ),
    description: "Using smart, scalable approaches to solve everyday problems.",
  },
];

const Why = () => {
  const whyRef = useRef(null);

  return (
    <SectionReveal
      id="why"
      refElement={whyRef}
      className=""
      motionClassName="flex flex-col gap-6 container mx-auto h-full md:h-screen"
    >
      <div className="flex items-center justify-center py-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-semibold w-full md:w-3/4 text-center">
          Building dynamic and responsive web applications using{" "}
          <span className="text-primaryBlue">React</span> and
          <span className="text-primaryBlue"> Next js</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 h-full">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full h-full 3xl:h-3/4 flex flex-col items-center justify-center border-2 border-white rounded-lg p-4 cursor-pointer
            hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="relative h-[300px] md:h-full w-full">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                placeholder="blur"
                className="object-fill rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center h-1/2">
              <h2 className="text-2xl font-semibold text-center">
                {card.title}
              </h2>
              <p className="text-gray-300 text-center">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
};

export default Why;
