import React from "react";
import H1 from "@/components/H1";
import Link from "next/link";

const Page = () => {
  return (
    <div className={"h-screen flex flex-col"}>
      <div className="ms-4">
        <H1>Services</H1>
      </div>
      <h2>Hello this is my service</h2>
    </div>
  );
};
export default Page;
