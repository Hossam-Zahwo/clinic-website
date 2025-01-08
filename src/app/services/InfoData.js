import Image from 'next/image';

const InfoData = ({ isOpen, data, onClose}) => {
  if (!isOpen) return null;
   console.log(data)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className='bg-white rounded-lg p-8 relative max-w-lg w-full text-center'>
        <h2 className='text-[22px] mb-[6px]'>{data.title}</h2>
        <p className='mb-[6px] text-[17px]'>{data.description}</p>
        <p className='mb-[7px] text-[17px]'>{data.details}</p>
        <Image 
        src={data.imag}  
        loading="lazy" 
        alt={data.title} 
        width={data.width || 500}
        height={data.height || 300}
        className='rounded-[10px] ml-[10px] mr-[10px] m-auto'
         />
        <button  className='absolute top-[15px] right-[15px] w-[40px] h-[40px] 
        flex justify-center items-center text-[17px] bg-red-500 text-white 
        rounded-full'  onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default InfoData;
