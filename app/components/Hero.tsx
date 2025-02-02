import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-screen w-full">
        <Image
          src="/hero-img.png"
          alt="hero-img"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white bg-opacity-50 absolute top-0 left-0 h-screen w-full"></div>
      <div className="absolute top-0 left-0 flex justify-center items-center flex-col h-screen w-full gap-5 ">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold">
          Your Voice, Your Blog
        </h1>
        <p className="sm:text-lg text-sm ">
          Create, edit, and share your ideas with the world.
        </p>
        <button className="bg-black text-white text-sm py-3 px-4 rounded-md">
          Create Your First Post
        </button>
      </div>
    </div>
  );
};

export default Hero;
