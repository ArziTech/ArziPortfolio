import React from "react";
import Image from "next/image";
import gunawan from "@/public/images/about/gunawan.png";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import ContactImage from "@/public/images/contact_image.png";
import TailwindconnectButton from "@/components/ui/tailwindconnect-button";

const Page = () => {
  return (
    <div
      className={
        "px-8 md:px-24 lg:px-0 w-full h-full flex" +
        " flex-col" +
        " justify-center items-center"
      }
    >
      <h1 className="h1 w-full text-left ms-4 lg:ms-0 max-md:mt-6">
        Get In Touch
      </h1>
      <div
        className={
          "bg-black overflow-hidden relative rounded-3xl " +
          " about-shadow max-h-full flex w-full my-4 gap-6" +
          " px-4 py-8 lg:py-16 lg:px-24" +
          " mx-auto gap-16 justify-between items-center bg-cardBackground"
        }
      >
        <div className={"flex flex-col  gap-4"}>
          <h2 className={"h2 !font-medium"}>Contact</h2>
          <div className={"flex flex-col gap-4"}>
            <ul className={"flex flex-col gap-4  "}>
              <li className="flex gap-3">
                <Link className={"flex sm:text-lg lg:text-xl gap-3"} href={"/"}>
                  <IconPhone />
                  +62 851 7305 0210
                </Link>
              </li>
              <li className="flex gap-3">
                <Link className={"flex sm:text-lg lg:text-xl gap-3"} href={"/"}>
                  <IconBrandLinkedin />
                  linkedIn.com/id/wawan-camoh
                </Link>
              </li>
              <li className="flex gap-3">
                <Link className={"flex sm:text-lg lg:text-xl gap-3"} href={"/"}>
                  <IconBrandInstagram />
                  @guna_wan523
                </Link>
              </li>
              <li className="flex gap-3">
                <Link className={"flex sm:text-lg lg:text-xl gap-3"} href={"/"}>
                  <IconMail />
                  arzibusiness1@gmail.com
                </Link>
              </li>
            </ul>
            {/* TODO : ADD LATER */}
            <TailwindconnectButton
              href={"https://wa.me/6285173050210"}
              className={"mt-4 text-xl font-normal"}
            >
              Contact Me
            </TailwindconnectButton>
          </div>
        </div>
        <div className={"hidden md:block"}>
          <Image
            src={ContactImage}
            width={472}
            height={350}
            alt={"difficult roads lead to beautiful destination"}
          />
        </div>
        {/*<div className="size-48 blur-3xl absolute -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full -z-20" />*/}
        {/*<div className="size-24 blur-3xl absolute bottom-20 right-0 -translate-x-1/5 bg-primary rounded-full -z-20" />*/}
      </div>
    </div>
  );
};
export default Page;
