import React, { useState } from 'react';

const FilterDropdown = ({ selectedOption, setSelectedOption}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = ['без сортировки', 'сначала дорогие', 'сначала дешевые'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative z-10 inline-block">
      <button
        className={`border-2 w-[180px] border-[#1075B2] text-[#1075B2] text-[15px] py-1 px-3 ${!isOpen ? "rounded-[10px]" : "rounded-t-[10px]"}  inline-flex  justify-between items-center`}
        onClick={toggleDropdown}
      >
        {selectedOption}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute width-[180px] text-[15px] rounded-b-[10px] px-3 bg-white border shadow-lg`}>
          {/* FilterDropdown content */}
          <ul>
            {options.map((option) => (
              <li
                key={option}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
