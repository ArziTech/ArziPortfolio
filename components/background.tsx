import React from "react";
import Image from "next/image";

import circuitBg from "@/public/circuit-board.svg";
const Background = () => {
  return (
    <div className={`h-screen w-screen fixed -z-10`}>
      <div className="w-full h-full circuit-bg opacity-25 scale-150 -rotate-12"></div>
      <div className="h-screen w-screen bg-space bg-center bg-cover opacity-50 bg-no-repeat"></div>
      <div className="size-48 blur-3xl absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" />
      <div className="size-32 blur-3xl absolute bottom-0 right-0 -translate-x-1/5 translate-y-1/5 bg-primary rounded-full" />
      <div className="size-24 blur-3xl absolute top-20 right-0 -translate-x-1/5 bg-primary rounded-full" />
      <div className="size-16 blur-2xl absolute bottom-0 left-0  bg-primary rounded-full" />
    </div>
  );
};
export default Background;
