import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-2 bg-sky-50">
      <button
        onClick={toggleExpand}
        className="flex justify-between items-center mx-auto mp-2 w-[325px] md:w-[800px] bg-slate-200 p-2"
      >
        <span className="text-normal text-left">{question}</span>
        <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          &#9660;
        </span>
      </button>
      {isExpanded && <span className="mt-2 mx-auto text-[12px] w-[600px] md:w-[900px] text-center">{answer}</span>}
    </div>

  );
};

export default FaqItem;
