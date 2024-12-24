import React from "react";
import midSvg from "../assets/img/heroSection.svg";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-white flex-col px-8">
      {/* <div class="framer-cthk98-container">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: 0,
            opacity: 0.1,
            background:
              "url(&quot;data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='40' patternTransform='scale(6.444444444444445) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='%23ebe5ff00'/><path d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='%23e3e3e3' fill='none'/><path d='M-20.133 24.568C-13.178 24.932-6.452 27.376 0 30c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='%23666666' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>&quot;)",
          }}
        >
          <object
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              opacity: 0.1,
              transform: "none",
            }}
            type="image/svg+xml"
            data="data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='40' patternTransform='scale(6.444444444444445) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='%23ebe5ff00'/><path d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='%23e3e3e3' fill='none'/><path d='M-20.133 24.568C-13.178 24.932-6.452 27.376 0 30c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='%23666666' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>    "
          >
            SVG not supported
          </object>
        </div>
      </div> */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0 }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="border rounded-2xl px-6 flex items-center gap-2 relative"
      >
        <span className="pulsating-circle"></span>{" "}
        <span className="flex ml-4">3 spot left</span>
      </motion.div>
      <motion.h1
        initial={{ y: 100, opacity: 0, scale: 0.75 }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        className="bg-gradient-text lg:text-7xl text-4xl font-extrabold text-transparent bg-clip-text py-4 text-center"
      >
        Unlock the secret of
        <br /> Reel Editing
      </motion.h1>
      <img src={midSvg} alt="" className="lg:w-80 w-40" />
      <motion.p
        initial={{ y: 50, opacity: 0, scale: 0.75 }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.75,
          },
        }}
        className="lg:text-xl font-semibold text-gray-300 my-4 text-center"
      >
        JOIN OUR LIVE WORKSHOP AND MASTER THE ART OF REEL EDITING
      </motion.p>
      <motion.div
        className="flex flex-col gap-4 justify-center items-center"
        initial={{ y: 50, opacity: 0, scale: 0.75 }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      >
        <div className="border border-gray-300 rounded-xl flex lg:flex-row flex-col">
          <div className="left lg:p-6 p-4 flex w-72 gap-4">
            <CiCalendar className="size-10" />
            <div className="">
              <span className="text-slate-300 font-light">DATES</span>
              <span className="block text-white text-xl">
                15th - 20th August
              </span>
            </div>
          </div>
          <div className="right lg:border-l border-t lg:border-t-0 lg:p-6 p-4 w-72 flex gap-4">
            <IoMdTime className="size-10" />
            <div className="">
              <span className="text-slate-300 font-light">TIMING</span>
              <span className="block text-white text-xl">7PM - 9PM</span>
            </div>
          </div>
        </div>
        <motion.button
          className="rounded-xl bg-gradient-linear py-3 px-6 text-xl font-semibold cursor-pointer"
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          Enroll Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
