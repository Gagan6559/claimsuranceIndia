import React from 'react';
import gmaillogo from '../assets/gmaillogo.png';
import whatsapplogo from '../assets/whatsapplogo.png';
import linkedinlogo from '../assets/linkedinlogo.png';
import logo1 from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white w-full mt-12 py-8">
      {/* Top horizontal line */}
      <div className="w-11/12 mx-auto border border-gray-600 my-8"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-12">
        {/* Column 1: Logo and Company Name */}
        <div className="mb-8 md:mb-0">
          <img src={logo1} alt="Company Logo" className="h-36 w-48 mb-2" />
          
        </div>

        {/* Column 2: Contact Info */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <img src={gmaillogo} alt="Email Logo" className="h-6 mr-2" />
            <p>claimassuranceindia@gmail.com</p>
          </div>
          <div className="flex items-center">
            <img src={whatsapplogo} alt="WhatsApp Logo" className="h-6 mr-2" />
            <p>+91 9870399607</p>
          </div>
        </div>

        {/* Column 3: Services and Social Media */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <img src={linkedinlogo} alt="LinkedIn Logo" className="h-6 mr-2" />
            <p>linkedin.com/in/yourprofile</p>
          </div>
          <div className="flex items-center">
            <img src={gmaillogo} alt="Email Logo" className="h-6 mr-2" />
            <p>info.claimassuranceindia@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div className="w-full mx-auto border border-gray-600 my-8"></div>

      {/* Copyright */}
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} ClaimAssurance India. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
