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

  useEffect(() => {
    onPriceChange({ minPrice, maxPrice });
  }, [maxPrice, minPrice]);

  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(10000000);
  }, [refreshPrice])

  return (
    <div className="w-full mb-3 ">
      <div className="lg:flex align-middle">
        <div className={'font-thin text-gray-600'}>
          от
          <input
              type="number"
              className="lg:w-[100px] w-[90%] ProductSansLight pl-2 m-2 border-solid border-[1px] border-[#4CC3F2] focus:outline-none focus:border-2 focus:border-[#4CC3F2] bg-gray-200 rounded-lg"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinPriceChange}
          />
        </div>
        <div className={'font-thin text-gray-600'}>
          до
          <input
              type="number"
              className="lg:w-[100px] w-[90%] ProductSansLight pl-1 m-2 border-solid border-[1px] border-[#4CC3F2] focus:outline-none focus:border-2 focus:border-[#4CC3F2] bg-gray-200 rounded-lg"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
          />
        </div>
      </div>

    </div>
  );
};

export default PriceInputs;
