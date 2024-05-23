
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Modern-UI-UX-Website-in-React-JS",
    desc: "This project is a React application focusing on creating functional components with a strong emphasis on reusability. It also incorporates various aspects of modern web development including CSS fundamentals, animation techniques, and responsiveness for a seamless user experience.",
    img: "/gpt.png",
    link: "https://github.com/Aminsouhail/-Modern-UI-UX-Website-in-React-JS",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React Advice App",
    desc: "The React Advice App is a simple yet engaging web application that provides users with random pieces of advice. Built using React, the app fetches advice from the Advice Slip API and dynamically updates the content on the page. Users can click the -GIVE ME ADVICE button- to receive fresh and insightful advice instantly.",
    img: "/advice.png",
    link: "https://github.com/Aminsouhail/Quote-Generator---React-Fetch-API-Data-",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Movie App with React.js",
    desc: "The Movie App is a fully responsive web application built with React.js that allows users to search for movies using the OMDb API. This app provides a seamless user experience across various devices, ensuring accessibility and usability for all users..",
    img: "/movie.png",
    link: "https://github.com/Aminsouhail/MOVIE-APP-REACT-JS",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Get User Location JavaScript Project",
    desc: "This project demonstrates how to retrieve the user's location using JavaScript and the geolocation API, and then fetch additional location details using the OpenCageData API..",
    img: "/geo.png",
    link: "https://github.com/Aminsouhail/Get-User-Location-JS",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Image-generation-OpenAI-API",
    desc: "This project is a simple web application that generates images based on a given text prompt using the OpenAI API.",
    img: "/open.webp",
    link: "https://github.com/Aminsouhail/Image-generation---OpenAI-API",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-5xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[600px] xl:w-[400px] xl:h-[250px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Source Code</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
              Full-stack web developer
              </textPath>
            </text>
          </motion.svg>
          <Link
  href="/contact"
  className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
  style={{ transition: "transform 0.2s", textAlign: "center", lineHeight: "28px" }}
  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  Hire Me
</Link>

        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;