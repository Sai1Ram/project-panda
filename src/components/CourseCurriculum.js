import React, { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
const CourseCurriculum = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="text-white w-screen lg:my-16 my-8 p-4">
      <div className="flex justify-center lg:w-4/5 w-full gap-6 mx-auto relative lg:flex-row flex-col">
        <motion.div
          // initial={{ rotateY: -90, opacity: 0 }}
          // whileInView={{ rotateY: 0, opacity: 1 }}
          // transition={{ duration: 1, ease: "easeInOut" }}
          ref={ref}
        style={{ rotateY, opacity }}
          className="lg:w-1/3 w-full sticky top-0 h-64 border bg-gradient-linear border-borderColor rounded-lg mt-6 p-6"
        >
          <p className="text-gray-300 text-lg">Live master class</p>
          <h1 className="text-3xl font-bold my-4">Reel Editing</h1>
          <h1 className="text-3xl font-semibold text-primary">
            &#x20b9; 999 <span className="line-through text-white"> &#x20b9; 1999</span>
          </h1>
          <motion.button
            className="bg-white text-gray-900 font-bold text-lg w-full py-3 rounded-lg my-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            Enroll now
          </motion.button>
        </motion.div>
        <div className=" lg:w-2/3 w-full">
          <h1 className="font-semibold text-4xl mb-6">The curriculum</h1>
          <div className="bg-black lg:p-6 p-4 rounded-lg drop-shadow-lg shadow-white border border-borderColor">
            <div className="flex items-center gap-6">
              <img
                src={
                  "https://www.pandaskillschool.com/assets/images/channels4_profile.webp"
                }
                alt=""
                className="rounded-lg size-10"
              />
              <h1 className="font-semibold lg:text-3xl text-xl">
                Day 1 - Fundamentals of Reel Editing
              </h1>
            </div>
            <p className="text-gray-300 my-4 lg:text-base text-sm">
              On the first day you will master the fundamentals of the reel
              editing to build a solid foundation before learn the advance
              topics.
            </p>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="module1 cursor-pointer mb-4 flex border border-borderColor rounded-lg lg:p-4 p-3 gap-4"
              >
                <div className="lg:block hidden">
                  <div className="flex justify-center items-center rounded-lg bg-gradient-box border border-borderColor w-16 h-16">
                    <FaCheckCircle size={30} color="var(--primary)"/>
                  </div>
                </div>
                <div className="">
                  <h1 className="lg:text-2xl text-lg font-semibold">
                    Module 1 -{" "}
                    <span className="uppercase">
                      Introduction to video editing
                    </span>
                  </h1>
                  <p className="text-gray-300 mt-2 lg:text-base text-sm">
                    Learn the basics of video editing and the tools you need to
                    get started. You will also learn how to import and organize
                    your footage. We will also cover the basics of video editing
                    software.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
