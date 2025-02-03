import Image from "next/image";
import React from "react";

interface HeroProp {
  imageSrc: string;
  heading: string;
  tagline: string;
  buttonText: string;
  onButtonClick?: () => void;
}
const HeroSec = ({
  imageSrc,
  heading,
  tagline,
  buttonText,
  onButtonClick,
}: HeroProp) => {
  return (
    <>
      <div className="sm:h-screen h-[60vh] w-full">
        <Image
          src={imageSrc}
          alt="hero-img"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white bg-opacity-50 absolute top-0 left-0 h-screen w-full"></div>
      <div className="absolute top-0 left-0 flex justify-center items-center flex-col sm:h-screen h-[60vh] w-full gap-5 p-5">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold text-center">
          {heading}
        </h1>
        <p className="sm:text-lg text-sm text-center ">{tagline}</p>
        <button
          className="bg-black text-white text-sm py-3 px-4 rounded-md"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default HeroSec;
