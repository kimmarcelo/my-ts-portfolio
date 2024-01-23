import { kpic } from "@assets/images";
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* <h1>THIS IS HOME PAGE</h1> */}
      <div className=" flex items-center justify-center py-20">
        <img className=" max-w-[500px] w-full rounded-3xl" src={kpic} alt="/" />
      </div>
    </div>
  );
};

export default HomePage;
