import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import mentor from "../assets/img/mentor.webp";

const Mentor = () => {
  return (
    <div className="text-white w-screen lg:my-16 my-8 p-4">
      <div className="flex justify-center lg:w-4/5 w-full gap-6 mx-auto relative lg:flex-row flex-col">
        <div className="left lg:w-1/3 w-full">
          <img src={mentor} alt="" className="rounded-lg" />
          <div className="flex w-full justify-around gap-4 mt-4">
            <div className="bg-gradient-box flex flex-col lg:p-4 p-3 items-center justify-center rounded-lg cursor-pointer">
              <p className="text-center">20K+ Subscriber</p>
              <FaYoutube className="size-10" />
            </div>
            <div className="bg-gradient-box lg:p-4 p-3 flex flex-col items-center justify-center rounded-lg cursor-pointer">
              <p className="text-center">600+ Followers</p>
              <FaInstagram className="size-10" />
            </div>
            <div className="bg-gradient-box lg:p-4 p-3 flex flex-col items-center justify-center rounded-lg cursor-pointer">
              <p className="text-center">1.5K+ Followers</p>
              <FaDiscord className="size-10" />
            </div>
          </div>
        </div>
        <div className="right lg:w-2/3 w-full">
          <p className="">Meet your mentor</p>
          <h1 className="font-semibold text-4xl mb-6">
            Hii I am Atanusuta Panda AKA @editwithpanda
          </h1>
          <h1 className="font-bold text-6xl my-4">
            A Freelancing Video Editor and a content creator {" "}
            <span className="text-primary">with 3+ years of experience.</span>
          </h1>
          <p className="text-lg mt-8">
            I will be teaching you how to grow professionally as a Video Editor,
            find new clients, work with top creators and how to start your own
            Video Editing Agency,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
