"use client";
import { useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView
import Image from "next/image";
import SliderPage from "./SliderPage";

// Data for services
const servic = [
  {
    title: "حقن الفيلر",
    description: "تحقيق نتائج مذهلة للبشرة",
    imag: "/tbl.jpg",
    details: "حقن الفيلر هي تقنية تجميلية تُستخدم لملء الخطوط الدقيقة واستعادة مظهر شبابي للبشرة.",
    price: "1500 جنيه",
    duration: "30 دقيقة",
    steps: [
      "استشارة مع الطبيب لتحديد المناطق المستهدفة",
      "تطبيق كريم مخدر على المناطق المحددة",
      "حقن الفيلر باستخدام إبرة دقيقة",
      "مراقبة النتائج والتأكد من رضا العميل"
    ],
    risks: [
      "تورم مؤقت",
      "كدمات طفيفة",
      "حساسية نادرة تجاه المواد المستخدمة"
    ],
    beforeAfter: {
      before: "/before-filler.jpg",
      after: "/after-filler.jpg"
    },
    width: 400,
    height: 300,
  },
  {
    title: "شد الوجه",
    description: "استعادة شباب الوجه بدون جراحة",
    imag: "/أضرار-شد-الوجه.webp",
    details: "شد الوجه بدون جراحة باستخدام تقنيات مبتكرة لتحسين مظهر البشرة.",
    price: "2500 جنيه",
    duration: "45 دقيقة",
    steps: [
      "استشارة مع الطبيب لتحديد المناطق المستهدفة",
      "استخدام جهاز شد الوجه بتقنية الموجات فوق الصوتية",
      "مراقبة النتائج بعد الجلسة"
    ],
    risks: [
      "احمرار مؤقت في الجلد",
      "تورم خفيف"
    ],
    beforeAfter: {
      before: "/before-lifting.jpg",
      after: "/after-lifting.jpg"
    },
    width: 400,
    height: 300,
  },
  {
    title: "التجميل بالليزر",
    description: "إزالة الشعر والندبات بأمان",
    imag: "/images.jpg",
    details: "تقنيات الليزر لإزالة الشعر والندبات بشكل آمن وفعال للحصول على بشرة ناعمة.",
    price: "1200 جنيه للجلسة",
    duration: "20 دقيقة",
    steps: [
      "استشارة مع الطبيب لتحديد المناطق المستهدفة",
      "تنظيف البشرة واستخدام جهاز الليزر",
      "مراقبة النتائج والجلوس لفترة قصيرة بعد العلاج"
    ],
    risks: [
      "احمرار مؤقت",
      "تهيج الجلد في بعض الحالات"
    ],
    beforeAfter: {
      before: "/before-laser.jpg",
      after: "/after-laser.jpg"
    },
    width: 400,
    height: 300,
  },
  {
    title: "تقشير البشرة",
    description: "حصولك على بشرة نقية ومتألقة",
    imag: "/2-58.jpg",
    details: "تقشير البشرة للتخلص من الخلايا الميتة وتحسين نضارة البشرة.",
    price: "800 جنيه",
    duration: "30 دقيقة",
    steps: [
      "تنظيف البشرة بشكل جيد",
      "استخدام المحلول الكيميائي لتقشير البشرة",
      "ترطيب البشرة بعد التقشير"
    ],
    risks: [
      "جفاف مؤقت للبشرة",
      "احمرار طفيف"
    ],
    beforeAfter: {
      before: "/before-peel.jpg",
      after: "/after-peel.jpg"
    },
    width: 400,
    height: 300,
  },
  {
    title: "علاج حب الشباب",
    description: "حلول متقدمة لعلاج البشرة",
    imag: "/علاج-حب-الشباب-بالليزر-1.webp",
    details: "علاج حب الشباب باستخدام أحدث التقنيات لإزالة البثور وتحسين نسيج البشرة.",
    price: "1000 جنيه للجلسة",
    duration: "30 دقيقة",
    steps: [
      "استشارة مع الطبيب لتقييم حالة البشرة",
      "استخدام الليزر أو العلاجات الموضعية",
      "مراقبة النتائج والتوصيات للعناية بالبشرة بعد العلاج"
    ],
    risks: [
      "تهيج مؤقت في البشرة",
      "جفاف البشرة"
    ],
    beforeAfter: {
      before: "/before-acne.jpg",
      after: "/after-acne.jpg"
    },
    width: 400,
    height: 300,
  },
  {
    title: "تبييض الأسنان",
    description: "ابتسامة مشرقة وجذابة",
    imag: "/b4f39595c829e37573697af33793f94a.png.webp",
    details: "تقنيات تبييض الأسنان لاستعادة لمعان الابتسامة وجاذبيتها.",
    price: "500 جنيه",
    duration: "45 دقيقة",
    steps: [
      "تنظيف الأسنان",
      "تطبيق مادة التبييض على الأسنان",
      "استخدام الضوء لتنشيط التبييض"
    ],
    risks: [
      "حساسية الأسنان بعد التبييض",
      "احمرار اللثة"
    ],
    beforeAfter: {
      before: "/before-teeth-whitening.jpg",
      after: "/after-teeth-whitening.jpg"
    },
    width: 400,
    height: 300,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="container mx-auto px-4 py-12">
      <SliderPage/>
      <h1 className="text-4xl font-extrabold text-center mt-6 mb-10 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">خدماتنا التجميلية</h1>
      <p className="text-center text-gray-700 mb-12">
        استمتع بمجموعة واسعة من الخدمات التجميلية التي تقدمها عيادتنا بأحدث التقنيات.
      </p>

      {/* Grid of Services */}
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {servic.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              className={`service-card p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl text-center cursor-pointer flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              onClick={() => setSelectedService(service)}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index % 2 === 0 ? -100 : 100) }}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              <Image
                src={service.imag}
                alt={service.title}
                width={service.width}
                height={service.height}
                className="w-1/2 h-56 object-cover rounded-md mb-4"
              />
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Details Modal */}
      {selectedService && (
  <div
    className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={() => setSelectedService(null)} // Close modal on background click
  >
    <div
  className="bg-white rounded-lg p-8 relative max-w-lg w-full h-[600px] overflow-y-auto"
  onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside the modal
>
  <button
    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
    onClick={() => setSelectedService(null)}
    aria-label="Close modal"
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
  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">{selectedService.title}</h2>
  <p className="text-gray-700">{selectedService.details}</p>

  <div className="mt-4">
    <p className="text-gray-700"><strong>السعر:</strong> {selectedService.price}</p>
    <p className="text-gray-700"><strong>المدة:</strong> {selectedService.duration}</p>
  </div>

  <div className="mt-4">
    <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">الخطوات:</h3>
    <ul className="list-disc pl-6">
      {selectedService.steps.map((step, index) => (
        <li key={index} className="text-gray-600">{step}</li>
      ))}
    </ul>
  </div>

  <div className="mt-4">
    <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">المخاطر المحتملة:</h3>
    <ul className="list-disc pl-6">
      {selectedService.risks.map((risk, index) => (
        <li key={index} className="text-gray-600">{risk}</li>
      ))}
    </ul>
  </div>

  <div className="mt-4">
    <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">قبل وبعد:</h3>
    <div className="flex justify-between">
      <div className="w-1/2">
        <h4 className="text-gray-600 text-center">قبل</h4>
        <Image
          src={selectedService.beforeAfter.before}
          alt="Before"
          width={150}
          height={150}
          className="rounded-md mx-auto"
        />
      </div>
      <div className="w-1/2">
        <h4 className="text-gray-600 text-center">بعد</h4>
        <Image
          src={selectedService.beforeAfter.after}
          alt="After"
          width={150}
          height={150}
          className="rounded-md mx-auto"
        />
      </div>
    </div>
  </div>

  <div className="mt-6 text-center">
    <button
      onClick={() => setSelectedService(null)}
      className="bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-800"
    >
      إغلاق
    </button>
  </div>
</div>

  </div>
)}


    </main>
  );
};

export default Services;