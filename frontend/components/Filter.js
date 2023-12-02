import React, { useState } from "react";
// import PriceFilter from './PriceFilter';
import RangeBar from "@/components/RangeBar";
import PriceInputs from "@/components/PriceInputs";
import BrandFilter from "./BrandFilter";
import Image from "next/image"
import PurposeButton from "./PurposeButton";


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
        <div className="inline-block w-[300px] bg-white p-1 h-min">
            <h3 className="text-blue-400">Фильтры</h3>
            <p className="text-blue-400">Цена</p>
            <PriceInputs />
            <RangeBar />
            <p className="text-blue-400">Брэнды ↻</p>
            <BrandFilter />
            <p className="text-blue-400">Назначение ↻</p>
            <div>
                <PurposeButton buttonText="Защита виртуальных сред" onClick={() => console.log('Button clicked!')} />
                <PurposeButton buttonText="Защита рабочих станций" onClick={() => console.log('Button clicked!')} />
                <PurposeButton buttonText="Защита серверов" onClick={() => console.log('Button clicked!')} />
               
            </div>

            <p className="text-blue-400">Функции ↻</p>
            <div>
                <PurposeButton buttonText="Антивирус" onClick={() => console.log('Button clicked!')} />
                <PurposeButton buttonText="Защита от щифровальщиков" onClick={() => console.log('Button clicked!')} />
            </div>

            <p className="text-blue-400">Рейтинг ↻</p>

            <div className="flex">
                <Image src="/images/starfilled.svg" width={30} height={30} ></Image>
                <Image src="/images/starfilled.svg" width={30} height={30} ></Image>
                <Image src="/images/starfilled.svg" width={30} height={30} ></Image>
                <Image src="/images/starunfilled.svg" width={30} height={30} ></Image>
                <Image src="/images/starunfilled.svg" width={30} height={30} ></Image>
            </div>

            <div className="w-full italic font-thin flex justify-end pr-3 mt-3 text-gray-500">Найдено 11 товаров</div>
            <div className="w-full flex justify-end ml-[-10px] mt-1">
                <div>
                    <button className="text-blue-500 underline mr-4">Сбросить все</button>
                    <button className="text-blue-500 border-2 border-blue-500 border-solid pr-2 pl-2 rounded-md mb-4">Показать</button>

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
