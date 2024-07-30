import React from 'react';
import ergoLogo from '../assets/ergologo.jpg';
import bajajAllianceLogo from '../assets/bajajalliance.png';
import ackoLogo from '../assets/ackologo.png';
import dhfllogo from '../assets/dhfllogo.jpg';
import lombardlogo from '../assets/lombardlogo.png'; 
import unitedlogo from '../assets/unitedlogo.png';
import digitlogo from '../assets/digitlogo.png';
import iffcologo from '../assets/iffcologo.jpg';
import futuregeneralilogo from '../assets/futuregeneralilogo.png';
import kotaklogo from '../assets/kotaklogo.png';
import libertylogo from '../assets/libertylogo.png';
import magmalogo from '../assets/magmalogo.png';
import nationallogo from '../assets/nationallogo.jpg';
import newindialogo from '../assets/newindialogo.png';
import orientallogo from '../assets/orientallogo.png';
import rahejalogo from '../assets/rahejalogo.png';

const partnerData = [
  { logo: ergoLogo, name: 'HDFC Ergo Car Insurance', link: 'https://www.hdfcergo.com/car-insurance' },
  { logo: bajajAllianceLogo, name: 'Bajaj Alliance Car Insurance', link: 'https://www.bajajallianz.com' },
  { logo: ackoLogo, name: 'Acko Car Insurance', link: 'https://www.acko.com' },
  { logo: dhfllogo, name: 'DHFL Car Insurance', link: 'https://www.dhfl.com' },
  { logo: lombardlogo, name: 'ICICI Lombard Car Insurance', link: 'https://www.icicilombard.com' },
  { logo: unitedlogo, name: 'United India Car Insurance', link: 'https://www.uiic.co.in' },  
  { logo: digitlogo, name: 'Digit Car Insurance', link: 'https://www.godigit.com' },
  { logo: iffcologo, name: 'IFFCO Tokio Car Insurance', link: 'https://www.iffcotokio.co.in' },
  { logo: futuregeneralilogo, name: 'Future Generali Car Insurance', link: 'https://general.futuregenerali.in' },
  { logo: kotaklogo, name: 'Kotak Car Insurance', link: 'https://www.kotakgeneral.com' },  
  { logo: libertylogo, name: 'Liberty Car Insurance', link: 'https://www.libertyinsurance.in' },
  { logo: magmalogo, name: 'Magma Car Insurance', link: 'https://www.magmahdi.com' },
  { logo: nationallogo, name: 'National Car Insurance', link: 'https://www.nationalinsurance.nic.co.in' },
  { logo: newindialogo, name: 'New India Car Insurance', link: 'https://www.newindia.co.in' },
  { logo: orientallogo, name: 'Oriental Car Insurance', link: 'https://www.orientalinsurance.org.in' },
  { logo: rahejalogo, name: 'Raheja Car Insurance', link: 'https://www.rahejaqbe.com' },
];

const Partners = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4 sm:text-4xl md:text-5xl font-semibold text-orange-600 mb-12 mt-8">
        Our Partners
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-green-600">
        {partnerData.map((partner, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 flex flex-col justify-center items-center">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img src={partner.logo} alt={`${partner.name} logo`} className="w-32 h-20 mb-4 object-contain" />
              <p className="text-lg font-medium">{partner.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
