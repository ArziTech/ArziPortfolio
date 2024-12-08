"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";
import TailwindconnectButton from "@/components/ui/tailwindconnect-button";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="text-white w-full">
        <HeroHighlight className="w-screenl h-screen grid place-content-center p-4">
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
            className="h1 mb-4 leading-relaxed lg:leading-snug"
          >
            Welcome to
            <Highlight className="text-black dark:text-white">ARZI</Highlight>
          </motion.h1>
          <p className={"text-xl lg:text-2xl lg:font-medium"}>
            Hi, I’m Gunawan. I specialize in creating modern, responsive, and
            user-friendly websites to elevate your online presence
          </p>
          <TailwindconnectButton
            href={"/about"}
            className={"w-fit font-medium p-px mt-4"}
          >
            Know More
          </TailwindconnectButton>
        </HeroHighlight>
      </main>
    </div>
  );
}
