import { kpic } from "@assets/images";
import React from "react";

const HeroHome = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center py-20 gap-y-5">
        <img
          className=" max-w-[300px] max-h-[300px] object-cover object-top w-full rounded-full"
          src={kpic}
          alt="/"
        />
        <h2 className=" mont text-5xl max-w-[800px] text-center leading-[68px] font-normal">
          <span className=" mont gradient-text font-semibold">
            Hello, I'm Kim,
          </span>{" "}
          a Web Developer based in Philippines.
        </h2>
        <p className=" max-w-[700px] text-center text-lg font-light">
          I am a web developer specializing in React, passionate about creating
          dynamic and user-friendly web applications.
        </p>
      </div>
    </div>
  );
};

export default HeroHome;
