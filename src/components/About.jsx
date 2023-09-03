import React from 'react';
import { categories } from '../data/data.js';
export const About = () => {
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" id='about'>
         <h1 className='text-orange-600 font-bold text-6xl text-center'>
        About Us
      </h1>
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2 pt-8">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-none">
                Power up your world with Sav'star Cables - Connecting you to Excellence
                <br className="hidden md:block" />
        
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
      
                  </span>
                </span>
              </h2>
              <p className="text-base text-justify text-gray-700 md:text-xl ">
              Sav'star is a <b>wire manufacturing company</b> which was established in <b>2007</b>. Its manufacturing plants are located in Bawana industrial area, Delhi. The <b>experience</b> of more than <b>15+</b> years in this field helps us to give our customers the <b>best quality wires</b> and cables. Savstar Cables is a <b>leading provider</b> of <b>high-quality</b> electrical wires and cables for commercial and residential use. We offer a wide range of products all designed to meet the specific needs of our customers. With a focus on <b>quality, safety, and reliability</b>, our cables are built to withstand harsh environments and <b>deliver consistent performance</b>. Our experienced team of professionals is committed to providing exceptional <b>customer service</b> and <b>technical support</b>, ensuring that our customers have the products they need, when they need them. Whether you are looking to power up your home or your business, Savstar Cables has the solution for you.
              </p>
            </div>
            {/* <div className="grid gap-5 row-gap-8 sm:grid-cols-2"> */}
              {/* <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    I'll be sure to note that in my log
                  </h6>
                  <p className="text-sm text-gray-900">
                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                    to go on account heave down.
                  </p>
                </div>
              </div> */}
              {/* <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    A business big enough that it could be listed
                  </h6>
                  <p className="text-sm text-gray-900">
                    Those options are already baked in with this model shoot me an
                    email clear.
                  </p>
                </div>
              </div> */}
            {/* </div> */}
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-3/4 mt-24"
              src="https://img.freepik.com/free-photo/colorful-plastic-polymer-granules-cable_93675-129273.jpg?size=626&ext=jpg&uid=R114765670&semt=ais"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };