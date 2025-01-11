"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function contact() {

    const [contactData, setcontactData] = useState({
      phone: '',
      email: '',
      message: '',
    });

    const inputValue = (e)  => {
      const {name,  value} = e.target;
      setcontactData({...contactData, [name]: value});
    }

    const sendData = (e) => {
      e.preventDefault();
      console.log(contactData);
    }
  return (
    <section className="pt-[30px] pb-[30px]">
      <div className="p-[10px] mb-[10px]">
      <h1 className='text-4xl font-extrabold text-center mt-6 mb-10 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text'>اتصل بنا</h1>
      <p className='leading-[1.7rem] text-center text-[18px] w-[70%] m-auto max-[991px]:w-full'> مرحبًا بك في مركزنا للتجميل نحن هنا للإجابة على جميع استفساراتك وتقديم الدعم الذي تحتاجه لتجربة تجميل استثنائية لا تتردد في التواصل معنا من خلال النموذج أدناه أو عبر وسائل الاتصال المتاحة نسعد بخدمتك دائمًا </p>
      </div>

      <form className="text-center mb-[20px]" 
      onSubmit={sendData}>
      <div className="flex flex-col w-[80%] m-auto">
            <div className="w-full mb-4">
              <label className="block text-right mb-1 text-lg"> رقم الهاتف </label>
              <input
                className="text-right w-full text-base p-2 border-2 rounded-md outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                style={{ borderImage: 'linear-gradient(to right, purple-400, pink-400) 1' }}
                type="text"
                name="phone"
                placeholder=" أدخل رقم الهاتف "
                value={contactData.phone}
                onChange={inputValue}
              />
            </div>
            <div className="w-full mb-4">
              <label className="block text-right mb-1 text-lg">البريد الإلكتروني</label>
              <input
                className="text-right w-full text-base p-2 border-2 rounded-md outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                style={{ borderImage: 'linear-gradient(to right, purple-400, pink-400) 1' }}
                type="email"
                name="email"
                placeholder="أدخل البريد الإلكتروني"
                value={contactData.email}
                onChange={inputValue}
              />
            </div>

            <div className=':w-full mb-4'>
            <label className="block text-right mb-1 text-lg"> الرسالة </label>
            <textarea
              className="min-h-[150px] text-right w-full text-base p-2 border-2 rounded-md outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
              style={{ borderImage: 'linear-gradient(to right, purple-400, pink-400) 1' }}
              name="message"
              placeholder=" أكتب الرسالة الخاص بك "
              value={contactData.message}
              onChange={inputValue}
            />
            </div>
        </div>

      <button className="m-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-5 py-2 w-[50%] rounded-full font-semibold shadow-md hover:opacity-80 transition">
             إرسال
          </button>
      </form>
      <div className='grid grid-cols-3 gap-[1.5rem] p-[15px] max-[991px]:grid-cols-1'>
        <div className='p-[15px] text-center shadow rounded-[9px] max-[991px]:mb-[15px]'>
             <div className="w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center mb-[10px] bg-gradient-to-r from-purple-400 to-pink-400">
               <FontAwesomeIcon className='text-[45px] text-white' icon={faLocation}/></div>
             <h4 className='text-[20px] mb-[9px]'> العنوان </h4>
             <p className='text-[17px]'> الأسكندرية شارع أبو حسين </p>
        </div>
        <div className='p-[15px] text-center shadow rounded-[9px] max-[991px]:mb-[15px]'>
            <div className="w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center mb-[10px] bg-gradient-to-r from-purple-400 to-pink-400">
              <FontAwesomeIcon className='text-[45px] text-white' icon={faEnvelope}/></div>
              <h4 className='text-[20px] mb-[9px]'> البريد الإلكتروني </h4>
              <p className='text-[17px]'> example@gmail.com </p>
              <p className='text-[17px]'> example@gmail.com </p>
        </div>
        <div className='p-[15px] text-center shadow rounded-[9px] max-[991px]:mb-[15px]'>
            <div className="w-[80px] h-[80px] m-auto rounded-full flex justify-center items-center mb-[10px] bg-gradient-to-r from-purple-400 to-pink-400">
              <FontAwesomeIcon className='text-[45px] text-white' icon={faPhone}/></div>
              <h4 className='text-[20px] mb-[9px]'> اتصل بي </h4>
              <p className='text-[17px] mb-[6px]'> <span>Phone:</span> +201254425 </p>
              <p className='text-[17px] mb-[6px]'> <span>Mobile:</span> +20102245 </p>
              <p className='text-[17px]'> <span>Fax:</span> 412212 </p>
        </div>
      </div>
    </section>
  )
}

export default contact