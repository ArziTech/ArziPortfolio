import React from "react";
import Link from "next/link";
import Image from "next/image";
import H1 from "@/components/H1";
import gunawan from "@/public/images/about/gunawan.png";

const Page = () => {
  return (
    // ini harus dibuat grow
    <div
      id={"target"}
      className={
        "relative my-3 px-4 bg-[#0070E0]/20 lg:bg-cardBackground" +
        " backdrop-blur-2xl " +
        " lg:max-w-[1024px] rounded-3xl p-4  lg:mt-0 lg:flex lg:gap-6" +
        " lg:about-shadow mx-4 lg:mx-auto  "
      }
    >
      <div className="flex lg:flex-col justify-center gap-4 items-center">
        <div className="flex-shrink-0  max-md:max-w-[100px] md:w-[200px] aspect-square lg:w-[222px] lg:h-[271px] lg:rounded-md  bg-gradient-to-br from-primary mt-2 rounded-full border border-white relative overflow-hidden">
          <Image
            src={gunawan}
            alt={"picture of gunawan"}
            width={384}
            height={384}
            className={"mx-auto mt-8 lg:mt-0 relative max-md:-translate-y-1/4"}
          />
        </div>
        <div>
          <h2 className="h1 max-md:text-4xl">Gunawan</h2>
          <p className={"text-xl font-light lg:text-center"}>
            Next Js Fullstack Web Developer
          </p>
        </div>
      </div>

      <article
        className={
          "mt-4 lg:mt-0 flex flex-col gap-4 text-gray-300 [&_p]:lg:text-lg" +
          " text-justify h-full"
        }
      >
        <p>
          Hi, I’m Gunawan, the creative mind behind ARZI. I’m a passionate web
          developer from Indonesia, with over 2 years of experience in building
          modern, responsive, and user-friendly websites. My journey into web
          development began with a curiosity for technology and a drive to bring
          ideas to life digitally. Since then, I’ve been on a continuous
          learning path, honing my skills and staying updated with the latest
          trends in the tech world.
        </p>

        <p>
          Currently, I’m pursuing my undergraduate degree in Computer
          Engineering at Brawijaya University. Through my academic journey, I’ve
          gained a strong foundation in programming, problem-solving, and system
          design, which has allowed me to approach development with a
          well-rounded perspective.
        </p>

        <p>
          With over 2 years of professional experience in web development, I
          specialize in creating full-stack solutions tailored to meet the
          unique needs of my clients. My expertise spans both front-end and
          back-end technologies, ensuring that the websites I build are not only
          functional but also visually engaging and easy to use. Whether it’s a
          sleek portfolio, an interactive web application, or an e-commerce
          platform, I strive to deliver work that exceeds expectations.
        </p>
      </article>
    </div>
  );
};
export default Page;
