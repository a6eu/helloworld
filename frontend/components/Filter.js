import React, { useState } from "react";
// import PriceFilter from './PriceFilter';
import RangeBar from "@/components/RangeBar";
import PriceInputs from "@/components/PriceInputs";
import BrandFilter from "./BrandFilter";

const Filter = ({ products }) => {
    // const [filteredProducts, setFilteredProducts] = useState(products);

    // const handleFilterChange = (priceRange) => {
    //     const newFilteredProducts = products.filter(
    //         (product) =>
    //             product.price >= priceRange[0] && product.price <= priceRange[1]
    //     );

    //     setFilteredProducts(newFilteredProducts);
    // };

    return (
        <div className="w-[300px] bg-green-300 h-[400px]">
            <h3>Фильтры</h3>
            <p>Цена</p>
            <PriceInputs />
            <RangeBar />
            <p>Брэнды ↻</p>
            <BrandFilter />
            <p>Назначение ↻</p>
            <div>
                
            </div>
            
            {/* <RangeBar products={products} onFilterChange={handleFilterChange} /> */}
        </div>
    );
};

export default Filter;

// const ProductCatalog = () => {
//     const [filteredProducts, setFilteredProducts] = useState(products);

//     const handleFilterChange = (priceRange) => {
//       // Filter the products based on the price range
//       const newFilteredProducts = products.filter(
//         (product) =>
//           product.price >= priceRange[0] && product.price <= priceRange[1]
//       );

//       setFilteredProducts(newFilteredProducts);
//     };

//     return (
//       <div>
//         <PriceFilter products={products} onFilterChange={handleFilterChange} />

//         {/* Render your filtered products */}
//         {filteredProducts.map((product) => (
//           <div key={product.id}>
//             <p>{product.name}</p>
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   export default ProductCatalog;
