import React, { useState } from "react";
import Title from "../../../../../component/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const GalleryTab = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

  return (
    <div className="w-full relative p-4 sm:p-7">
      {/* Navigation Buttons */}
      <div className="absolute -bottom-9 right-1/2   transform translate-x-1/2 z-50 flex gap-2 sm:gap-3">
        <div className="custom-gallery-prev cursor-pointer bg-[#FFEEEC] text-orange-500 shadow-md p-2 sm:p-3 rounded-md hover:bg-orange-100 transition">
          <FaArrowLeft size={18} />
        </div>
        <div className="custom-gallery-next cursor-pointer bg-[#FFEEEC] text-orange-500 shadow-md p-2 sm:p-3 rounded-md hover:bg-orange-100 transition">
          <FaArrowRight size={18} />
        </div>
      </div>

      {/* Title */}
      <div className="mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Gallery & <span className="text-orange-600">Property Photos</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Everything you need for comfort and security.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-4 sm:mt-6">
        {/* Main Slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={{
            prevEl: ".custom-gallery-prev",
            nextEl: ".custom-gallery-next",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="rounded-xl overflow-hidden shadow-xl mySwiper2"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover rounded-lg"
                alt="Property"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper mt-3 sm:mt-4"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-[60px] sm:h-[70px] md:h-20 lg:h-[90px] object-cover rounded-md border border-gray-300 cursor-pointer hover:opacity-80 transition"
                alt={`thumb-${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryTab;
