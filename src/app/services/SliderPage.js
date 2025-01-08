// src/app/slider/page.js
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
    <div className="h-screen w-full">
      <Swiper
        direction="vertical" // الحركة عمودية
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }} // التبديل التلقائي كل 3 ثوانٍ
        pagination={{ clickable: true }}
        loop={true} // التكرار المستمر
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-screen bg-cover bg-center"
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
