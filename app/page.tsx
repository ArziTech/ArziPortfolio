"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";
import TailwindconnectButton from "@/components/ui/tailwindconnect-button";
import { splitString } from "@/lib/utils";

const description =
  "Hi, I’m Gunawan. I specialize in creating modern," +
  " responsive, and user-friendly websites to elevate your online presence";
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[1024px] text-white w-full p-4 flex flex-col gap-2">
        <div className={"flex flex-col sm:flex-row justify-center"}>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="h1 mb-4 text-center leading-loose lg:leading-snug"
          >
            Welcome to{" "}
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className={
              "h1 mb-4 lg:inline text-center leading-loose lg:leading-snug"
            }
          >
            <Highlight className=" ms-2 px-4 text-black dark:text-white">
              ARZI
            </Highlight>
          </motion.h1>
        </div>
        <motion.p
          initial={"hidden"}
          whileInView={"reveal"}
          transition={{ delay: 1, staggerChildren: 0.02 }}
          className={"text-xl text-center lg:text-2xl" + " lg:font-normal"}
        >
          {splitString(description).map((char, index) => {
            return (
              <motion.span
                key={index}
                variants={charVariants}
                transition={{ duration: 0.35 }}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          className={"w-full flex items-center justify-center"}
        >
          <TailwindconnectButton
            href={"/about"}
            className={"w-fit font-medium p-px mt-4 mx-auto text-xl"}
          >
            Know More
          </TailwindconnectButton>
        </motion.div>
      </div>
    </div>
  );
}
