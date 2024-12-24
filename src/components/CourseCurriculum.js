import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
const CourseCurriculum = () => {
  return (
    <div className="text-white w-screen">
      <div className="flex justify-center w-4/5 gap-6 mx-auto relative">
        <div className="left w-2/3">
          <h1 className="font-semibold text-4xl mb-6">The curriculum</h1>
          <div className="bg-black p-6 rounded-lg drop-shadow-lg shadow-white custom-border">
            <div className="flex items-center gap-6">
              <img
                src={
                  "https://www.pandaskillschool.com/assets/images/channels4_profile.webp"
                }
                alt=""
                className="rounded-lg size-10"
              />
              <h1 className="font-semibold text-3xl">
                Day 1 - Fundamentals of Reel Editing
              </h1>
            </div>
            <p className="text-gray-300 my-4">
              On the first day you will master the fundamentals of the reel
              editing to build a solid foundation before learn the advance
              topics.
            </p>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="module1 cursor-pointer mb-4 flex custom-border rounded-lg p-4 gap-4"
              >
                <div className="left">
                  <div className="flex justify-center items-center rounded-lg bg-gradient-linear w-16 h-16">
                    <FaCheckCircle size={30} />
                  </div>
                </div>
                <div className="">
                  <h1 className="text-2xl font-semibold">
                    Module 1 -{" "}
                    <span className="uppercase">
                      Introduction to video editing
                    </span>
                  </h1>
                  <p className="text-gray-300">
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
        <motion.div
           initial={{ rotateY: -90, opacity: 0 }}
           whileInView={{ rotateY: 0, opacity: 1 }}
           transition={{  duration: 1, ease: "easeInOut" }}
        className="right w-1/3 sticky top-0 h-64 border bg-gradient-linear custom-border rounded-lg mt-6 p-6">
          <p className="text-gray-300 text-lg">Live master class</p>
          <h1 className="text-3xl font-bold my-4">Reel Editing</h1>
          <h1 className="text-3xl font-semibold ">
            &#x20b9; 999 <span className="line-through"> &#x20b9; 1999</span>
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
      </div>
    </div>
  );
};

export default CourseCurriculum;
