import Filter from "@/components/Filter";
import CatalogProducts from "@/components/CatalogProducts";
import imported from "../db.json";
import MainContainer from "@/components/MainContainer";
import FilterDropdown from "@/components/FilterDropdown";
import Path from "@/components/product-page/Path";
import {useEffect, useState} from "react";

const Products = () => {
    const path = [{title: "Название каталога"}, {title: "Название каталога"}]
    const [products, setProducts] = useState(imported.products);
    const [filterResult, setFilterResult] = useState(imported.products);
    const [selectedOption, setSelectedOption] = useState('без сортировки');

    const sortMethods = {
        'сначала дорогие': { method: (a, b) => (b.price - a.price) },
        'сначала дешевые': { method: (a, b) => (a.price - b.price) },
    };

    useEffect(() => {
        if (selectedOption === 'без сортировки') {
            setFilterResult(products);
        } else {
            let sorted = filterResult.map((product) => product).sort(sortMethods[selectedOption].method);
            setFilterResult(sorted)
        }
    }, [selectedOption])

    return (
        <MainContainer>
            <div className="h-auto w-full pt-1 flex flex-col items-center">
                <div className="w- h-full flex jus">
                    <Filter setProducts={setFilterResult} products={imported.products} />
                    <div className="w-[1000px] flex justify-center flex-col p-3 ">
                        <div className="flex justify-between items-center mb-2 ml-[10px]">
                            <Path path={path} />
                            <FilterDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                        </div>
                        <CatalogProducts products={filterResult}/>
                    </div>
                </div>
            </div>
        </MainContainer>

    )
}

export default Products;