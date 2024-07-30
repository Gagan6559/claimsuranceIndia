import React from 'react';
import motorInsuranceImage from '../assets/image.png'; // Importing the image
import Partners from './Partners';
import Footer from './footer';
import whatsapplogo from '../assets/whatsapplogo.png';
import FAQ from './faq';

const openWhatsApp = () => {
    const phoneNumber = '9870399607'; // Your WhatsApp phone number
    const message = encodeURIComponent('Hello, I would like to know more about your services.'); 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center my-8">
      {/* Left flex container */}
      <div className="w-full md:w-3/5 px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2 text-orange-600">
          Your Ultimate Motor Insurance Claim Partner is Here!
        </h1>
        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-medium text-green-600`}>
          Welcome to ClaimAssurance India
        </h1>
        <br/>
        <p className='text-lg sm:text-xl md:text-2xl font-medium text-orange-600'>
        At ClaimAssurance India, we transform the cumbersome process of car repairs through insurance into a seamless and hassle-free experience. Our comprehensive services, backed by cutting-edge technology and a nationwide network of workshops, ensure that every car user in India receives premium support and quality service. 
        </p>
        <button onClick={openWhatsApp} className="bg-green-700 text-white text-2xl flex items-center justify-center px-4 py-4 my-8 rounded-xl hover:bg-orange-700 transition duration-300 ease-in-out shadow-xl">
         <img src={whatsapplogo} alt="WhatsApp Logo" className="h-8 mr-2" />
            <p className="font-medium shadow-2xl">Ping us on Whatsapp!</p>
        </button>
      </div>
      
      {/* Right flex container */}
      <div className="w-full md:w-2/5 px-8 pt-4 flex justify-center items-center">
        <img src={motorInsuranceImage} alt="Description of image" className="w-full h-96 shadow-2xl rounded-2xl" />
      </div>
      <Partners />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
