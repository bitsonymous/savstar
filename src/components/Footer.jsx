export const Footer = () => {
  return (
    <div className="bg-gray-900">
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="SAV'STAR"
            className="inline-flex items-center"
          >
           <img src="https://media.licdn.com/dms/image/D4D0BAQENOqFvLuEXow/company-logo_200_200/0/1681219643661?e=1700092800&v=beta&t=ltTWxMTJajq5ofI1FByzYfYlf2LDfePWGtjCcK8vRLE" alt="icon" className="w-12"/>
            <span className="ml-2 text-xl font-bold tracking-wide text-orange-500 uppercase">
              SAV'STAR
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
            With a focus on quality, safety, and reliability, our cables are built to withstand harsh environments
            </p>
            <p className="mt-4 text-sm text-white">
            Whether you are looking to power up your home or your business, Savstar Cables has the solution for you.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-orange-500">
            Connect With Us
          </p>
          <div className="flex">
            <p className="mr-1 text-orange-500">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-white hover:text-gray-500"
            >
              8595544528
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-orange-500">Email:</p>
            <a
              href="mailto:savstar.help@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-white hover:text-gray-500"
            >
              savstar.help@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-orange-500">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-white hover:text-gray-500"
            >
              Sector 5, Bawana Industrial Area, Pocket A, Delhi
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-orange-500">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://twitter.com/SavstarCables"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/savstar-cables/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-5">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Sav'Star Cables- Connecting You To Excellence
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Sav'Star Cables All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
             
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};