import React from 'react';
import ab1 from '../assets/ab1.avif';
import ab2 from '../assets/ab2.avif';
import ab3 from '../assets/ab3.avif';
import Footer from './footer';

const About = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="relative py-16">
        <div className="absolute inset-0 z-0">
          <img
            src={ab1}
            alt="Background"
            className="w-full h-full object-cover filter blur"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl mb-12 sm:text-4xl md:text-5xl font-semibold text-orange-600 text-center">
            About Us
          </h1>
          
          <div className="flex flex-col items-center mb-12">
            <div className="w-full flex flex-col lg:flex-row items-center mb-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <img 
                  src={ab3} 
                  alt="ClaimAssurance India Image 2" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="lg:w-1/2 bg-orange-600 bg-opacity-80 p-6 rounded-2xl shadow-2xl">
                <p className="text-lg text-white">
                  ClaimAssurance India is a tech-enabled platform redefining the insurance claim process for motor vehicle repairs. With a presence in 25+ states and a robust network of more than 200 workshops, we ensure that high-quality service is always within reach for every car user in India.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row-reverse items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
                <img 
                  src={ab2} 
                  alt="ClaimAssurance India Image 3" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="lg:w-1/2 bg-green-600 bg-opacity-80 p-6 rounded-2xl shadow-2xl">
                <p className="text-lg text-white">
                  We aim to set new standards in the industry by providing a seamless and premium experience to every car owner, enabling them to navigate the insurance claim process effortlessly, backed by our innovative technology and extensive workshop network.
                </p>
                <p className="text-lg text-white">
                  We strive to simplify and streamline the process for every car user, ensuring transparency, efficiency, and customer satisfaction at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
