import React, { useState } from 'react';
import PriceInputs from './PriceInputs';
import Catalog from './Catalog';
import RangeBar from './RangeBar';
import BrandFilter from './BrandFilter';
import Image from 'next/image';

const Filter = () => {
  const [priceFilter, setPriceFilter] = useState({ minPrice: '', maxPrice: '' });

  const handlePriceChange = (price) => {
    setPriceFilter(price);
  };

  return (
        <div className="inline-block w-[300px] bg-white p-1 h-min">
            <h3 className="text-blue-400">Фильтры</h3>
            <p className="text-blue-400">Цена</p>
            <PriceInputs/>
            <RangeBar />
            <p className="text-blue-400">Брэнды ↻</p>
            <BrandFilter />
           

            <p className="text-blue-400">Рейтинг ↻</p>

            <div className="flex">
                <Image src="/images/starfilled.svg" width={30} height={30} alt="star"></Image>
                <Image src="/images/starfilled.svg" width={30} height={30} alt="star"></Image>
                <Image src="/images/starfilled.svg" width={30} height={30} alt="star"></Image>
                <Image src="/images/starunfilled.svg" width={30} height={30} alt="star"></Image>
                <Image src="/images/starunfilled.svg" width={30} height={30} alt="star"></Image>
            </div>

            <div className="w-full italic font-thin flex justify-end pr-3 mt-3 text-gray-500">Найдено 11 товаров</div>
            <div className="w-full flex justify-end ml-[-10px] mt-1">
                <div>
                  <button  className="text-blue-500 underline mr-4">Сбросить все</button>
                  <button  className="text-blue-500 border-2 border-blue-500 border-solid pr-2 pl-2 rounded-md mb-4">Показать</button>
                </div>
            </div>
            
        </div>
    );
};

export default Filter;
