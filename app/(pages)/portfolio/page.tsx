"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import H1 from "@/components/H1";
import radenpatah from "@/public/images/portfolio/masjidradenpatahwebsite.png";
import arziquiz from "@/public/images/portfolio/arziquiz.png";
import luarsekolah from "@/public/images/portfolio/luarsekolahwebsite.png";
import weddingwebsite from "@/public/images/portfolio/weddingwebsite.png";

const Page = () => {
  const content = [
    {
      title: "Masjid Raden Patah Website",
      description: (
        <div className={"leading-relaxed"}>
          The official website for Masjid Raden Patah at Brawijaya University.
          This platform provides information about mosque activities, events,
          and services, designed with a modern and user-friendly interface using
          Next.js.
          {/*<a*/}
          {/*  className={*/}
          {/*    "px-2 py-1 rounded-md bg-primary hover:bg-blue-700" +*/}
          {/*    " mx-2 text-nowrap" +*/}
          {/*    " mt-2 "*/}
          {/*  }*/}
          {/*  href="https://radenpatah.ub.ac.id/"*/}
          {/*>*/}
          {/*  Visit Website*/}
          {/*</a>*/}
        </div>
      ),
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={radenpatah}
            alt={"Masjid Raden Patah Website"}
            className={"object-cover w-full h-full"}
          />
        </div>
      ),
    },
    {
      title: "Arzi Quiz",
      description: (
        <div className={"leading-relaxed"}>
          Arzi Quiz is a fun and interactive web-based quiz game designed to
          challenge users with various questions. Built using React.js, this
          project highlights a responsive design and engaging user experience.
          {/*TODO: CHANGE the url */}
          {/*<a*/}
          {/*  className={*/}
          {/*    "px-2 py-1 rounded-md bg-primary hover:bg-blue-700" +*/}
          {/*    " mx-2 text-nowrap" +*/}
          {/*    " mt-2 "*/}
          {/*  }*/}
          {/*  href="http://localhost:5173/"*/}
          {/*>*/}
          {/*  Visit Website*/}
          {/*</a>*/}
        </div>
      ),
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={arziquiz}
            alt={"Arzi Quiz Website"}
            className={"object-cover w-full h-full"}
          />
        </div>
      ),
    },
    {
      title: "Revamp Luar Sekolah Website",
      description: (
        <div className={"leading-relaxed"}>
          A collaborative project as part of the Project Based Internship
          program by Luar Sekolah. This project focuses on redesigning the
          website with a modern and responsive interface, ensuring a seamless
          user experience.
          {/*<a*/}
          {/*  className={*/}
          {/*    "px-2 py-1 rounded-md bg-primary hover:bg-blue-700" +*/}
          {/*    " mx-2 text-nowrap" +*/}
          {/*    " mt-2 "*/}
          {/*  }*/}
          {/*  href="https://collaboration-luar-sekolah-kelompok-1.vercel.app/"*/}
          {/*>*/}
          {/*  Visit Website*/}
          {/*</a>*/}
        </div>
      ),
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={luarsekolah}
            alt={"Luar sekolah Website"}
            className={"object-cover w-full h-full"}
          />
        </div>
      ),
    },
    {
      title: "Wedding Invitation Website",
      description: (
        <div className={"leading-relaxed"}>
          A beautifully designed wedding invitation website created to showcase
          event details, guest information, and RSVP functionality. This project
          emphasizes elegance and user-friendliness.
          {/*<a*/}
          {/*  className={*/}
          {/*    "px-2 py-1 rounded-md bg-primary hover:bg-blue-700" +*/}
          {/*    " mx-2 text-nowrap" +*/}
          {/*    " mt-2 "*/}
          {/*  }*/}
          {/*  href="https://collaboration-luar-sekolah-kelompok-1.vercel.app/"*/}
          {/*>*/}
          {/*  Visit Website*/}
          {/*</a>*/}
        </div>
      ),
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={weddingwebsite}
            alt={"Wedding Website"}
            className={"object-cover w-full h-full"}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="h-screen p-4 lg:p-0 lg:pb-10 flex flex-col">
      <H1 className={"mb-4 mt-8"}>My Portfolio</H1>
      <StickyScroll content={content} />
    </div>
  );
};
export default Page;
