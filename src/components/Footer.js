export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-8 flex justify-center items-center gap-5">
      {/* النص الرئيسي */}
      <div className="mb-6">
        <p className="text-xl font-semibold">عيادات التجميل</p>
        <p>&copy; {year}. جميع الحقوق محفوظة.</p>
      </div>

      {/* روابط اجتماعية */}
      <div className="flex justify-center gap-8 mb-6">
        <a
          href="#"
          className="text-white text-2xl hover:text-gray-300 transition duration-300"
        >
          <i className="fab fa-facebook"></i> {/* إضافة أيقونة الفيسبوك */}
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:text-gray-300 transition duration-300"
        >
          <i className="fab fa-twitter"></i> {/* إضافة أيقونة تويتر */}
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:text-gray-300 transition duration-300"
        >
          <i className="fab fa-instagram"></i> {/* إضافة أيقونة إنستاجرام */}
        </a>
      </div>

      {/* معلومات الاتصال */}
      <div className="text-sm">
        <p>
          الهاتف:{" "}
          <a href="tel:+201234567890" className="hover:underline">
            +20 123 456 7890
          </a>
        </p>
        <p>
          البريد الإلكتروني:{" "}
          <a href="mailto:info@clinic.com" className="hover:underline">
            info@clinic.com
          </a>
        </p>
      </div>

      {/* حقوق ملكية */}
      <div className="mt-6 text-xl">
        <p>
          تصميم وتطوير بواسطة <span className="font-semibold">Next step</span>
        </p>
      </div>

      {/* قسم التواصل */}
      <div className="mb-6">
        <p className="text-lg font-semibold">للتواصل معنا</p>
        <button className="bg-yellow-400 text-gray-800 py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition">
          تواصل معنا
        </button>
      </div>
    </footer>
  );
}
