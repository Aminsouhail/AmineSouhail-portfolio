"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js for navigation

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-0 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/alo.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-4xl font-bold">
            Full Stack Wizardry Shaping Tomorrow s Digital Realm
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital playground, where creativity meets precision. As a full stack web developer, I blend technical expertise with an appreciation for design finesse. Explore my portfolio, a testament to my dedication to crafting polished digital experiences.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            {/* Link to Portfolio */}
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            {/* Link to Contact Page */}
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

