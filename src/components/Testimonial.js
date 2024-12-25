import React from "react";
import ImageSlider from "./ImgSlider";

const Testimonial = () => {
  return (
    <div className="w-screen flex justify-center items-center lg:my-16 my-8 text-white p-4">
      <div className="lg:w-4/5 w-full">
        <h1 className="lg:text-5xl text-3xl font-semibold">
          Listen what our client says about us
        </h1>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Testimonial;
