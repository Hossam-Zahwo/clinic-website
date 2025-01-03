import Head from 'next/head';
import Image from 'next/image';

import ServiceCard from '../components/ServiceCard';


function getRandomColor() { const letters = '0123456789ABCDEF'; let color = '#'; for (let i = 0; i < 6; i++) { color += letters[Math.floor(Math.random() * 16)]; } return color; }

export default function Home() {
  const services = [
    { title: "حقن الفيلر", description: "تحقيق نتائج مذهلة للبشرة", imag: "/tbl.jpg" },
    { title: "شد الوجه", description: "استعادة شباب الوجه بدون جراحة", imag: "/أضرار-شد-الوجه.webp" },
    { title: "التجميل بالليزر", description: "إزالة الشعر والندبات بأمان", imag: "/images.jpg" },
    { title: "تقشير البشرة", description: "حصولك على بشرة نقية ومتألقة", imag: "/2-58.jpg" },
    { title: "علاج حب الشباب", description: "حلول متقدمة لعلاج البشرة", imag: "/علاج-حب-الشباب-بالليزر-1.webp" },
    { title: "تبييض الأسنان", description: "ابتسامة مشرقة وجذابة", imag: "/b4f39595c829e37573697af33793f94a.png.webp" },
  ];

  return (
    <div className="text-black">
  

      <section className="text-center py-5 grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 gap-5">
        <div className="flex justify-center items-center w-full h-full">
          <div
            className="flex flex-col justify-center items-center rounded-xl w-full h-full shadow-md bg-gray-300 p-10"
            style={{
              backgroundImage: "url('/abstract-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-4xl font-extrabold mb-4 text-white">مرحبًا بكم في عيادات التجميل</h1>
            <p className="text-lg mb-6 text-white">نقدم لكم أفضل الخدمات التجميلية من متخصصين ذوي خبرة.</p>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <button className="border border-gray-800 text-gray-800 py-2 px-8 rounded-full text-xl hover:bg-white transition">
                احجز موعدك الآن
              </button>
              <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 px-6 rounded-full font-semibold flex justify-center items-center gap-3 shadow-md hover:opacity-80 transition">
                <span>احجز الآن</span>
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-purple-600 transform rotate-45"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
              </button>
            </div>
            <div className="grid grid-cols-2 mt-6 gap-20">
              <div className="relative h-40 flex items-center">
                <div className="absolute w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg z-10 left-0">
                  <Image src="/pexels-pavel-danilyuk-5998474.jpg" alt="Image 1" layout="fill" objectFit="cover" />
                </div>
                <div className="absolute w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg z-20 left-10">
                  <Image src="/pexels-pavel-danilyuk-5998474.jpg" alt="Image 2" layout="fill" objectFit="cover" />
                </div>
                <div className="absolute w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg z-30 left-20">
                  <Image src="/pexels-pavel-danilyuk-5998474.jpg" alt="Image 3" layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <h2 className="text-2xl font-bold text-black">50K+ Us</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full mx-auto">
          <div className="overflow-hidden rounded-xl w-full shadow-md">
            <Image
              src="/pexels-gustavo-fring-3985299.jpg"
              alt="doctor"
              layout="responsive"
              width={700}
              height={400}
              className="transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const gradient = `linear-gradient( ${getRandomColor()} 0%, ${getRandomColor()} 100%)`;
            return (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                imag={service.imag} 
                gradient={gradient} 
              />
            );
          })}
        </div>
      </section>


    
    </div>
  );
}
