import React from 'react';
import hwb1 from '../assets/hwb1.avif';
import hw1 from '../assets/hw1.avif';
import hw2 from '../assets/hw2.avif';
import hw3 from '../assets/hw3.avif';
import hw4 from '../assets/hw4.avif';
import Footer from './footer'; // Adjust the import path as per your project structure

const HowItWorks = () => {
  return (
    <div className="relative bg-gray-100 py-16">
      <div className="absolute inset-0 z-0">
        <img
          src={hwb1}
          alt="Background"
          className="w-full h-full object-cover filter blur-2xl"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-3xl mb-12 sm:text-4xl md:text-5xl font-semibold text-orange-600 text-center">
          How It Works
        </h1>

        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center space-x-4 mb-12">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <img 
              src={hw1} 
              alt="Step 1" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2 bg-orange-600 bg-opacity-80 p-6 rounded-2xl shadow-2xl order-1">
            <h2 className="text-2xl mb-4 font-semibold text-black text-center lg:text-left">
              Step 1: Initiate Your Claim
            </h2>
            <p className="text-lg text-white text-center lg:text-left">
              Contact us to begin the insurance claim process. Our team will guide you through the necessary steps and documentation.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-x-4 mb-12">
          <div className="lg:w-1/2 mb-4 mt-4 lg:mb-0 order-2">
            <img 
              src={hw2} 
              alt="Step 2" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2 bg-green-600 bg-opacity-80 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-2xl mb-4 font-semibold text-black text-center lg:text-left">
              Step 2: Damage Assessment
            </h2>
            <p className="text-lg text-white text-center lg:text-left">
              Our experts will conduct a thorough assessment of the damage and liaise with your insurance company to expedite the approval process.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center space-x-4 mb-12">
          <div className="lg:w-1/2 mb-4 lg:mb-0 ">
            <img 
              src={hw3} 
              alt="Step 3" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2 bg-orange-600 bg-opacity-80 p-6 rounded-2xl shadow-2xl order-1">
            <h2 className="text-2xl mb-4 font-semibold text-black text-center lg:text-left">
              Step 3: Repair Process
            </h2>
            <p className="text-lg text-white text-center lg:text-left">
              Your car will be repaired at one of our trusted multibrand workshops, ensuring high-quality service and genuine parts.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col lg:flex-row items-center gap-x-4 mb-12">
          <div className="lg:w-1/2 mb-4 mt-4 lg:mb-0 order-2">
            <img 
              src={hw4} 
              alt="Step 4" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2 bg-green-600 bg-opacity-80 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-2xl mb-4 font-semibold text-black text-center lg:text-left">
              Step 4: Completion and Handover
            </h2>
            <p className="text-lg text-white text-center lg:text-left">
              Once the repairs are completed, we will inform you, and you can collect your car, fully repaired and ready to go.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default HowItWorks;
