import React, {useState} from 'react';

const RangeBar = () => {
  const [priceRange, setPriceRange] = useState([0, 10000000]);

  const handleRangeChange = (event) => {
    setPriceRange([0, event.target.value]);

  };

  return (
    <div className='w-full flex pl-2 h-[20px] '>
      <input
          className={'w-[80%]'}
        type="range"
        min="0"
        max="100000000"
        value={priceRange[1]}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default RangeBar;
