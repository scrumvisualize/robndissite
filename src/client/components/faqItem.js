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
        className="flex justify-between items-center ml-2 md:ml-52 mp-2 w-[398px] md:w-[800px] bg-slate-200 p-2"
      >
        <span className="text-normal">{question}</span>
        <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          &#9660;
        </span>
      </button>
      {isExpanded && <div className="mt-2 md:text-center">{answer}</div>}
    </div>
  );
};

export default FaqItem;
