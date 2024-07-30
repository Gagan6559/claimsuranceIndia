import React from 'react';
import wmb1 from '../assets/wmb1.avif';
import wm1 from '../assets/wm1.avif';
import wm3 from '../assets/wm3.avif';
import wm4 from '../assets/wm4.avif';
import Footer from './footer';

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div className="relative py-16">
        <div className="absolute inset-0 z-0">
          <img
            src={wmb1}
            alt="Background"
            className="w-full h-full object-cover filter blur-lg"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl mb-12 sm:text-4xl md:text-5xl font-semibold text-orange-600 text-center">
            Why Choose Us?
          </h1>
          
          <div className="flex flex-col items-center mb-12">
            {/* Section 1: Key Features */}
            <div className="w-full flex flex-col lg:flex-row items-center mb-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <img 
                  src={wm1} 
                  alt="Why Choose Us Image 1" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="lg:w-1/2 bg-orange-600 bg-opacity-80 p-6 rounded-2xl shadow-2xl">
                <p className="text-lg text-white">
                  Nationwide Presence: With workshops in over 25 states across India, we provide extensive coverage, ensuring that our services are accessible no matter where you are.
                </p>
                <p className="text-lg text-white mt-4">
                  200+ Multibrand Workshops: Our network includes over 200 multibrand workshops, all equipped with the latest tools and staffed by experienced professionals.
                </p>
                <p className="text-lg text-white mt-4">
                  User-Friendly Dashboard: Our advanced tracking dashboard provides real-time updates on your claim status, offering full transparency and peace of mind.
                </p>
                <p className="text-lg text-white mt-4">
                  Hassle-Free Claims: We handle the entire claims process on your behalf, from the initial assessment to final approval, ensuring a smooth and stress-free experience.
                </p>
                <p className="text-lg text-white mt-4">
                  Genuine OEM Parts: We have our own spare parts chain, guaranteeing that all repairs are done using genuine OEM parts, ensuring the highest quality and compatibility for your vehicle.
                </p>
              </div>
            </div>

            {/* Section 2: Our Commitment to Quality */}
            <div className="w-full flex flex-col lg:flex-row-reverse items-center mb-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
                <img 
                  src={wm3} 
                  alt="Our Commitment to Quality Image" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="lg:w-1/2 bg-white bg-opacity-80 p-6 rounded-2xl shadow-2xl">
                <h2 className="text-3xl mb-4 font-semibold text-orange-600 text-center">
                  Our Commitment to Quality
                </h2>
                <p className="text-lg text-green-600">
                  At ClaimAssurance India, we are committed to providing the highest quality of service. Our workshops are equipped with state-of-the-art facilities and staffed by experienced professionals who ensure that your car is repaired to the highest standards. We use only genuine OEM parts from our own supply chain, ensuring the durability and reliability of every repair.
                </p>
              </div>
            </div>

            {/* Section 3: Join Us on Our Journey */}
            <div className="w-full flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <img 
                  src={wm4} 
                  alt="Join Us on Our Journey Image" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="lg:w-1/2 bg-green-600 bg-opacity-80 p-6 rounded-2xl shadow-2xl">
                <h2 className="text-3xl mb-4 font-semibold text-white text-center">
                  Join Us on Our Journey
                </h2>
                <p className="text-lg text-white">
                  ClaimAssurance India is dedicated to making the insurance claim process for car repairs as seamless and stress-free as possible. We invite you to join us on this journey and experience the difference that our technology-driven, customer-centric approach can make.
                </p>
                <p className="text-lg text-white mt-4">
                  For more information or to start your claim, contact us today. We are here to assist you and provide the exceptional service you deserve.
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

export default WhyChooseUs;
