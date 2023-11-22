// components/PriceRangeFilter.js

import React, { useState } from 'react';

const RangeBar = ({ products, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 10000000]);

  const handleRangeChange = (event) => {
    setPriceRange([0, event.target.value]);
    // onFilterChange([0, event.target.value]);
  };

  return (
    <div className='w-full h-[20px] bg-green-200'>
      <input
        type="range"
        min="0"
        max="10000000"
        value={priceRange[1]}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default RangeBar;
