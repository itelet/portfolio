import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../../contexts/TypeWriterContext'; // Adjust import path as needed

const RotatingQuote = () => {
  const { typeText } = useTypewriter();
  
  const quotes = [
    "Design. Build. Repeat.",
    "Create. Innovate. Iterate.",
    "Code. Learn. Grow.",
    "Solve. Improve. Evolve.",
    "Dream. Develop. Deliver."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => 
        (prevIndex + 1) % quotes.length
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`
        fixed bottom-6 right-6 
        bg-black bg-opacity-25 
        text-[#9A9A9A]
        px-2 py-1 
        rounded-md 
				shadow-md
      	backdrop-blur-lg 
				z-50
        transition-all 
        duration-500
				border border-[#3A3A3A]
				flex flex-row
				items-center
      `}
    >
      {/* Key prop ensures re-render and restart of animation */}
			<img src={require('../../assets/icons/coffee.png')} />
      <div key={currentQuoteIndex}>
        {typeText(quotes[currentQuoteIndex], 35)}
      </div>
    </div>
  );
};

export default RotatingQuote;