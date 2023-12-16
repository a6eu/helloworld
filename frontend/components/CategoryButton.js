import React, { useState } from 'react';

const CategoryButton = ({ buttonText, brandId, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  

  const handleClick = () => {
    setIsClicked(!isClicked);
    // If an onClick function is provided, call it
    if (onClick) {
      onClick(brandId);
    }
  };
 
  return (
    <div>
      {isClicked ? (
        <button
          className="bg-blue-500 text-white h-[25px] p-2 flex items-center rounded-md m-1 transition-colors duration-300"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      ) : (
        <button
          className="bg-gray-200 hover:bg-blue-400 hover:text-white h-[25px] p-2 flex items-center rounded-md m-1 text-black transition-colors duration-300"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CategoryButton;
