export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
        اعرف المزيد
      </button>
    </div>
  );
}
