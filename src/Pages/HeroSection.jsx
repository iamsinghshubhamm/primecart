import React from "react";
import bgimage from "../assets/bgimage.jpg";

const HeroSection = () => {
  return (
    <div
      className="w-full h-max lg:h-[460px] flex flex-col lg:flex-row items-center justify-around"
      style={{ backgroundColor: "#E64439" }}
    >
      <img
        src={bgimage}
        alt=""
        className="object-contain w-full lg:w-1/2 h-full bg-blend-color-burn"
      />
      <div className="text-center lg:text-left lg:w-1/2">
        <p className="text-white text-5xl mb-10 lg:mb-0 md:text-7xl">
          online <br />
          sh<span className="text-amber-300">O</span>pping
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
