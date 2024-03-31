import React, {useEffect, useState} from 'react';
import PriceInputs from './PriceInputs';
import BrandFilter from './BrandFilter';

const Filter = ({setProducts, products}) => {

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [brands, setBrands] = useState(new Set());
    const [pickedBrands, setPickedBrands] = useState(new Set());
    const [foundProducts, setFoundProducts] = useState([]);
    const [refreshPrice, setRefreshPrice] = useState(false)
    const [clearBrands, setClearBrands] = useState(false)

    useEffect(() => {
        let newBrands = products.map((product) => product.brand.name);
        console.log("NEW BRANDS", newBrands)
        setBrands(new Set([...newBrands]));
    }, [])

    const handlePriceChange = (price) => {
        let min = price.minPrice;
        let max = price.maxPrice;

        let inRangeProducts = products.filter((product) => {
            console.log(product.price)
            return +product.price >= min && +product.price <= max;
        })
        setFilteredProducts(inRangeProducts)
    };

    const handleBrandChange = (brandName) => {
        if (pickedBrands.has(brandName)) {
            setPickedBrands(new Set([...pickedBrands].filter((brand) => {return brand !== brandName})));
        } else {
            setPickedBrands(new Set([...pickedBrands, brandName]))
        }
    };

    const applyFilteredProducts = () => {

        const brandFilter = filteredProducts.filter((product) => {return (pickedBrands.size === 0 ? brands : pickedBrands).has(product.brand.name)})

        setFoundProducts(brandFilter);
        setProducts(brandFilter);
    }
    return (
        <div className="inline-block w-full  bg-white pl-8 md:p-3 pt-8 h-min rounded-b-lg ">
            <p className="text-[#1075B2] text-lg ProductSansMedium mb-5">Фильтры</p>
            <div className={'flex'}>
                <p className="text-[#1075B2] mr-2 ProductSansLight">Цена (₸) </p>
                <button
                    className={'hover:text-[#1075B2]'}
                    onClick={() => {
                        setRefreshPrice(!refreshPrice);
                    }}
                >↻</button>
            </div>
            <PriceInputs refreshPrice={refreshPrice} onPriceChange={(price) => handlePriceChange(price)}/>

            <div className={'flex'}>
                <p className="text-[#1075B2] mr-2 ProductSansLight">Бренды </p>
                <button
                    className={'hover:text-[#1075B2]'}
                    onClick={() => {
                        setPickedBrands(new Set());
                    }}
                >↻</button>
            </div>
            <BrandFilter onBrandChange={(brandName) => handleBrandChange(brandName)} brands={brands} clearBrands={clearBrands}/>

            {foundProducts.length !== 0 ?
                <div className="w-full italic font-thin flex justify-end pr-3 mt-3 text-gray-500">Найдено {foundProducts.length} товаров</div>
                : <div className={"mb-4"}></div>
            }
            <div className="w-full mt-1">
                <div className={'flex items-center mb-4'}>
                    <button className="text-[#1075B2] mr-3 md:mr-1 md:w-[50%] underline"
                            onClick={() => {
                            setRefreshPrice(!refreshPrice);
                            setPickedBrands(new Set());
                            setClearBrands(!clearBrands);
                            setFoundProducts([])
                            setProducts(products);
                            }}>Сбросить все</button>
                    <button onClick={() => applyFilteredProducts()}
                            className="text-[#1075B2] border-2 md:w-1/2 w-[100px] border-[#1075B2] border-solid my-auto rounded-md ">
                        Показать
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Filter;
