import Filter from "@/components/Filter";
import ProductsContainer from "@/components/ProductsContainer";
import MainContainer from "@/components/MainContainer";
import FilterDropdown from "@/components/FilterDropdown";
import Path from "@/components/product-page/Path";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {config} from "@/config";


const Products = () => {
    const router = useRouter();
    const {categoryProducts} = router.query;

    const [ctg, setCtg] = useState([]);
    const [ctgDescription, setCtgDescription] = useState({});
    const [products, setProducts] = useState([]);
    const [filterResult, setFilterResult] = useState([]);
    const [selectedOption, setSelectedOption] = useState('без сортировки');
    const [isLoading, setIsLoading] = useState(false);
    const [current, setCurrent] = useState(1);
    const [count, setCount] = useState();

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

            const url = `${config.baseUrl}/api/v1/products/?category_id_or_parent_id=${lastChild}&page=${current}`;
            try {
                setIsLoading(true);
                const response = await axios.get(url);
                console.log("RESPONSE", response.data)
                setIsLoading(false);
                setProducts(response.data.results);
                let count = response.data.count;
                setCount(count)
            } catch (e) {
                console.log("ERROR")
                console.error(e);
            }
        };

        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.baseUrl}/api/v1/categories/`);
                setCtg(response.data);
                console.log("CTG", response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        getCategoryProducts();
        fetchData();

    }, [categoryProducts, current])

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

    useEffect(() => {

        const getResDesc = (tempCtg, i, lastChild) => {
            console.log("TEST ", i, tempCtg[i].name, lastChild)
            if (tempCtg[i].name === lastChild) {
                let res = {};
                if (tempCtg[i].description){
                    res.descripion = tempCtg[i].description;
                }
                if (tempCtg[i].name) {
                    res.name = tempCtg[i].name;
                }
                console.log("RES", res);
                setCtgDescription(res);
                return true;
            }
            return false;
        }

        const getCtgDescription = () => {
            if (ctg && ctg.length && categoryProducts) {
                let tempCtg = [...ctg];
                let lastChild = categoryProducts[categoryProducts.length - 1];

                console.log('temp ctg', tempCtg)
                for (let i = 0; i < tempCtg.length; i++) {
                    if (getResDesc(tempCtg, i, lastChild)) {
                        return;
                    }

                    tempCtg = tempCtg[i].children;
                    console.log("1 child temp", tempCtg)
                    for (let j = 0; j < tempCtg.length; j++) {
                        if (getResDesc(tempCtg, j, lastChild)) {
                            return;
                        }

                        tempCtg = tempCtg[j].children;
                        console.log("2 child temp", tempCtg)

                        for (let k = 0; k < tempCtg.length; k++) {
                            if (getResDesc(tempCtg, k, lastChild)) {
                                return;
                            }
                        }
                    }
                }

            }
        };

        getCtgDescription();

    }, [ctg, products])


    return (<MainContainer>
            <head><title>{ctgDescription.name}</title></head>
            <div className="h-auto w-full pt-1 flex flex-col items-center">
                {
                    !isLoading ?
                        <div className="h-full w-full md:flex jus">
                            <div className={'md:w-[25%]'}>
                                <Filter setProducts={setFilterResult} products={products}/>
                                <div className={'w-full mt-3 bg-white pl-8 md:p-3 p-3 h-min rounded-b-lg'}>
                                    <h3 className={'text-[18px]'}>{ctgDescription.name}</h3>
                                    <p className={'text-[15px] font-thin mt-3 text-gray-600'}>{ctgDescription.description}</p>
                                </div>
                            </div>
                            <div className="md:w-[75%] flex justify-center flex-col p-3 ">
                                <div className="md:flex md:justify-between md:items-center mb-2 ml-[10px]">
                                    <Path/>
                                    <FilterDropdown selectedOption={selectedOption}
                                                    setSelectedOption={setSelectedOption}/>
                                </div>
                                <ProductsContainer products={filterResult} setCurrent={setCurrent} current={current}
                                                   count={count}/>
                            </div>
                        </div>
                        :
                        <span
                            className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                }

            </div>
        </MainContainer>

    )
}

export default Products;