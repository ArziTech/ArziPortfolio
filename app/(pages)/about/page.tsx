import React from "react";
import Link from "next/link";
import Image from "next/image";
import H1 from "@/components/H1";
import gunawan from "@/public/images/about/gunawan.jpg";

const Page = () => {
  return (
    <div className={"px-4"}>
      <Image
        src={gunawan}
        alt={"picture of gunawan"}
        width={384}
        height={384}
        className={"mx-auto mt-8"}
      />
      {/*<div className=" relative mx-auto mt-8 size-96 bg-white" />*/}
      <article className={"mt-4 flex flex-col gap-4"}>
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

        <p>
          Through ARZI, my goal is to help individuals and businesses establish
          their presence in the digital world. With my expertise and dedication,
          I’m ready to turn your ideas into reality and build something
          extraordinary together.
        </p>
      </article>
    </div>
  );
};
export default Page;
