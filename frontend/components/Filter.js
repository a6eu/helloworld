import React, { useState, useEffect  } from "react";
import RangeBar from "@/components/RangeBar";
import PriceInputs from "@/components/PriceInputs";
import BrandFilter from "./BrandFilter";
import Image from "next/image"
import PurposeButton from "./PurposeButton";

    const Filter = ({ products, onFilter }) => {
        const initialFilterState = {
            minPrice: 0,
            maxPrice: 100000000,
            selectedBrands: [],
            productName: '',
        };
        // const initialMinPrice = 0;
        // const initialMaxPrice = 100000000;
        // const initialSelectedBrand = '';
        // const initialProductName = '';
    //    const [filters, setFilters] = useState({ ...initialFilterState });
       const [filters, setFilters] = useState({ ...initialFilterState });
       const [resetClicked, setResetClicked] = useState(false);
        // const [minPrice, setMinPrice] = useState(initialMinPrice);
        // const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
        // const [selectedBrand, setSelectedBrand] = useState(initialSelectedBrand);
        // const [productName, setProductName] = useState(initialProductName);
      
        // const handleReset = () => {
        //   setMinPrice(initialMinPrice);
        //   setMaxPrice(initialMaxPrice);
        //   setSelectedBrand(initialSelectedBrand);
        //   setProductName(initialProductName);
    
        //   handleFilter();
        // };
        // useEffect(() => {
        //     handleFilter(); // Trigger filter function whenever filters change
        //   }, [filters]);
        // useEffect(() => {
        //     if (resetClicked) {
        //       handleFilter();
        //       setResetClicked(false);
        //     }
        //   }, [resetClicked]);
        useEffect(() => {
            if (resetClicked) {
              handleFilter();
              setResetClicked(false);
            }
          }, [resetClicked]);


        // const handleReset = () => {
        //     setFilters({ ...initialFilterState });
        //     handleFilter(); // Trigger filter function after resetting
        // };
        // const handleReset = () => {
        //     setFilters({ ...initialFilterState });
        // };
        const handleReset = () => {
            setFilters({ ...initialFilterState });
            setResetClicked(true);
          };
        // const handlePriceChange = (newPriceRange) => {
        //   setMinPrice(newPriceRange[0]);
        //   setMaxPrice(newPriceRange[1]);
        // };
        // const handlePriceChange = (newPriceRange) => {
        //     setFilters({ ...filters, minPrice: newPriceRange[0], maxPrice: newPriceRange[1] });
        // };
        // const handlePriceChange = (newPriceRange) => {
        //     setFilters({ ...filters, minPrice: newPriceRange[0], maxPrice: newPriceRange[1] });
        // };
        const handlePriceChange = (newPriceRange) => {
            setFilters({ ...filters, minPrice: newPriceRange[0], maxPrice: newPriceRange[1] });
          };
        // const handleFilter = () => {
        //   const filteredProducts = products.filter(product => 
        //     product.price >= minPrice &&
        //     product.price <= maxPrice &&
        //     (selectedBrand ? product.brand_id === selectedBrand : true) &&
        //     (productName ? product.name.toLowerCase().includes(productName.toLowerCase()) : true)
        //   );
      
        //   onFilter(filteredProducts);
        // };
        const handleBrandChange = (brandId) => {
            const updatedBrands = [...filters.selectedBrands];
        
            if (updatedBrands.includes(brandId)) {
              // If brandId is already in the array, remove it
              updatedBrands.splice(updatedBrands.indexOf(brandId), 1);
            } else {
              // Otherwise, add it
              updatedBrands.push(brandId);
            }
        
            setFilters({ ...filters, selectedBrands: updatedBrands });
          };

        // const handleFilter = () => {
        //     const filteredProducts = products.filter(product =>
        //       product.price >= filters.minPrice &&
        //       product.price <= filters.maxPrice &&
        //       (filters.selectedBrand ? product.brand_id === filters.selectedBrand : true) &&
        //       (filters.productName ? product.name.toLowerCase().includes(filters.productName.toLowerCase()) : true)
        //     );
        
        //     onFilter(filteredProducts);
        //   };

        // const handleFilter = () => {
        //     const filteredProducts = products.filter(product =>
        //       product.price >= filters.minPrice &&
        //       product.price <= filters.maxPrice &&
        //       (filters.selectedBrand ? product.brand_id === filters.selectedBrand : true) &&
        //       (filters.productName ? product.name.toLowerCase().includes(filters.productName.toLowerCase()) : true)
        //     );
        
        //     onFilter(filteredProducts);
        //   };
        // const handleFilter = () => {
        //     const filteredProducts = products.filter(product =>
        //       product.price >= filters.minPrice &&
        //       product.price <= filters.maxPrice &&
        //       (filters.selectedBrand ? product.brand_id === filters.selectedBrand : true) &&
        //       (filters.productName ? product.name.toLowerCase().includes(filters.productName.toLowerCase()) : true)
        //     );
        
        //     onFilter(filteredProducts);
        //   };
        const handleFilter = () => {
            const filteredProducts = products.filter(product =>
              product.price >= filters.minPrice &&
              product.price <= filters.maxPrice &&
              (filters.selectedBrands.length === 0 || filters.selectedBrands.includes(product.brand_id)) &&
              (filters.productName ? product.name.toLowerCase().includes(filters.productName.toLowerCase()) : true)
            );
        
            onFilter(filteredProducts);
          };

    // const [priceRange, setPriceRange] = useState([0, 10000000]);
    // const [selectedBrand, setSelectedBrand] = useState('');
    // const [productName, setProductName] = useState('');

    // const handlePriceChange = (newPriceRange) => {
    //     setPriceRange(newPriceRange);
    // };



    // const handleReset = () => {
    //     setMinPrice(initialMinPrice);
    //     setMaxPrice(initialMaxPrice);
    //     setSelectedBrand(initialSelectedBrand);
    //     setProductName(initialProductName);

    //     // Call handleFilter to apply the reset filters
    //     handleFilter();
    // };


    // const handleFilter = () => {
    //     const [minPrice, maxPrice] = priceRange;
    
    //     const filteredProducts = products.filter(product => 
    //       product.price >= minPrice &&
    //       product.price <= maxPrice &&
    //       (selectedBrand ? product.brand_id === selectedBrand : true) &&
    //       (productName ? product.name.toLowerCase().includes(productName.toLowerCase()) : true)
    //     );
    
    //     onFilter(filteredProducts);
    // };


    return (
        <div className="inline-block w-[300px] bg-white p-1 h-min">
            <h3 className="text-blue-400">Фильтры</h3>
            <p className="text-blue-400">Цена</p>
            <PriceInputs onPriceChange={handlePriceChange} />
            <RangeBar />
            <p className="text-blue-400">Брэнды ↻</p>
            <BrandFilter onBrandChange={handleBrandChange} />
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
                  <button onClick={handleReset} className="text-blue-500 underline mr-4">Сбросить все</button>
                  <button onClick={handleFilter} className="text-blue-500 border-2 border-blue-500 border-solid pr-2 pl-2 rounded-md mb-4">Показать</button>
                </div>
            </div>
            
        </div>
    );
};

export default Filter;
