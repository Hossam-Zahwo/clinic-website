import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-200 text-black my-4 mx-5 px-4 py-2 rounded-full flex justify-between items-center">
      {/* زر مستطيل مع كلمة ودائرة */}
      <button className="bg-gradient-to-r w-52 from-purple-400 to-pink-400 text-white py-2 px-6 rounded-full font-semibold flex justify-between items-center gap-3 shadow-md hover:opacity-80 transition">
        <span>احجز الآن</span>
        {/* دائرة بيضاء مع سهم */}
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

      {/* القائمة في المنتصف */}
      <nav className="flex-1 text-center">
        <ul className="flex justify-center gap-8">
          <li><a href="#contact" className="hover:text-purple-600 font-bold">اتصل بنا</a></li>
          <li><a href="#about" className="hover:text-purple-600 font-bold">من نحن</a></li>
          <li><a href="#services" className="hover:text-purple-600 font-bold">الخدمات</a></li>
          <li><a href="#" className="hover:text-purple-600 font-bold">عيادات التجميل</a></li>
        </ul>
      </nav>

      {/* اللوجو في الجهة اليمنى */}
      <div className="flex items-center">
        <Image 
          src="/clinic-high-resolution-logo-transparent.svg" 
          alt="Logo" 
          loading="lazy" 
          width={350} 
          height={88} 
          className="mr-4"
        />
      </div>
    </header>
  );
}
