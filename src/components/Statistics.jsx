import React from 'react';

export const Statistic = () => {
  return (
    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-orange-600">
    //   <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
    //     <div className="text-center">
    //       <h6 className="text-3xl font-bold text-deep-purple-accent-400">
    //         15 Years+
    //       </h6>
    //       <p className="font-bold">Expierence</p>
    //     </div>
    //     <div className="text-center">
    //       <h6 className="text-3xl font-bold text-deep-purple-accent-400">
    //         1K Plus
    //       </h6>
    //       <p className="font-bold">Stores</p>
    //     </div>
    //     <div className="text-center">
    //       <h6 className="text-3xl font-bold text-deep-purple-accent-400">
    //         100%
    //       </h6>
    //       <p className="font-bold">Safe</p>
    //     </div>
    //     <div className="text-center">
    //       <h6 className="text-3xl font-bold text-deep-purple-accent-400">
    //         PAN India
    //       </h6>
    //       <p className="font-bold">Delivery</p>
    //     </div>
    //   </div>
    // </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center border-r-4 border-orange-500">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">15+ Years</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          Expierence
          </p>
        </div>
        <div class="text-center border-r-4 border-orange-500">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">1000+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Stores
          </p>
        </div>
        <div class="text-center border-r-4 border-orange-500">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">100%</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Safe
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">PAN India</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Delivery
          </p>
        </div>
      </div>
    </div>
  );
};
export default Statistic;