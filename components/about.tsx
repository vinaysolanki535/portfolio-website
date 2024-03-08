"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        During my graduation with a B.Tech degree in{" "}
        <span className="font-medium">Computer Science and Engineering</span>,
        My curiosity for product building and problem-solving fueled my journey.
        I dedicated myself to mastering new technologies such as{" "}
        <span className="font-bold">
          {" "}
          React, Next.js, Tailwind CSS, Node.js, Expess.js, AWS{" "}
        </span>
        , and other tools, aiming to craft robust and scalable products.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-bold">
          React, Next.js, TypeScript, Node.js, Expers.js and MongoDB, SQL
          databases
        </span>
        . I am also familiar with Mapbox API and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy learning
        and reading about tech blogs, podcasts, and youtube tutorials for be
        updated in latest trends going on in tech world. I also enjoy{" "}
        <span className="font-medium">learning and teaching new things</span>. I
        am currently learning about{" "}
        <span className="font-medium">
          Server actions and SSR for deep understing of Next.js
        </span>
        . I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
