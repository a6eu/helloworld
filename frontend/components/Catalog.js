import React, { useState, useEffect } from 'react';
import OneProduct from './OneProduct';
import Dropdown from './Dropdown';
import PriceInputs from './PriceInputs';

const Catalog = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handlePriceChange = ({ minPrice, maxPrice }) => {
    // Filter products based on the price range
    const filtered = products.filter((product) => {
      const price = parseInt(product.price);

      return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
    });

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    // Reset filtered products when the original products change
    setFilteredProducts(products);
  }, [products]);
    return (
        <div className="w-[1000px] p-3 ">
            <div className="flex justify-between align-middle mb-2">
                <div className="flex align-middle">
                    <a className="text-blue-400 cursor-pointer hover:underline">АНТИВИРУСНАЯ БЕЗОПАСНОСТЬ</a>
                    <h2 className="text-blue-400 text-2xl mr-3 ml-3 mt-[-5px]">{'>'}</h2>
                    <a className="text-blue-400 cursor-pointer hover:underline">антивирусы для бизнеса</a>

                </div>
                <div>
                    <Dropdown/>
                </div>
            </div>
            
      <div className="w-full flex flex-wrap">
        {filteredProducts.map((product) => (
          <OneProduct
            key={product.id}
            img_url={product.img_url}
            rating={product.rating}
            name={product.name}
            price={product.price}
            is_favorite={product.is_favorite}
          />
        ))}
      </div>
    </div>
  );
};
export default Catalog;