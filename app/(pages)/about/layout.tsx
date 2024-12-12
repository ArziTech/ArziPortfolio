import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className="ms-4 lg:ms-0">
        <h1 className="h1 max-md:mt-6">About Me</h1>
        <div className={"relative w-full flex gap-2 md:gap-4"}>
          <Link className={"text-xl md:text-2xl"} href="/about">
            Know Me
          </Link>
          <Link className={"text-xl md:text-2xl"} href="/about/education">
            Education
          </Link>
          <Link className={"text-xl md:text-2xl"} href="/about/certification">
            Certification
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
