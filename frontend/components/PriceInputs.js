import React, { useState } from 'react';

const PriceInputs = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleApplyFilter = () => {
    // Pass the price range to the parent component (Filter)
    onPriceChange({ minPrice, maxPrice });
  };

  return (
    <div className="w-full h-[50px]">
      <div className="flex align-middle">
        <input
          type="number"
          className="w-[100px] m-2 border-solid border-2 border-blue-500 bg-gray-200 rounded-lg"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <h2 className="mt-2">-</h2>
        <input
          type="number"
          className="w-[100px] m-2 border-solid border-2 border-blue-500 bg-gray-200 rounded-lg"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
        <h2 className="mt-3">₸</h2>
      
      </div>
    </div>
  );
};

export default PriceInputs;
