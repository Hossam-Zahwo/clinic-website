
"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function ContactDoctor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // إرسال البيانات للخادم أو معالجتها هنا
  };

  return (
    <section className="pt-10 pb-10 bg-slate-200">
      <div className="w-[60%] m-auto mb-5 max-w-full text-center">
        <h2 className="text-3xl mb-2">احجز موعدك اليوم</h2>
        <p className="text-lg">
          املأ النموذج لتحديد موعد زيارتك لفريق الخبراء لدينا. نحن هنا لمساعدتك على البقاء بصحة جيدة.
        </p>
      </div>

      <div className="flex gap-8 max-[991px]:flex-col">
        <form
          className="text-center w-[50%] max-[991px]:w-full "
          onSubmit={handleSubmit}
        >
          <div className="flex gap-6 px-2 max-[991px]:flex-col">
            <div className="w-[50%] max-[991px]:w-full mb-4">
              <label className="block text-right mb-1 text-lg">الاسم</label>
              <input
                className="text-right w-full text-base p-2 border-blue-400 border-2 rounded-md outline-none transition-all focus:border-blue-300"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="أدخل اسمك الكامل"
              />
            </div>
            <div className="w-[50%] max-[991px]:w-full mb-4">
              <label className="block text-right mb-1 text-lg">البريد الإلكتروني</label>
              <input
                className="text-right w-full text-base p-2 border-blue-400 border-2 rounded-md outline-none transition-all focus:border-blue-300"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
          </div>

          <div className="flex gap-6 px-2 max-[991px]:flex-col">
            <div className="w-[50%] max-[991px]:w-full mb-4">
              <label className="block text-right mb-1 text-lg">رقم الهاتف</label>
              <input
                className="text-right w-full text-base p-2 border-blue-400 border-2 rounded-md outline-none transition-all focus:border-blue-300"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="أدخل رقم الهاتف"
              />
            </div>
            <div className="w-[50%] max-[991px]:w-full mb-4">
              <label className="block text-right mb-1 text-lg">الخدمة</label>
              <select
                className="text-right w-full text-base p-2 border-blue-400 border-2 rounded-md outline-none transition-all focus:border-blue-300"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="">اختر الخدمة</option>
                <option value="جراحة عامة">جراحة عامة</option>
                <option value="تجميل">تجميل</option>
                <option value="عيون">عيون</option>
              </select>
            </div>
          </div>

          <div className="flex gap-6 px-2 max-[991px]:flex-col">
            <div className="w-[50%] max-[991px]:w-full mb-4">
              <label className="block text-right mb-1 text-lg">تاريخ الكشف</label>
              <input
                className="text-right w-full text-base p-2 border-blue-400 border-2 rounded-md outline-none transition-all focus:border-blue-300"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-[50%] max-[991px]:w-full mb-4">
              <label className="block text-right mb-1 text-lg">الوقت</label>
              <select
                className="text-right w-full text-base p-2 border-blue-400 border-2 rounded-md outline-none transition-all focus:border-blue-300"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
              >
                <option value="">اختر الوقت</option>
                <option value="10:00AM">10:00AM</option>
                <option value="12:00PM">12:00PM</option>
                <option value="9:00PM">9:00PM</option>
              </select>
            </div>
          </div>

          <div className="w-full mb-4 px-2">
            <label className="block text-right mb-1 text-lg">المزيد من البيانات</label>
            <textarea
              className="min-h-[150px] text-right w-full text-base p-2 border-blue-400 border-2 rounded-md outline-none transition-all focus:border-blue-300"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="المزيد من البيانات"
            />
          </div>

          <button className="m-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-5 py-2 w-[40%] rounded-full font-semibold shadow-md hover:opacity-80 transition">
            إحجز الآن
          </button>
        </form>

        <div className="w-[50%] relative max-[767px]:h-auto max-[991px]:w-full px-2">
          <Image
            className="m-auto w-[85%] max-[991px]:w-[75%] rounded-[50px] shadow-blue-200"
            src="/pexels-pavel-danilyuk-5998474.jpg"
            alt="Doctor Consultation"
            width={400}
            height={600}
          />
          <div className="absolute right-[100px] bottom-[30px] p-4 text-lg rounded-md font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md hover:opacity-80 transition">
            <h3>احصل على خصم 10% على موعدك</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
