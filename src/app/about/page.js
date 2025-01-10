import React from "react";

const features = [
  {
    title: "سهولة الاستخدام",
    description: "واجهة مستخدم بسيطة وسهلة تتيح لك حجز المواعيد بسرعة وسلاسة.",
    color: "text-pink-500",
  },
  {
    title: "أطباء معتمدون",
    description: "قائمة بأفضل أطباء التجميل المعتمدين لضمان أفضل النتائج.",
    color: "text-pink-500",
  },
  {
    title: "خيارات متعددة",
    description:
      "اختر من بين العديد من العيادات بناءً على تقييمات العملاء والخدمات المقدمة.",
    color: "text-pink-500",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-red-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">عن مشروعنا</h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          نقدم لك تجربة حجز سهلة وفعّالة لتوفير الوقت والجهد في اختيار أفضل
          عيادات التجميل التي تناسب احتياجاتك وتطلعاتك.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer"
            >
              <h3 className={`text-2xl font-semibold mb-4 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
