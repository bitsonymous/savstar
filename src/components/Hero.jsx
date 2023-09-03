import React from 'react'

const Hero = () => {
  return ( 
    <div className=' max-w-[1640px] mx-auto p-4 static '>
        <div className=' max-h-[500px] relative'>
            {/* Overlay */}
            
            <div className='pl-12 absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Next</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> Generation</h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500'> Cables <span className='text-gray-200'>&</span> Wires</h1>
                <span className='text-white px-6 pt-6 text-lg font-bold'>Serving Since 2007</span>

            </div>
            <img className='w-full max-h-[500px] object-cover rounded-xl' src="https://t4.ftcdn.net/jpg/04/65/73/49/360_F_465734937_lmxZjhl4PHx3QYCsCCZGBtN9Qkf3xGQn.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Hero