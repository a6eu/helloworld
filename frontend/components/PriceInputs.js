import React, { useState } from 'react';
import {useEffect} from "react";

const PriceInputs = ({ refreshPrice, onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleMultiRangeInput = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  }

  useEffect(() => {
    onPriceChange({ minPrice, maxPrice });
  }, [maxPrice, minPrice]);

  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(10000000);
  }, [refreshPrice])

  return (
    <div className="w-full mb-3 h-[50px]">
      <div className="flex align-middle">
        <input
          type="number"
          className="w-[100px] ProductSansLight pl-2 m-2 border-solid border-[1px] border-[#4CC3F2] focus:outline-none focus:border-2 focus:border-[#4CC3F2] bg-gray-200 rounded-lg"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <h2 className="mt-2">-</h2>
        <input
          type="number"
          className="w-[100px] ProductSansLight pl-1 m-2 border-solid border-[1px] border-[#4CC3F2] focus:outline-none focus:border-2 focus:border-[#4CC3F2] bg-gray-200 rounded-lg"
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
