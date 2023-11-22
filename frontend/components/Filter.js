import React, { useState } from "react";
// import PriceFilter from './PriceFilter';
import RangeBar from "@/components/RangeBar";
import PriceInputs from "@/components/PriceInputs";
import BrandFilter from "./BrandFilter";
import Image from "next/image"

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
        <div className="w-[300px] bg-green-300 h-auto">
            <h3>Фильтры</h3>
            <p>Цена</p>
            <PriceInputs />
            <RangeBar />
            <p>Брэнды ↻</p>
            <BrandFilter />
            <p>Назначение ↻</p>
            <div>
                <button className="bg-blue-400 text-white h-[25px] p-3 flex items-center justify-center m-2 rounded-md w-[280px]">Защита виртуальных сред</button>
                <button className="bg-gray-200 h-[25px] p-3 flex items-center justify-center rounded-md m-2 w-[280px]">Защита рабочих станций</button>
                <button className="bg-gray-200 h-[25px] p-3 flex items-center justify-center rounded-md m-2 w-[280px]">Защита серверов</button>
            </div>

            <p>Функции ↻</p>
            <div>
                <button className="bg-blue-400 text-white h-[25px] p-3 flex items-center justify-center m-2 rounded-md w-[280px]">Защита виртуальных сред</button>
                <button className="bg-gray-200 h-[25px] p-3 flex items-center justify-center rounded-md m-2 w-[280px]">Защита серверов</button>
            </div>

            <p>Рейтинг ↻</p>

            <div className="flex">
                <Image src="/images/starfilled.svg" width={30} height={30} ></Image>
                <Image src="/images/starfilled.svg" width={30} height={30} ></Image>
                <Image src="/images/starfilled.svg" width={30} height={30} ></Image>
                <Image src="/images/starunfilled.svg" width={30} height={30} ></Image>
                <Image src="/images/starunfilled.svg" width={30} height={30} ></Image>
            </div>

            <div className="w-full italic font-thin flex justify-end pr-3">Найдено 11 товаров</div>
            <div className="w-full flex justify-end ml-[-10px] mt-1">
                <div>
                    <button className="text-blue-500 underline mr-4">Сбросить все</button>
                    <button className="text-blue-500 border-2 border-blue-500 border-solid pr-2 pl-2 rounded-md">Показать</button>

                </div>
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
