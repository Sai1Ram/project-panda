import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import reel1 from "../assets/videos/reel-1.mp4";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ReelSection = () => {

  return (
    <div className="h-screen text-center text-white flex flex-col justify-center items-center gap-12 ">
      <h1 className="lg:text-5xl text-3xl font-semibold">
      Learn How To Create Edits Like These

      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        depth={100}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-4/5 overflow-hidden"
      >
        <SwiperSlide>
        <video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src={reel1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </SwiperSlide>
        <SwiperSlide><video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src={reel1} type="video/mp4" />
          Your browser does not support the video tag.
        </video></SwiperSlide>
        <SwiperSlide><video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src={reel1} type="video/mp4" />
          Your browser does not support the video tag.
        </video></SwiperSlide>
        <SwiperSlide><video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src={reel1} type="video/mp4" />
          Your browser does not support the video tag.
        </video></SwiperSlide>
        <SwiperSlide><video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src={reel1} type="video/mp4" />
          Your browser does not support the video tag.
        </video></SwiperSlide>
        <SwiperSlide><video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src={reel1} type="video/mp4" />
          Your browser does not support the video tag.
        </video></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReelSection;
