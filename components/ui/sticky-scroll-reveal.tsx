"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    // offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        console.log(acc);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      animate={{
        backgroundColor: "var(--slate-900)",
      }}
      className="h-full overflow-y-auto flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      <div className="md:basis-1/3 relative flex items-start px-4">
        <div className="w-full mt-8">
          {content.map((item, index) => (
            // Need to check if the center of this div is in the center on
            // the view
            <div key={item.title + index} className="mb-20 flex flex-col gap-4">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold max-md:!opacity-100 text-slate-100"
              >
                {item.title}
              </motion.h2>
              <div
                className={cn(
                  "md:hidden w-full aspect-video rounded-md bg-white" +
                    " rounded-lg overflow-hidden",
                  contentClassName
                )}
              >
                {item.content}
              </div>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-md:!opacity-100  w-full md:mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="hidden lg:block h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden md:block max-w-[50%] h-60 lg:h-80 aspect-video rounded-md" +
            " bg-white" +
            " sticky" +
            " top-1/2" +
            " -translate-y-1/2 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
