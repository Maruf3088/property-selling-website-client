import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Title from "../../../../component/title/Title";
import OurAgentCard from "./OurAgentCard";

const OurAgent = () => {
  return (
    <div className="container mx-auto py-12 relative px-4">
      <Title
        title={"Our Agent"}
        description={
          "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening"
        }
      ></Title>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-12 right-5 sm:right-10 z-50 flex gap-3">
        <div className="custom-agent-prev cursor-pointer bg-[#FFEEEC] text-orange-500 shadow-md p-3 rounded-md">
          <FaArrowLeft />
        </div>
        <div className="custom-agent-next cursor-pointer bg-[#FFEEEC] text-orange-500 shadow-md p-3 rounded-md">
          <FaArrowRight />
        </div>
      </div>

      <div>
        <Swiper
          slidesPerView={1} // default for mobile
          spaceBetween={20}
          loop={true}
          keyboard={{ enabled: true }}
          navigation={{
            prevEl: ".custom-agent-prev",
            nextEl: ".custom-agent-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
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
          modules={[Keyboard, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><OurAgentCard /></SwiperSlide>
          <SwiperSlide><OurAgentCard /></SwiperSlide>
          <SwiperSlide><OurAgentCard /></SwiperSlide>
          <SwiperSlide><OurAgentCard /></SwiperSlide>
          <SwiperSlide><OurAgentCard /></SwiperSlide>
          <SwiperSlide><OurAgentCard /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurAgent;
