"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header 
      className="bg-gray-200 text-black my-4 mx-5 px-4 py-2 rounded-full flex justify-between items-center relative"
      dir="rtl"
    >
      {/* اللوجو */}
      <div className="flex justify-center items-center">
        <Image 
          src="/clinic-high-resolution-logo-transparent.svg" 
          alt="عيادة التجميل"  // Improved alt text
          loading="lazy" 
          width={250} 
          height={50} 
          className="" // عكس الترتيب (بدل margin-right استخدم margin-left)
        />
      </div>

      {/* القائمة في الشاشات الكبيرة */}
      <nav className="hidden md:flex flex-1 justify-center text-center">
  <ul className="flex justify-center gap-8">
    <li className="relative group">
      <a href="/contact" className="hover:text-purple-600 font-bold">اتصل بنا</a>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </li>
    <li className="relative group">
      <a href="/about" className="hover:text-purple-600 font-bold">من نحن</a>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </li>
    <li className="relative group">
      <a href="/services" className="hover:text-purple-600 font-bold">الخدمات</a>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </li>
    <li className="relative group">
      <a href="/" className="hover:text-purple-600 font-bold">عيادات التجميل</a>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </li>
  </ul>
</nav>



      {/* زر الحجز في الشاشات الكبيرة */}
      <div className="hidden md:flex md:justify-center md:items-center">
        <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 px-6 rounded-full font-semibold flex justify-between items-center gap-3 shadow-md hover:opacity-80 transition">
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
      </div>

      {/* زر القائمة للموبايل */}
      <div className="md:hidden">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:opacity-80 transition flex items-center gap-2"
          aria-label="Toggle navigation menu"  // Accessibility improvement
          aria-expanded={menuOpen}  // Added aria-expanded
        >
          <span>القائمة</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} // تغيير الأيقونة
            />
          </svg>
        </button>
      </div>

      {/* القائمة والزر: تظهر فقط في الموبايل */}
      {menuOpen && (
        <div className="absolute top-16 left-0 bg-gray-200 rounded-lg shadow-lg w-60 p-4 flex flex-col gap-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li><a href="/contact" className="hover:text-purple-600 font-bold">اتصل بنا</a></li>
            <li><a href="/about" className="hover:text-purple-600 font-bold">من نحن</a></li>
            <li><a href="/services" className="hover:text-purple-600 font-bold">الخدمات</a></li>
            <li><a href="/" className="hover:text-purple-600 font-bold">عيادات التجميل</a></li>
          </ul>
          <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 px-6 rounded-full font-semibold flex justify-between items-center gap-3 shadow-md hover:opacity-80 transition">
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
      )}
    </header>
  );
}
