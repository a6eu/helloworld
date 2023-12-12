// import React, { useState } from 'react';

// const PriceInputs = ({ onPriceChange }) => {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');

//   const handlePriceChange = () => {

//     const min = parseFloat(minPrice);
//     const max = parseFloat(maxPrice);

//     if (!isNaN(min) && !isNaN(max) && min <= max) {
//       onPriceChange([min, max]);
//     }
//   };

//   return (
//     <div className="w-full h-[50px]">
//       <div className="flex align-middle">
//         <input
//           type="number"
//           className="w-[100px] m-2  border-solid border-2 border-blue-500 bg-gray-200 rounded-lg"
//           placeholder="Min Price"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//         />
//         <h2 className="mt-2">-</h2>
//         <input
//           type="number"
//           className="w-[100px] m-2  border-solid border-2 border-blue-500 bg-gray-200 rounded-lg"
//           placeholder="Max Price"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//         />
//         <h2 className="mt-3">₸</h2>
//         <button onClick={handlePriceChange}>Apply</button>
//       </div>
//     </div>
//   );
// };

// export default PriceInputs;



// import React, { useState } from 'react';

// const PriceInputs = ({ onPriceChange }) => {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');

//   const handlePriceChange = () => {
  
//     const min = parseFloat(minPrice);
//     const max = parseFloat(maxPrice);

//     if (!isNaN(min) && !isNaN(max) && min <= max) {
//       onPriceChange([min, max]);
//     }
//   };

//   return (
//     <div className="w-full h-[50px]">
//       <div className="flex align-middle">
//         <input
//           type="number"
//           className="w-[100px] m-2  border-solid border-2 border-blue-500 bg-gray-200 rounded-lg"
//           placeholder="Min Price"
//           value={minPrice}
//           onChange={(e) => {
//             setMinPrice(e.target.value);
//             handlePriceChange(); 
//           }}
//         />
//         <h2 className="mt-2">-</h2>
//         <input
//           type="number"
//           className="w-[100px] m-2  border-solid border-2 border-blue-500 bg-gray-200 rounded-lg"
//           placeholder="Max Price"
//           value={maxPrice}
//           onChange={(e) => {
//             setMaxPrice(e.target.value);
//             handlePriceChange();
//           }}
//         />
//         <h2 className="mt-3">₸</h2>
//       </div>
//     </div>
//   );
// };

// export default PriceInputs;

import React, { useState, useEffect } from 'react';



const PriceInputs = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
useEffect(() => {
    // Validate and convert input values to numbers
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (!isNaN(min) && !isNaN(max)) {
      onPriceChange([min, max]);
    }
  }, [minPrice, maxPrice, onPriceChange]);

// const PriceInputs = ({ onPriceChange }) => {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');

//   const handlePriceChange = () => {
//     const min = parseFloat(minPrice);
//     const max = parseFloat(maxPrice);

//     if (!isNaN(min) && !isNaN(max) && min <= max) {
//       onPriceChange([min, max]);
//     }
//   };

  return (
    <div className="w-full h-[50px]">
      <div className="flex align-middle">
        <input
          type="number"
          className="w-[100px] m-2  border-solid border-2 border-blue-500 bg-gray-200 rounded-lg"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <h2 className="mt-2">-</h2>
        <input
          type="number"
          className="w-[100px] m-2  border-solid border-2 border-blue-500 bg-gray-200 rounded-lg"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <h2 className="mt-3">₸</h2>
      </div>
      {/* {handlePriceChange()}  */}
    </div>
  );
};

export default PriceInputs;
