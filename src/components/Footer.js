export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 sm:flex-col md:flex-row text-center sm:text-center md:text-left">
        {/* النص الرئيسي */}
        <div className="w-full sm:w-auto">
          <p className="text-xl font-semibold mb-2">عيادات التجميل</p>
          <p>&copy; {year}. جميع الحقوق محفوظة.</p>
        </div>

        {/* روابط اجتماعية */}
        <div className="flex justify-center gap-8 sm:gap-4">
          <a
            href="#"
            className="text-white text-2xl hover:text-gray-300 transition duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-gray-300 transition duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-gray-300 transition duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* معلومات الاتصال */}
        <div className="text-sm w-full sm:w-auto">
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
        <div className="w-full sm:w-auto">
          <p className="mt-4 text-xl">
            تصميم وتطوير بواسطة <span className="font-semibold">Next step</span>
          </p>
        </div>

        {/* قسم التواصل */}
        <div className="w-full sm:w-auto">
          <p className="text-lg font-semibold mb-3">للتواصل معنا</p>
          <button className="bg-yellow-400 text-gray-800 py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition">
            تواصل معنا
          </button>
        </div>
      </div>
    </footer>
  );
}
