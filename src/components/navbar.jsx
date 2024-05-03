"use client";

import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-45 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-2 w-1/6">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <a href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Amine</span>
          <span className="w-20 h-8 rounded bg-white text-black flex items-center justify-center">
             Souhail  
          </span>
        </a>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-2 w-1/3,5">
        {/* GitHub Link */}
        <a href="https://github.com/Aminsouhail" target="_blank" rel="noopener noreferrer">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </a>
        {/* End of GitHub link */}
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/amine-souhail/" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </a>
        {/* End of LinkedIn link */}
        {/* Dribbble Link */}
        <a href="https://diploma.gomycode.app/?id=31673388905675708" target="_blank" rel="noopener noreferrer">
          <Image src="/dribbble.png" alt="Dribbble" width={24} height={24} />
        </a>
        {/* End of Dribbble link */}
        {/* Facebook Link */}
        <a href="https://www.facebook.com/aminexvi/" target="_blank" rel="noopener noreferrer">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </a>
        {/* End of Facebook link */}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <a href={link.url}>{link.title}</a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
