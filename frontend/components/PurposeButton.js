import React, { useState } from 'react';

const PurposeButton = ({ buttonText, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    // If an onClick function is provided, call it
    if (onClick) {
      onClick();
    }
  };
//   bg-gray-200 h-[25px] p-3 flex items-center justify-center rounded-md m-2 w-[280px]
// bg-blue-400 text-white h-[25px] p-3 flex items-center justify-center m-2 rounded-md w-[280px]
  return (
    <div>
      {isClicked ? (
        <button
          className="bg-blue-400 text-white h-[25px] p-3 flex items-center justify-center rounded-md m-2 w-[280px] transition-colors duration-300"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      ) : (
        <button
          className="bg-gray-200 hover:bg-blue-400 hover:text-white h-[25px] p-3 flex items-center justify-center rounded-md m-2 w-[280px] text-black transition-colors duration-300"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default PurposeButton;
