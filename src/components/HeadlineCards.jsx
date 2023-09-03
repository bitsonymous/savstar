import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 font-semibold'>
      {/* Card */}
      <div className='rounded-xl relative '>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Insulated Copper Wires</p>
          <p className='px-2'>Fire Proof</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4  transform transition duration-500 hover:scale-110'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://github.com/AyushiSingh0502/savstar/blob/main/wepik-export-20230831090907plLB.jpeg?raw=true'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Armoured Cables</p>
          <p className='px-2'>Ultra Strong</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4  transform transition duration-500 hover:scale-110'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://5.imimg.com/data5/JE/QJ/HZ/SELLER-3181704/armoured-cable-500x500.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative ' >
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Submersible and Flat Cables</p>
          <p className='px-2'>Many More</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4 transform transition duration-500 hover:scale-110'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/free-photo/electrical-cable-energy-technology-equipment-isolated-white_93675-128984.jpg?size=626&ext=jpg&uid=R114765670&semt=ais'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
