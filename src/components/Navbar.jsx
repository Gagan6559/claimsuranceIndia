import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../assets/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    const phoneNumber = '9870399607'; // Your WhatsApp phone number
    const message = encodeURIComponent('Hello, I would like to know more about your services.'); 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <nav className="bg-green-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo1} alt="Logo" className="h-10 mr-3" />
          <span className="text-white text-2xl font-semibold">ClaimAssurance India</span>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:space-x-16 text-white ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "text-orange-600" : "text-white hover:text-orange-600"} 
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "text-orange-600" : "text-white hover:text-orange-600"} 
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/why-choose-us" 
              className={({ isActive }) => isActive ? "text-orange-600" : "text-white hover:text-orange-600"} 
            >
              Why Choose Us?
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/how-it-works" 
              className={({ isActive }) => isActive ? "text-orange-600" : "text-white hover:text-orange-600"} 
            >
              How It Works
            </NavLink>
          </li>
          <li className="flex items-center px-4 py-2 lg:p-0">
            <button onClick={openWhatsApp} className="hover:text-orange-600">
              <a href="tel:+91 9870399607" className="hover:text-orange-600">+91 9870399607</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
