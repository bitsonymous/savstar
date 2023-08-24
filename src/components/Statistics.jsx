import React from 'react';

export const Statistic = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            15 Years+
          </h6>
          <p className="font-bold">Expierence</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            1K Plus
          </h6>
          <p className="font-bold">Stores</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            100%
          </h6>
          <p className="font-bold">Safe</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            PAN India
          </h6>
          <p className="font-bold">Delivery</p>
        </div>
      </div>
    </div>
  );
};
export default Statistic;