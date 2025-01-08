"use client";
import { useState } from "react";
import SliderPage from "./SliderPage";
import Image from "next/image";
import InfoData from "./InfoData";

const servic = [
  {
    title: "حقن الفيلر",
    description: "تحقيق نتائج مذهلة للبشرة",
    imag: "/tbl.jpg",
    details: "حقن الفيلر هي إجراء تجميلي غير جراحي يُستخدم لملء التجاعيد والخطوط الدقيقة، واستعادة حجم الوجه المفقود نتيجة التقدم في العمر. تتكون الفيلرات عادةً من مواد مثل حمض الهيالورونيك، الذي يساعد في ترطيب البشرة وتحفيز إنتاج الكولاجين. تُستخدم الفيلرات أيضًا لتكبير الشفاه وتحديد الفك وتصحيح عدم التناسق في ملامح الوجه. يستغرق الإجراء عادةً أقل من ساعة، وتظهر النتائج فورًا بعد الحقن، مع فترة تعافي قصيرة.",
    width: 400,
    height: 300,
  },
  {
    title: "شد الوجه",
    description: "استعادة شباب الوجه بدون جراحة",
    imag: "/أضرار-شد-الوجه.webp",
    details: "شد الوجه هو إجراء يهدف إلى تقليل التجاعيد والترهلات الجلدية، مما يمنح الوجه مظهرًا أكثر شبابًا. هناك تقنيات غير جراحية لشد الوجه، مثل استخدام الخيوط التجميلية أو تقنيات الليزر، التي تعمل على تحفيز إنتاج الكولاجين وشد الجلد دون الحاجة إلى جراحة. تتميز هذه الإجراءات بفترة تعافي قصيرة ونتائج تدوم لفترات معقولة.",
    width: 400,
    height: 300,
  },
  {
    title: "التجميل بالليزر",
    description: "إزالة الشعر والندبات بأمان",
    imag: "/images.jpg",
    details: "التجميل بالليزر يشمل مجموعة واسعة من الإجراءات التي تستخدم تقنية الليزر لتحسين مظهر البشرة. من بين هذه الإجراءات إزالة الشعر بالليزر، علاج التصبغات والبقع الداكنة، تقليل ندبات حب الشباب، وتحفيز إنتاج الكولاجين لتجديد البشرة. تُعتبر هذه التقنيات آمنة وفعّالة، وتتميز بفترات تعافي قصيرة.",
    width: 400,
    height: 300,
  },
  {
    title: "تقشير البشرة",
    description: "حصولك على بشرة نقية ومتألقة",
    imag: "/2-58.jpg",
    details: "تقشير البشرة هو إجراء يهدف إلى إزالة الطبقات السطحية من الجلد لتحفيز نمو خلايا جديدة، مما يؤدي إلى بشرة أكثر نعومة وإشراقًا. هناك أنواع مختلفة من التقشير، بما في ذلك التقشير الكيميائي والتقشير بالليزر، ويُستخدم كل نوع وفقًا لنوع البشرة والمشكلات المستهدفة. يساعد التقشير في تحسين مظهر الندبات، التصبغات، والخطوط الدقيقة.",
    width: 400,
    height: 300,
  },
  {
    title: "علاج حب الشباب",
    description: "حلول متقدمة لعلاج البشرة",
    imag: "/علاج-حب-الشباب-بالليزر-1.webp",
    details: "تتضمن علاجات حب الشباب مجموعة من الإجراءات التي تهدف إلى تقليل ظهور الحبوب والندبات المرتبطة بها. من بين هذه العلاجات استخدام الليزر لتقليل نشاط الغدد الدهنية، التقشير الكيميائي لإزالة الخلايا الميتة، والعلاج الضوئي لتقليل الالتهابات. يتم تحديد العلاج المناسب بناءً على نوع وشدة حب الشباب.",
    width: 400,
    height: 300,
  },
  {
    title: "تبييض الأسنان",
    description: "ابتسامة مشرقة وجذابة",
    imag: "/b4f39595c829e37573697af33793f94a.png.webp",
    details: "تبييض الأسنان هو إجراء تجميلي يهدف إلى إزالة التصبغات والبقع من سطح الأسنان، مما يمنح الابتسامة مظهرًا أكثر إشراقًا. تتضمن التقنيات المستخدمة في التبييض استخدام مواد مبيضة تحتوي على بيروكسيد الهيدروجين أو الكارباميد، ويمكن إجراء التبييض في العيادة أو باستخدام مجموعات منزلية تحت إشراف طبيب الأسنان. تظهر النتائج عادةً بعد جلسة أو عدة جلسات، وتختلف مدة استمراريتها بناءً على نمط الحياة والعناية الفموية.",
    width: 400,
    height: 300,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  
  
  const handleOpenPopup  = (items) => {
    setCurrentData(items);
    setIsOpen(true)
  }
  
  const handleClosePopup = () => {
    setCurrentData(null);
    setIsOpen(false)
  }

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
            onClick={() => handleOpenPopup(service)}
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
      <InfoData 
      isOpen={isOpen} 
      data={currentData} 
      onClose={handleClosePopup} 
      />
    </main>
  );
};

export default Services;
