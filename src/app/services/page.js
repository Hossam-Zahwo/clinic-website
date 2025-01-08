"use client";
import { useState } from "react";
import SliderPage from "./SliderPage";
import Image from "next/image";

const servic = [
  {
    title: "حقن الفيلر",
    description: "تحقيق نتائج مذهلة للبشرة",
    imag: "/tbl.jpg",
    details: "حقن الفيلر هي تقنية تجميلية تُستخدم لملء الخطوط الدقيقة واستعادة مظهر شبابي للبشرة.",
    width: 400,
    height: 300,
  },
  {
    title: "شد الوجه",
    description: "استعادة شباب الوجه بدون جراحة",
    imag: "/أضرار-شد-الوجه.webp",
    details: "شد الوجه بدون جراحة باستخدام تقنيات مبتكرة لتحسين مظهر البشرة.",
    width: 400,
    height: 300,
  },
  {
    title: "التجميل بالليزر",
    description: "إزالة الشعر والندبات بأمان",
    imag: "/images.jpg",
    details: "تقنيات الليزر لإزالة الشعر والندبات بشكل آمن وفعال للحصول على بشرة ناعمة.",
    width: 400,
    height: 300,
  },
  {
    title: "تقشير البشرة",
    description: "حصولك على بشرة نقية ومتألقة",
    imag: "/2-58.jpg",
    details: "تقشير البشرة للتخلص من الخلايا الميتة وتحسين نضارة البشرة.",
    width: 400,
    height: 300,
  },
  {
    title: "علاج حب الشباب",
    description: "حلول متقدمة لعلاج البشرة",
    imag: "/علاج-حب-الشباب-بالليزر-1.webp",
    details: "علاج حب الشباب باستخدام أحدث التقنيات لإزالة البثور وتحسين نسيج البشرة.",
    width: 400,
    height: 300,
  },
  {
    title: "تبييض الأسنان",
    description: "ابتسامة مشرقة وجذابة",
    imag: "/b4f39595c829e37573697af33793f94a.png.webp",
    details: "تقنيات تبييض الأسنان لاستعادة لمعان الابتسامة وجاذبيتها.",
    width: 400,
    height: 300,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="container mx-auto px-4 py-12">
      <SliderPage />
      <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-10">خدماتنا التجميلية</h1>
      <p className="text-center text-gray-700 mb-12">
        استمتع بمجموعة واسعة من الخدمات التجميلية التي تقدمها عيادتنا بأحدث التقنيات.
      </p>

      {/* Grid of Services */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servic.map((service, index) => (
          <div
            key={index}
            className="service-card p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl text-center cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <Image
              src={service.imag}
              alt={service.title}
              width={service.width}
              height={service.height}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 relative max-w-lg w-full">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedService(null)}
            >
              X
            </button>
            <Image
              src={selectedService.imag}
              alt={selectedService.title}
              width={selectedService.width}
              height={selectedService.height}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">{selectedService.title}</h2>
            <p className="text-gray-700">{selectedService.details}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Services;
