export default function ContactDoctor(){
    const borderStyle = {
  border: "5px solid transparent",
  borderRadius: "10px",
  backgroundImage: "linear-gradient(90deg, #c084fc, #f472b6)",
  backgroundClip: "padding-box",
    }
    return(
        <section className="pt-[40px] pb-[40px] bg-slate-200">
            <div className="w-[60%] m-auto mb-[20px] max-[991px]:w-[100%] text-center">
                <h2 className="text-[35px] mb-[8px]"> احجز موعدك اليوم </h2>
                <p className="text-[18px]"> املأ النموذج لتحديد موعد زيارتك لفريق الخبراء لدينا نحن هنا لمساعدتك على الباقء بصحة جيده </p>
            </div>
            <div className="flex gap-[2rem] max-[991px]:flex-col">
                <form className="text-center w-[50%] max-[991px]:w-full">

                    <div className="flex gap-[1.5rem] pr-[10px] pl-[10px] max-[991px]:flex-col">
                      <div className="w-[50%] max-[991px]:w-full mb-[15px]">
                          <label className="block text-right mb-[4px] text-[18px]"> الأسم </label>
                          <input className="text-right w-full text-[17px] p-[8px] border-blue-400 border-[2px] rounded-[6px] outline-none transition-all focus:border-blue-300" type="text" placeholder=" أدخل اسمك الكامل "/>
                      </div>
                      <div className="w-[50%] max-[991px]:w-full mb-[15px]">
                          <label className="block text-right mb-[4px] text-[18px]"> البريد الإلكتروني </label>
                          <input className="text-right w-full text-[17px] p-[10px] border-blue-400 border-[2px] rounded-[6px] outline-none transition-all focus:border-blue-300" type="email" placeholder=" أدخل بريد الإلكتروني "/>
                      </div>
                    </div>

                    <div className="flex gap-[1.5rem] pr-[10px] pl-[10px] max-[991px]:flex-col">
                      <div className="w-[50%] max-[991px]:w-full mb-[15px]">
                          <label className="block text-right mb-[4px] text-[18px]"> رقم الهاتف </label>
                          <input className="text-right w-full text-[17px] p-[8px] border-blue-400 border-[2px] rounded-[6px] outline-none transition-all focus:border-blue-300" type="text" placeholder=" أدخل رقم الهاتف  "/>
                      </div>
                      <div className="w-[50%] max-[991px]:w-full mb-[15px]">
                           <label className="block text-right mb-[4px] text-[18px]"> الخدمة </label>
                          <select className="text-right w-full text-[17px] p-[10px] border-blue-400 border-[2px] rounded-[6px] outline-none transition-all focus:border-blue-300">
                            <option value=" جراحة عامة "> جراحة عامة </option>
                            <option value=" تجميل "> تجميل </option>
                            <option value=" عيون "> عيون </option>
                          </select>
                      </div>
                    </div>


                    <div className="flex gap-[1.5rem] pr-[10px] pl-[10px] max-[991px]:flex-col">
                      <div className="w-[50%] max-[991px]:w-full mb-[15px]">
                          <label className="block text-right mb-[4px] text-[18px]"> تاريخ الكشف </label>
                          <input  className="text-right w-full text-[17px] p-[8px] border-blue-400 border-[2px] rounded-[6px] outline-none transition-all focus:border-blue-300" type="text" placeholder=" أدخل رقم الهاتف  "/>
                      </div>
                      <div className="w-[50%] max-[991px]:w-full mb-[15px]">
                           <label className="block text-right mb-[4px] text-[18px]"> الوقت </label>
                          <select className="text-right w-full text-[17px] p-[10px] border-blue-400 border-[2px] rounded-[6px] outline-none transition-all focus:border-blue-300" >
                            <option value=" 10:00AM "> 10:00AM </option>
                            <option value=" 12:00AM "> 12:00AM </option>
                            <option value=" 9:00PM "> 9:00PM </option>
                          </select>
                      </div>
                    </div>

                    <div className="w-[100%] mb-[15px] pr-[10px] pl-[10px]">
                        <label className="block text-right mb-[4px] text-[18px]"> المزيد من البيانات </label>
                        <textarea style={borderStyle} className="min-h-[150px] text-right w-full text-[17px] p-[10px] resize-none  rounded-[6px] outline-none transition-all focus:border-blue-300" placeholder=" المزيد من البيانات " />
                    </div>

                    <button className="m-auto mb-[15px] bg-gradient-to-r from-purple-400 to-pink-400 text-white p-[10px] w-[25%] max-[991px]:w-35% rounded-full font-semibold shadow-md hover:opacity-80 transition"> إحجز الأن </button>
                </form>
                <div className="w-[50%] h-[600px] relative max-[767px]:h-auto  max-[991px]:w-full pr-[10px] pl-[10px]">
                    <img className="m-auto w-[85%] max-[991px]:w-[75%] rounded-[50px] shadow-blue-200 h-full " src="/pexels-pavel-danilyuk-5998474.jpg" />
                    <div className="absolute right-[100px] bottom-[30px] p-[10px] text-[27px] 
                    rounded-[10px] font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md hover:opacity-80 transition">
                        <h3> احصل على خصم 10% على موعدك</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}