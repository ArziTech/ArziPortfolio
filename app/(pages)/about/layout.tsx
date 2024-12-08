import H1 from "@/components/H1";
import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"h-screen flex flex-col"}>
      <div className="ms-4">
        <H1>About Me</H1>
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
