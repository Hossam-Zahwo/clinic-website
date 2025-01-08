"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SliderPage = () => {
  const images = [
    { src: "/tbl.jpg", alt: "صورة 1" },
    { src: "/أضرار-شد-الوجه.webp", alt: "صورة 2" },
    { src: "/images.jpg", alt: "صورة 3" },
    { src: "/2-58.jpg", alt: "صورة 4" },
    { src: "/علاج-حب-الشباب-بالليزر-1.webp", alt: "صورة 5" },
  ];

  return (
    <div className="h-96 w-full flex items-center justify-center border rounded-3xl">
      <Swiper
        direction="vertical"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full shadow-lg rounded-3xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-screen bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:scale-105"
              style={{ backgroundImage: `url(${image.src})` }}
              aria-label={image.alt}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPage;
