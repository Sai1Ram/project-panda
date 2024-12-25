import { useState } from "react";
import { motion } from "framer-motion";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = ["https://i.ytimg.com/vi/R59eoAIwvBE/hq720.jpg", "https://i.ytimg.com/vi/_bVW5UNwte0/hq720.jpg", "https://i.ytimg.com/vi/R59eoAIwvBE/hq720.jpg", "https://i.ytimg.com/vi/_bVW5UNwte0/hq720.jpg", "https://i.ytimg.com/vi/R59eoAIwvBE/hq720.jpg"];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex items-center flex-col justify-center">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <button
          className="text-white mt-[400px]  rounded-full p-1 hover:bg-gray-300/90 transition duration-300"
          onClick={handleBack}
        >
          <GrFormPreviousLink className="text-white size-10" />
        </button>
        <button
          className="text-white mt-[400px]  rounded-full p-1 hover:bg-gray-300/90 transition duration-300"
          onClick={handleNext}
        >
          <GrFormNextLink className="text-white size-10" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;