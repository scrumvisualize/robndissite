import React from 'react';
import FaqItem from './faqItem'; // Import your FAQ item component

const FaqList = () => {
  const faqs = [
    {
      question: 'How can I contact Jegni Life team ?',
      answer: 'Call directly our 1800 800 124 or emailing contact@jegnilife.com.au',
    },
    {
      question: 'What is the normal working days at Jegni life ?',
      answer: 'We work from Monday to Friday, from 9:00 am to 5:30 pm',
    },
    {
      question: 'How do I cancel Jegni Life services ?',
      answer: 'Please reach our team via email for cancellation of services',
    },
    {
      question: 'Which locations does Jegni Life provide services in ?',
      answer: 'At the moment we are providing services only in Brisbane area',
    },
    {
      question: 'How long will we take to repond to email queries ?',
      answer: 'Usually we will take a day or two to respond queries via email',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="bg-sky-50 text-center">
      <div className="flex flex-row justify-center items-center text-center">
        <h1 className="text-3xl mb-4 text-gray-700">Frequently Asked Questions</h1>
      </div>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;
