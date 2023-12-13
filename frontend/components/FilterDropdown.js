import React, { useState } from 'react';

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['популярные', 'новинки', 'сначала дорогие', 'сначала дешевые'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="border-2 w-[200px] border-blue-400 text-blue-400 py-2 px-4 rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        {selectedOption || 'популярные'}
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
        <div className="absolute w-[200px] bg-white border rounded-md shadow-lg">
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
