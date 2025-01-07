import Link from "next/link";
import React from "react";
import { GraduationCap, Ribbon, SquareUserRound } from "lucide-react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex flex-col  h-full gap-8"}>
      <div className="ms-4 lg:ms-0 flex flex-col gap-4 ">
        <h1 className="h1 mt-6 relative top-0">About Me</h1>
        <div className={"relative w-full flex gap-2 md:gap-4"}>
          <Link
            className={
              "text-xl text-white flex gap-2 hover:text-primary" +
              " justify-center border border-primary px-2 py-1" +
              " bg-cardBackground active:text-white" +
              " rounded-lg" +
              " items-center" +
              " md:text-2xl"
            }
            href="/about"
          >
            <SquareUserRound /> Know Me
          </Link>
          {/* TODO: Under Development*/}
          {/*<Link*/}
          {/*  className={*/}
          {/*    "text-xl text-white flex gap-2 hover:text-primary" +*/}
          {/*    " justify-center border border-primary px-2 py-1" +*/}
          {/*    " bg-cardBackground active:text-white" +*/}
          {/*    " rounded-lg" +*/}
          {/*    " items-center" +*/}
          {/*    " md:text-2xl"*/}
          {/*  }*/}
          {/*  href="/about/education"*/}
          {/*>*/}
          {/*  <GraduationCap /> Education*/}
          {/*</Link>*/}
          <Link
            className={
              "text-xl text-white flex gap-2 hover:text-primary" +
              " justify-center border border-primary px-2 py-1" +
              " bg-cardBackground active:text-white" +
              " rounded-lg" +
              " items-center" +
              " md:text-2xl"
            }
            href="/about/certification"
          >
            <Ribbon className={"inline"}></Ribbon> Certification
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
