import Filter from "@/components/Filter";
import ProductsContainer from "@/components/ProductsContainer";
import imported from "../db.json";
import MainContainer from "@/components/MainContainer";
import FilterDropdown from "@/components/FilterDropdown";
import Path from "@/components/product-page/Path";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

const Products = () => {
    const router = useRouter();
    const {categoryProducts} = router.query;

    const path = ["Название каталога", "Название каталога"]
    const [products, setProducts] = useState([]);
    const [filterResult, setFilterResult] = useState([]);
    const [selectedOption, setSelectedOption] = useState('без сортировки');
    const [isLoading, setIsLoading] = useState(false);


    const sortMethods = {
        'сначала дорогие': {method: (a, b) => (b.price - a.price)},
        'сначала дешевые': {method: (a, b) => (a.price - b.price)},
    };

    useEffect(() => {
        const getCategoryProducts = async () => {
            if (!categoryProducts || !Array.isArray(categoryProducts)) {
                return;
            }

            const lastChild = categoryProducts[categoryProducts.length - 1];
            const url = `https://shop-01it-group.up.railway.app/api/v1/products/?category_name_and_parent_name=${lastChild}`;

            try {
                setIsLoading(true);
                const response = await axios.get(url);
                setIsLoading(false);
                setProducts(response.data.results);
            } catch (e) {
                console.log("ERROR")
                console.error(e);
            }

        }

        getCategoryProducts()
    }, [categoryProducts])

    useEffect(() => {
        setFilterResult(products)
    }, [products])

    useEffect(() => {

        if (selectedOption === 'без сортировки') {
            setFilterResult(products);
        } else {
            let sorted = filterResult.map((product) => product).sort(sortMethods[selectedOption].method);
            setFilterResult(sorted)
        }
    }, [selectedOption])


    return (<MainContainer>
            <div className="h-auto w-full pt-1 flex flex-col items-center">
                {
                    !isLoading ?
                        <div className="w- h-full flex jus">
                            <Filter setProducts={setFilterResult} products={products}/>
                            <div className="w-[1000px] flex justify-center flex-col p-3 ">
                                <div className="flex justify-between items-center mb-2 ml-[10px]">
                                    <Path/>
                                    <FilterDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                                </div>
                                <ProductsContainer products={filterResult}/>
                            </div>
                        </div>
                        :
                        <span className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                }

            </div>
        </MainContainer>

    )
}

export default Products;