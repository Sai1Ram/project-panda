import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import reel1 from "../assets/videos/reel-1.mp4";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ReelSection = () => {
  return (
    <div className="text-center text-white flex flex-col justify-center items-center gap-12 mb-16 p-4">
      <h1 className="lg:text-5xl text-3xl font-semibold">
        Learn How To Create Edits Like These
      </h1>
      <Swiper
        // slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        effect="coverflow"
        // rotate={50}
        loop={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        className="w-4/5 overflow-hidden h-full"
        style={{
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
        <SwiperSlide style={{
          height: "90%",
        }}>
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
        <SwiperSlide style={{
          height: "90%",
        }}>
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
        <SwiperSlide style={{
          height: "90%",
        }}>
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
        <SwiperSlide style={{
          height: "90%",
        }}>
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
        <SwiperSlide style={{
          height: "90%",
        }}>
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
        <SwiperSlide style={{
          height: "90%",
        }}>
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
      </Swiper>
    </div>
  );
};

export default ReelSection;
