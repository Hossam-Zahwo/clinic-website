export default function ServiceCard({ title, description, imag }) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-center items-center h-96 group"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.5)), url(${imag})`, // التدرج مع الصورة
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="opacity-0 group-hover:opacity-100 font-bold transition-all duration-300 ease-in-out">
        <h3 className=" font-semibold  text-gradient-to-r from-purple-400 to-pink-400  text-2xl mb-4">{title}</h3>
        <p className="text-gray-200  text-3xl mb-6">{description}</p>
        <button className="bg-blue-600  text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
          اعرف المزيد
        </button>
      </div>
    </div>
  );
}
