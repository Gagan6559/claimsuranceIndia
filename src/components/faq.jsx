import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    { question: 'How do I initiate an insurance claim with ClaimAssurance India?', answer: 'Initiating a claim is easy. Contact us via phone or email, and our team will guide you through the necessary steps and documentation required.' },
    { question: 'What documents are needed to file an insurance claim?', answer: 'Typically, you will need your insurance policy document, a copy of your driving license, the car registration certificate, and a detailed account of the incident. Our team will provide you with a complete list of required documents.' },
    { question: 'How long does the claims process take?', answer: 'The duration of the claims process can vary depending on the extent of the damage and the speed of approval from your insurance company. However, we strive to ensure a quick and efficient process.' },
    { question: 'Can I choose my preferred workshop for repairs?', answer: 'Yes, we have a network of over 200 multibrand workshops across India. You can choose a workshop that is convenient for you from our network.' },
    { question: 'How can I track the status of my claim?', answer: 'Our user-friendly dashboard allows you to track the status of your claim in real-time. You will receive updates at every stage of the process.' }
  ];

  return (
    <div className='w-screen p-4'>
      <h1 className="text-3xl mb-4 sm:text-4xl md:text-5xl font-semibold text-orange-600 my-8">
        FAQ'S
      </h1>
      <div className="space-y-8 text-orange-600">
        {faqs.map((faq, index) => (
          <FAQDropdown key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQDropdown = ({ question, answer }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border border-gray-300 rounded-md p-4 bg-white shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="font-semibold">{question}</h2>
      {isHovered && (
        <p className="mt-2 text-green-600">{answer}</p>
      )}
    </div>
  );
};

export default FAQ;
