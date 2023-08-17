import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 font-semibold'>
      {/* Card */}
      <div className='rounded-xl relative '>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Our Insulated Copper Wires</p>
          <p className='px-2'>Fire Proof</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4  transform transition duration-500 hover:scale-110'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://lsvinacns.vn/Upload/product/Building/450-750-cl2-1.JPG'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Our Super Fast Optic Cables</p>
          <p className='px-2'>Fiber Cables</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4  transform transition duration-500 hover:scale-110'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://www.youreshape.com/wp-content/uploads/2021/04/New-fiber-optic-1.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative ' >
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We have all type of Cables</p>
          <p className='px-2'>Many More</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 transform transition duration-500 hover:scale-110'>Explore All</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://media.istockphoto.com/id/92374182/photo/wires.jpg?s=612x612&w=is&k=20&c=_CKAcVdIHqNqYolEsDzXnt8UYQilGhnSA9YOLPy9Is0='
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
